import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-snippet',
  templateUrl: './news-snippet.component.html',
  styleUrl: './news-snippet.component.css',
  standalone: false
})
export class NewsSnippetComponent {
  @Input()
  id!: string;
  @Input()
  title!: string;
  @Input()
  description!: string;

}
