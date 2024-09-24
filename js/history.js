document.getElementById('btn-history').addEventListener('click',function(){
    const history = document.getElementById('history-section');
    const donation = document.getElementById('donation-section');
    donation.classList.add('hidden');
    history.classList.remove('hidden');

})

// Added history
function history(donation , place){
    const div = document.createElement('div');
    const date = new Date();
    div.innerHTML = `
        <div class="border-2 border-solid border-gray-200 rounded-lg p-8 mb-6">
            <h3 class="text-[1.25rem] font-bold">${donation} Taka is donated for ${place}</h3> 
            <br>
            <p class="text-gray-400">Date: ${date}</p>       
        </div>    
    `

    document.getElementById('history-section').appendChild(div);
}