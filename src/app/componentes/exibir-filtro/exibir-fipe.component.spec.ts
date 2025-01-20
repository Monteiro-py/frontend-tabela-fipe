import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirFipeComponent } from './exibir-fipe.component';

describe('ExibirFipeComponent', () => {
  let component: ExibirFipeComponent;
  let fixture: ComponentFixture<ExibirFipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibirFipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibirFipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
