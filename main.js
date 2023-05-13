(function() {
 const customerImage = document.querySelector('#customer-img');
 const customerName = document.querySelector('#customer-name');
 const customerText = document.querySelector('#customer-text');
 const btn = document.querySelectorAll('.btn');
 let index = 0;
 const customers = [];
 
 function Customer(img, name, text) {
  this.img = img;
  this.name = name;
  this.text = text;
 }
 function createCustomer(img, name, text) {
  // body...
  let Img = `./img/${img}.jpg`
  let customer = new Customer(Img, name, text);
  customers.push(customer);
 }
 createCustomer(0, 'jhone', 'customer service number for the IRS to know if you doing today I like the right way you doing today')
 createCustomer(1, 'well', 'customer service number for the IRS to know if you doing today I like the right way you doing today')
 createCustomer(2, 'okay', 'customer service number for the IRS to know if you doing today I like the right way you doing today')
 createCustomer(3, 'fine', 'customer service number for the IRS to know if you doing today I like the right way you doing today')
 createCustomer(4, 'good', 'customer service number for the IRS to know if you doing today I like the right way you doing today')
 
 btn.forEach(function (button) {
  // body...
  button.addEventListener('click', function (e) {
   // body...
   if (e.target.parentElement.classList.contains('preveBtn')) {
    if (index === 0) {
     index = customers.length;
    }
    index--
    customerImage.src = customers[index].img;
    customerName.textContent = customers[index].name;
    customerText.textContent = customers[index].text;
    }
    if (e.target.parentElement.classList.contains('nextBtn')) {
     index ++
    if (index === customers.length) {
     index = 0
    }
    customerImage.src = customers[index].img;
    customerName.textContent = customers[index].name;
    customerText.textContent = customers[index].text;
    }
  })
 })
 
})()