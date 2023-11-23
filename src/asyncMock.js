const products = [
    {
        id: '1',
        name: 'Butacas Deportivas',
        price: 1000,
        category: 'Accesorios',
        img: 'https://hidargentina.com.ar/cdn/shop/products/ompstreetpost02_1200x1200.jpg?v=1603467744',
        stock: 25,
        description: 'Descripcion butacas deportivas'
    },
    {
        id: '2',
        name: 'Filtro De Aceite',
        price: 250,
        category: 'Mecanicos',
        img: 'https://www.boschecuador.com/productos_gallery/img/2441f36915fbeaef2d0b864567f34c56.jpg',
        stock: 50,
        description: 'Descripcion filtros de aceite'
    },
    {
        id: '3',
        name: 'Luces Led',
        price: 500,
        category: 'Electricos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_616976-MLA53538361280_012023-O.webp',
        stock: 15,
        description: 'Descripcion Luces Led'
    },
    {
        id: '4',
        name: 'Amortiguadores Deportivos',
        price: 1500,
        category: 'Mecanicos',
        img: 'https://blog.rodiautosport.es/wp-content/uploads/2017/10/ap_suspension.jpg',
        stock: 60,
        description: 'Descripcion Amortiguadores Deportivos'
    },
    {
        id: '5',
        name: 'Volante Deportivo',
        price: 1200,
        category: 'Accesorios',
        img: 'https://acdn.mitiendanube.com/stores/001/229/031/products/diseno-sin-titulo-461-ee3b00997f85bdec4616775222147022-1024-1024.jpg',
        stock: 50,
        description: 'Descripcion Volante Deportivo'
    },
    {
        id: '6',
        name: 'Cámara de Respaldo',
        price: 250,
        category: 'Accesorios',
        img: 'https://http2.mlstatic.com/D_973217-MLA41925339198_052020-O.jpg',
        stock: 20,
        description: 'Descripcion Camara de Respaldo'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)

    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};
