import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from "../globalvar.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.page.html',
  styleUrls: ['./detailpage.page.scss'],
})
export class DetailpagePage implements OnInit {
  param: string; //index
  like: boolean;
  judulglobal;
  isiglobal;
  tanggalglobal;
  index;
  constructor(private router: ActivatedRoute, private globalVar: GlobalvarService) {
    this.index = this.router.snapshot.paramMap.get("index");
    this.like=this.globalVar.getliked(this.index);
    console.log(this.like);
   }

  ngOnInit() {
    this.judulglobal=this.globalVar.getjuduln(this.index);
    this.isiglobal=this.globalVar.getisin(this.index);
    this.tanggalglobal=this.globalVar.gettanggaln(this.index);
  }

  manageLike(){
    console.log(document.getElementById("kode").innerText);
    if(document.getElementById("kode").innerText=="2"){
      // console.log("add like");
      document.getElementById("kode").innerText="1";
      document.getElementById("1").innerHTML="<ion-icon name='heart'></ion-icon>";
      this.globalVar.setliked(this.index,true);
    }
    else{
      // console.log("remove like");
      document.getElementById("kode").innerText="2";
      document.getElementById("1").innerHTML="<ion-icon name='heart-outline'></ion-icon>";
      this.globalVar.setliked(this.index,false);
    }
    this.globalVar.refreshliked();
  }
}
