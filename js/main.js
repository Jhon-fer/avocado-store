//API
const baseUrl = 'https://platzi-avo.vercel.app';

//node for all content
const nodeApp = document.getElementById('app');

//format internacionalitation (Intl)
const formatPrice = price => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    return newPrice;
};


const appAvo = async() => {
    const res = await fetch(`${baseUrl}/api/avo`);
    const info = await res.json();

    const allContentPage = [];

    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    h1.className = 'title-page';
    main.append(h1);
    h1.textContent = 'Avocados, Super Store';
    
    const container = document.createElement('div');
    container.className = 'container';
    main.append(container);

    info.data.forEach(element => {

        const article = document.createElement('article');
        article.className = 'card';
        container.append(article);

        const img = document.createElement('img');
        img.className = 'card-product__img';
        img.src = `${baseUrl}${element.image}`;

        const title = document.createElement('h2');
        title.className = 'card-product__title';
        title.textContent = element.name;

        const price = document.createElement('span');
        price.className = 'card-product__price';
        price.textContent = element.price;

        const description = document.createElement('p');
        description.className = 'card-product__description';
        description.textContent = element.attributes.description;
        description.style.display = 'none';

        const button = document.createElement('button');
        button.className = 'card-product__show-description';
        button.textContent = 'View Description';
        
        article.append(img, title, price, description, button);

        const viewDescription = () => {
            if (description.style.display = 'none') {
                button.textContent = 'Hide Description';
                return description.style.display = 'block';
            }
        }        

        const hideDescription = () => {
            if (description.style.display = 'block') {
                button.textContent = 'View Description';
                return description.style.display = 'none';
            }
        }        
        
        const viewOrHide = () => {
            if (window.getComputedStyle(description).display !== 'none') {
                hideDescription(description);
                return false;
            }

            viewDescription(description);
        }

        button.addEventListener('click', viewOrHide);

    });

    allContentPage.push(main);

    const footer = document.createElement('footer');
    footer.className = 'footer';

    const footerText = document.createElement('p');
    footerText.className = 'footer-text';
    footerText.textContent = 'Built by Jhon Rios';
    footer.appendChild(footerText);

    nodeApp.append(...allContentPage);
    nodeApp.appendChild(footer);

}

appAvo();











