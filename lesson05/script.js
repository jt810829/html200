/* Create a bank application.

    The user should see a prompt so they can type which action to perform.
    The user will have a list of 4 actions to choose from.
        - Enter Q to quit (immediately quits the program).
        - Enter W to withdraw.
            The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be able to type another option.
        - Enter D to deposit.
            The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.
        - Enter B to view balance.
            The user will see their balance. Afterwards, they should be able to type another option.
    The program will loop asking for input until the user enters Q.

Extra challenges: The additional requirements below are optional. Implement them if you finish the Regular Challenge 1 (above) and are up for more!

    - The user should not be able to make excessive withdrawals (no negative balances).
    - The user should have a deposit cap of $50,000.
    - The user should receive a warning to protect against low balances.
    - Create an alert if the user tries to withdraw an amount that would leave them with less than $300 in their account, asking them to confirm if they're sure.
    */

bankingApp = () => {

    let input;
    let balance = 2000;

    while (input != 'Q') {


        input = prompt('Welcome! Please select from the following: (W) - Withdraw, (D) - Deposit, (B) - View Balance or (Q) Quit').toUpperCase();


        switch (input) {
            case 'W': {
                withdraw = Number(prompt('How much would you like to withdraw?'));
                if (withdraw > balance) {
                    alert('You don\'t have enough money in the bank!');
                }
                else if (balance - withdraw < 300) {
                    lowBalWarning = prompt('By withdrawing this amount, you will have less than $300, reply Y to confirm the withdraw').toUpperCase();
                    if (lowBalWarning === 'Y') {
                        balance -= withdraw;
                    }
                    else {
                        break;
                    }
                }
                else {
                    balance -= withdraw;
                }
                break;
            }
            case 'D': {
                deposit = Number(prompt('How much would you like to deposit?'));
                if (deposit > 50000) {
                    alert('Deposit limit is $50,000');
                }
                else {
                    balance += deposit;
                }
                break;
            }
            case 'B': {
                console.log('Your balance is $' + balance);
                break;
            }
            case 'Q': {
                alert('Thanks for the business!');
                break;
            }
            default: {
                alert('Invalid input, please select again.');
            }
        }
    }
}