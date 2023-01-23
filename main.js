let targets = document.getElementsByClassName('target');
let target = targets[0];

fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => {
        return response.json();
    })

    .then(breeds => {
        for (const breed of breeds) {

            let div = document.createElement('div');
            div.classList.add('breed');

            let id = 1
            let title = document.createElement('h4');
            title.classList.add('breed_name');
            title.innerText = id `${ breed.message}`;
            div.appendChild(title);
            id++;

            let link = document.createElement('a');
            link.classList.add('breed_types');
            link.innerText = 'Types';
            link.href = `breed-types.html?id=${breed.id}`;
            div.appendChild(link);

            target.appendChild(div);
        }
    })