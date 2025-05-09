const  BasePlugin = require("@appium/base-plugin").default;

class SamplePlugin extends BasePlugin {
    commands = ['getPageSource']

    async getPageSource(next, driver) {
        const originalSource = await next();
        //const originalSource = await driver.getPageSource();
        return originalSource.replace(/XCUIElementType/g,'')
    }
}
    module.exports = { SamplePlugin }

