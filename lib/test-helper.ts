import DriverBuilder from '@tmaqs/tmaqs-core/lib/driver-builder';
import EnvConfig from '@tmaqs/tmaqs-core/lib/env-config';
import { IUiDriver } from '@tmaqs/tmaqs-core/lib/index';

export default abstract class TestHelper {
  public static initializeUiDriver = async (envConfig: EnvConfig): Promise<IUiDriver> => {  
    return await new DriverBuilder()
      .setDriver(envConfig.ui.driver)
      .setBrowser(envConfig.ui.browser)
      .setIsHeadless(envConfig.ui.isHeadless)
      .setDefaultTimeout(envConfig.ui.defaultTimeout)
      .setNavigationTimeout(envConfig.ui.navigationTimeout)
      .setHoverDuration(envConfig.ui.hoverDuration)
      .setToHighlightElements(envConfig.ui.toHighlightElements)
      .setHighlightDuration(envConfig.ui.highlightDuration)
      .setHighlightColor(envConfig.ui.highlightColor)
      .buildUiDriver()
      .initializeDriver();
  };
}
