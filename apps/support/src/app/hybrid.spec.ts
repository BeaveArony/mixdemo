import { destroyPlatform } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

describe('hybrid bootstrap test', () => {
  let element;
  beforeEach(() => {
    destroyPlatform();

    element = document.createElement('app-root'); // TODO change it to match the
    // root component of the
    // AngularJS application
    const content = document.createElement('content');
    element.appendChild(content);
    document.body.appendChild(element);

    const base = document.createElement('base');
    base.setAttribute('href', '/');
    document.head.appendChild(base);
  });

  afterEach(() => {
    destroyPlatform();
    document.body.removeChild(element);
  });

  it('should work', async done => {
    await platformBrowserDynamic().bootstrapModule(AppModule);
    expect(element.innerText).toContain('Expected Value');
    done();
  });
});
