import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SsoController } from './controllers/auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../../.env']
    })
  ],
  controllers: [SsoController],
  providers: []
})
export class AppModule {}
