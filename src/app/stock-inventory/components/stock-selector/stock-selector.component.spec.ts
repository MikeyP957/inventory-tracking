import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { StockSelectorComponent } from "./stock-selector.component";

describe("StockSelectorComponent", () => {
  let component: StockSelectorComponent;
  let fixture: ComponentFixture<StockSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [StockSelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should... do... something....", () => {
    const something = "something...";
    expect(something).toBe("something...");
  });
  /*
  it('should call the output on a value change', async ( (done) => {
    spyOn(component.changed, 'emit').and.callThrough();
    component.step = 100;
    component.increment()
    expect(component.changed.emit).toHaveBeenCalledWith(100)
  } )
  */
});
