import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { UserModule } from './models/user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookModule } from './models/book/book.module';
import { OrderModule } from './models/order/order.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    BookModule,
    OrderModule,
    ThrottlerModule.forRoot({
      ttl: 3600,
      limit: 1000,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
