import {BasePage} from "../qaHomeworkWiki/2.8/basePage";
import { swagLabsPage } from "./swagLPage";
import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver"

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const swagP = new swagLabsPage(driver);

describe("Test for SwagLabs Webpage", () => {
    beforeEach(async () => {
        await swagP.navigate();
    });
    afterAll(async () => {
        await driver.quit();
    });

    test("Loggin in", async () => {
        await driver.wait(until.elementLocated(swagP.bot));
        await driver.findElement(swagP.userNameIpt).click();
        await driver.findElement(swagP.userNameIpt).clear();
        await driver.findElement(swagP.userNameIpt).sendKeys("standard_user");
        await driver.findElement(swagP.passwordIpt).click();
        await driver.findElement(swagP.passwordIpt).clear();
        await driver.findElement(swagP.passwordIpt).sendKeys("secret_sauce");
        await driver.findElement(swagP.loginBtn).click();
        await driver.wait(until.elementLocated(swagP.appLogo));
        
    });
    test("login method functionality", async () => {
        await swagP.login();
    });
    test("Checkout functionality", async () => {
        await swagP.login();
        await driver.findElement(swagP.backpackATC).click();
        await driver.findElement(swagP.shoppingCart).click();
        await driver.findElement(swagP.checkoutBtn).click();
        await driver.findElement(swagP.firstNameInput).click();
        await driver.findElement(swagP.firstNameInput).clear();
        await driver.findElement(swagP.firstNameInput).sendKeys("Test");
        await driver.findElement(swagP.lastNameInput).click();
        await driver.findElement(swagP.lastNameInput).clear();
        await driver.findElement(swagP.lastNameInput).sendKeys("Name");
        await driver.findElement(swagP.zipInput).click();
        await driver.findElement(swagP.zipInput).clear();
        await driver.findElement(swagP.zipInput).sendKeys("12345");
        await driver.findElement(swagP.continuechkBtn).click();
        await driver.findElement(swagP.finishBtn).click();
        await driver.findElement(swagP.backHomeBtn).click();
    });
});