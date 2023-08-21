let sportsCapPrize = 0;
let sportsJerseyPrize = 0;
let sportsCatesPrize = 0;
let chairPrize1 = 0;
let childrenPlay1 = 0;
let flexibleSofa = 0;
let discount = 0;



function handleClick1() {
    const selectedItemsContainer = document.getElementById('selected-items');

    let text = document.getElementById('text1');
    let textItem = text.innerText;

    const li = document.createElement('li');
    li.innerText = textItem;
    selectedItemsContainer.appendChild(li);

    const capPrizePrevious = document.getElementById('cap-price');
    const capPrizeString = parseFloat(capPrizePrevious.innerText);
    const capPrize = capPrizeString;
    sportsCapPrize = sportsCapPrize + capPrize;


    const allTotalId = document.getElementById('all-total');
    const allTotalString = allTotalId.innerText;
    const allTotal = parseFloat(allTotalString);

    allTotalId.innerText = sportsCapPrize + sportsCatesPrize + sportsJerseyPrize + chairPrize1 + childrenPlay1 + flexibleSofa;
    // clickToClick();
}

function handleClick2() {
    const selectedItemsContainer = document.getElementById('selected-items');

    let text2 = document.getElementById('text2');
    let textItem2 = text2.innerText;

    const li = document.createElement('li');
    li.innerText = textItem2;
    selectedItemsContainer.appendChild(li);

    const jerseyPrizePrevious = document.getElementById('jersey-prize');
    const jerseyPrizeString = parseFloat(jerseyPrizePrevious.innerText);
    const jerseyPrize = jerseyPrizeString;
    sportsJerseyPrize = sportsJerseyPrize + jerseyPrize;


    const allTotalId = document.getElementById('all-total');
    const allTotalString = allTotalId.innerText;
    const allTotal = parseFloat(allTotalString);

    allTotalId.innerText = sportsJerseyPrize + sportsCatesPrize + sportsCapPrize + chairPrize1 + childrenPlay1 + flexibleSofa;
    // clickToClick();
}



function handleClick3() {
    const selectedItemsContainer = document.getElementById('selected-items');

    let text2 = document.getElementById('text3');
    let textItem2 = text2.innerText;

    const li = document.createElement('li');
    li.innerText = textItem2;
    selectedItemsContainer.appendChild(li);

    const catesPrizePrevious = document.getElementById('cates-prize');
    const catesPrizeString = parseFloat(catesPrizePrevious.innerText);
    const catesPrize = catesPrizeString;
    sportsCatesPrize = sportsCatesPrize + catesPrize;

    const allTotalId = document.getElementById('all-total');
    const allTotalString = parseFloat(allTotalId.innerText);
    allTotalId.innerText = sportsCatesPrize + sportsJerseyPrize + sportsCapPrize + chairPrize1 + childrenPlay1 + flexibleSofa;
}

function handleClick4() {
    const selectedItemsContainer = document.getElementById('selected-items');

    let text2 = document.getElementById('text4');
    let textItem2 = text2.innerText;

    const li = document.createElement('li');
    li.innerText = textItem2;
    selectedItemsContainer.appendChild(li);

    const chairPrizePrevious = document.getElementById('chair-prize');
    const chairPrizeString = parseFloat(chairPrizePrevious.innerText);
    const chairPrize = chairPrizeString;
    chairPrize1 = chairPrize1 + chairPrize;

    const allTotalId = document.getElementById('all-total');
    const allTotalString = parseFloat(allTotalId.innerText);
    allTotalId.innerText = sportsCatesPrize + sportsJerseyPrize + sportsCapPrize + chairPrize1 + childrenPlay1 + flexibleSofa;
}

function handleClick5() {
    const selectedItemsContainer = document.getElementById('selected-items');

    let text2 = document.getElementById('text5');
    let textItem2 = text2.innerText;

    const li = document.createElement('li');
    li.innerText = textItem2;
    selectedItemsContainer.appendChild(li);

    const childrenPrizePrevious = document.getElementById('children-prize');
    const childrenPrizeString = parseFloat(childrenPrizePrevious.innerText);
    const childrenPrize = childrenPrizeString;
    childrenPlay1 = childrenPlay1 + childrenPrize;

    const allTotalId = document.getElementById('all-total');
    const allTotalString = parseFloat(allTotalId.innerText);
    allTotalId.innerText = sportsCatesPrize + sportsJerseyPrize + sportsCapPrize + chairPrize1 + childrenPlay1 + flexibleSofa;
}


function handleClick6() {
    const selectedItemsContainer = document.getElementById('selected-items');

    let text2 = document.getElementById('text6');
    let textItem2 = text2.innerText;

    const li = document.createElement('li');
    li.innerText = textItem2;
    selectedItemsContainer.appendChild(li);

    const sofaPrizePrevious = document.getElementById('sofa-prize');
    const sofaPrizeString = parseFloat(sofaPrizePrevious.innerText);
    const sofaPrize = sofaPrizeString;
    flexibleSofa = flexibleSofa + sofaPrize;

    const allTotalId = document.getElementById('all-total');
    const allTotalString = parseFloat(allTotalId.innerText);
    allTotalId.innerText = sportsCatesPrize + sportsJerseyPrize + sportsCapPrize + chairPrize1 + childrenPlay1 + flexibleSofa;
}





// Discount er js code
let clickCount = 0; // Initialize a variable to count clicks
let discountApplied = false; // Track if the discount has been applied

document.getElementById('apply-btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;

    console.log(inputFieldText);
    const discountMoneyTotal = document.getElementById('discount-amount');
    const allTotalMoney = document.getElementById('all-total');
    const finalTotalPrize = document.getElementById('final-total');

    if (inputFieldText == 'SELL20') {
        if (!discountApplied) {
            clickCount++;
            discountApplied = true;
        }

        const discountAmount = (allTotalMoney.innerText * 0.2 * clickCount);
        discountMoneyTotal.innerText = discountAmount.toFixed(2);

        const finalTotalAmount = allTotalMoney.innerText - discountAmount;
        finalTotalPrize.innerText = finalTotalAmount.toFixed(2);
        
    } else if (inputFieldText == '') {
        discountMoneyTotal.innerText = discountMoneyTotal.innerText;
        finalTotalPrize.innerText = allTotalMoney.innerText;
    } else {
        alert('Please Provide A Valid Coupon Code');
    }

    inputField.value = '';

});










