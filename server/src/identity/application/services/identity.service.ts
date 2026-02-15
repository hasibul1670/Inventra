import { Injectable } from '@nestjs/common';

@Injectable()
export class uidentityService {
  health() {
    return { status: 'ok', module: 'identity' };
  }
}
