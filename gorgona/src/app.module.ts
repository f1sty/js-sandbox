import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetFileController } from './get_file/get_file.controller';

@Module({
  imports: [],
  controllers: [AppController, GetFileController],
  providers: [AppService],
})
export class AppModule {}
