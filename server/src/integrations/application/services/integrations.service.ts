import { Injectable } from '@nestjs/common';

@Injectable()
export class uintegrationsService {
  health() {
    return { status: 'ok', module: 'integrations' };
  }
}
