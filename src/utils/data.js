const data = {
  /* users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false
    }
  ], */
  sale: [
    {
      name: 'Promoção de x-salada',
      slug: 'xpromo',
      image: '/images/burgers/combo-salada.jpg',
      description: '3 x-saladas + batata frira + 1 coca-cola de 2 litros'
    },
    {
      name: 'Promoção de hamburguer artesanal',
      slug: 'artesanalpromo',
      image: '/images/burgers/combo-artesanal.jpg',
      description: '1 Sanduiche artesanal + cheddar + coca-cola ks'
    },
    {
      name: 'Promoção de X-tudo',
      slug: 'xtudopromo',
      image: '/images/burgers/combo-artesanal.jpg',
      description: '2 X-Tudo + coca de 2L'
    }
  ],
  products: [
    {
      name: 'Sanduiche artesanal',
      slug: 'artesanal',
      category: 'burgers',
      image: '/images/burgers/artesanal.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 23,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Pão bola, carne artesanal, queijo, presunto, ovo, salada'
    },
    {
      name: 'Duplo salada',
      slug: 'duplosalada',
      category: 'burgers',
      image: '/images/burgers/duplo-salada.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 18,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        'Pão bola, 2 carnes de hamburguer, queijo, presunto, ovo, salada'
    },
    {
      name: 'X-Burger',
      slug: 'xburger',
      category: 'burgers',
      image: '/images/burgers/x-burger.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 13,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Pão bola ,carne de hamburger, ovo, salada'
    },
    {
      name: 'X-Egg',
      slug: 'xegg',
      category: 'burgers',
      image: '/images/burgers/x-egg.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 10,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Pão bola, Ovo, queijo, presunto, salada'
    },
    {
      name: 'X-Frango',
      slug: 'xfrango',
      category: 'burgers',
      image: '/images/burgers/x-frango.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 13,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Pão bola, peito de frango, ovo, salada'
    },
    {
      name: 'X-Salada',
      slug: 'xsalada',
      category: 'burgers',
      image: '/images/burgers/x-salada.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 16,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Pão bola, carne de hamburger, queijo, presunto, ovo, salada'
    },
    {
      name: 'X-Tudo',
      slug: 'xtudo',
      category: 'burgers',
      image: '/images/burgers/x-tudo.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      price: 25,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        'Pão bola, bacon, salsicha, calabrasa, queijo, presunto, ovo, salada'
    }
  ]
}
export default data
