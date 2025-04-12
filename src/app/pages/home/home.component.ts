import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  articles = dataFake;
  article_main_index: number[] = [];
  articles_other_index: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.article_main_index = this.getRandomIndexes(1, this.articles.length);
    this.articles_other_index = this.getRandomIndexes(2, this.articles.length);
  }

  getRandomIndexes(count: number, max: number): number[] {
    const indexes = new Set<number>();
    while (indexes.size < count) {
      const randomIndex = Math.floor(Math.random() * max);
      indexes.add(randomIndex);
    }
    return Array.from(indexes);
  }
}
