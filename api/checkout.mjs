document.querySelector('.checkout-form-payment-modal-bitcoin-button').addEventListener('click', function () {
  var myHeaders = new Headers();
  myHeaders.append("x-api-key", "PMFAQQ4-FHHMYTD-MYF1BB2-TBRF4YK");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://api.nowpayments.io/v1/min-amount?currency_from=btc&currency_to=&fiat_equivalent=usd&is_fixed_rate=False&is_fee_paid_by_user=False", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      // Access min_amount from the result and save it in a variable
      let minAmount = result.min_amount;
      // Now you can use the minAmount variable to store or process the min_amount value
      console.log("Minimum Amount:", minAmount);

      // Now that we have the min_amount, we can proceed with the second fetch request
      fetch("https://api.nowpayments.io/v1/estimate?amount=69.99&currency_from=usd&currency_to=btc", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    })
    .catch(error => console.log('error', error));
});
