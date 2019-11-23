import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Simple Text Editor";
  selectedWord: number = -1;
  boldword: number = -1;

  ngOnInit() {}
  onBoldPressed() {
    this.boldword = this.selectedWord;
  }

  onSelectWord(event) {
    this.selectedWord = event;
    console.log(event);
  }
}
