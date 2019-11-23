import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  EventEmitter,
  Output
} from "@angular/core";

@Component({
  selector: "app-control-panel",
  templateUrl: "./control-panel.component.html",
  styleUrls: ["./control-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent implements OnInit {
  @Output() public boldpressed = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  boldClick() {
    this.boldpressed.emit(null);
  }
}
