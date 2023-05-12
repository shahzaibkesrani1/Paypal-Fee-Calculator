document.getElementById('calculateBtn').addEventListener('click', function () {
    var amount = parseFloat(document.getElementById('amount').value);
    var country = document.getElementById('country').value;
    var feeRate;
    switch (country) {
        case 'US':
            feeRate = 2.9;
            break;
        case 'UK':
            feeRate = 3.4;
            break;
        case 'CA':
            feeRate = 3.7;
            break;
        case 'AU':
            feeRate = 3.6;
            break;
        case 'DE':
            feeRate = 3.9;
            break;
        case 'FR':
            feeRate = 3.8;
            break;
        case 'Pk':
            feeRate = 2.9

        default:
            feeRate = 0;
    }

    var fee = (amount * feeRate) / 100;
    var total = amount - fee;

    document.getElementById('result').innerHTML = `
<p>Transaction Amount: $${amount.toFixed(2)}</p>
<p>PayPal Fee: $${fee.toFixed(2)}</p>
<p>Total Amount (after fee deduction): $${total.toFixed(2)}</p>
`;
});