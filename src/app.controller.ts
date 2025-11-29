import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('review')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('webhook')
  async requestReview(@Body() body: { code: string }): Promise<string> {
    return this.appService.requestReview(body.code);
  }
}
