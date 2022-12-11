import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-transaksilist',
  templateUrl: './transaksilist.component.html',
  styleUrls: ['./transaksilist.component.scss']
})
export class TransaksilistComponent implements OnInit {

  public listJadwal: Array<any>

  constructor(private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private api : ApiService) {

  }

  ngOnInit(): void {

    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/PeriodePelaporan", this.api.generateHeader()).subscribe((result: any) => {

      this.listJadwal = result.data
      console.log(result)
    }, error => {


    });


  }
   

}
