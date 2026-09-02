import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BigIntToNumberInterceptor implements NestInterceptor {
    intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => {
                return JSON.parse(
                    JSON.stringify(data, (_key, value) => {
                        if (typeof value === 'bigint')
                        {
                            return Number(value);
                        }
                        return value;
                    })
                );
            }),
        );
    }
}
