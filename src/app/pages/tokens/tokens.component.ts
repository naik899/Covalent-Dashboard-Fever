import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/tokens/token.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  public currentPageNo: number = 1;
  public totalPages: number = 1;
  public tokens: any;
  public limit = 5;

  

  constructor(private tokenService: TokenService) { }

  async ngOnInit(): Promise<void> {

    let tokenInfo =await this.tokenService.getTokensInfo(this.currentPageNo - 1, this.limit);
    this.tokens = [...tokenInfo.data.items];
    this.totalPages = tokenInfo.data.pagination.total_count/this.limit;
    console.log(this.tokens);
  }

  getPrecision(value: string, contractDecimal: number){
    return (Number.parseFloat(value)/Math.pow(10, contractDecimal)).toPrecision(10);
  }

  public async prevPage(){
    if(this.currentPageNo == 1)
    {
      alert("No such records exists")
    }
    else{
      this.currentPageNo--;
      let tokenInfo =await this.tokenService.getTokensInfo(this.currentPageNo - 1, this.limit);
      this.tokens = [...tokenInfo.data.items];

    }

  }

  async nextPage(){
    if(this.currentPageNo-1 <= this.totalPages && this.tokens.length == this.limit)
    {
      this.currentPageNo++;
      let tokenInfo =await this.tokenService.getTokensInfo(this.currentPageNo - 1, this.limit);
      this.tokens = [...tokenInfo.data.items];
    }
    else{
      alert("No such records exists");
    }
  }

}
