import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FileComponent } from "./file/file.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { TextService } from "./text-service/text.service";
import { FooterComponent } from "./footer/footer.component";
import { WordComponent } from "./word/word.component";

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    HeaderComponent,
    FooterComponent,
    WordComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TextService],
  bootstrap: [AppComponent]
})
export class AppModule {}
