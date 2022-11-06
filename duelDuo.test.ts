
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('Draw button displays the div with id = “choices”', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    const idDiv = await driver.findElement(By.id('choices'))
    const idDivDisplayed = await idDiv.isDisplayed()
    expect(idDivDisplayed).toBe(true)
    await driver.sleep(3000)
    
})

test('“Add to Duo” button displays the div with id = “player-duo”', async () => {

    const drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    const idDiv = await driver.findElement(By.id('choices'))
    const idDivDisplayed = await idDiv.isDisplayed()
    expect(idDivDisplayed).toBe(true)

    const duoButton = await driver.findElement(By.xpath('//button[text()="Add to Duo"]'))
    await duoButton.click()
    const duoDiv = await driver.findElement(By.id('player-duo'))
    const duoDivDisplayed = await duoDiv.isDisplayed()
    expect(duoDivDisplayed).toBe(true)
    await driver.sleep(3000)
})