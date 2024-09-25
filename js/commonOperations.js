// Function that return input value
function donationValue(id) {
    const value = document.getElementById(id).value;

    if(isNaN(value)){
        return false;
    }
    else if(value===''){
        return false;
    }
    else{
        const intValue = parseInt(value);
         return intValue;
    }
}

// Function that return innerText
function donationBalance(id) {
    return document.getElementById(id).innerText;
}

// Set function of innerText
function setBalance(id, value) {
    document.getElementById(id).innerText = value;
}

// Status Function
function showStatus() {
    document.getElementById('my_modal_1').classList.add('modal-open');
    document.getElementById('modal close').addEventListener('click', function(){
        document.getElementById('my_modal_1').classList.remove('modal-open');
    })
}
