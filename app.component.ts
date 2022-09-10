import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AgGridModule } from 'ag-grid-angular';
import { compileClassMetadata } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  public userArray: User[] = [];
  public ArrayForDisplay: User[] = [];
  tableHeaderResponse: any ;
  tableBodyResponse: any;
  row_0: any;
  public row_1 : any;
  counter: any;
  row_2: any;
  row_3: any;
  row_4: any;
  row_5: any;
  row_6: any;
  row_7: any;
  all_rows: any;
  row_random: string[] | undefined ;
  /* obj_comp:this; */
  
  
  constructor(private http: HttpClient){
    this.http.get('assets/Workbook2.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n")
          
            this.row_0 = csvToRowArray[0].split(",");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.userArray.push(new User(row[0], row[1] ,row[2],row[3],row[4],row[5]));
            }
              console.log(this.userArray);

              var rowdata:string[] = csvToRowArray[1].split(",");

              this.row_1 = csvToRowArray[1].split(",");
              this.row_2 = csvToRowArray[2].split(",");
              this.row_3 = csvToRowArray[3].split(","); 
              this.row_4 = csvToRowArray[4].split(","); 
              this.row_5 = csvToRowArray[5].split(","); 
              this.row_6 = csvToRowArray[6].split(","); 
              this.row_7 = csvToRowArray[7].split(",");   
        },
        error => {
            console.log(error);
        }
    );
      }

  /* function ClickDisplay(obj_Beeboard:Object) {
    const buttons = Array.from(document.getElementsByClassName('btn'));

              buttons.forEach(btn => {
                btn.addEventListener('click', function handleClick(event) 
                {
                  
                  console.log(event);
                  console.log(event.target);
                });
              });
  } */
}

export class User{
  name: String; 
  address: String;
  postcode: String;
  phonenumber: String;
  creditlimit: String;
  birthday: String;

  constructor(name: String, address: String, postcode:String ,phonenumber:String,creditlimit:String ,birthday:String){
    this.name = name;
    this.address = address;
    this.postcode = postcode;
    this.phonenumber = phonenumber;
    this.creditlimit = creditlimit;
    this.birthday = birthday;
  }
}
