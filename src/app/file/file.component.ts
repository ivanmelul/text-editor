import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Output,
  EventEmitter
} from "@angular/core";
import { TextService } from "../text-service/text.service";
import { NavbarService } from "../navbar-service/navbar.service";

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
      this.navbarService.wordselected = i;
    }
  }

  bold() {
    this.navbarService.notificarBold(this.navbarService.wordselected);
  }

  italic() {
    this.navbarService.notificarItalic(this.navbarService.wordselected);
  }

  underline() {
    this.navbarService.notificarUnderline(this.navbarService.wordselected);
  }
}
