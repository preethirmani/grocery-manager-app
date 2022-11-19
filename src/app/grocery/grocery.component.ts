import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
 item = {
    id : 0,
    name : '',
    check : false
  
   
  };
 // item = '';

   items: any[] = [];

   

  constructor() { }

  ngOnInit(): void {
  }
   
  onClick() {
   
    this.item.id = new Date().getTime();
    this.item.check = false;
    this.items.push(this.item);

    //clearing item object 
   this.item = {
      id : 0,
      name : '',
      check : false
    }
    
    console.log('item obj cleared');
    console.log('this.item.id:'+this.item.id);
    console.log('this.item.name:'+this.item.name);
  }

  onDelete(item:any) {
    const start = this.items.indexOf(item);
    this.items.splice(start, 1);
    console.log(this.items);
  }


 onCheck(item: any) {
    const indx = this.items.indexOf(item);
    this.items[indx].check = true;
    
  }

}
