import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/services/tokens/token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  public tokenPairs: any;
  public transactions: any;
  public currentPageNo: number = 1;
  public totalPages: number = 1;
  public pools: any;
  public limit = 5;

  constructor(private router: Router,private route: ActivatedRoute, private tokenService: TokenService) { }

  async ngOnInit(): Promise<void> {

    const routeParams = this.route.snapshot.paramMap;
    let id = String(routeParams.get('id'));
    let tokenInfo = await this.tokenService.getTokenInfoByAddress(id);
    let tokenTransactions = await this.tokenService.getPoolTokenTransactionsInfoByAddress(id);
    this.tokenPairs = [...tokenInfo.data.items];
    this.transactions = [...tokenTransactions.data.items];

    console.log(this.tokenPairs);
    console.log(this.transactions);
  }


  getPrecision(value: string, contractDecimal: number){
    return (Number.parseFloat(value)/Math.pow(10, contractDecimal)).toPrecision(10);
  }

  getDateFromString(value: string): string
  {
    return new Date(value).toDateString();
  }

  public async prevPage(){
    if(this.currentPageNo == 1)
    {
      alert("No such records exists")
    }
    else{
     

    }

  }

  async nextPage(){
    if(this.currentPageNo-1 <= this.totalPages && this.pools.length == this.limit)
    {
     
    }
    else{
      alert("No such records exists");
    }
  }

}
