import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class RequestsService {
    constructor(private readonly httpService: HttpService) {}

    get<ReturnType = unknown>(url): Observable<ReturnType> {
        return this.httpService
            .get<ReturnType>(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .pipe(map((res) => res.data));
    }

    post<ReturnType = unknown, BodyType = any>(
        url: string,
        body: BodyType
    ): Observable<ReturnType> {
        return this.httpService
            .post<ReturnType>(url, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .pipe(map((res) => res.data));
    }

    put<ReturnType = unknown, BodyType = any>(
        url: string,
        body: BodyType
    ): Observable<ReturnType> {
        return this.httpService
            .put<ReturnType>(url, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .pipe(map((res) => res.data));
    }

    delete<ReturnType = unknown>(url): Observable<ReturnType> {
        return this.httpService
            .delete<ReturnType>(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .pipe(map((res) => res.data));
    }
}
