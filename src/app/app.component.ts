
import { Component, OnInit, Inject } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { FormBuilder, FormGroup ,Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

   
  id: string;
  
  done:boolean;
  date:Date;


  mode;
  
  pictures=[
    {title:'image1', image:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg',type:'image'},
    {title:'image1',image:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg',type:'image'},
    {title:'image1',image:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg', type:'image'},
    {title:'list' , list :[{todo:'tod1'}, {todo:'todo2'},{todo:'todo4'}] ,type:'list'},
    {title:'image1',image:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg', type:'image'},
    {title:'list' , list :[{todo:'tod1'}, {todo:'todo2'},{todo:'todo4'}] ,type:'list'},
    {title:'image1',image:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg', type:'image'},
    {title:'dessdesss', description:'dessdesss' ,type:'todo'},
    {title:'image1',image:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg', type:'image'},
    {title:'list' , list :[{todo:'tod1'}, {todo:'todo2'},{todo:'todo4'}] ,type:'list'},

  ]


  constructor(private dragula: DragulaService, private _formBuilder: FormBuilder,
    public dialog: MatDialog) {
    
    this.mode ="side";
    dragula.setOptions('bag-task1', {
      removeOnSpill: false
    });
  }


shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));



    openDialog(): void {

    this.done=false;
    this.date= new Date();
    let dialogRef = this.dialog.open(FormtodolistComponent, {
        width: '40%',
            data: { 
              title:'', 
              done:this.done,
              date:this.date
              }
            });

        dialogRef.afterClosed().subscribe(result => {
            result={
              title:result.title,
              };
          });
    }
    // deuxieme dialogue
    openDialogItem(item): void {

      this.done=false;
      this.date= new Date();
      let dialogRef = this.dialog.open(ItemlistComponent, {
          width: '40%',
              data:item
              });
  
          dialogRef.afterClosed().subscribe(result => {
              result={
                title:result.title,
                };
            });
      }

}

@Component({
  selector: 'formtodo',
  templateUrl:'formtodo.html',
  styleUrls: ['formtodo.css']
})
export class FormtodolistComponent {

  item;
  listinputs: Array<any> = [];
  listitems: Array<any> = [];
  title:string;
  constructor(
    public dialogRef: MatDialogRef<FormtodolistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,private _formBuilder: FormBuilder) {
    
     }

  onNoClick(): void {
    this.dialogRef.close();
  
  }
  addinput(value){
    if (value ==="") {

    }else {
      this.listitems.push({item:value});
      console.log(this.listitems);
      this.item="";
     
    }
     
  }
  confiraddlist(){
    console.log(this.title);
    this.listinputs.push({title:this.title,list:this.listitems});
   
    console.log("list"+ JSON.stringify(this.listinputs));
  }
  // apel  service  

}


@Component({
  selector: 'itemlist',
  templateUrl:'itemlist.html',
  styleUrls: ['itemlist.css']
})
export class ItemlistComponent { 
   title:string;
   constructor(
      public dialogRef: MatDialogRef<ItemlistComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any ,private _formBuilder: FormBuilder) {
       
       }
       onNoClick(): void {
        this.dialogRef.close();
      
      }
  
}