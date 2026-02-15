import { Injectable } from '@nestjs/common';

@Injectable()
export class uwarehouseService {
  health() {
    return { status: 'ok', module: 'warehouse' };
  }
}
