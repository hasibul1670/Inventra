import { Injectable } from '@nestjs/common';

@Injectable()
export class uinventoryService {
  health() {
    return { status: 'ok', module: 'inventory' };
  }
}
