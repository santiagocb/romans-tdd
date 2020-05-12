import { TestBed } from '@angular/core/testing';

import { RomanService } from './roman.service';

describe('RomanosService', () => {
  let service: RomanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a romanize function', () => {
    expect(service.romanize).toBeDefined();
  });

  it('converToRoman should be a function', () => {
    expect(service.romanize).toBeInstanceOf(Function);
  });

  it('should not convert 0 to roman number', () => {
    expect(service.romanize(0)).toBeNull();
  });

  it('should not convert -1 to roman number', () => {
    expect(service.romanize(-1)).toBeNull();
  });

  it('should not convert 1050 to roman number', () => {
    expect(service.romanize(1050)).toBeNull();
  });

  it('should convert 1 to roman number', () => {
    expect(service.romanize(1)).toEqual('I');
  });

  it('should convert 4 to roman number', () => {
    expect(service.romanize(4)).toEqual('IV');
  });

  it('should convert 5 to roman number', () => {
    expect(service.romanize(5)).toEqual('V');
  });

  it('should convert 9 to roman number', () => {
    expect(service.romanize(9)).toEqual('IX');
  });

  it('should convert 10 to roman number', () => {
    expect(service.romanize(10)).toEqual('X');
  });

  it('should convert 40 to roman number', () => {
    expect(service.romanize(35)).toEqual('XXXV');
  });

  it('should convert 50 to roman number', () => {
    expect(service.romanize(50)).toEqual('L');
  });

  it('should convert 96 to roman number', () => {
    expect(service.romanize(96)).toEqual('XCVI');
  });

  it('should convert 100 to roman number', () => {
    expect(service.romanize(100)).toEqual('C');
  });

  it('should convert 400 to roman number', () => {
    expect(service.romanize(400)).toEqual('CD');
  });

  it('should convert 505 to roman number', () => {
    expect(service.romanize(505)).toEqual('DV');
  });

  it('should convert 747 to roman number', () => {
    expect(service.romanize(747)).toEqual('DCCXVVII');
  });

  it('should convert 876 to roman number', () => {
    expect(service.romanize(876)).toEqual('DCCCLXXVI');
  });

  it('should convert 900 to roman number', () => {
    expect(service.romanize(900)).toEqual('CM');
  });

  it('should convert 1000 to roman number', () => {
    expect(service.romanize(1000)).toEqual('M');
  });
});
