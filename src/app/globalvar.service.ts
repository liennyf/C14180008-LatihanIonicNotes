import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {
  private judul : String[]=[];
  private isi : String[]=[];
  private tanggal : String[]=[];
  private liked: boolean[]=[];
  private index:number[] = [];
  private indexliked:number[] = [];
  private co:number = 0;

  constructor() { 
    this.judul.push("note 1");
    this.isi.push("isi 1");
    this.tanggal.push("2020/01/01");
    this.liked.push(false);
    this.index.push(this.co);
    this.indexliked.push(this.co);
    this.co++;
  }

  public insert(judul,isi,tanggal){
    this.judul.push(judul);
    this.isi.push(isi);
    this.tanggal.push(tanggal);
    this.liked.push(false);
    this.index.push(this.co);
    this.co++; 
  }

  public getjudul(){
    return this.judul;
  }

  public getjuduln(index){
    return this.judul[index];
  }

  public getisi(){
    return this.isi;
  }

  public getisin(index){
    return this.isi[index];
  }

  public gettanggal(){
    return this.tanggal;
  }

  public gettanggaln(index){
    return this.tanggal;
  }

  public getcount(){
    return this.co;
  }

  public getindex(){
    return this.index;
  }

  public getindexliked(){
    return this.indexliked;
  }
  // public gethalaman1(){
  //  return this.halaman1;
  // }
  
  // public gethalaman2(){
  //  return this.halaman2;
  // }
  
  // public gethalaman3(){
  //  return this.halaman3;
  // }

  // public sethalaman1(hal){
  //   this.halaman1 = hal;
  // }
  //  public sethalaman2(hal){
  //   this.halaman2 = hal;
  // } 
  // public sethalaman3(hal){
  //   this.halaman3 = hal;
  // }

  // public getliked(){
  //  return this.liked;
  // }

  public setliked(index,bol){
    this.liked[index]=bol;
    // if(bol)
      // this.indexliked.push(index);
  }

  public getliked(index){
    return this.liked[index];
  }

  public refreshliked(){
    this.indexliked=[];
    for(var i=0;i<this.co;i++){
      if(this.liked[i])
        this.indexliked.push(i);
    }
  }
}
