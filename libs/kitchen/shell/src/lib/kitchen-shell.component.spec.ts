import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KitchenShellComponent } from './kitchen-shell.component';

describe('KitchenShellComponent', () => {
  let component: KitchenShellComponent;
  let fixture: ComponentFixture<KitchenShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KitchenShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
