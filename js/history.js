document.getElementById('btn-history').addEventListener('click',function(){
    const history = document.getElementById('history-section');
    const donation = document.getElementById('donation-section');
    donation.classList.add('hidden');
    history.classList.remove('hidden');


    this.classList.add('bg-[#B4F461]');
    this.classList.remove('bg-white', 'border-gray-300');

    const btnDonation = document.getElementById('btn-donation');
    btnDonation.classList.remove('bg-[#B4F461]'); 
    btnDonation.classList.add('bg-white', 'border-gray-300');  
})

// Added history
function history(donation , place){
    const div = document.createElement('div');
    const date = new Date();
    div.innerHTML = `
        <div class="border-2 border-solid border-gray-200 rounded-lg p-8 mt-6">
            <h3 class="text-[0.9rem] lg:text-[1.25rem] font-bold">${donation} Taka is donated for ${place}</h3> 
            <br>
            <p class="text-[0.9rem] lg:text-[1.25rem] text-gray-500">Date: ${date}</p>       
        </div>    
    `

    document.getElementById('history-section').appendChild(div);
}