interface IStep1 {
    gsm: string;
    email: string;
    day: string;
    month: string;
    year: string;
    serviceType: string;
    verificationMethod: string;
    verificationMessage: string;
    fields: string;
}

interface IStep2 {
    framework: string;
}

interface IStep3 {
    dbName: string;
    dbType: string;
}

interface IStep4 {
    nameOnCard: string;
    cardNumber: string;
    cardExpiryMonth: string;
    cardExpiryYear: string;
    cardCvv: string;
    saveCard: string;
}

interface ICreateApp extends IStep1, IStep2, IStep3, IStep4 {
}

export type {IStep1, IStep2, IStep3, IStep4, ICreateApp};
