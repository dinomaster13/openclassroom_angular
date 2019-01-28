import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  title = 'Liste des Posts';
  @Input() PostList :string;
  constructor() { }

  ngOnInit() {
  }

}
