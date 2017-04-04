import { TestBed, ComponentFixture, async, fakeAsync, inject, tick } from '@angular/core/testing';
import {  Component,  DebugElement,  NgModule,  NgModuleFactoryLoader,  NO_ERRORS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import {parse, stringify} from 'querystring';
import {By} from '@angular/platform-browser';
import {NUMBER_TYPE} from '@angular/compiler/src/output/output_ast';
import {by} from 'protractor';

describe('AppComponent', () => {
   beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should display a number when this button clicked', async (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('#button1');
    button.click();
    fixture.detectChanges();
    expect(Number.isInteger(Number(compiled.querySelector('.intvalue').textContent))).toBeTruthy();
  }));
  it('should display a string  when this button clicked', async (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    const buttonstring = compiled.querySelector('.button2');
    buttonstring.click();
    fixture.detectChanges();
    expect( compiled.querySelector('.stringvalue').textContent).not.toBe(null);
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Unit Testing');
  }));
  // it('should display a string when this  button clicked', async (() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //
  // }));

  // it(`should display a number when button clicked`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const compiled = fixture.componentInstance;
  //   expect(compiled.querySelector('label').textContent).toContain('10');
  //   /*const number = 10;
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.intValue).toEqual(parse('10'));
  //   expect(typeof number).toEqual('number');
  //   expect(number).toBeGreaterThan(0);*/
  // }));

  //
  // it('should be a number in label with class intValue', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector(By.css('intValue')).textContent).toContain('10');
  // }));
  //
  // it('should be a string in label with class stringValue', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector(By.css('stringValue')).textContent).toContain('siddhartha');
  // }));



});
