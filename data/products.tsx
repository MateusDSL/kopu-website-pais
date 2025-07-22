interface PriceTier {
    quantity: number
    price: number
    label: string
  }
  
  interface Product {
    id: number
    name: string
    image: string
    images?: string[]
    originalPrice: number
    salePrice: number
    priceTiers?: PriceTier[]
    discount?: number
    isNew?: boolean
    isBestSeller?: boolean
    description?: string
    features?: string[]
    specifications?: { [key: string]: string }
    colors?: { name?: string; hex: string; image?: string }[]
    materials?: string[]
    minQuantity?: number
    deliveryTime?: string
    rating?: number
    reviewCount?: number
    budgetUrl?: string;
  }
  
  interface ProductCarouselData {
    title: string
    products: Product[]
  }
  
 export const mainCarousel: ProductCarouselData = {
  title: "Canecas e Copos Personalizados",
  products: [
    {
      id: 1,
      name: "BOLSA TÉRMICA 9L",
      image: "/images/bolsa-9l.png",
      originalPrice: 35.9,
      salePrice: 25.9,
      discount: 28,
      images: ["/images/bolsa-termica-9-litros-1-6-azul.webp", "/images/bolsa-termica-9-litros-1-7-cinza.webp", "/images/bolsa-termica-9-litros-1-8-preto.webp", "/images/bolsa-termica-9-litros-1-9-vermelho.webp", "/images/bolsa-termica-9-litros-1-10-bege.webp"],
      priceTiers: [
        { quantity: 25, price: 72.83 , label: "25 unid." },
        { quantity: 50, price: 69.36, label: "50 unid." },
        { quantity: 100, price: 69.36, label: "100 unid." },
        { quantity: 500, price: 64.50, label: "500 unid." },
        { quantity: 500, price: 63.81, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar BOLSA TÉRMICA 9L",
      description: "Bolsa térmica de poliéster com três compartimentos e capacidade de 9 litros. A bolsa possui revestimento térmico em PEVA atóxico com costura soldada que não vaza, alça de mão, bolsos laterais telados e acompanha alça transversal.",
      features: [
         "Três compartimentos",
         "Revestimento térmico em PEVA atóxico",
         "Costura soldada (não vaza)",
         "Alça de mão e alça transversal",
         "Bolsos laterais telados",
         "Disponível em 5 cores"
      ],
      specifications: {
        Código: "04385",
        Material: "Poliéster e PEVA",
        Capacidade: "9 Litros",
      },
      colors: [
        { name: "verde", hex: "#01CC33", image: "/images/bolsa-termica-9-litros-1-10-bege.webp" },
        { name: "preto", hex: "#0A0708", image: "/images/bolsa-termica-9-litros-1-8-preto.webp"},
        { name: "azul", hex: "#0065CC", image: "/images/bolsa-termica-9-litros-1-6-azul.webp" },
        { name: "Cinza", hex: "#7D7F81", image: "/images/bolsa-termica-9-litros-1-7-cinza.webp" },
        { name: "vermelho", hex: "#FE0000", image: "/images/bolsa-termica-9-litros-1-9-vermelho.webp" },
      ],
      materials: ["Poliéster e PEVA"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.57,
      reviewCount: 312,
    },
    {
      id: 2,
      name: "BOLSA TÉRMICA 10L",
      image: "/images/bolsa-10l.png",
      originalPrice: 45.9,
      salePrice: 35.9,
      discount: 22,
      images: ["/images/bolsa-termica-10-litros-preto.webp", "/images/bolsa-termica-10-litros-cinza.webp", "/images/bolsa-termica-10-litros-azul.webp"],
      priceTiers: [
        { quantity: 25, price: 63.00, label: "25 unid." },
        { quantity: 50, price: 60.00, label: "50 unid." },
        { quantity: 100, price: 60.00, label: "100 unid." },
        { quantity: 500, price: 55.80, label: "500 unid." },
        { quantity: 1000, price: 55.20, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar BOLSA TÉRMICA 10L",
      description: "Bolsa térmica de nylon 10 litros com dois compartimentos e bolsos laterais em malha. Compartimento principal com revestimento térmico.",
      features: [
         "Dois compartimentos",
         "Bolsos laterais em malha",
         "Revestimento térmico interno",
         "Material em nylon resistente",
         "Disponível em 3 cores",
      ],
      specifications: {
        Ref:"04357",
        Material: "Nylon",
        Capacidade: "10 Litros",
      },
      colors: [
        { name: "azul",  hex: "#003688",  image: "/images/bolsa-termica-10-litros-azul.webp"},
        { name: "preto", hex: "#060807", image: "/images/bolsa-termica-10-litros-preto.webp"},
        { name: "cinza", hex: "#FFFFFF", image: "/images/bolsa-termica-10-litros-cinza.webp"},
      ],
      materials: ["Nylon"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.44,
      reviewCount: 587,
    },
      {
      id: 3,
      name: "NÉCESSAIRE DE POLIÉSTER",
      image: "/images/necessaire.png",
      originalPrice: 28.9,
      salePrice: 22.9,
      discount: 21,
      isBestSeller: true,
      images: ["/images/necessaire-de-poliester-azul.webp", "/images/necessaire-de-poliester-preto.webp", "/images/necessaire-de-poliester-cinza.webp"],
      priceTiers: [
        { quantity: 25, price: 47.63, label: "25 unid." },
        { quantity: 50, price: 45.36, label: "50 unid." },
        { quantity: 100, price: 45.36, label: "100 unid." },
        { quantity: 500, price: 42.18 , label: "500 unid." },
        { quantity: 1000, price: 41.73 , label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar NÉCESSAIRE DE POLIÉSTER",
      description: "Nécessaire confeccionada em poliéster, com detalhes em couro sintético. Possui três compartimentos com zíper. Na parte interna, contém 5 bolsos, sendo dois de tela, e alça para transporte.",
      features: [
        "Três compartimentos com zíper",
    "Cinco bolsos internos, sendo dois de tela",
    "Detalhes em couro sintético",
    "Alça para fácil transporte",
    "Design moderno e funcional"
      ],
      specifications: {
        Ref: "18753",
        Material: "Poliéster e Couro Sintético",
        Capacidade: "3 compartimentos externos, 5 bolsos internos",
      },
      colors: [
        { name: "azul",  hex: "#003688",  image: "/images/necessaire-de-poliester-azul.webp"},
        { name: "preto", hex: "#060807", image: "/images/necessaire-de-poliester-preto.webp"},
        { name: "cinza", hex: "#454548", image: "/images/necessaire-de-poliester-cinza.webp"},
      ],
      materials: ["Poliéster e Couro Sintético"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.51,
      reviewCount: 221,
    },    {
      id: 4,
      name: "MOCHILA DE NOTEBOOK",
      image: "/images/mochila-notebook.png",
      originalPrice: 28.9,
      salePrice: 22.9,
      discount: 21,
      images: ["/images/mochila-para-notebook-preto.webp", "/images/mochila-para-notebook-azul.webp"],
      priceTiers: [
        { quantity: 25, price: 125.79 , label: "25 unid." },
        { quantity: 50, price: 119.80, label: "50 unid." },
        { quantity: 100, price: 119.80, label: "100 unid." },
        { quantity: 500, price: 111.41, label: "500 unid." },
        { quantity: 1000, price: 110.22, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar MOCHILA DE NOTEBOOK",
      description: "Mochila para notebook confeccionada em algodão reciclado de 340 g/m². Possui compartimento principal para notebook e bolso lateral.",
      features: [
          "Material sustentável em algodão reciclado",
    "Compartimento principal para notebook",
    "Bolso lateral para garrafa ou outros objetos",
    "Disponível em 2 cores",
    "Design clássico e funcional"
      ],
      specifications: {
        REF: "MC301",
        Material: "Algodão reciclado",
        Capacidade: "340 g/m²",
      },
      colors: [
        { name: "azul",hex: "#0065CC", image: "/images/mochila-para-notebook-azul.webp" },
        { name: "preto", hex: "#0A0708", image: "/images/mochila-para-notebook-preto.webp" },
    
      ],
      materials: ["Algodão reciclado"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.38,
      reviewCount: 412,
    },    {
      id: 5,
      name: "MOCHILA DE NYLON 22L",
      image: "/images/mochila-nylon.png",
      originalPrice: 28.9,
      salePrice: 22.9,
      discount: 21,
      isBestSeller: true,
      images: ["/images/mochila-de-nylon-azul.webp", "/images/mochila-de-nylon-cinza.webp", "/images/mochila-de-nylon-preto.webp", "/images/mochila-de-nylon-vermelho.webp"],
      priceTiers: [
        { quantity: 25, price: 136.08, label: "25 unid." },
        { quantity: 50, price: 129.60, label: "50 unid." },
        { quantity: 100, price: 129.60, label: "100 unid." },
        { quantity: 500, price: 120.53, label: "500 unid." },
        { quantity: 1000, price: 119.23, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar MOCHILA DE NYLON 22L",
      description: "Mochila de nylon 22 Litros com detalhes em couro sintético e três compartimentos, sendo o principal com bolso para notebook 15,6. Mochila possui bolso lateral e suporte externo usb.",
      features: [
         "Capacidade de 22 Litros",
    "Três compartimentos",
    "Bolso interno para notebook de 15,6\"",
    "Suporte externo para carregador USB",
    "Bolso lateral",
    "Detalhes em couro sintético"
      ],
      specifications: {
        REF: "01350",
        Material: "Nylon e Couro Sintético",
        Capacidade: "22 Litros",
        Compatibilidade: "Notebook de 15,6 polegadas"
      },
      colors: [
        { name: "vermelho",hex: "#FE0000", image: "/images/mochila-de-nylon-vermelho.webp" },
        { name: "azul",hex: "#0065CC", image: "/images/mochila-de-nylon-azul.webp" },
        { name: "preto", hex: "#0A0708", image: "/images/mochila-de-nylon-preto.webp" },
        { name: "cinza", hex: "#7D7F81", image: "/images/mochila-de-nylon-cinza.webp" },
      ],
      materials: ["Nylon e Couro Sintético"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.49,
      reviewCount: 199,
    },

    {
      id: 12,
      name: "MALA ESPORTIVA",
      image: "/images/mala-esportiva.png",
      originalPrice: 35.9,
      salePrice: 28.9,
      discount: 19,
      isNew: true,
      images: ["/images/mala-esportiva-preta.webp", "/images/mala-esportiva-cinza.webp", "/images/mala-esportiva-3-4.webp"],
      priceTiers: [
        { quantity: 25, price: 123.69  , label: "25 unid." },
        { quantity: 50, price: 117.80  , label: "50 unid." },
        { quantity: 100, price: 117.80 , label: "100 unid." },
        { quantity: 500, price: 109.55 , label: "500 unid." },
        { quantity: 1000, price: 108.38 , label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar MALA ESPORTIVA",
      description: "Mala esportiva em tecido poliéster 600D (e 210D na parte inferior). Possui compartimento interno para roupas e um compartimento externo para roupa suja. A base da mala conta com 4 borrachas de apoio para evitar o contato direto com o chão. Possui zíper frontal, bolsos laterais e alças de mão e ombro.",
      features: [
      "Compartimento externo para roupa suja",
    "Base com 4 pés de borracha para proteção",
    "Múltiplos bolsos (frontal e laterais)",
    "Alça de mão e alça de ombro ajustável",
    "Tecido resistente de poliéster 600D"
      ],
      specifications: {
        REF: "ME530",
        Material: "Poliéster 600D e 210D",
      },
      colors: [
        { name: "Preto", hex: "#0A0708", image : "/images/mala-esportiva-preta.webp" },
        { name: "Cinza", hex: "#7F7F7F", image : "/images/mala-esportiva-cinza.webp" },
      ],
      materials: ["Poliéster 600D e 210D"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.48,
      reviewCount: 249,
    },
    {
        id: 13,
      name: "MALA ESPORTIVA 190T",
      image: "/images/mala-esportiva2.png",
      originalPrice: 35.9,
      salePrice: 28.9,
      discount: 19,
      images: ["/images/mala-esportiva-2-2.webp", "/images/mala-esportiva-2-3.webp", "/images/mala-esportiva-2-4.webp"],
      priceTiers: [
        { quantity: 25, price: 120.96 , label: "25 unid." },
        { quantity: 50, price: 115.20 , label: "50 unid." },
        { quantity: 100, price: 115.20 , label: "100 unid." },
        { quantity: 500, price: 107.14 , label: "500 unid." },
        { quantity: 1000, price: 105.98, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar MALA ESPORTIVA 190T",
      description: "Mala esportiva em poliéster 600D e 300D, com interior em tecido 190T. Possui um bolso frontal com zíper e um bolso lateral em rede. Conta com um espaçoso compartimento lateral com zíper para porta-tênis. A mala tem alça de mão e alça de ombro com regulagem para maior conforto.",
      features: [
      "Compartimento lateral exclusivo para tênis",
    "Bolso frontal com zíper",
    "Bolso lateral em rede para garrafa ou objetos",
    "Alça de ombro com regulagem",
    "Material resistente em poliéster 600D e 300D"
      ],
      specifications: {
        REF: "ME500",
         "Material Externo": "Poliéster 600D e 300D",
         "Material Interno": "Poliéster 190T"
      },
      colors: [
        { name: "Cinza", hex: "#8B8B8B", image : "/images/mala-esportiva-2-2.webp" },
      ],
      materials: ["Poliéster 600D e 300D, Poliéster 190T"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.36,
      reviewCount: 312,
    },     {
        id: 14,
      name: "PORTA TÊNIS",
      image: "/images/porta-tenis.png",
      originalPrice: 35.9,
      salePrice: 28.9,
      discount: 19,
      isBestSeller: true,
      images: ["/images/porta-tenis-preto.webp", "/images/porta-tenis-azul.webp", "/images/porta-tenis-cinza.webp"],
      priceTiers: [
        { quantity: 25, price: 61.70  , label: "25 unid." },
        { quantity: 50, price: 58.76  , label: "50 unid." },
        { quantity: 100, price: 58.76 , label: "100 unid." },
        { quantity: 500, price: 54.65 , label: "500 unid." },
        { quantity: 1000, price: 54.06, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar PORTA TÊNIS",
      description: "Porta Tênis em tecido poliéster resistente, ideal para transportar calçados de forma prática e higiênica. Possui bolso frontal com zíper, painel em malha para ventilação e alça de mão.",
      features: [
     "Bolso frontal com zíper",
    "Alça de mão para fácil transporte",
    "Painel superior em malha para ventilação",
    "Material em poliéster durável",
    "Disponível em 3 cores"
      ],
      specifications: {
        REF: "PT1050",
        Material: "Poliéster",
      },
      colors: [
        { name: "cinza", hex: "#7F7F7F", image : "/images/porta-tenis-cinza.webp", },
        { name: "azul", hex: "#3366CC", image : "/images/porta-tenis-azul.webp" },
        { name: "preto", hex: "#000000", image : "/images/porta-tenis-preto.webp" },
      ],
      materials: ["Poliéster"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.59,
      reviewCount: 221,
    },

    {
        id: 15,
      name: "BOLSA TÉRMICA 16 LITROS",
      image: "/images/bolsa-termica16.png",
      originalPrice: 35.9,
      salePrice: 28.9,
      discount: 19,
      images: ["/images/bolsa-termica-16-preto.webp", "/images/bolsa-termica-16-vermelho.webp", "/images/bolsa-termica-16-azul.webp"],
      priceTiers: [
        { quantity: 25, price: 75.35 , label: "25 unid." },
        { quantity: 50, price: 71.76 , label: "50 unid." },
        { quantity: 100, price: 71.76 , label: "100 unid." },
        { quantity: 500, price: 66.74 , label: "500 unid." },
        { quantity: 1000, price: 66.02, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar BOLSA TÉRMICA 16 LITROS",
      description: "Bolsa térmica de poliéster com capacidade de 16 litros. Possui bolso frontal e bolsos laterais de nylon. Acompanha uma placa interna removível com divisórias e fixação de velcro, permitindo uma melhor organização dos itens.",
      features: [
   "Capacidade de 16 Litros",
    "Placa interna removível com divisórias",
    "Divisórias com fixação em velcro",
    "Bolso frontal e bolsos laterais de nylon",
    "Alça de mão e de ombro",
    "Material principal em poliéster"
      ],
      specifications: {
        REF: "02388",
        Material: "Poliéster e Nylon",
        Capacidade: "16 Litros",
      },
      colors: [
        { name: "preto", hex: "#000000", image : "/images/bolsa-termica-16-preto.webp" },
        { name: "azul", hex: "#0065CC", image : "/images/bolsa-termica-16-azul.webp" },
        { name: "vermelho", hex: "#FE0000", image : "/images/bolsa-termica-16-vermelho.webp" },
      ],
      materials: ["Poliéster e Nylon"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.43,
      reviewCount: 412,
    },

    {
        id: 16,
      name: "BOLSA TÉRMICA 6L",
      image: "/images/termica-6l.png",
      originalPrice: 35.9,
      salePrice: 28.9,
      discount: 19,
      images: ["/images/bolsa-termica-6-cinza.webp", "/images/bolsa-termica-6-preto.webp"],
      priceTiers: [
        { quantity: 25, price: 68.04 , label: "25 unid." },
        { quantity: 50, price: 64.80  , label: "50 unid." },
        { quantity: 100, price: 64.80, label: "100 unid." },
        { quantity: 500, price: 60.26, label: "500 unid." },
        { quantity: 1000, price: 59.62, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar BOLSA TÉRMICA 6L",
      description: "Bolsa térmica de nylon com capacidade de 6 litros e dois compartimentos. Possui bolso telado e tela de proteção interna, faixa frontal refletiva para segurança, bolso lateral telado e alça de mão com fivela de encaixe.",
      features: [
    "Capacidade de 6 Litros",
    "Dois compartimentos e bolsos telados",
    "Faixa frontal refletiva para segurança",
    "Tela de proteção interna",
    "Alça de mão com fivela de encaixe",
    "Material em Nylon"
      ],
      specifications: {
        REF: "04465",
        Material: "Nylon",
        Capaciodade: "6 Litros",
      },
      colors: [
        { name: "preto", hex: "#000000", image : "/images/bolsa-termica-6-preto.webp" },
        { name: "cinza", hex: "#7D7F81", image : "/images/bolsa-termica-6-cinza.webp" },
      ],
      materials: ["Nylon"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.59,
      reviewCount: 221,
    },

  ]
};


export const moreOptionsCarousel: ProductCarouselData = {
  title: "Mais Opções de Copos",
  products: [
    {
      id: 6,
      name: "CANECA INOX 180ML",
      image: "/images/inox-18.png",
      originalPrice: 32.9,
      salePrice: 24.9,
      discount: 24,
      images: ["/images/caneca-inox-cinza.webp", "/images/caneca-inox-180ml-6.webp"],
      priceTiers: [
        { quantity: 25, price: 17.14 , label: "25 unid." },
        { quantity: 50, price: 16.32 , label: "25 unid." },
        { quantity: 100, price: 16.32, label: "100 unid." },
        { quantity: 500, price: 15.18, label: "500 unid." },
        { quantity: 1000, price: 15.01, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar CANECA INOX 180ML",
      colors: [
        { name: "Cinza", hex: "#7d7f81", image: "/images/caneca-inox-cinza.webp" },
      ],
      description: "Caneca de inox 180ml com cabo e tampa em plástico resistente. Atenção: o produto não é térmico.",
      features: [
        "Capacidade de 180ml",
    "Material em aço inoxidável",
    "Cabo e tampa em plástico resistente",
    "Acompanha tampa protetora",
    "Não possui propriedade térmica"
      ],
      specifications: {
        REF: "07392",
        Material: "Aço Inox e Plástico",
        Capacidade: "180ml",
        Térmica: "Não",
      },
      materials: ["Aço Inox e Plástico"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.53,
      reviewCount: 142,
    },    {
      id: 7,
      name: "CANECA TÉRMICA 1,2L",
      image: "/images/caneca-12.png",
      originalPrice: 55.9,
      salePrice: 45.9,
      discount: 18,
      isBestSeller: true,
      images: ["/images/caneca-termica-12l-preto.webp", "/images/caneca-termica-12l-ciano.webp", "/images/caneca-termica-12l-dourado.webp", "/images/caneca-termica-12l-vermelho.webp", "/images/caneca-termica-12l-azul.webp", "/images/caneca-termica-12l-aco2.webp", "/images/caneca-termica-12l-aco.webp", "/images/caneca-termica-12l-verde.webp", "/images/caneca-termica-12l-rosa.webp", "/images/caneca-termica-12l-branco.webp", "/images/caneca-termica-12l-pink.webp", "/images/caneca-termica-12l-roxo.webp", "/images/caneca-termica-12l-laranja.webp" ],
      priceTiers: [
        { quantity: 25, price: 36.54, label: "25 unid." },
        { quantity: 50, price: 36.54, label: "50 unid." },
        { quantity: 100, price: 36.54, label: "100unid." },
        { quantity: 500, price: 32.36, label: "500 unid." },
        { quantity: 1000, price: 29.9, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar CANECA TÉRMICA 1,2L",
      colors: [
        { name: "Preto", hex: "#000000", image: "/images/caneca-termica-12l-preto.webp"},
        { name: "ciano", hex: "#00D8E5", image: "/images/caneca-termica-12l-ciano.webp"},
        { name: "vermelho", hex: "#FE0000", image: "/images/caneca-termica-12l-vermelho.webp"},
        { name: "azul", hex: "#0065CC", image: "/images/caneca-termica-12l-azul.webp"},
        { name: "aço2", hex: "#666666", image: "/images/caneca-termica-12l-aco2.webp"},
        { name: "aço", hex: "#DCDEDF", image: "/images/caneca-termica-12l-aco.webp"},
        { name: "verde", hex: "#01CC33", image: "/images/caneca-termica-12l-verde.webp"},
        { name: "rosa", hex: "#DC0257", image: "/images/caneca-termica-12l-rosa.webp"},
        { name: "branco", hex: "#FFFFFF", image: "/images/caneca-termica-12l-branco.webp"},
        { name: "pink", hex: "#FF33FE", image: "/images/caneca-termica-12l-pink.webp" },
        { name: "marrom", hex: "#4C3624", image: "/images/caneca-termica-12l-dourado.webp"},
        { name: "roxo", hex: "#9900CC", image: "/images/caneca-termica-12l-roxo.webp"},
        { name: "laranja", hex: "#FC7F03", image: "/images/caneca-termica-12l-laranja.webp"},
      ],
      description: "Caneca térmica com capacidade de 1,2 litros feita em inox 304 com parede dupla, contém tampa acrílica rosqueável com acesso para canudo e pegador plástico. Acompanha canudo plástico.",
      features: [
       "Capacidade de 1,2 Litros",
       "Isolamento térmico com parede dupla",
       "Tampa rosqueável com acesso para canudo",
       "Acompanha canudo de plástico",
       "Feita em aço inoxidável 304"
      ],
      specifications: {
        REF: "06033",
        Material: "Aço Inox 304, Acrílico e Plástico",
        Capacidade: "1,2 Litros",
        Isolamento: "Parede dupla",
      },
      materials: ["Aço Inox 304, Acrílico e Plástico"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.47,
      reviewCount: 345,
    },
    {
      id: 8,
      name: "CANECA PLÁSTICA",
      image: "/images/plastica.png",
      originalPrice: 89.9,
      salePrice: 69.9,
      colors: [
        { name: "vermelho", hex: "#FE0001", image: "/images/caneca-plastica-de-400ml-vermelho.webp" },
        { name: "verde", hex: "#339933", image: "/images/caneca-plastica-de-400ml-verde.webp" },
        { name: "azul", hex: "#3366CC", image: "/images/caneca-plastica-de-400ml-azul.webp" },
        { name: "branco", hex: "#FFFFFF", image: "/images/caneca-plastica-de-400ml-branco.webp"},
        { name: "preto", hex: "#000000", image: "/images/caneca-plastica-de-400ml-preto.webp"},
      ],
      isNew: true,
      images: ["/images/caneca-plastica-de-400ml-vermelho.webp", "/images/caneca-plastica-de-400ml-azul.webp", "/images/caneca-plastica-de-400ml-verde.webp", "/images/caneca-plastica-de-400ml-branco.webp", "/images/caneca-plastica-de-400ml-preto.webp"],
      priceTiers: [
        { quantity: 25, price: 36.54, label: "25 unid." },
        { quantity: 50, price: 34.80, label: "50 unid." },
        { quantity: 100, price: 34.80, label: "100 unid." },
        { quantity: 500, price: 32.36, label: "500 unid." },
        { quantity: 1000, price: 32.02, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar CANECA PLÁSTICA DE 400ML",
      description: "Caneca plástica com área interna em inox, com capacidade de 400ml. A caneca possui tampa de fechamento através de um encaixe feito por um anel de silicone. Plástico utilizado PP (Polipropileno).",
      features: [
        "Capacidade de 400ml",
    "Interior em aço inox para maior higiene",
    "Exterior em plástico Polipropileno (PP)",
    "Tampa com vedação em silicone",
    "Propriedade semi-térmica (inox interno)"
      ],
      specifications: {
        REF: "CA0150",
        Material: "Plástico PP e Aço Inox",
        Capacidade: "400ml",
        Vedação: "Anel de silicone",
      },
      materials: ["Plástico PP e Aço Inox"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.41,
      reviewCount: 223,
    },

    {
      id: 9,
      name: "COOLER 8 LATAS BEER",
      image: "/images/cooler-8-latas-beer-personalizado-2.webp",
      originalPrice: 89.9,
      salePrice: 69.9,
      colors: [
        { name: "Branco", hex: "#FFFFFF", image: "/images/cooler-8-latas-beer-personalizado-5.webp" },
      ],
      isNew: true,
      images: ["/images/cooler-8-latas-beer-personalizado.webp", "/images/cooler-8-latas-beer-personalizado-4.webp", "/images/cooler-8-latas-beer-personalizado-3.webp", "/images/cooler-8-latas-beer-personalizado-2.webp"],
      priceTiers: [
        { quantity: 25, price: 63.00 , label: "25 unid." },
        { quantity: 50, price: 60.00 , label: "50 unid." },
        { quantity: 100, price: 60.00 , label: "100 unid." },
        { quantity: 500, price: 55.80, label: "500 unid." },
        { quantity: 1000, price: 55.80, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar COOLER 8 LATAS BEER",
      description: "Cooler com capacidade para 8 latas e design temático de cerveja. Fabricado em polipropileno (PP) com isolamento térmico interno em EPS, garantindo a temperatura de suas bebidas.",
      features: [
       "Capacidade para 8 latas",
    "Isolamento térmico em EPS",
    "Material externo em Polipropileno (PP)",
    "Design temático de cerveja",
    "Alça para transporte"
      ],
      specifications: {
        REF: "CA0150",
        Material: "Polipropileno (PP) e EPS",
        Capacidade: "8 latas",
        Vedação: "200mm x 199mm x 287mm",
      },
      materials: ["Polipropileno (PP) e EPS"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.60,
      reviewCount: 232,
    },

    {
      id: 10,
      name: "COPO TÉRMICO INOX",
        image: "/images/termico-320.png",
        originalPrice: 28.9,
        salePrice: 22.9,
        discount: 21,
        images: ["/images/copo-termico-inox-320ml-1-9.webp", "/images/copo-termico-inox-320ml-1-6.webp", "/images/copo-termico-inox-320ml-1-7.webp", "/images/copo-termico-inox-320ml-1-8.webp", "/images/copo-termico-inox-320ml-1-10.webp", "/images/copo-termico-inox-320ml-1-11.webp"],
        priceTiers: [
          { quantity: 25, price: 45.36, label: "25 unid." },
          { quantity: 50, price: 43.20, label: "50 unid." },
          { quantity: 100, price: 43.20, label: "100 unid." },
          { quantity: 500, price: 40.18 , label: "500 unid." },
        ],
        budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar COPO TÉRMICO INOX 320ML",
        description: "Diga adeus ao café frio na sua mesa! Este copo térmico de 320ml tem o tamanho perfeito para sua dose diária de energia, mantendo sua bebida quente por muito mais tempo.",
        features: [
          "Isolamento Térmico",
          "Capacidade Ideal",
          "Tampa Segura",
          "Consumo Prático",
        ],
        specifications: {
          Material: "Aço Inoxidável",
          Capacidade: "320ml",
        },
        colors: [
          { name: "rosa", hex: "#FF33FE", image: "/images/copo-termico-inox-320ml-1-10.webp" },
          { name: "vermelho",hex: "#FE0000", image: "/images/copo-termico-inox-320ml-1-11.webp" },
          { name: "branco",hex: "#FFFFFF", image: "/images/copo-termico-inox-320ml-1-7.webp" },
          { name: "azul",hex: "#0065CC", image: "/images/copo-termico-inox-320ml-1-6.webp" },
          { name: "preto", hex: "#0A0708", image: "/images/copo-termico-inox-320ml-1-9.webp" },
          { name: "aço", hex: "#bdb7b2", image: "/images/copo-termico-inox-320ml-1-8.webp" },
        ],
        materials: ["Aço Inoxidável"],
        minQuantity: 25,
        deliveryTime: "Expressa",
        rating: 4.55,
        reviewCount: 142,
    },

    {
      id: 11,
      name: "COPO TÉRMICO 500ML",
        image: "/images/termico-500.png",
        originalPrice: 32.9,
        salePrice: 24.9,
        discount: 24,
        images: ["/images/copo-termico-500ml-com-abridor-1-5.webp", "/images/copo-termico-500ml-com-abridor-1-6.webp", "/images/copo-termico-500ml-com-abridor-1-7.webp" ],
        priceTiers: [
          { quantity: 25, price: 45.11 , label: "25 unid." },
          { quantity: 100, price: 42.96 , label: "100 unid." },
          { quantity: 500, price: 39.95 , label: "500 unid." },
        ],
        budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar COPO TÉRMICO 500ML",
        colors: [
          { name: "Preto", hex: "#000000", image: "/images/copo-termico-500ml-com-abridor-1-5.webp" },
        ],
        description: "Apresentamos o copo térmico que vai se tornar o item indispensável no seu happy hour e em todos os momentos de celebração. Com capacidade de 500ml, ele é perfeito para sua cerveja, refrigerante ou suco, mantendo a bebida na temperatura ideal do início ao fim.",
        features: [
          "Capacidade",
          "Material de Qualidade",
          "Acabamento Premium",
          "Tampa Inteligente com Abridor embutido",
        ],
        specifications: {
          Material: "Aço Inoxidável",
          Capacidade: "500ml",
        },
        materials: ["Aço Inoxidável"],
        minQuantity: 25,
        deliveryTime: "Expressa",
        rating: 4.48,
        reviewCount: 249,
      },    
  ],
};


export const techCarousel: ProductCarouselData = {
  title: "Brindes Tecnológicos",
  products: [    {
      id: 17,
      name: "KIT CHURRASCO COM COPOS",
      image: "/images/kit-churrasco-com-copos-5-pcs-2.webp",
      originalPrice: 35.9,
      salePrice: 28.9,
      discount: 19,
      isBestSeller: true,
      images: ["/images/kit-churrasco-com-copos-5-pcs-2.webp"],
      priceTiers: [
        { quantity: 25, price: 215.17 , label: "25 unid." },
        { quantity: 50, price: 204.92 , label: "50 unid." },
        { quantity: 100, price: 204.92 , label: "100 unid." },
        { quantity: 500, price: 190.58 , label: "500 unid." },
        { quantity: 1000, price: 188.53 , label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar KIT CHURRASCO COM COPOS",
      description: "Kit para churrasco em caixa para presente. Conta com tábua em bambu, duas taças em vidro para cerveja, faca de 7 polegadas e garfo trinchante com cabos em madeira e lâminas em inox.",
      features: [
        "Tábua de corte em bambu",
    "Duas taças de vidro para cerveja",
    "Faca de 7\" com cabo de madeira/lâmina inox",
    "Garfo trinchante com cabo de madeira/lâmina inox",
    "Apresentação em caixa para presente"
      ],
      specifications: {
        REF: "KT-9044W",
        Material: "Bambu, Vidro, Madeira e Aço Inox",
        Capacidade: "1 Tábua, 2 Taças, 1 Faca 7\", 1 Garfo",
      },
      colors: [
        { name: "Preto", hex: "#0A0708", image : "/images/kit-churrasco-com-copos-5-pcs-2.webp" },
      ],
      materials: ["Bambu, Vidro, Madeira e Aço Inox"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.48,
      reviewCount: 249,
    },
    {
        id: 18,
      name: "KIT PARA CAIPIRINHA EM BAMBU",
      image: "/images/caipirinha.png",
      originalPrice: 35.9,
      salePrice: 28.9,
      discount: 19,
      images: ["/images/kit-para-caipirinha-em-bambu-ibiza-035-l-4-pcs-4.webp", "/images/kit-para-caipirinha-em-bambu-ibiza-035-l-4-pcs-3.webp", "/images/kit-para-caipirinha-em-bambu-ibiza-035-l-4-pcs-2.webp"],
      priceTiers: [
        { quantity: 25, price: 90.32, label: "25 unid." },
        { quantity: 50, price: 86.02, label: "50 unid." },
        { quantity: 100, price: 86.02 , label: "100 unid." },
        { quantity: 500, price: 80.00 , label: "500 unid." },
        { quantity: 1000, price: 79.14, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar KIT PARA CAIPIRINHA EM BAMBU",
      description: "Kit para Caipirinha apresentado em caixa para presente. O conjunto conta com tábua e socador em Bambu, faca para frutas de 4 polegadas em Madeira/Inox e um copo de vidro com capacidade de 350ml.",
      features: [
      "Tábua de corte em Bambu",
    "Socador (muddler) em Bambu",
    "Faca de 4\" para frutas (Madeira/Inox)",
    "Copo de vidro de 350ml",
    "Vem em uma caixa para presente"
      ],
      specifications: {
        REF: "KC-00253",
        Material: "Bambu, Madeira, Aço Inox e Vidro",
        Capacidade: "1 Tábua, 1 Socador, 1 Faca 4\", 1 Copo 350ml"
      },
      colors: [
        { name: "Madeira", hex: "#F2BA8F", image : "/images/kit-churrasco-com-copos-5-pcs-2.webp" },
      ],
      materials: ["Bambu, Vidro, Madeira e Aço Inox"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.36,
      reviewCount: 312,
    },     {
        id: 19,
      name: "AVENTAL EM ALGODÃO E POLIÉSTER",
      image: "/images/avental.png",
      originalPrice: 35.9,
      salePrice: 28.9,
      discount: 19,
      isNew: true,
      images: ["/images/avental-em-algodao-e-poliester-150-preto.webp", "/images/avental-em-algodao-e-poliester-azul.webp", "/images/avental-em-algodao-e-poliester-branco.webp"],
      priceTiers: [
        { quantity: 25, price: 42.90, label: "25 unid." },
        { quantity: 50, price: 40.86, label: "50 unid." },
        { quantity: 100, price: 39.66 , label: "100 unid." },
        { quantity: 500, price: 36.01 , label: "500 unid." },
        { quantity: 1000, price: 34.98, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar AVENTAL EM ALGODÃO E POLIÉSTER",
      description: "Avental feito em mistura de algodão e poliéster (150 g/m²) com 2 bolsos frontais práticos. A alça é ajustável com fivela para melhor caimento.",
      features: [
     "Dois bolsos frontais",
    "Alça ajustável com fivela",
    "Composição de algodão e poliéster",
    "Leve e resistente (150 g/m²)",
    "Disponível em 3 cores"
      ],
      specifications: {
        REF: "99830",
        Material: "Algodão e Poliéster",
        Capacidade: "150 g/m²",
        "Dimensões Avental": "650 x 850 mm",
        "Dimensões Bolso": "170 x 180 mm",
      },
      colors: [
        { name: "branco", hex: "#FFFFFF", image : "/images/avental-em-algodao-e-poliester-branco.webp", },
        { name: "azul", hex: "#1F3C75", image : "/images/avental-em-algodao-e-poliester-azul.webp" },
        { name: "preto", hex: "#000000", image : "/images/avental-em-algodao-e-poliester-150-preto.webp" },
      ],
      materials: ["Algodão e Poliéster"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.59,
      reviewCount: 221,
    },

    {
        id: 20,
      name: "KIT MASCULINO 12 PEÇAS",
      image: "/images/kit-masculino-12-pecas-4.webp",
      originalPrice: 35.9,
      salePrice: 28.9,
      discount: 19,
      images: ["/images/kit-masculino-12-pecas-4.webp", "/images/kit-masculino-12-pecas-5.webp", "/images/kit-masculino-12-pecas-6.webp"],
      priceTiers: [
        { quantity: 25, price: 75.60 , label: "25 unid." },
        { quantity: 50, price: 72.00 , label: "50 unid." },
        { quantity: 100, price: 72.00 , label: "100 unid." },
        { quantity: 500, price: 66.96 , label: "500 unid." },
        { quantity: 1000, price: 66.24, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar KIT MASCULINO 12 PEÇAS",
      description: "Kit masculino com 12 peças em um prático estojo de couro sintético. A parte interna é revestida com plástico e elásticos para fixação dos itens. O kit inclui: removedor de pelos, abridor saca rolha, tesoura, aparelho de barbear, 3 lâminas para barba, escova de dente, pente, cortador de cutícula, mini kit unha 3 em 1 (empurrador, lixa e limpador), cortador de unha, pinça e espelho duplo com aumento.",
      features: [
    "Estojo completo com 12 peças",
    "Kit para barbear (aparelho e lâminas)",
    "Kit de manicure (cortadores, lixa, etc.)",
    "Itens de higiene (escova, pente)",
    "Acessórios úteis (tesoura, pinça, espelho, saca-rolha)",
    "Estojo em couro sintético para transporte"
      ],
      specifications: {
        REF: "10124",
        Material: "Couro Sintético, Plástico e Aço Inox",
        "Número de peças": "12",
      },
      colors: [
        { name: "preto", hex: "#000000", image : "/images/kit-masculino-12-pecas-4.webp" },
      ],
      materials: ["Couro Sintético, Plástico e Aço Inox"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.43,
      reviewCount: 412,
    },

    {
        id: 21,
      name: "CONJUNTO DE FERRAMENTAS 16 PEÇAS",
      image: "/images/16pc.png",
      originalPrice: 35.9,
      salePrice: 28.9,
      discount: 19,
      images: ["/images/conjunto-de-ferramentas-multi-chaves-16-pcs.webp", "/images/conjunto-de-ferramentas-multi-chaves-16-pcs-2.webp", "/images/conjunto-de-ferramentas-multi-chaves-16-pcs-3.webp"],
      priceTiers: [
        { quantity: 25, price: 91.27, label: "25 unid." },
        { quantity: 50, price: 86.92 , label: "50 unid." },
        { quantity: 100, price: 86.92, label: "100 unid." },
        { quantity: 500, price: 80.84, label: "500 unid." },
        { quantity: 1000, price: 79.97, label: "1000 unid." },
      ],
      budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, vim da pagina do dia dos pais e queria orçar CONJUNTO DE FERRAMENTAS 16 PEÇAS",
      description: "Conjunto de ferramentas com 16 peças em um prático estojo de nylon com zíper. O kit conta com alicate de bico; chave com dez peças de ponteiras (quatro phillips, duas fendas, três torx e adaptador) mais extensor; duas chaves de precisão (uma phillips e uma fenda); e um estilete de 1,85 polegadas.",
      features: [
    "Kit completo com 16 peças",
    "Alicate de bico",
    "Chave com 10 ponteiras e extensor",
    "Duas chaves de precisão",
    "Estilete de 1,85\"",
    "Estojo de nylon com fechamento em zíper"
      ],
      specifications: {
        REF: "FE-00951",
        Material: "Aço, Plástico e Nylon",
        "Número de peças": "16",
      },
      colors: [
        { name: "preto", hex: "#000000", image : "/images/kit-masculino-12-pecas-4.webp" },
      ],
      materials: ["Couro Sintético, Plástico e Aço Inox"],
      minQuantity: 25,
      deliveryTime: "Expressa",
      rating: 4.59,
      reviewCount: 221,
    },

    
  ],
};

