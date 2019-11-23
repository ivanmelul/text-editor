import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  HostListener
} from "@angular/core";

@Component({
  selector: "app-word",
  templateUrl: "./word.component.html",
  styleUrls: ["./word.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordComponent implements OnInit {
  @Input() text: string;
  @Input() index: number;
  @HostBinding("class.bold") bold: boolean = false;
  @Input()
  set boldnumber(bn: number) {
    if (bn != -1) this.bold = this.index == bn ? !this.bold : this.bold;
    bn = -1;
  }

  constructor() {}

  ngOnInit() {}

  evaluate() {
    return this.index == this.boldnumber ? !this.bold : this.bold;
  }
}
