export default interface IPaymentInstrument {

    validate(): void;
    collectPayment(): void;

}
//princípio de liskov