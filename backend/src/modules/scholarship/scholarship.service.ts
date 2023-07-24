import { Injectable } from '@nestjs/common';

@Injectable()
export class ScholarshipService {
  get() {
    return { msg: 'works' };
  }
}
