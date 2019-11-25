import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import { TextService } from "../text-service/text.service";
import { NavbarService } from "../navbar-service/navbar.service";

export class Word {
  id: string;
  bold: boolean;
  iatlic: boolean;
  underline: boolean;
}

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
  init: boolean;
  words: Array<string>;
  boldpressed: boolean = false;
  italicpressed: boolean = false;
  underlinepressed: boolean = false;

  constructor(
    private textService: TextService,
    private navbarService: NavbarService
  ) {}

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
    var selection = window.getSelection();
    if (selection.toString().length > 0) {
      this.navbarService.wordselected = new Word();
      this.navbarService.wordselected.id = i.toString();
      let elem: Element = document.getElementById("word-" + i.toString());
      this.boldpressed = elem.classList.contains("bold");
      this.italicpressed = elem.classList.contains("italic");
      this.underlinepressed = elem.classList.contains("underline");
    } else {
      this.navbarService.wordselected = undefined;
      this.boldpressed = false;
      this.italicpressed = false;
      this.underlinepressed = false;
    }
  }

  bold() {
    this.navbarService.notificarBold(this.navbarService.wordselected);
    if (this.navbarService.wordselected) this.boldpressed = true;
  }

  italic() {
    this.navbarService.notificarItalic(this.navbarService.wordselected);
    if (this.navbarService.wordselected) this.italicpressed = true;
  }

  underline() {
    this.navbarService.notificarUnderline(this.navbarService.wordselected);
    if (this.navbarService.wordselected) this.underlinepressed = true;
  }
}
