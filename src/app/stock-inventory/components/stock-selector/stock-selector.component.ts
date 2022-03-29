import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Product } from "../../models/product.interface";

@Component({
  selector: "stock-selector",
  templateUrl: "./stock-selector.component.html",
  styleUrls: ["./stock-selector.component.scss"],
})
export class StockSelectorComponent {
  @Input()
  parent: FormGroup;

  @Input()
  products: Product[];

  constructor() {}

  @Output()
  added = new EventEmitter<any>();

  onAdd() {
    this.added.emit(this.parent.get("selector").value);
  }
}
