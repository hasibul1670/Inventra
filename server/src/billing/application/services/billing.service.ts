import { Injectable } from '@nestjs/common';

@Injectable()
export class ubillingService {
  health() {
    return { status: 'ok', module: 'billing' };
  }
}
