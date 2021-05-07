import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'app-http-pages',
  templateUrl: './http-pages.component.html',
  styleUrls: ['./http-pages.component.scss']
})
export class HttpPagesComponent implements OnInit {

      posts;
    constructor( private http: HttpClientService ) { }

    ngOnInit(): void {
    this.http.get().subscribe((res)=>{
    console.log('RES', res);
    this.posts = res;
    })

    this.http.post( { data: 1 } ).subscribe((res)=>{
    console.log('RESPUESTA POST', res);

    })
    }



}
