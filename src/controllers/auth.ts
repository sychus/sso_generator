import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { generate } from '../services/sso.service';

@Controller('sso')
export class SsoController {

  @Get()
  getTokens(@Res() res: Response, @Query('contactId') contactId: string, @Query('daysToExpire') daysToExpire: number) {
    res.status(200).send(generate(contactId, daysToExpire));
  }
}
