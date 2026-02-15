import { Injectable } from '@nestjs/common';

@Injectable()
export class uauditService {
  health() {
    return { status: 'ok', module: 'audit' };
  }
}
