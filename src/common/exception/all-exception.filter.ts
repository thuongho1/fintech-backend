import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter, HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
//  catch(exception: unknown, host: ArgumentsHost) {
//    super.catch(exception, host);
//  }
  catch(exception: unknown, host: ArgumentsHost): void {
    super.catch(exception, host);
//    const httpAdapter = this.httpAdapterHost.httpAdapter;
//    httpAdapter.getRequestUrl(host.switchToHttp().getRequest());
//    const ctx = host.switchToHttp();
//    const httpStatus =
//      exception instanceof HttpException
//        ? exception.getStatus()
//        : HttpStatus.INTERNAL_SERVER_ERROR;
//    const responseBody = {
//      statusCode: httpStatus,
//      timestamp: new Date().toISOString(),
//      path: httpAdapter.getRequestUrl(ctx.getRequest()),
//    };
//    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
