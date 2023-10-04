module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumber: '#number',
    cardCode: '.card-code #code',
    messageToDriver: '#comment',
    ordering2icecreams:'div=+',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '.np-text',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    selectsupportive: 'div=Supportive', 
    paymentmethodbutton: '.pp-text',
    addCardButton:'div=Add card',
    linkButton: 'button=Link',
    thedriverwillarrive :'.order-subbody',
    //orderRequirements: '.reqs-head',
    //arrowbutton: '.reqs-arrow',  
    blanketandhandkerchiefs: '//div[contains(text(),"Blanket and handkerchiefs")]/following-sibling::div',
    blanketButtonStatus: '.switch-input',
    Enterthenumeberandorder:'.smart-button-main',
    // Modals
    phoneNumberModal: '.modal',
    closePaymentMethodModel: '.payment-picker .close-button',
    closePhoneNumberModal: '.close-button', 
 
    // Misc
     
    cardSignatureStrip: '.plc',
    carsearchmodelwindow:'.order-buttons',
    driverWillArriveModal: 'div*=The driver will arrive',

    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
   /* //Selectmode: 
    Selectmode: const Supportive = await $(this.Supportive);
        await Supportive.waitForDisplayed();
        await Supportive.click()*/

    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
};