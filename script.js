/* Mpesa message format */

/* 
RIS2ZKKZE8 Confirmed.
Ksh45.00 paid to FATUMA YUSUF MOHAMED SWAHILI HOTEL. on 28/9/23 at 7:11 PM.
New M-PESA balance is Ksh32.48. Transaction cost, Ksh0.00. 
Amount you can transact within the day is 499,955.00. To move money from bank to M-PESA, dial
*334#>Withdraw>From bank to M-PESA.
*/

let mpesaCode = 'RIS2ZKKZE8';

let mpesaName = 'M-PESA';

let clientName = 'FATUMA YUSUF MOHAMED SWAHILI HOTEL';

let transactionDate = '28/9/23';

let transactedAmount = '45.00';

let remainingBal = '32.48';

let transactionCost = '0.00';

let amountperDay = '499,955.00';

let transactionTime = '7:11 PM';

let currencyDenom = 'Ksh';

let dialCode = '*334#';


console.log(mpesaCode + ' Confirmed. \n' + currencyDenom + transactedAmount + 
' paid to ' + clientName + ' on \n' + transactionDate + ' at '
 + transactionTime + '.' + " New " + mpesaName + ' balance is ' + currencyDenom + remainingBal + 
 '.\n Transaction cost, ' + currencyDenom + transactionCost + '. Amount you can transact within the day is ' + amountperDay + '. \n To move money from bank to ' 
 + mpesaName + ', dial ' + dialCode + '>Withdraw> From bank to MPESA.');




