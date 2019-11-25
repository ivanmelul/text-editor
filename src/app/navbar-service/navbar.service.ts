import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export class Word {
  id: string;
  bold: boolean;
  iatlic: boolean;
  underline: boolean;
}

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

  public wordselected: Word;

  constructor() {}

  public notificarBold(data: any) {
    if (data) {
      this.notifyBold.next(data);
    }
  }

  public notificarItalic(data: any) {
    if (data) {
      this.notifyItalic.next(data);
    }
  }

  public notificarUnderline(data: any) {
    if (data) {
      this.notifyUnderline.next(data);
    }
  }
}
