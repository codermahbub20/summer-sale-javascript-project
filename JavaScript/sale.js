let sportsCapPrize = 0;
let sportsJerseyPrize = 0;
let sportsCatesPrize = 0;


function handleClick1(){
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

    allTotalId.innerText = sportsCapPrize + sportsCatesPrize + sportsJerseyPrize;

}

function handleClick2(){
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

    allTotalId.innerText = sportsJerseyPrize + sportsCatesPrize + sportsCapPrize;
}


function handleClick3(){
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
    const allTotalString = allTotalId.innerText;
    const allTotal = parseFloat(allTotalString);

    allTotalId.innerText = sportsCatesPrize + sportsJerseyPrize + sportsCapPrize;
}




