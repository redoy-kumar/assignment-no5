// Donation Function
document.getElementById('btn-donation').addEventListener('click',function(){
    const history = document.getElementById('history-section');
    const donation = document.getElementById('donation-section');
    donation.classList.remove('hidden');
    history.classList.add('hidden');

     // Toggle button styles
     this.classList.add('bg-[#B4F461]');
     this.classList.remove('bg-white', 'border-gray-300');
 
     const btnHistory = document.getElementById('btn-history');
     btnHistory.classList.remove('bg-[#B4F461]');
     btnHistory.classList.add('bg-white', 'border-gray-300');  
})


// Noakhali
document.getElementById('btn-donate-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    const input = donationValue('donation-noakhali');

    if(input<0){
        return alert('Invalid donation amount! Please try again.');
    }
    else if(input===false){
        return alert('Invalid donation amount! Please try again.');
    }

    let balanceNoakhali = parseInt(donationBalance('donate-balance-noakhali'));
    let balanceMain = parseInt(donationBalance('main-balance'));

    if(balanceMain<input){
        return alert('Insufficient balance to donate! Please try again.');
    }

    showStatus();
    
    setBalance('main-balance', balanceMain-input);
    setBalance('donate-balance-noakhali', balanceNoakhali+input);

    const place = document.getElementById('noakhali').innerText;
    history(input,place);
});

// Feni
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();

    const input = donationValue('donation-feni');

    if(input<0){
        return alert('Invalid donation amount! Please try again.');
    }
    else if(input===false){
        return alert('Invalid donation amount! Please try again.');
    }

    let balanceFeni = parseInt(donationBalance('donate-balance-feni'));
    let balanceMain = parseInt(donationBalance('main-balance'));

    if(balanceMain<input){
        return alert('Insufficient balance to donate! Please try again.');
    }

    showStatus();

    setBalance('main-balance', balanceMain-input);
    setBalance('donate-balance-feni', balanceFeni+input);

    const place = document.getElementById('feni').innerText
    history(input,place);
});

// Quota
document.getElementById('btn-donate-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const input = donationValue('donation-quota');
    
    if(input<0){
        return alert('Invalid donation amount! Please try again.');
    }
    else if(input===false){
        return alert('Invalid donation amount! Please try again.');
    }

    let balanceQuota = parseInt(donationBalance('donate-balance-quota'));
    let balanceMain = parseInt(donationBalance('main-balance'));

    if(balanceMain<input){
        return alert('Insufficient balance to donate! Please try again.');
    }

    showStatus();
    
    setBalance('main-balance', balanceMain-input);
    setBalance('donate-balance-quota', balanceQuota+input);

    const place = document.getElementById('quota').innerText;
    history(input,place);
});



