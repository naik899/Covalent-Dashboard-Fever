import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private httpClient: HttpClient) { }

  getTokensInfo(skip: number, limit: number): Promise<any>
  {
    let getTokensInfoEndpoint = (environment.apiUrl) + environment.chainId +"/xy=k/sushiswap/tokens/?key=" + environment.apiKey+ "&page-size="+ limit + "&page-number="+ skip;
    
    return this.httpClient.get<any>(getTokensInfoEndpoint).toPromise();
  }

  getPoolsInfo(skip: number, limit: number): Promise<any>{
    let getPoolsInfoEndPoint = (environment.apiUrl) + environment.chainId +"/xy=k/sushiswap/pools/?key=" + environment.apiKey+ "&page-size="+ limit + "&page-number="+ skip;
    
    return this.httpClient.get<any>(getPoolsInfoEndPoint).toPromise();
  }
}
