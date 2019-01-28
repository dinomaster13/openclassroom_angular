import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() title : string;
  @Input() created_at : string;
  @Input() content : string;
  @Input() loveIts : number;
  constructor() { }

  ngOnInit() {
  }

  loveIt() {

  }

  dontloveIt() {

  }

  onVoteUp() {
    this.loveIts=this.loveIts+1;
  }

  onVoteDown() {
    this.loveIts=this.loveIts-1;
  }
}
