import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from "../globalvar.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-favoritepage',
  templateUrl: './favoritepage.page.html',
  styleUrls: ['./favoritepage.page.scss'],
})
export class FavoritepagePage implements OnInit {
  constructor(public globalVar: GlobalvarService) {
    this.judulglobal = this.globalVar.getjudul();
    this.isiglobal = this.globalVar.getisi();
    this.tanggalglobal = this.globalVar.gettanggal();
    this.count=this.globalVar.getcount();
    this.indexliked = this.globalVar.getindexliked();
    console.log(this.indexliked);
  }

  judulglobal;
  isiglobal;
  indexliked;
  tanggalglobal;
  count;

  ngOnInit() {
  }
}
