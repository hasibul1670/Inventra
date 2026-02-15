import { Injectable } from '@nestjs/common';

@Injectable()
export class unotificationsService {
  health() {
    return { status: 'ok', module: 'notifications' };
  }
}
