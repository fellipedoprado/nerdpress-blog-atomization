import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { Article } from 'src/app/interfaces/Article';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  standalone: false,
})
export class ContentComponent implements OnInit {
  article: Article = {
    id: '',
    title: '',
    description: '',
    photoCover: '',
    category: '',
    publishedAt: '',
    publicationDate: '',
    author: '',
    article: '',
    commentaries: [],
  };
  sanitizedArticleContent: SafeHtml = '';
  id: string | null = '0';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.find((article) => article.id === id);
    if (result) {
      this.article = result;
      this.sanitizedArticleContent = this.sanitizer.bypassSecurityTrustHtml(
        this.article.article
      );
    } else {
      console.error(`Article with ID ${id} not found.`);
    }
  }
}
