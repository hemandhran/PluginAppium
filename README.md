A simple Appium 2.x plugin that automatically removes the XCUIElementType prefix from all element type names in the iOS source tree, making your test code and page source easier to read and maintain.

Features
Removes the verbose XCUIElementType prefix from all element type names in the iOS page source.

Works transparently with Appium 2.x and the XCUITest driver.

No impact on element finding or automation logic-only the source tree output is modified for readability.

Installation
You can install the plugin globally or locally using npm:

bash
npm install -g <your-plugin-package-name>
Or, for local development:

bash
npm install <your-plugin-package-name>
Usage
1. Install the Plugin
Install the plugin as described above.

2. Register the Plugin with Appium
Register the plugin with your Appium server:

bash
appium plugin install --source=npm <your-plugin-package-name>
3. Activate the Plugin
Start the Appium server with your plugin enabled:

bash
appium --use-plugins <your-plugin-name>
Replace <your-plugin-name> with the name specified in your plugin's package.json under the appium.pluginName field.

4. Run Your Tests
Run your Appium tests as usual. When you retrieve the iOS page source (e.g., via driver.getPageSource()), the returned XML will have all occurrences of XCUIElementType removed from element type names.

Example
Before (default Appium behavior):

xml
<XCUIElementTypeWindow>
  <XCUIElementTypeOther>
    <XCUIElementTypeButton name="Login"/>
  </XCUIElementTypeOther>
</XCUIElementTypeWindow>
After (with this plugin):

xml
<Window>
  <Other>
    <Button name="Login"/>
  </Other>
</Window>
Configuration
No additional configuration is required. The plugin works out of the box once installed and enabled.

How It Works
This plugin extends Appium's BasePlugin class and intercepts the iOS source tree XML, removing all instances of the XCUIElementType prefix before returning the source to the client.

Compatibility
Appium 2.x

XCUITest driver for iOS

Development
To develop or contribute:

Clone this repository.

Install dependencies:

bash
npm install
Make your changes and run tests as needed.

Restart the Appium server after making changes to ensure your updates are picked up.

Publishing
To make your plugin available to others, publish it to npm:

bash
npm publish
Users can then install it via the Appium CLI.

Contributing
Contributions are welcome! Please open issues or pull requests for bug fixes, features, or documentation improvements.

License
MIT

Resources
[Appium Plugin Development Guide]

[Appium Official Documentation]

This plugin is not affiliated with or endorsed by the Appium project. For questions or support, please open an issue in this repository.