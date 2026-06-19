import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class HelloLwc extends LightningElement {
    myTitle = "Salesforce hello"; 
    connectedCallback() {
        let results = this.firstFunction(5,10);
       // window.alert("resut = " +results);
    }

    firstFunction(divisor, dividend) {
        return(dividend/divisor);
    }
}