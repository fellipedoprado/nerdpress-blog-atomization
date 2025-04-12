import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-info-list',
  templateUrl: './article-info-list.component.html',
  styleUrls: ['./article-info-list.component.css'],
  standalone: false,
})
export class ArticleInfoListComponent implements OnInit {
  @Input()
  category!: string;
  @Input() publishedAt!: string | null;
  @Input() author!: string;

  constructor() {}

  ngOnInit() {}
}
