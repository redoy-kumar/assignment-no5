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
    const value = parseFloat(donationValue('donation-noakhali'));
    console.log(value);
    if(isNaN(value) || value<0){
        return alert('Invalid donation amount! Please try again.');
    }

    let balanceNoakhali = parseFloat(donationBalance('donate-balance-noakhali'));
    let balanceMain = parseFloat(donationBalance('main-balance'));

    if(balanceMain<value){
        return alert('Insufficient balance to donate! Please try again.');
    }

    showStatus();
    
    setBalance('main-balance', balanceMain-value);
    setBalance('donate-balance-noakhali', balanceNoakhali+value);

    const place = document.getElementById('noakhali').innerText;
    history(value,place);
});

// Feni
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();

    const value = parseFloat(donationValue('donation-feni'));
   
    if(isNaN(value) || value<0){
        return alert('Invalid donation amount! Please try again.');
    }

    let balanceFeni = parseFloat(donationBalance('donate-balance-feni'));
    let balanceMain = parseFloat(donationBalance('main-balance'));

    if(balanceMain<value){
        return alert('Insufficient balance to donate! Please try again.');
    }

    showStatus();

    setBalance('main-balance', balanceMain-value);
    setBalance('donate-balance-feni', balanceFeni+value);

    const place = document.getElementById('feni').innerText
    history(value,place);
});

// Quota
document.getElementById('btn-donate-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const value = parseFloat(donationValue('donation-quota'));
    console.log(value);
    if(isNaN(value) || value<0){
        return alert('Invalid donation amount! Please try again.');
    }

    let balanceQuota = parseFloat(donationBalance('donate-balance-quota'));
    let balanceMain = parseFloat(donationBalance('main-balance'));

    if(balanceMain<value){
        return alert('Insufficient balance to donate! Please try again.');
    }

    showStatus();
    
    setBalance('main-balance', balanceMain-value);
    setBalance('donate-balance-quota', balanceQuota+value);

    const place = document.getElementById('quota').innerText;
    history(value,place);
});



