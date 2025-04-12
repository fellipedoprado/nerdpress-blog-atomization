import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { BigCardModule } from './components/big-card/big-card.module';
import { SmallCardModule } from './components/small-card/small-card.module';
import { ContextTextModule } from './components/content-text/content-text.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    HomeComponent,
    ContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BigCardModule, SmallCardModule, ContextTextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
