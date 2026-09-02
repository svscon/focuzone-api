import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// ✅ Serialize 是工厂函数：接收dto，返回装饰器函数
export function Serialize(dto: any) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const interceptor = new SerializeInterceptor(dto);
        if (!target[propertyKey]) return;
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const ctx: ExecutionContext = {
                switchToHttp: () => ({ getRequest: () => ({}) }),
                getHandler: () => target[propertyKey],
                getClass: () => target.constructor,
            } as ExecutionContext;
            return interceptor.intercept(ctx, {
                handle: () => originalMethod.apply(this, args),
            });
        };
    };
}

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
    constructor(private readonly dto: any) { }

    intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => {
                return plainToInstance(this.dto, data, {
                    excludeExtraneousValues: false,
                });
            }),
        );
    }
}
