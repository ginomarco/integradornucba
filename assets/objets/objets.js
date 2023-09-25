const shoes = [
    {
      id: 1,
      nombre: "Nike Air Max Plus III",
      category: "men",
      precio: 179.99,
      img: "/assets/objets/zapas objet/hombres/Nike_Air_Max_Plus_III.png",
    },
    {
      id: 2,
      nombre: "Nike Air Max Plus",
      category: "men",
      precio: 189.99,
      img: "/assets/objets/zapas objet/hombres/Nike-Air-Max-Plus.png",
    },
    {
      id: 3,
      nombre: "Nike Air VaporMax Plus",
      category: "men",
      precio: 214.99,
      img: "/assets/objets/zapas objet/hombres/Nike Air VaporMax Plus.png",
    },
    {
      id: 4,
      nombre: "Nike Court Royale 2 Next Nature",
      category: "men",
      precio: 48.99,
      img: "./assets/objets/zapas objet/hombres/Nike-Court-Royale-2-Next-Nature.png",
    },
    {
      id: 5,
      nombre: "Nike Air Force 1 '07",
      category: "men",
      precio: 119.99,
      img: "/assets/objets/zapas objet/hombres/Nike-Air-Force-1-_07.png",
    },
    {
      id: 6,
      nombre: "Giannis Immortality 2",
      category: "men",
      precio: 84.99,
      img: "/assets/objets/zapas objet/hombres/Giannis-Immortality-2.png",
    },
  
    // FIN Hombres  Zapatillas
  
    // MUJERES  Zapatillas
    {
      id: 7,
      nombre: "Nike Air Max Plus",
      category: "woman",
      precio: 179.99,
      img: "/assets/objets/zapas objet/mujeres/Nike Air Max Plus.png",
    },
    {
      id: 8,
      nombre: "Nike Dunk High 1985",
      category: "woman",
      precio: 139.99,
      img: "/assets/objets/zapas objet/mujeres/Nike-Dunk-High-1985.png",
    },
    {
      id: 9,
      nombre: "Nike Air Max 90 SE",
      category: "woman",
      precio: 179.99,
      img: "/assets/objets/zapas objet/mujeres/Nike_Air_Max_90_SE.png",
    },
    {
      id: 10,
      nombre: "Air Jordan 1 Low FlyEase",
      category: "woman",
      precio: 149.99,
      img: "/assets/objets/zapas objet/mujeres/Air_Jordan_1_Low_FlyEase.png",
    },
    {
      id: 11,
      nombre: "Nike Air Force 1 Mid '07",
      category: "woman",
      precio: 139.99,
      img: "/assets/objets/zapas objet/mujeres/Nike_Air_Force_1_Mid__07.png",
    },
    {
      id: 12,
      nombre: "Nike Air Max Alpha Trainer 4",
      category: "woman",
      precio: 79.99,
      img: "/assets/objets/zapas objet/mujeres/Nike-Air-Max-Alpha-Trainer-4.png",
    },
    // Niños  Zapatillas
    {
      id: 13,
      nombre: "Nike Air Force 1 Mid LE",
      category: "kids",
      precio: 109.99,
      img: "/assets/objets/zapas objet/niños/Nike_Air_Force_1_Mid_LE.png",
    },
    {
      id: 14,
      nombre: "Nike Blazer Mid '77",
      category: "kids",
      precio: 84.99,
      img: "/assets/objets/zapas objet/niños/Nike_Blazer_Mid__77.png",
    },
    {
      id: 15,
      nombre: "Nike Jr. Streetgato",
      category: "kids",
      precio: 47.97,
      img: "/assets/objets/zapas objet/niños/Nike_Jr._Streetgato.png",
    },
    {
      id: 16,
      nombre: "Nike Revolution 6",
      category: "kids",
      precio: 35.97,
      img: "/assets/objets/zapas objet/niños/Nike_Revolution_6.png",
    },
    {
      id: 17,
      nombre: "Jordan Flight Origin 4",
      category: "kids",
      precio: 64.99,
      img: "/assets/objets/zapas objet/niños/Jordan_Flight_Origin_4.png",
    },
    //OUTLET ZAPATILLAS
    {
      id: 18,
      nombre: "Nike Air Max Plus FFF",
      category: "outlet",
      precio: 189.99,
      img: "/assets/objets/zapas objet/Outlet/Nike_Air_Max_Plus_FFF.png",
    },
    {
      id: 19,
      nombre: "Nike Air Tuned Max",
      category: "outlet",
      precio: 110.47,
      img: "/assets/objets/zapas objet/Outlet/Nike Air Tuned Max.png",
    },
    {
      id: 20,
      nombre: "Nike Metcon 8",
      category: "outlet",
      precio: 129.99,
      img: "/assets/objets/zapas objet/Outlet/Nike_Metcon_8.png",
    },
    {
      id: 21,
      nombre: "Jordan Series",
      category: "outlet",
      precio: 64.99,
      img: "/assets/objets/zapas objet/Outlet/Jordan_Series.png",
    },
  ];
  // para hacer la paginación de "ver mas"
  const splitProducts = (size) => {
    let dividedProducts = [];
    for (let i = 0; i < shoes.length; i += size)
      dividedProducts.push(shoes.slice(i, i + size));
    return dividedProducts;
  };
  
  const productsController = {
    dividedProducts: splitProducts(7),
    nextProductsIndex: 1,
    productsLimit: splitProducts(6).length,
  };