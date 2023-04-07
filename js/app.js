
function openNav() {document.getElementById("myNav").style.width = "100%";}
function closeNav() {document.getElementById("myNav").style.width = "0%";}
const cards = document.querySelector('.cards')

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>mostrar(json))
            
function mostrar(productos) {
    console.log(productos);
    productos.forEach(element => {
        const {description, image, title, price, id} = element;
        const card = document.createElement('div');
        const cardCorazon = document.createElement('i');
        const imagen = document.createElement('div');
        const img = document.createElement('img');
        
        const informacion = document.createElement('div');
        const descripcion = document.createElement('p');
        const titulo = document.createElement('h2');
        const precio = document.createElement('p');
        
        card.classList.add('card')
        cardCorazon.classList.add('fas', 'fa-heart')
        imagen.classList.add('imagen')
        img.classList.add('img')
        img.src = image;
        
        informacion.classList.add('informacion');
        titulo.classList.add('titulo');
        titulo.textContent = title;
        descripcion.classList.add('descripcion')
        descripcion.textContent = description;
        precio.classList.add('precio')
        precio.textContent = `$ ${price}`;

        card.onclick = () => {productopag(id);} //DEBES REDIRECCIONAR A PAG DEL PRODUCTO

        cards.appendChild(card)
        cards.appendChild(informacion)
        card.appendChild(cardCorazon)
        card.appendChild(imagen)
        card.appendChild(informacion)
        imagen.appendChild(img)

        informacion.appendChild(titulo)
        // informacion.appendChild(descripcion)
        informacion.appendChild(precio)    
    });
    
}

function productopag(id) {
    console.log(id);
}