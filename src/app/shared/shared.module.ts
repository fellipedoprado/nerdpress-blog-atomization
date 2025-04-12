import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleInfoListComponent } from './components/article-info-list/article-info-list.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { AppRoutingModule } from '../app-routing.module';
import { NewsSnippetComponent } from './components/news-snippet/news-snippet.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [ArticleInfoListComponent, ReadMoreComponent, NewsSnippetComponent],
  exports: [ArticleInfoListComponent, ReadMoreComponent, NewsSnippetComponent],
})
export class SharedModule {}
