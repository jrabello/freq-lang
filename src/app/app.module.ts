import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdRadioModule,MdCard,MdCardModule,MdButtonModule,MdButtonToggleModule } from '@angular/material';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { GameComponent} from './components/game.component'
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    HttpModule,BrowserModule,FormsModule,MdRadioModule,MdCardModule,MdButtonModule,MdButtonToggleModule

  ],
  providers: [GameService],
  bootstrap: [AppComponent],  
})
export class AppModule { }
