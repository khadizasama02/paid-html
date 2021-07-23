function handleSubmit(event)
{
    event.preventDefault();
    const cardNum = document.getElementById('card-Number').value;
    const cvcNum = document.getElementById('cvc-Number').value;
    let cvcReg = /^[0-9]{3,4}$/;
    // visacard
    let cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/ ;
// american express
    let cardno1 = /^(?:3[47][0-9]{13})$/;
    // mastercard
    let cardno2 = /^(?:5[1-5][0-9]{14})$/;
    // discover
    let cardno3 = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

  if(cardNum.match(cardno) && cvcNum.match(cvcReg))
        {
            window.location = './confirm.html';
        }
     
    else if (cardNum.match(cardno1)  && cvcNum.match(cvcReg) )
        {
            window.location = './confirm.html';
      return true;
        }
     
     else if (cardNum.match(cardno2) && cvcNum.match(cvcReg))
        {
            window.location = './confirm.html';
      return true;
        }
        else if (cardNum.match(cardno3)  && cvcNum.match(cvcReg))
        {
            window.location = './confirm.html';
      return true;
        }
      else
        {
        alert("Not a valid  credit card number!");
        window.location = './failed.html';
        }
}