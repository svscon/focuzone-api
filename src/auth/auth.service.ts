import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export interface JwtPayload {
    openId: string;
    sub: string;
    iat?: number;
    exp?: number;
}

export interface AccessTokenResult {
    accessToken: string;
    expiresAt: number;
}

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    async createAccessToken(userId: string, openId: string): Promise<AccessTokenResult> {
        const accessToken = await this.jwtService.signAsync({ openId }, { subject: userId });
        const payload = this.jwtService.decode<JwtPayload>(accessToken);
        const expiresAt = (payload?.exp ?? 0) * 1000;

        return {
            accessToken,
            expiresAt,
        };
    }

    verifyAccessToken(token: string) {
        return this.jwtService.verify<JwtPayload>(token);
    }
}