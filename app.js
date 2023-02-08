const printProduct = () => {
    const contenedor = document.getElementById('box')

    variedades.forEach((product) => {
        const div = document.createElement('div')
        div.classList.add ('card')
        div.innerHTML += `
        <img src="${product.img}" class="card-img-top" alt="Imagen de sabor ${product.sabor}">
        <div class="card-body">
          <h5 class="card-title">${product.sabor}</h5>
          <p class="card-text">${product.unidades}</p>
          <p class="card-text">${product.tacc}</p>
          <p class="card-text">$${product.precio}</p>
          <a href="#" class="btn btn-primary" id="${product.id}">+</a>
        </div>
        
        `
        contenedor.appendChild(div)
    })
};

printProduct ()