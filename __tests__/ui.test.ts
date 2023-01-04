import { IUiDriver } from '@tmaqs/tmaqs-core/lib';
import EnvConfig from '@tmaqs/tmaqs-core/lib/env-config';
import EnvUtility from '@tmaqs/tmaqs-core/lib/utils/env-utility';
import TestHelper from '../lib/test-helper';
import { assert } from '@tmaqs/tmaqs-util-assertion/lib/assertion-core';

describe('UI Tests', () => {
  
  const envConfig: EnvConfig = EnvUtility.readYaml();
  const magenicAutomationSite = `${envConfig.ui.baseUrl}/Automation`;

  let driver: IUiDriver;

  beforeEach(async () => {
    driver = await TestHelper.initializeUiDriver(envConfig);
  });

  afterEach(async () => {
    await driver.screenshot(envConfig.ui.screenshotsPath, `${expect.getState().currentTestName}.png`, false);
    await driver.close();
  });

  it('should search for elements via XPath then the elements count should be equal to 4', async () => {
    await driver.navigateToUrl(magenicAutomationSite);
    const elements = await driver.searchElements("//*[@id='FlowerTable']/tbody/tr/th");
    assert.expect(elements.length).toEqual(4);
  });

});
