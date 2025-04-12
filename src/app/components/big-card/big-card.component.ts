import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/Article';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
  standalone: false,
})
export class BigCardComponent implements OnInit {
  @Input()
  article!: Article;

  constructor() {}

  ngOnInit(): void {}
}
