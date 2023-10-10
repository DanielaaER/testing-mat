import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MediaComponent } from './media.component';
import { ProxyService } from '../services/proxy.service';
import { DevService } from '../services/dev.service';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports: [HttpClientTestingModule],
      providers: [ProxyService, DevService],
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should return the correct average of column 1', () => {
    const data = [1, 2, 3, 4, 5];
    const expectedMedia = 3;
    const actualMedia = component.calculateMediaColumn1(data, 1); 
    expect(actualMedia).toBe(expectedMedia);
  });

  it('should return the correct average of column 2', () => {
    const data = [2, 4, 6, 8, 10];
    const expectedMedia = 6;
    const actualMedia = component.calculateMediaColumn2(data, 2); 
    expect(actualMedia).toBe(expectedMedia);
  });
});