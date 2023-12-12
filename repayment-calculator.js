// Input % rate (Annual)


let cardBalance = 824.84
const interestRate = 29.9
let timeFrame = 12
const payments = [];



// calculating interest charged on card balance:
const upcomingCharge = (rate, balance) => {
    let monthlyRate = ((rate / 12) / 100);
    let num = balance * monthlyRate;
    let formattedNum = Math.round(num * 100) / 100;
    return formattedNum;
};

/* IGNORE
const nextRepayment = (numOfMonths, balance) => {
    const net = balance / numOfMonths;
    let gross = net + upcomingCharge(interestRate, cardBalance);
    return gross
}
*/

function paymentCalc () {
    let newCardBalance = cardBalance;
    let newTimeFrame = timeFrame;
    for (let i = 0; i < timeFrame; i++){
        let repayment = (newCardBalance / newTimeFrame) + upcomingCharge(interestRate, newCardBalance);
        newCardBalance -= repayment;
        if (newCardBalance <= 0){
            let surplus = newCardBalance * -1;
            newCardBalance += surplus;
            let newRepayment = repayment - surplus;
            let formattedNewCardBal = Math.round(newCardBalance * 100) / 100;
            let formattedNewRepayment = Math.round(newRepayment * 100) /100;
            console.log(`Payment ${i+1} will be: £${formattedNewRepayment.toFixed(2)}`);
            console.log(`Your card balance is: £${formattedNewCardBal.toFixed(2)}`);
            newTimeFrame -= 1;
            payments.push(formattedNewRepayment);
        } else {
            let formattedNewCardBal = Math.round(newCardBalance * 100) / 100;
            let formattedRepayment = Math.round(repayment * 100) /100;
            console.log(`Payment ${i+1} will be: £${formattedRepayment}`);
            console.log(`Your card balance will be: £${formattedNewCardBal.toFixed(2)}`);
            newTimeFrame -= 1;
            payments.push(formattedRepayment);
        }
    }
    console.log(payments);
}



paymentCalc();


// IGNORE
//console.log(upcomingCharge(interestRate, cardBalance));
//console.log(nextRepayment(timeFrame, cardBalance))