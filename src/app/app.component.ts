import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: any;

  onSelectItem(item) {
    this.item = item;
  }

  onResetItem() {
    this.item = null;
  }

}
