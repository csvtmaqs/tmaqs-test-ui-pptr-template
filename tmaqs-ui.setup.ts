import DriverBuilder from '@tmaqs/tmaqs-core/lib/driver-builder';
import PuppeteerDriver from '@tmaqs/tmaqs-ui-pptr/lib/puppeteer-driver';


require('chromedriver');
require('geckodriver');

DriverBuilder.driverMap.set('puppeteer', new PuppeteerDriver());

