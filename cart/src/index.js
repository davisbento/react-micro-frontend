import faker from 'faker';

const itensNumber = faker.random.number();

document.getElementById('dev-cart').innerHTML = `<div>You have ${itensNumber} items in your cart</div>`;