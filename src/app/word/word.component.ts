import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from "@angular/core";
import { Subscription } from "rxjs";
import { NavbarService } from "../navbar-service/navbar.service";

@Component({
  selector: "app-word",
  templateUrl: "./word.component.html",
  styleUrls: ["./word.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordComponent implements OnInit {
  @Input() w: string;
  @Input() i: number;
  private subscriptionBold: Subscription;
  @HostBinding("class.bold") isbold = false;

  private subscriptionItalic: Subscription;
  @HostBinding("class.italic") isitalic = false;

  private subscriptionUnderline: Subscription;
  @HostBinding("class.underline") isunderline = false;

  constructor(private navbarService: NavbarService) {}

  ngOnInit() {
    this.subscriptionBold = this.navbarService.notifyBoldObservable$.subscribe(
      wordSelected => {
        if (this.i.toString() == wordSelected.id) this.isbold = !this.isbold;
      }
    );

    this.subscriptionItalic = this.navbarService.notifyItalicIObservable$.subscribe(
      wordSelected => {
        if (this.i.toString() == wordSelected.id)
          this.isitalic = !this.isitalic;
      }
    );

    this.subscriptionUnderline = this.navbarService.notifyUnderlineObservable$.subscribe(
      wordSelected => {
        if (this.i.toString() == wordSelected.id)
          this.isunderline = !this.isunderline;
      }
    );
  }
}
