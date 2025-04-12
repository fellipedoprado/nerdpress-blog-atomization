import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/Article';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
  standalone: false,
})
export class SmallCardComponent implements OnInit {
  @Input()
  article!: Article;

  constructor() {}

  ngOnInit(): void {}
}
