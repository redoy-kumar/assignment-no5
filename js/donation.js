// Donation Function

// Noakhali
document.getElementById('btn-donate-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    const value = parseFloat(donationValue('donation-noakhali'));
    console.log(value);
    if(isNaN(value) || value<0){
        return alert('Invalid donation amount! Please try again');
    }

    let balanceNoakhali = parseFloat(donationBalance('donate-balance-noakhali'));
    let balanceMain = parseFloat(donationBalance('main-balance'));

    if(balanceMain<value){
        return alert('Invalid donation amount! Please try again');
    }

    showStatus();
    
    setBalance('main-balance', balanceMain-value);
    setBalance('donate-balance-noakhali', balanceNoakhali+value);
});

// Feni
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();

    const value = parseFloat(donationValue('donation-feni'));
   
    if(isNaN(value) || value<0){
        return alert('Invalid donation amount! Please try again');
    }

    let balanceFeni = parseFloat(donationBalance('donate-balance-feni'));
    let balanceMain = parseFloat(donationBalance('main-balance'));

    if(balanceMain<value){
        return alert('Invalid donation amount! Please try again');
    }

    showStatus();

    setBalance('main-balance', balanceMain-value);
    setBalance('donate-balance-feni', balanceFeni+value);
});

// Quota
document.getElementById('btn-donate-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const value = parseFloat(donationValue('donation-quota'));
    console.log(value);
    if(isNaN(value) || value<0){
        return alert('Invalid donation amount! Please try again');
    }

    let balanceQuota = parseFloat(donationBalance('donate-balance-quota'));
    let balanceMain = parseFloat(donationBalance('main-balance'));

    if(balanceMain<value){
        return alert('Invalid donation amount! Please try again');
    }

    showStatus();
    
    setBalance('main-balance', balanceMain-value);
    setBalance('donate-balance-quota', balanceQuota+value);
});



