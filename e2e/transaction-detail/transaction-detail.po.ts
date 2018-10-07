import { browser, by, element } from 'protractor';
import { GeneralPageFunctions } from "../general.po";

export class TransactionDetailPage {
  getTimestampValidity() {
    return element(by.css('.element-details > div:nth-of-type(2) > div'))
      .getText()
      .then(text => GeneralPageFunctions.processAndCheckDate(text));
  }

  getSize() {
    return element(by.css('.element-details > div:nth-of-type(3) > div'))
      .getText()
      .then(text => Number(text.split(' ')[0]));
  }

  getBlockNumber() {
    return element(by.css('.element-details > div:nth-of-type(4) > div > a'))
      .getText()
      .then(text => Number(text.replace(new RegExp(',', 'g'), '')));
  }
}