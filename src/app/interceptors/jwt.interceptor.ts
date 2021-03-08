import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Auth } from "aws-amplify";

import { from, Observable } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";

/**
 * This will append jwt token for the http requests.
 *
 * @export
 * @class JwtInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return from(Auth.currentSession()).pipe(
            switchMap((auth: any) => {
                let jwt = auth.accessToken.jwtToken;
                let with_auth_request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
                return next.handle(with_auth_request);
            }),
            catchError((err) => {
                return next.handle(request);
            })
        );
    }
}
