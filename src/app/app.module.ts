import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { UpvoteComponent } from './upvote/upvote.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor( private apollo: Apollo, private httpLink: HttpLink) {

    apollo.create({
      link: httpLink.create({uri: 'https://graphql-voter-app.herokuapp.com/'}),
      cache: new InMemoryCache()
    });

  }

}
