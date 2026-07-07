# PlaywrightAutomation
# Selenium vs. Playwright

As we develop the Playwright automation framework, we will highlight the key differences between Selenium and Playwright throughout the project. Comparing both will help us understand Playwright concepts more effectively by relating them to familiar Selenium concepts, making it easier to learn, retain, and apply them in real-world automation scenarios.

# Introduction to Playwright and it's Key features:

Reliabe End-to-End Testing :
* Playwright's "Auto-Wait" capability ensures reliable end-to-end testing for "modern" web applications even in the face of dynamic and complex user interactions

Cross-Browser Testing :
* Playwright supports all major browsers including chromium-based(Chrome and Edge), Firefox, Safari, Opera allowing you to test your web applications accross wide range of browsers and platforms

Multiplatform Support :
* Playwright works seamlessly on Windows, MacOS, Linux and also supports "native mobile emulations" for googke chrome on Android and safari on ios, enabling comprehensive testing accross different devices and operating systems

Multilingual Flexibility :
* Playwright provides language buildings for JavaScript, TypeScript, Java, Python, and c#(.NET), allowing you to choose the programming language that best fits team's preferences and expertise

# Playwright's Advanced Features:

* Tracing and Debugging
* Network Interception
* Browser context Management
* Codegen Tool

# Install Playwright dependencies:

* npm init playwright
It downloads all the dependencies and also provides the framework structure so that we can design according to the framework provided
- "playwright.config.js" is like a "TestRunner" file in any of the frameworks
- "node_modules" contains "Jarfiles"
- Inside the "tests" folder we can wright the tests according to the functionality

# Importance of Playwright Test Annotation and async, await understanding:

import is necessary to design for each test (example.spec.js) in playwright 
                      import {test,expect} from @playwright/test;
                                         or 
                      const {test,expect} = require(@playwright/test);
test - Executes in playwright environment that launches the browser and provides the fresh page to each test
expect - expect is the assertion that playwright provides which validates different conditions 

* Auto Retrying Assertions 

- The following assertions will retry until the assertion passes, or the assertion timeout is reached. Note that retrying assertions are async, so you must await them.

Assertion	                                        Description

await expect(locator).toBeAttached()	            Element is attached
await expect(locator).toBeChecked()	                Checkbox is checked
await expect(locator).toBeDisabled()	            Element is disabled
await expect(locator).toBeEditable()	            Element is editable
await expect(locator).toBeEmpty()	                Container is empty
await expect(locator).toBeEnabled()	                Element is enabled
await expect(locator).toBeFocused()	                Element is focused
await expect(locator).toBeHidden()	                Element is not visible
await expect(locator).toBeInViewport()	            Element intersects viewport
await expect(locator).toBeVisible()	                Element is visible
await expect(locator).toContainText()	            Element contains text
await expect(locator).toContainClass()	            Element has specified CSS classes
await expect(locator).toHaveAccessibleDescription()	Element has a matching accessible description
await expect(locator).toHaveAccessibleName()	    Element has a matching accessible name
await expect(locator).toHaveAttribute()	            Element has a DOM attribute
await expect(locator).toHaveClass()	                Element has specified CSS class property
await expect(locator).toHaveCount()	                List has exact number of children
await expect(locator).toHaveCSS()	                Element has CSS property
await expect(locator).toHaveId()	                Element has an ID
await expect(locator).toHaveJSProperty()	        Element has a JavaScript property
await expect(locator).toHaveRole()	                Element has a specific ARIA role
await expect(locator).toHaveScreenshot()	        Element has a screenshot
await expect(locator).toHaveText()	                Element matches text
await expect(locator).toHaveValue()	                Input has a value
await expect(locator).toHaveValues()	            Select has options selected
await expect(locator).toMatchAriaSnapshot()	        Element matches the Aria snapshot
await expect(page).toMatchAriaSnapshot()	        Page matches the Aria snapshot
await expect(page).toHaveScreenshot()	            Page has a screenshot
await expect(page).toHaveTitle()	                Page has a title
await expect(page).toHaveURL()	                    Page has a URL
await expect(response).toBeOK()	                    Response has an OK status