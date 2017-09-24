

function getAccounts() {
    var accountUrl = 'http://api.reimaginebanking.com/accounts?type=Checking&key=dc08a21cbbd85f2056c6d9202839dabb';
    fetch(accountUrl).then((data) => {
      data.json().then(val => {
          console.log(val);
          return val;
        })
    });
  }

// function giveFive(p1, bank) { 
//     p1.account_number;

//     }