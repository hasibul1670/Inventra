import { Injectable } from '@nestjs/common';

@Injectable()
export class ucatalogService {
  health() {
    return { status: 'ok', module: 'catalog' };
  }
}
