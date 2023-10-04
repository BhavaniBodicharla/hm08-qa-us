const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
   /*it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })*/

     it('should wait for the taxi driver', async () => {
       // call the taxi to the adress
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    })
        // 2.select supportive mode
        it('should select supportive mode', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectsupportive = await $(page.selectsupportive);
        await selectsupportive.waitForDisplayed();
        await selectsupportive.click();
      //  await browser.pause(20000);
        await expect(selectsupportive.parentElement()).toHaveElementClass("active");
    })



      //3. Input phone number
       
       it('should be able to input phone number', async () => {
       await browser.url(`/`)
       await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
       
       const phoneNumber = helper.getPhoneNumber("+1");
       await page.submitPhoneNumber(phoneNumber);
       await expect(await helper.getElementByText(phoneNumber)).toBeExisting();

       const phoneNumberButton = await $(page.phoneNumberButton);
       await phoneNumberButton.waitForDisplayed();
       await phoneNumberButton.click();
       const pnoneNumberModal = await $(page.phoneNumberModal);

       const closePhoneNumberModal = await $(page.closePhoneNumberModal);
       await closePhoneNumberModal.waitForDisplayed();
       await closePhoneNumberModal.click();
       await expect(closePhoneNumberModal).toBeExisting();
        
        //adding payment method button   
    
        const paymentMethodButton = await $(page.paymentmethodbutton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
       })
       //4.Add card button
        it('should Add card details', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentMethodButton1 = await $(page.paymentmethodbutton);
        await paymentMethodButton1.waitForDisplayed();
        await paymentMethodButton1.click();
        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        const cardNumber = await $(page.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(1234554321123456);
        const cardCode = await $(page.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(99);
        const cardSignatureStrip = await $(page.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click();
        const linkButton = await $(page.linkButton);
        await linkButton.waitForDisplayed();
        await linkButton.click();
        const closePaymentMethodModel = await $(page.closePaymentMethodModel);
        await closePaymentMethodModel.waitForDisplayed();
        await closePaymentMethodModel.click();    
        await expect(closePaymentMethodModel).toBeExisting();    
    })

        //await browser.pause(5000);
        

        // 5.Message to Driver
        it('should write a message to driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageToDriver = await $(page.messageToDriver);
        await messageToDriver.waitForDisplayed();
        await messageToDriver.setValue('Get some water');
        await expect(messageToDriver).toHaveValue("Get some water");
    })
        
       //await browser.pause(5000);
       // const orderRequirements = await $(page.orderRequirements);
        //await orderRequirements.waitForDisplayed();
       // await orderRequirements.click();
        
       // const arrowbutton = await $(page.arrowbutton);
        //await arrowbutton.waitForDisplayed();
       // await arrowbutton.click();
        
      // 6.blanketandhandkerchiefs
       it('Button should be active', async () => {
         await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectsupportive1 = await $(page.selectsupportive);
        await selectsupportive1.waitForDisplayed();
        await selectsupportive1.click();
            
        const blanketandhandkerchiefs= await $(page.blanketandhandkerchiefs);
        await blanketandhandkerchiefs.waitForDisplayed();
        await blanketandhandkerchiefs.click();
        await expect($(page.blanketButtonStatus)).toBeChecked();
        // await expect(blanketandhandkerchiefs).toBeChecked();
    })

        // 7.ordering 2 icecreams
        it('should select 2 icecreams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectsupportive2 = await $(page.selectsupportive);
        await selectsupportive2.waitForDisplayed();
        await selectsupportive2.click();
            
        const ordering2icecreams = await $(page.ordering2icecreams);
        await ordering2icecreams.waitForDisplayed();
        await ordering2icecreams.click();
        await ordering2icecreams.click();
        const Enterthenumeberandorder = await $(page.Enterthenumeberandorder);
        await Enterthenumeberandorder.waitForDisplayed();
        await Enterthenumeberandorder.click()
        await expect(await helper.getElementByText("2")).toBeExisting();
    })
       
       //8.car search model window
     
       it('car search model window should be appared', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectsupportive3 = await $(page.selectsupportive);
        await selectsupportive3.waitForDisplayed();
        await selectsupportive3.click();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        
        await phoneNumberButton.click();
        const closePhoneNumberModal = await $(page.closePhoneNumberModal);
        await closePhoneNumberModal.waitForDisplayed();
        await closePhoneNumberModal.click();

        
        const messageToDriver = await $(page.messageToDriver);
        await messageToDriver.waitForDisplayed();
        await messageToDriver.setValue('Get some water');
        
        const blanketandhandkerchiefs= await $(page.blanketandhandkerchiefs);
        await blanketandhandkerchiefs.waitForDisplayed();
        await blanketandhandkerchiefs.click();
        
        const ordering2icecreams = await $(page.ordering2icecreams);
        await ordering2icecreams.waitForDisplayed();
        await ordering2icecreams.click();
        await ordering2icecreams.click();
        
        const Enterthenumeberandorder = await $(page.Enterthenumeberandorder);
        await Enterthenumeberandorder.waitForDisplayed();
        await Enterthenumeberandorder.click()
       const carsearchmodelwindow = await $(page.carsearchmodelwindow);
        await carsearchmodelwindow.waitForDisplayed();
        await carsearchmodelwindow.click();
       await expect(carsearchmodelwindow).toBeExisting();
       
       })
       //9.waiting for the driver
       
       
       it('waiting for driver window should appears', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectsupportive3 = await $(page.selectsupportive);
        await selectsupportive3.waitForDisplayed();
        await selectsupportive3.click();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
         await phoneNumberButton.click();
        const closePhoneNumberModal = await $(page.closePhoneNumberModal);
        await closePhoneNumberModal.waitForDisplayed();
        await closePhoneNumberModal.click();
         const messageToDriver = await $(page.messageToDriver);
        await messageToDriver.waitForDisplayed();
        await messageToDriver.setValue('Get some water');
        const blanketandhandkerchiefs= await $(page.blanketandhandkerchiefs);
        await blanketandhandkerchiefs.waitForDisplayed();
        await blanketandhandkerchiefs.click();
        const ordering2icecreams = await $(page.ordering2icecreams);
        await ordering2icecreams.waitForDisplayed();
        await ordering2icecreams.click();
        await ordering2icecreams.click();
         const Enterthenumeberandorder = await $(page.Enterthenumeberandorder);
        await Enterthenumeberandorder.waitForDisplayed();
        await Enterthenumeberandorder.click()
       const carsearchmodelwindow = await $(page.carsearchmodelwindow);
        await carsearchmodelwindow.waitForDisplayed();
        await carsearchmodelwindow.click();
       await expect(carsearchmodelwindow).toBeExisting();
        const thedriverwillarrive = await $(page.thedriverwillarrive);
        await browser.pause(20000); 
        await thedriverwillarrive.waitForDisplayed();
        await browser.pause(20000); 
        await expect($(`${page.driverWillArriveModal}`)).toBeExisting();
      //  await thedriverwillarrive.click(); 
       // await expect(thedriverwillarrive).toBeExisting();
        
        //await browser.pause(5000); 
       })





   
    })




