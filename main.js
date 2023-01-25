let targets = document.getElementsByClassName('target');
let target = targets[0];

let title = document.createElement('h2');
title.classList.add('title');
title.innerText = 'Types of vehicles';
target.appendChild(title);

let div = document.createElement('div');
div.classList.add('main');
target.appendChild(div);

let cars = document.createElement('a');
cars.classList.add('button');
cars.innerText = 'Cars list';
cars.href = `cars.html`;
div.appendChild(cars);

let motorcycles = document.createElement('a');
motorcycles.classList.add('button');
motorcycles.innerText = 'Motorcycles list';
motorcycles.href = `motorcycles.html`;
div.appendChild(motorcycles);

let trucks = document.createElement('a');
trucks.classList.add('button');
trucks.innerText = 'Trucks list';
trucks.href = `trucks.html`;
div.appendChild(trucks);