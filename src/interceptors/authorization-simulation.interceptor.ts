import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  NestInterceptor,
} from '@nestjs/common';

export class AuthorizationSimulationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const headers = context.switchToHttp().getRequest().headers;

    const authorizationSimulationHeader = headers['x-authorization-simulation'];

    if (
      !authorizationSimulationHeader ||
      authorizationSimulationHeader !== 'jwt-simulation-token'
    ) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return next.handle();
  }
}
