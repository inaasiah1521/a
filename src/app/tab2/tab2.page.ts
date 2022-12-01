import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public allData:any = [];
  constructor() {
    this.getData();
  }

  async getData() {
    const res:any = await axios.get('http://localhost:8080/api/get_data.php');


    console.log(res.data);
    this.allData = res.data.result;
  }

}