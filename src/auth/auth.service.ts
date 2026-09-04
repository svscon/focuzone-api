import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export interface JwtPayload {
    openId: string;
    sub: string;
}

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    async createAccessToken(userId: string, openId: string) {
        return this.jwtService.signAsync({ openId }, { subject: userId });
    }

    verifyAccessToken(token: string) {
        return this.jwtService.verify<JwtPayload>(token);
    }
}