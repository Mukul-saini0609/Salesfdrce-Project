import { LightningElement,wire } from 'lwc';
import {subscribe,MessageContext} from 'lightning/messageService';
import COUNTING_UPDATED_CHANNEL from '@salesforce/messageChannel/Counting_Update__c'; 

export default class SubLwc extends LightningElement {

    counter = 0;
    subscription = null;
    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscription = subscribe(
            this.messageContext,
            COUNTING_UPDATED_CHANNEL,
            (message) => this.handleMessage(message)
        );
    }

    handleMessage(message){
        if(message.Operator == 'add'){
            this.counter += message.Constant;
        }
        else if(message.Operator == 'subtract'){
            this.counter -= message.Constant;
        }
        else if(message.Operator == 'multiply'){
            this.counter *= message.Constant;
        }
        else if(message.Operator == 'divide'){
            this.counter /= message.Constant;
        }
    }

    disconnectedCallback() {
        if (this.subscription) {
            unsubscribe(this.subscription);
        }
    }
}