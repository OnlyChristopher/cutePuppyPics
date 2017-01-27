import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { FeedPage } from '../pages/feed/feed';
import { NewsPage } from '../pages/news/news';
import { PopularPage } from '../pages/popular/popular';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ArticlePage } from '../pages/article/article';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    FeedPage,
    NewsPage,
    ArticlePage,
    PopularPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    FeedPage,
    NewsPage,
    ArticlePage,
    PopularPage,
    HomePage,
    TabsPage
  ],
  providers: [ {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
