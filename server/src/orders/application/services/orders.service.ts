import { Injectable } from '@nestjs/common';

@Injectable()
export class uordersService {
  health() {
    return { status: 'ok', module: 'orders' };
  }
}
