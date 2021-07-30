import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultistatebuttonComponent } from './multistatebutton.component';


describe('MultistatebuttonComponent', () => {
  let component: MultistatebuttonComponent;
  let fixture: ComponentFixture<MultistatebuttonComponent>;

  beforeAll(() => {
    console.error = (msg) => {
      fail(msg);
    };
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultistatebuttonComponent ],
      imports: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultistatebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display selected Input', () => {
    component.items = ['A', 'B', 'C'];
    component.selected = 'C';
    fixture.detectChanges();

    const hostEl: HTMLElement = fixture.nativeElement;
    expect(hostEl.querySelector('button')?.textContent).toContain('C');
  });

  it('should emit selectedChange with next value on click', () => {
    component.items = ['A', 'B', 'C'];
    component.selected = 'A';
    fixture.detectChanges();

    const spy = jasmine.createSpy();
    component.selectedChange.subscribe(spy)

    const hostEl: HTMLElement = fixture.nativeElement;
    hostEl.querySelector('button')?.dispatchEvent(new MouseEvent('click'));

    expect(spy).toHaveBeenCalledOnceWith('B');
  });

  it('should emit selectedChange with first value on click when last value is selected', () => {
    component.items = ['A', 'B', 'C'];
    component.selected = 'C';
    fixture.detectChanges();

    const spy = jasmine.createSpy();
    component.selectedChange.subscribe(spy)

    const hostEl: HTMLElement = fixture.nativeElement;
    hostEl.querySelector('button')?.dispatchEvent(new MouseEvent('click'));

    expect(spy).toHaveBeenCalledOnceWith('A');
  });
});
