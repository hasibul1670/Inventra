import { Injectable } from '@nestjs/common';

@Injectable()
export class TracingService {
  startSpan(_name: string) {
    return null;
  }
}
