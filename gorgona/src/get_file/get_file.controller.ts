import { Controller, Get, Res, Param } from '@nestjs/common';
import { readFile } from 'fs';

@Controller('get-file')
export class GetFileController {
  @Get('*')
  showFile(@Res() response: any, @Param('0') path: string): any {
    const filepath = "/" + path;
    readFile(filepath, 'utf8', (err, data) => {
      if (err) return response.status(404).end(`${err}\n`);
      return response.end(data);
    });
  }

}
