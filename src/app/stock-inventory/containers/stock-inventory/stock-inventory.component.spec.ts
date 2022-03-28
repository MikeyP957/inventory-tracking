import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StockBranchComponent } from "../../components/stock-branch/stock-branch.component";
import { StockProductsComponent } from "../../components/stock-products/stock-products.component";
import { StockSelectorComponent } from "../../components/stock-selector/stock-selector.component";

import { StockInventoryComponent } from "./stock-inventory.component";

describe("StockInventoryComponent", () => {
  let component: StockInventoryComponent;
  let fixture: ComponentFixture<StockInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        StockInventoryComponent,
        StockBranchComponent,
        StockProductsComponent,
        StockSelectorComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
