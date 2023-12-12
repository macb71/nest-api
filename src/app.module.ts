import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { TestApiModule } from './test-api/test-api.module';

@Module({
  imports: [TestModule, TestApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
