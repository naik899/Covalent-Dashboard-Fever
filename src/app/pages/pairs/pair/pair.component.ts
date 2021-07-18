import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/services/tokens/token.service';

@Component({
  selector: 'app-pair',
  templateUrl: './pair.component.html',
  styleUrls: ['./pair.component.css']
})
export class PairComponent implements OnInit {

  public pools: any;

  constructor(private router: Router,private route: ActivatedRoute, private tokenService: TokenService) { }

  async ngOnInit(): Promise<void> {
    const routeParams = this.route.snapshot.paramMap;
    let id = String(routeParams.get('id'));
    let poolInfo = await this.tokenService.getPoolTransactionsInfoByAddress(id);
    this.pools = [...poolInfo.data.items];
    console.log(this.pools);
  }

  getPrecision(value: string, contractDecimal: number){
    return (Number.parseFloat(value)/Math.pow(10, contractDecimal)).toPrecision(10);
  }

  getDateFromString(value: string): string
  {
    return new Date(value).toDateString();
  }

}
