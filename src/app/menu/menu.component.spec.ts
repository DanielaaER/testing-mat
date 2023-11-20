
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { MenuComponent } from './menu.component';
import { By } from '@angular/platform-browser';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MenuComponent]
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //PRUEBAS BOTON HACIA A1

  it('Should call route a1 method', () => {
    // Arrange
    const navigateSpy = spyOn(router, 'navigate');
    const route = 'a1';

    // Act
    component.navigateTo(route);

    // Assert
    expect(navigateSpy).toHaveBeenCalledWith([route]);
  });

  
  it('should call navigateTo method with route a1 when the button is clicked', () => {
    // Arrange 
    const navigateSpy = spyOn(component, 'navigateTo');
    const route = 'a1';
    let a1Button = fixture.debugElement.query(By.css('.a1-button'));

    // Act
    a1Button.triggerEventHandler('click', null);

    // Assert
    expect(navigateSpy).toHaveBeenCalledWith(route);
   });

  





  //PRUEBAS BOTON HACIA A2

  it('Should call route a2 method', () => {
    // Arrange
    const navigateSpy = spyOn(router, 'navigate');
    const route = 'a2';

    // Act
    component.navigateTo(route);

    // Assert
    expect(navigateSpy).toHaveBeenCalledWith([route]);
  });

  
  it('should call navigateTo method with route a2 when the button is clicked', () => {
    // Arrange 
    const navigateSpy = spyOn(component, 'navigateTo');
    const route = 'a2';
    let a1Button = fixture.debugElement.query(By.css('.a2-button'));

    // Act
    a1Button.triggerEventHandler('click', null);

    // Assert
    expect(navigateSpy).toHaveBeenCalledWith(route);
   });

  //PRUEBAS BOTON HACIA A1

  it('Should call route a3 method', () => {
    // Arrange
    const navigateSpy = spyOn(router, 'navigate');
    const route = 'a3';

    // Act
    component.navigateTo(route);

    // Assert
    expect(navigateSpy).toHaveBeenCalledWith([route]);
  });
  

  
  it('should call navigateTo method with route a3 when the button is clicked', () => {
    // Arrange 
    const navigateSpy = spyOn(component, 'navigateTo');
    const route = 'a3';
    let a1Button = fixture.debugElement.query(By.css('.a3-button'));

    // Act
    a1Button.triggerEventHandler('click', null);

    // Assert
    expect(navigateSpy).toHaveBeenCalledWith(route);
   });

   

});