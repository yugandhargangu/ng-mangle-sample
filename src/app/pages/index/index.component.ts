import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private _indexService: IndexService) { }

  ngOnInit() {
  }

  getTitle() {
    return this._indexService.title;
  }

}
