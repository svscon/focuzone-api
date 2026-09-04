import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { AuthService, JwtPayload } from './auth.service';

type AuthenticatedRequest = Request & { user?: JwtPayload };

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly authService: AuthService) { }

    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
        const authorization = request.headers.authorization;
        const [scheme, token] = authorization?.split(' ') ?? [];

        if (scheme !== 'Bearer' || !token)
        {
            throw new UnauthorizedException('请提供有效的登录凭证');
        }

        try
        {
            request.user = this.authService.verifyAccessToken(token);
            return true;
        } catch
        {
            throw new UnauthorizedException('登录凭证已失效');
        }
    }
}