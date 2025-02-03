'use strict'


class Billing {

    constructor (amount) {
        this.amount = Number(amount);
        if(isNaN(this.amount)) {
            throw new Error("Некорректное число");
        }
    }

    calculateTotal () {
    }
}

class FixedBilling extends Billing {

    constructor (amount) {
        super(amount) ;
    }

     calculateTotal () {
       return this.amount
    }

}

class HourBilling extends Billing {

    constructor(amount, hour) {
    super(amount) 
    this.hour = Number(hour)
    if(isNaN(this.hour)) {
            throw new Error("Некорректное колличество часов");
        }
    }

     calculateTotal () {
       return this.amount * this.hour
    }

}

class ItemBilling extends Billing {

     constructor(amount, itemCount) {
    super(amount) 
    this.itemCount = Number(itemCount)
    if(isNaN(this.itemCount)) {
            throw new Error("Некорректное колличество элементов");
        }
    }

     calculateTotal () {
       return this.amount * this.itemCount
    }
}

const fixedBilling = new FixedBilling('100')

console.log(` Общий счет : ${fixedBilling.calculateTotal()}`);

const hourBilling = new HourBilling('100', '24');
console.log(`Общее количество в пересчете часов : ${hourBilling.calculateTotal()}`)

const itemBilling = new ItemBilling('100', '6');
console.log(` Обшее колличество элементов : ${itemBilling.calculateTotal()}`)