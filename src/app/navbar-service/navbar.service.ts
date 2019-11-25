import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NavbarService {
  private notifyBold = new Subject<any>();
  private notifyItalic = new Subject<any>();
  private notifyUnderline = new Subject<any>();

  notifyBoldObservable$ = this.notifyBold.asObservable();
  notifyItalicIObservable$ = this.notifyItalic.asObservable();
  notifyUnderlineObservable$ = this.notifyUnderline.asObservable();

  public wordselected: number = -1;

  constructor() {}

  public notificarBold(data: any) {
    if (data > -1) {
      this.notifyBold.next(data);
    }
  }

  public notificarItalic(data: any) {
    if (data > -1) {
      this.notifyItalic.next(data);
    }
  }

  public notificarUnderline(data: any) {
    if (data > -1) {
      this.notifyUnderline.next(data);
    }
  }
}
