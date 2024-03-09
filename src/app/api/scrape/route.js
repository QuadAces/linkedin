import { NextResponse } from "next/server";

const webdriver =  import("selenium-webdriver")
//!getAttribute before or after the thing

export async function GET(request, context) {
    //!span array thing is before or after the thing.
    const {Builder, By, Key, util} = await import("selenium-webdriver")
    const chrome =  await import("selenium-webdriver/chrome")
    await import('chromedriver')
    const options = new chrome.Options()
    const token = "AQEDAUw0o-sFc6GTAAABjf-9iHAAAAGOI8oMcE0AVoMQn5BhY3XOcQ-VZf-faJGgw7WzzWW6N7THaBgw7eS-3yMVDopoqZ77_AGiFI_1F-5jxHZbU5Vel04-Ti5mvfxYO9nN5RQi_EpV3630J7JCS6UT"
    // let By = webdriver.By

    
    options.set("detach", true)
    options.addArguments("--headless")
    options.addArguments("--no-sandbox")
    options.addArguments("--incognito")
    options.addArguments("--disable-gpu")
    options.addArguments('--ignore-certificate-errors')
    options.addArguments('--ignore-ssl-errors')
    options.addArguments("disable-infobars")
    options.addArguments("start-maximized")
    options.addArguments("disable-dev-shm-usage")
    options.addArguments("no-sandbox")
    // options.addExperimentalOptions("excludeSwitches", ["enable-automation"])
    options.addArguments("disable-blink-features=AutomationControlled")
    

    //.setChromeOptions()
    let driver = await new Builder().forBrowser('chrome')
    .build();
    let email;
    driver.get("https://www.linkedin.com")
    await driver.manage().addCookie({ name: 'li_at', value: token });
    await driver.manage().setTimeouts({ implicit: 5000 });
    driver.get("https://www.linkedin.com/in/andre-iguodala-65b48ab5/")
    
    
    // const name = await driver.findElement(By.xpath("//div[@class='dCPfpVvGRbxtgoRoBjKZHhpzpsWnyaSqjgQ']/span/a/h1")).getText()
    // const byline = await driver.findElement(By.xpath("//div[@class='text-body-medium break-words']")).getText()
    
    // const locationTemp = await driver.findElement(By.xpath("//div[@class='iOFQhnpWXJcOwLVMAcmqeWnUpOWvCXysrcQ mt2']"))
    // const location = await locationTemp.findElements(By.tagName("span")[0]).getText()
    // await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);")
    // await driver.manage().setTimeouts({ implicit: 5000 });
    // let about;
    // try {
       let about = await driver.findElement(By.xpath("//div[@class='display-flex ph5 pv3']")).getText()
    // } catch (e) {
    //     console.log(e);
    //     about = null
        
    // }
    // let tempLink = await driver.findElement(By.xpath("//div[@class='pv-top-card__non-self-photo-wrapper ml0']/button/img"))
    // let pfp_link = await tempLink.getAttribute("src")   
    // if (pfp_link.startsWith("data:image")) {
    //     pfp_link = null
    // }       
    // const education_list = await driver.findElements(By.xpath("//div[@id='education']/../div[@class='pvs-list__outer-container']/ul/*")).getText()
    // const educations = []
    // let url_link;
    // let uni_name;
    // let year_period;
    
    // for (element of education_list) {
        
    //     try {
    //         url_link = await driver.findElement(By.xpath("//div[@id='education']/../div[@class='pvs-list__outer-container']/ul/*")).getText()
    //         url_link = await element.findElement(By.tagName('img')).getAttribute("src")
    //     }
    //     catch (e) {
    //         url_link = null;
    //     }
    //     uni_name = await element.findElements(By.tagName("span"))[0].getText()
    //     try {
    //         year_period = await driver.findElement(By.xpath(".//span[@class='pvs-entity__caption-wrapper']")).getText()
    //     }
    //     catch(e) {
            
    //         year_period = null
    //     }
    //     educations.push(
    //         {"URL": url_link, "name": uni_name, "year_period": year_period}
    //         )
            
            
    //     }
    //     const experience_list = await driver.findElements(By.xpath("//div[@id='experience']/../div[@class='pvs-list__outer-container']/ul/li")).getText()
    //     const experiences = []
    //     let company_year_period;
    //     for (element of experience_list) {
            
    //         try {
    //             url_link = await element.find_element(By.tagName('img')).getAttribute("src")
    //             url_link = element.find_element(By.TAG_NAME, "img").get_attribute("src")
    //         } catch (e) {
    //             url_link = null
    //         }
    //         const company_role =  await driver.findElements(By.xpath(".//div/div/div/div/div/div/div/div/span"))[0].getText()
    //         const company_name = await driver.findElements(By.xpath(".//div/div/div/div/span[@class='t-14 t-normal']/span"))[0].getText()
            
    //         try {
    //             company_year_period =  await driver.findElements(By.xpath(".//div/div/div/div/span[@class='t-14 t-normal t-black--light']/span"))[0].getText()
                
    //         }
    //         catch ( e) {
                
    //             print("error", e)
    //             company_year_period = null
    //         }
    //         experiences.append({
    //             "URL" : url_link,
    //             "role" : company_role,
    //             "year_period" : company_year_period,
    //             "name" : company_name,
    //         })
    //     }
        driver.quit()
        console.log(  
            //   "name", name,
        // "byline", byline,
        // "location", location,
        "description", about,
        // "pfp_link", pfp_link,
        // "educations", educations,
        // "experiences" , experiences,
        );
        return NextResponse.json({
            // "name": name,
            // "byline": byline,
            // "location": location,
            "description": about,
            // "pfp_link": pfp_link,
            // "educations": educations,
            // "experiences" : experiences,
        })
        
    }