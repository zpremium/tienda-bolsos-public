import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  color: boolean;

  constructor(private db: AngularFirestore, private router: Router, ){
    this.db.collection('a').get().toPromise().then((res)=>console.log('RES', res))
    this.db.collection('bloquear').doc('bloquear').get().toPromise().then((res)=>{
      const bloqueado=res.data();
    })

    }




  title = 'tienda';


  volver(){
    this.router.navigateByUrl('productos')
  }

  changeColor() {
    this.color = !this.color;
  }



}
