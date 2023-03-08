import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    private readonly domain: string = (window.location.origin.includes("localhost") ? "http://localhost:3000" : window.location.origin)
    private readonly prefix: string = "/";

    constructor(
        protected readonly httpClient: HttpClient
    ) {
    }

    getRequest(path: string) :Promise<any> {
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.domain + this.prefix + path, {

            }).subscribe((oResult: any) => {
                resolve(oResult);
            })
        });
    }

    postRequest(path: string, dataSave: any){
        return new Promise((resolve, reject) => {
            this.httpClient.post(this.domain + this.prefix + path, dataSave).subscribe((oResult: any) => {
                if(oResult.isError){
                    reject(oResult);
                } else {
                    resolve(oResult);
                }
            })
        });
    }

    postRequestCatch(path: string, dataSave: any){
        return new Promise((resolve, reject) => {
            this.httpClient.post(this.domain + this.prefix + path, dataSave).subscribe({
                next: (oResult: any) => {
                    resolve(oResult);
                },
                error: (oError) => {
                    reject(oError);
                }
            })
        });
    }

    putRequest(path: string, dataSave: any){

    }

    deleteRequest(path: string){

    }
}
