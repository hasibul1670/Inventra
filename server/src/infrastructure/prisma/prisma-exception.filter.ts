import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';

@Catch()
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, _host: ArgumentsHost) {
    throw exception;
  }
}
