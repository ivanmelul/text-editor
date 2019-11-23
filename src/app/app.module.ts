import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FileComponent } from "./file/file.component";
import { ControlPanelComponent } from "./control-panel/control-panel.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { TextService } from "./text-service/text.service";
import { FooterComponent } from "./footer/footer.component";
import { WordComponent } from "./word/word.component";
import { BoldDirective } from './bold-directive/bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ControlPanelComponent,
    HeaderComponent,
    FooterComponent,
    WordComponent,
    BoldDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TextService],
  bootstrap: [AppComponent]
})
export class AppModule {}
