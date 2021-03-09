import { Component } from '@angular/core';
import { GlobalvarService } from "../globalvar.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,public globalVar: GlobalvarService) {
    this.judulglobal = this.globalVar.getjudul();
    this.isiglobal = this.globalVar.getisi();
    this.count=this.globalVar.getcount();
    this.indexglobal = this.globalVar.getindex();
  }

  textjudul = "";
  textisi = "";
  texttanggal = "";
  textcarijudul = "";
  judulglobal;
  isiglobal;
  indexglobal;
  count;
  
  SAVE() {
    this.globalVar.insert(this.textjudul,this.textisi,this.texttanggal);
    this.judulglobal = this.globalVar.getjudul();
    this.isiglobal = this.globalVar.getisi();
    this.indexglobal = this.globalVar.getindex();
    this.count = this.globalVar.getcount();
  }

  OPENHALDETAIL(index){
    this.router.navigate(["/detailpage/" + index]);
  }
}
