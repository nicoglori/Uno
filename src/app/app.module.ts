import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { FooterComponent } from './footer/footer.component';
import { JoinFormComponent } from './join-form/join-form.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { GameComponent } from './game/game.component';
import { DeckComponent } from './game/deck/deck.component';
import { GameService } from './game/game.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CreationFormComponent,
    FooterComponent,
    JoinFormComponent,
    ChatInboxComponent,
    GameComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
