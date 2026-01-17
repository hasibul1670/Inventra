const fs = require('fs');
const path = require('path');

const schemaDir = path.join(__dirname, 'schema');
const outputPath = path.join(__dirname, 'schema.prisma');
const headerOrder = ['datasource.prisma', 'generator.prisma'];

function readFile(fileName) {
  const filePath = path.join(schemaDir, fileName);
  return fs.readFileSync(filePath, 'utf8').trim();
}

function collectSchemaFiles() {
  const allFiles = fs
    .readdirSync(schemaDir)
    .filter((file) => file.endsWith('.prisma'));

  const headerFiles = headerOrder.filter((file) => allFiles.includes(file));
  const bodyFiles = allFiles
    .filter((file) => !headerOrder.includes(file))
    .sort();

  return [...headerFiles, ...bodyFiles];
}

const files = collectSchemaFiles();
if (files.length === 0) {
  throw new Error(`No .prisma files found in ${schemaDir}`);
}

const content = files
  .map((file) => `// ${file}\n${readFile(file)}`)
  .filter((block) => block.trim().length > 0)
  .join('\n\n')
  .trim();

fs.writeFileSync(outputPath, `${content}\n`);
console.log(`Merged ${files.length} files into ${outputPath}`);
