import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "stock-inventory",
  templateUrl: "./stock-inventory.component.html",
  styleUrls: ["./stock-inventory.component.sass"],
})
export class StockInventoryComponent {
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl("branch code"),
      code: new FormControl("manager code"),
    }),
  });

  constructor() {}

  onSubmit() {
    console.log("Submit: ", this.form.value);
  }
}
