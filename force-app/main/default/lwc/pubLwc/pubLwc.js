import { LightningElement,wire } from 'lwc';
import {publish,MessageContext} from 'lightning/messageService';
import COUNTING_UPDATED_CHANNEL from '@salesforce/messageChannel/Counting_Update__c';

export default class PubLwc extends LightningElement {
    @wire(MessageContext)
    messageContext;

    handleIncrement(){
        const payload = {
            Operator: 'add',
            Constant : 1
        };
        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);
}

    handleDecrement(){
        const payload = {
            Operator : 'subtract',
            Constant : 1
        };
        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);
    }

    handleMultiply(){
        const payload = {
            Operator : 'multiply',
            Constant : 2
        };
        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);
    }
      handleDivide(){
        const payload = {
            Operator : 'divide',
            Constant : 2
        };
        publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);
    }
}