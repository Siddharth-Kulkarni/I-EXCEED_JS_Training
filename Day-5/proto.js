const obj={
    balance:1500000,
    withdraw:function(amnt){
        this.balance-=amnt;
    },
    deposit:function(amnt){
        this.balance+=amnt;
    },
    getbalance:function(amnt){
        return this.balance;
    }

};

let savacc=Object.create(obj);
savacc.accname="iexceed";
savacc.accno=21837;

let curracc=Object.create(obj);
curracc.accname="iexceed";
curracc.accno=21042107;


console.log(savacc.accname);
savacc.deposit(1200000);

console.log(savacc.getbalance());


savacc.withdraw(500000);

console.log(savacc.getbalance())

console.log(curracc.getbalance())
curracc.deposit(1000000)

console.log(curracc.getbalance())

console.log(obj.getbalance())


let businessbankaccount=Object.create(obj,{accno:{value:"bba01",configurable:false,writable:true,enumerable:true},
    holder:{value:"astosh",writable:false,configurable:true,enumerable:true},
    balance:{value:1,writable:true}});
businessbankaccount.holder="abcd";
console.log(businessbankaccount.holder);
console.log(businessbankaccount.balance);
businessbankaccount.deposit(200000);
console.log(businessbankaccount.balance);
businessbankaccount.withdraw(50001);
console.log(businessbankaccount.balance);
console.log(businessbankaccount.accno)
