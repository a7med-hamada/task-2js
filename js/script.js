// variables
var allitems = document.querySelectorAll('#items div');
var content = document.querySelector('#content');
var purchasedItems = document.getElementById('purchased-items');
var clear = document.querySelector('#clear');
var openshop = document.querySelector('#openshop');
var closeshop = document.querySelector('#closeshop');
var titlecontent = document.querySelector('.title-content');
var not = document.querySelector('.not');
var hr = document.querySelector('.hr');
var buyall = document.querySelector('.buy-all');
var total = document.querySelector('.totalprice');
var totalprice = 0;
var PurchaseNumberElement = document.querySelector('#openshop span');
var purchaseCount = 0;
var inputsearch = document.getElementById('search');
var products = document.querySelectorAll('#items div');
var notfound = document.getElementById('notfound');

// add to cart
allitems.forEach(function (item) {
    item.onclick = function () {
        var itemname = item.querySelector('h2').textContent;

        totalprice += parseInt(item.getAttribute("price"));
        titlecontent.style.fontSize = '25px';
        buyall.style.display = 'block';
        clear.style.display = 'block';
        not.style.display = 'none';
        hr.style.width = '100%';
        content.style.fontSize = '20px';
        // content.style.display = 'block';

        var itemElement = document.createElement('p');
        itemElement.textContent = itemname;
        purchasedItems.appendChild(itemElement);

        purchaseCount++;
        PurchaseNumberElement.innerHTML = purchaseCount;
        total.innerHTML = 'Total Price: ' + totalprice + ' $';
    };
});

// clear cart
clear.onclick = function () {
    purchasedItems.innerHTML = '';
    titlecontent.style.fontSize = '55px';
    not.style.display = 'block';
    purchaseCount = 0;
    PurchaseNumberElement.innerHTML = purchaseCount;
    titlecontent.style.fontSize = '25px';
    buyall.style.display = 'none';
    clear.style.display = 'none';
    totalprice = 0;
    total.innerHTML = "Total Price: 0 $";
};

// open cart
openshop.onclick = function () {
    content.style.display = 'block';
    titlecontent.style.fontSize = '25px';
    content.style.fontSize = '20px';
    hr.style.width = '100%';
    hr.style.marginBottom = '20px';
};

// close cart
closeshop.onclick = function () {
    content.style.display = 'none';
};

// search
inputsearch.addEventListener('input', function () {
    var inputvalue = inputsearch.value.toLowerCase();
    var anyvisible = false;

    products.forEach((item) => {
        var title = item.querySelector('h2').textContent.toLowerCase();
        if (title.includes(inputvalue)) {
            item.style.display = 'block';
            anyvisible = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (notfound) {
        notfound.style.display = anyvisible ? 'none' : 'block';
    }
});

// buy all
buyall.onclick = function () {
    if (totalprice === 0);

    var fullprice = totalprice;
    if (totalprice > 30000) {
        fullprice = totalprice * 0.75;
        alert('Purchased for ' + totalprice + '$ and you get 25% off. The amount became ' + fullprice + '$');
    } else {
        alert('Purchased for ' + totalprice + '$');
    }

    purchasedItems.innerHTML = '';
    totalprice = 0;
    purchaseCount = 0;
    PurchaseNumberElement.innerHTML = purchaseCount;
    total.innerHTML = "Total Price: 0 $";
    clear.style.display = 'none';
    buyall.style.display = 'none';
    not.style.display = 'block';
};
