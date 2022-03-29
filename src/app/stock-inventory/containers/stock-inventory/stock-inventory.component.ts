import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Product } from "../../models/product.interface";

@Component({
  selector: "stock-inventory",
  templateUrl: "./stock-inventory.component.html",
  styleUrls: ["./stock-inventory.component.scss"],
})
export class StockInventoryComponent {
  products: Product[] = [
    {
      id: 1,
      price: 25,
      name: "bonsai soil",
    },
    {
      id: 2,
      price: 50,
      name: "bonsai pot",
    },
    {
      id: 3,
      price: 100,
      name: "bonsai tree",
    },
    {
      id: 4,
      price: 70,
      name: "tool set",
    },
    {
      id: 5,
      price: 10,
      name: "fertelizer",
    },
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl("branch code"),
      code: new FormControl("manager code"),
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({ product_id: 1, quantity: 12 }),
      this.createStock({ product_id: 2, quantity: 15 }),
    ]),
  });

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(stock.product_id || ""),
      quantity: new FormControl(stock.quantity || 0),
    });
  }

  addStock(stock) {
    const control = this.form.get("stock") as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup; index: number }) {
    const control = this.form.get("stock") as FormArray;
    control.removeAt(index);
  }

  onSubmit() {
    console.log("Submit: ", this.form.value);
  }
}
