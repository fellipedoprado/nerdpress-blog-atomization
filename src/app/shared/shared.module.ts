import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleInfoListComponent } from './article-info-list/article-info-list.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [ArticleInfoListComponent, ReadMoreComponent],
  exports: [ArticleInfoListComponent, ReadMoreComponent],
})
export class SharedModule {}
