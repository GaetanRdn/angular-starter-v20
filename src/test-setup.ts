import '@analogjs/vitest-angular/setup-snapshots';
import '@angular/compiler';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';
import { getTestBed } from '@angular/core/testing';
import { NgModule, provideZonelessChangeDetection } from '@angular/core';

@NgModule({
  providers: [provideZonelessChangeDetection()],
})
class ZonelessModule {}

getTestBed().initTestEnvironment(
[BrowserTestingModule, ZonelessModule],
platformBrowserTesting(),
);