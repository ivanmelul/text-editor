import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer2
} from "@angular/core";
import { TextService } from "../text-service/text.service";
import { WordComponent } from "../word/word.component";
import { timer } from "rxjs";

@Component({
  selector: "app-file",
  templateUrl: "./file.component.html",
  styleUrls: ["./file.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  text$: Promise<string>;
  text: string;
  firstText: string;
  start: number;
  end: number;
  init: boolean;
  words: Array<string>;
  @Output() public selectword = new EventEmitter<number>();
  @Input() bold: number;
  @ViewChildren("word") htmlWords: QueryList<ElementRef>;

  constructor(private textService: TextService, private renderer: Renderer2) {}

  ngOnInit() {
    this.text$ = this.textService.getMockText();
    this.textService.getMockText().then(value => {
      this.firstText = value;
      this.text = this.firstText;
      this.words = this.text.split(" ");
    });
    this.init = true;
  }

  onSelected(i: number) {
    this.selectword.emit(i);
  }
  /*
  setBold(pos, bold) {
    if (this.init) {
      var el: WordComponent;
      this.htmlWords.forEach((e, i) => {
        if (i == pos) {
          el = e;
          //console.log(e);
          //console.log(e.nativeElement.classList.contains("bold"));
        }
      });
      if (!el) return false;
      else return pos == bold ? !el.isbold : el.isbold;
    }
  }
*/
  /*

  isBold(pos) {
    if (this.init) {
      var el: WordComponent;
      this.htmlWords.forEach((e, i) => {
        if (i == pos) {
          el = e;
          //console.log(e);
          //console.log(e.nativeElement.classList.contains("bold"));
        }
      });
      if (!el) return false;
      else {
        console.log(el.isbold);
        return el.isbold;
        this.rend
      }
    }
  }
   */
}
