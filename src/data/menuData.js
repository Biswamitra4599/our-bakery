export const menuData = {
  categories: [
    "All",
    "Baked Cheese Cakes",
    "Desserts",
    "Pastry Slices",
    "Dessert Cakes",
    "Exotic Cakes",
    "Indian Cakes",
    "Special Cakes",
    "Cake Flavours"
  ],
  menuItems: [
    // ==================== BAKED CHEESE CAKE FLAVOURS ====================
    {
      id: "1",
      name: "Blueberry Baked Cheese Cake",
      price: 550,
      description: "Creamy New York-style baked cheesecake topped with a luscious homemade blueberry compote and a buttery biscuit base.",
      category: "Baked Cheese Cakes",
      tags: ["Best Seller", "Chef Special"],
      image: "/images/cheese-cakes/blueberry.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "2",
      name: "Biscoff Baked Cheese Cake",
      price: 600,
      description: "Velvety baked cheesecake infused with Lotus Biscoff spread, crowned with caramelized biscuit crumbs and a smooth Biscoff drizzle.",
      category: "Baked Cheese Cakes",
      tags: ["Signature Gold", "Best Seller"],
      image: "/images/cheese-cakes/biscoff.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "3",
      name: "Raspberry Baked Cheese Cake",
      price: 575,
      description: "Rich baked cheesecake swirled with tart raspberry coulis on a crisp graham cracker crust, garnished with fresh raspberries.",
      category: "Baked Cheese Cakes",
      tags: ["Fruit Forward"],
      image: "/images/cheese-cakes/raspberry.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "4",
      name: "Hazelnut Nutella Baked Cheese Cake",
      price: 650,
      description: "Indulgent baked cheesecake loaded with creamy Nutella and roasted hazelnuts, finished with a glossy chocolate-hazelnut topping.",
      category: "Baked Cheese Cakes",
      tags: ["Chef Special", "Premium"],
      image: "/images/cheese-cakes/hazelnut-nutella.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },
    {
      id: "5",
      name: "Brownie Baked Cheese Cake",
      price: 625,
      description: "Decadent fudgy brownie base topped with smooth vanilla baked cheesecake and finished with a dark chocolate ganache drip.",
      category: "Baked Cheese Cakes",
      tags: ["Best Seller"],
      image: "/images/cheese-cakes/brownie.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },

    // ==================== DESSERTS ====================
    {
      id: "6",
      name: "Classic Panacotta",
      price: 220,
      description: "Silky Italian set cream dessert delicately flavored with Madagascar vanilla, served with a vibrant berry coulis topping.",
      category: "Desserts",
      tags: ["Gluten Free", "Light"],
      image: "/images/desserts/panacotta.jpg",
      rating: 4.6,
      allergens: ["Dairy"]
    },
    {
      id: "7",
      name: "Classic Tiramisu",
      price: 320,
      description: "Authentic Italian dessert with espresso-soaked ladyfingers layered between clouds of mascarpone cream, dusted with cocoa.",
      category: "Desserts",
      tags: ["Signature", "Best Seller"],
      image: "/images/desserts/tiramisu.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "8",
      name: "Mango Tiramisu",
      price: 350,
      description: "Tropical twist on the classic - juicy Alphonso mango layered with mascarpone cream and vanilla-soaked sponge fingers.",
      category: "Desserts",
      tags: ["Seasonal", "New"],
      image: "/images/desserts/mango-tiramisu.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "9",
      name: "Fresh Fruit Pudding in Glass",
      price: 280,
      description: "Light vanilla custard pudding layered with seasonal fresh fruits and a hint of citrus zest, served in an elegant glass.",
      category: "Desserts",
      tags: ["Fresh", "Light"],
      image: "/images/desserts/fresh-fruit-pudding.jpg",
      rating: 4.5,
      allergens: ["Dairy", "Eggs"]
    },
    {
      id: "10",
      name: "Classic Tres Leches",
      price: 340,
      description: "Traditional Latin American sponge cake soaked in three types of milk, topped with whipped cream and a dusting of cinnamon.",
      category: "Desserts",
      tags: ["Signature"],
      image: "/images/desserts/tres-leches.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "11",
      name: "Rose Gulkand Tres Leches",
      price: 380,
      description: "Indian-fusion tres leches infused with aromatic rose gulkand and cardamom milk, garnished with pistachios and rose petals.",
      category: "Desserts",
      tags: ["Chef Special", "Indian Fusion"],
      image: "/images/desserts/rose-gulkand-tres-leches.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },
    {
      id: "12",
      name: "Blueberry Yoghurt Mousse in Jar",
      price: 290,
      description: "Airy Greek yogurt mousse swirled with fresh blueberry compote, layered on a crunchy granola base in a charming mason jar.",
      category: "Desserts",
      tags: ["Healthy", "Light"],
      image: "/images/desserts/blueberry-yoghurt-mousse.jpg",
      rating: 4.6,
      allergens: ["Gluten", "Dairy"]
    },

    // ==================== PASTRY (CAKE SLICE) ====================
    {
      id: "13",
      name: "Butterscotch Slice",
      price: 180,
      description: "Buttery vanilla sponge layered with caramelized butterscotch cream and crunchy praline bits, topped with golden shards.",
      category: "Pastry Slices",
      tags: ["Best Seller"],
      image: "/images/pastry/butterscotch.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },
    {
      id: "14",
      name: "Chocolate Truffle Slice",
      price: 200,
      description: "Rich Belgian chocolate sponge layered with silky dark chocolate truffle ganache and finished with a glossy chocolate glaze.",
      category: "Pastry Slices",
      tags: ["Signature", "Best Seller"],
      image: "/images/pastry/chocolate-truffle.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "15",
      name: "Black Forest Slice",
      price: 190,
      description: "Classic German chocolate sponge layered with whipped cream and morello cherries, finished with chocolate shavings.",
      category: "Pastry Slices",
      tags: ["Classic"],
      image: "/images/pastry/black-forest.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "16",
      name: "Red Velvet Slice",
      price: 210,
      description: "Velvety crimson cocoa sponge layered with tangy cream cheese frosting, finished with red velvet crumb garnish.",
      category: "Pastry Slices",
      tags: ["Best Seller"],
      image: "/images/pastry/red-velvet.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "17",
      name: "Bouch Truffle Slice",
      price: 220,
      description: "Decadent dark chocolate mousse cake with multiple layers of truffle ganache and a crisp chocolate biscuit base.",
      category: "Pastry Slices",
      tags: ["Premium", "Chef Special"],
      image: "/images/pastry/bouch-truffle.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },

    // ==================== DESSERTS (CAKE) ====================
    {
      id: "18",
      name: "Tiramisu Cake",
      price: 850,
      description: "Whole cake version of the Italian classic with espresso-soaked sponge, mascarpone cream layers, and rich cocoa dusting.",
      category: "Dessert Cakes",
      tags: ["Signature"],
      image: "/images/desserts_cake/tiramisu.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "19",
      name: "Passion Slice Cake",
      price: 950,
      description: "Tropical passion fruit mousse cake with a tangy curd center, vanilla sponge layers, and a mirror glaze finish.",
      category: "Dessert Cakes",
      tags: ["Exotic", "New"],
      image: "/images/desserts_cake/passion-slice.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "20",
      name: "Classic Cheese Cake",
      price: 800,
      description: "Creamy New York-style cheesecake with a buttery graham cracker crust and a smooth, tangy cream cheese filling.",
      category: "Dessert Cakes",
      tags: ["Best Seller"],
      image: "/images/desserts_cake/classic-cheese-cake.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "21",
      name: "Biscoff Cheese Cake",
      price: 950,
      description: "Luscious cheesecake infused with Lotus Biscoff cookies and spread, topped with a glossy Biscoff layer and cookie crumble.",
      category: "Dessert Cakes",
      tags: ["Signature Gold", "Best Seller"],
      image: "/images/desserts_cake/biscoff-cheese-cake.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "22",
      name: "Blueberry Cheese Cake",
      price: 900,
      description: "Smooth vanilla cheesecake on a biscuit base, generously topped with sweet-tart blueberry compote and fresh berries.",
      category: "Dessert Cakes",
      tags: ["Fruit Forward"],
      image: "/images/desserts_cake/blueberry-cheese-cake.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "23",
      name: "Chocolate Cheese Cake",
      price: 950,
      description: "Rich Belgian chocolate cheesecake on an Oreo crust, finished with a velvety chocolate ganache and cocoa nibs.",
      category: "Dessert Cakes",
      tags: ["Chef Special"],
      image: "/images/desserts_cake/chocolate-cheese-cake.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "24",
      name: "Chocolate Cheese Cake (4 in 1)",
      price: 1100,
      description: "Four distinct chocolate experiences in one cake - white, milk, dark, and ruby chocolate cheesecake layers united.",
      category: "Dessert Cakes",
      tags: ["Premium", "Chef Special"],
      image: "/images/desserts_cake/chocolate-cheese-cake-4in1.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "25",
      name: "Orange Mousse Cake",
      price: 750,
      description: "Light and airy citrus mousse made with fresh orange zest and juice, set on a vanilla sponge with candied orange peel.",
      category: "Dessert Cakes",
      tags: ["Light", "Citrus"],
      image: "/images/desserts_cake/orange-mousse-cake.jpg",
      rating: 4.6,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "26",
      name: "Honey Walnut Pie",
      price: 480,
      description: "Buttery shortcrust pie filled with toasted walnuts in a golden honey caramel, served with a hint of sea salt.",
      category: "Dessert Cakes",
      tags: ["Classic"],
      image: "/images/desserts_cake/honey-walnut-pie.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },
    {
      id: "27",
      name: "Lemon Tart",
      price: 320,
      description: "Crisp buttery tart shell filled with tangy lemon curd, topped with torched Italian meringue swirls.",
      category: "Dessert Cakes",
      tags: ["Citrus", "Best Seller"],
      image: "/images/desserts_cake/lemon-tart.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "28",
      name: "Chocolate Tart",
      price: 350,
      description: "Crisp chocolate pastry shell filled with silky dark chocolate ganache, topped with cocoa nibs and gold dust.",
      category: "Dessert Cakes",
      tags: ["Signature Gold"],
      image: "/images/desserts_cake/chocolate-tart.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "29",
      name: "Kunafa",
      price: 420,
      description: "Traditional Middle Eastern dessert with crispy shredded phyllo, sweet cheese filling, soaked in rose-scented sugar syrup.",
      category: "Dessert Cakes",
      tags: ["Middle Eastern", "New"],
      image: "/images/desserts_cake/kunafa.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Nuts"]
    },
    {
      id: "30",
      name: "Baklava",
      price: 380,
      description: "Layers of flaky phyllo pastry filled with chopped pistachios and walnuts, soaked in fragrant honey-rosewater syrup.",
      category: "Dessert Cakes",
      tags: ["Middle Eastern"],
      image: "/images/desserts_cake/baklava.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Nuts"]
    },
    {
      id: "31",
      name: "Tripple Mousse Cup",
      price: 280,
      description: "Three layers of luxurious mousse - dark, milk, and white chocolate - served in an elegant cup with chocolate curls.",
      category: "Dessert Cakes",
      tags: ["Premium"],
      image: "/images/desserts_cake/triple-mousse-cup.jpg",
      rating: 4.8,
      allergens: ["Dairy", "Eggs"]
    },
    {
      id: "32",
      name: "Chocolate Hazelnut Brownie Cup",
      price: 250,
      description: "Warm fudgy brownie chunks layered with hazelnut praline cream and topped with a molten chocolate lava center.",
      category: "Dessert Cakes",
      tags: ["Best Seller", "Chef Special"],
      image: "/images/desserts_cake/chocolate-hazelnut-brownie-cup.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },
    {
      id: "33",
      name: "Naughty Log",
      price: 550,
      description: "Indulgent chocolate roll cake filled with whipped cream and chocolate chips, drizzled with rich caramel and fudge sauces.",
      category: "Dessert Cakes",
      tags: ["Fun", "New"],
      image: "/images/desserts_cake/naughty-log.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },

    // ==================== FOOD ====================
    {
      id: "34",
      name: "White Forest Cake",
      price: 750,
      description: "Soft vanilla sponge layered with whipped cream and cherries, coated with white chocolate shavings for an elegant finish.",
      category: "Exotic Cakes",
      tags: ["Classic", "Best Seller"],
      image: "/images/exotic/white-forest-cake.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },

    // ==================== EXOTIC CAKES ====================
    {
      id: "35",
      name: "Red Velvet Cake",
      price: 850,
      description: "Iconic crimson cocoa sponge layered with creamy tangy cream cheese frosting, decorated with red velvet crumbs.",
      category: "Exotic Cakes",
      tags: ["Best Seller", "Signature"],
      image: "/images/exotic/red-velvet-cake.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "36",
      name: "Butterscotch Cake",
      price: 700,
      description: "Vanilla sponge layered with butterscotch cream and crunchy praline bits, finished with golden caramel shards.",
      category: "Exotic Cakes",
      tags: ["Best Seller"],
      image: "/images/exotic/butterscotch-cake.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },
    {
      id: "37",
      name: "Caramel Chocolate Cake",
      price: 800,
      description: "Rich chocolate sponge layered with salted caramel ganache and dark chocolate cream, drizzled with caramel sauce.",
      category: "Exotic Cakes",
      tags: ["Chef Special"],
      image: "/images/exotic/caramel-chocolate-cake.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "38",
      name: "Basbousa Slice Cake",
      price: 380,
      description: "Traditional Middle Eastern semolina cake soaked in rose-scented sugar syrup, topped with almonds and coconut.",
      category: "Exotic Cakes",
      tags: ["Middle Eastern", "New"],
      image: "/images/exotic/basbousa-slice-cake.jpg",
      rating: 4.6,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },
    {
      id: "39",
      name: "Butter Chocochips Cake",
      price: 650,
      description: "Buttery pound cake studded with semi-sweet chocolate chips, baked to a golden perfection with a soft, moist crumb.",
      category: "Exotic Cakes",
      tags: ["Classic"],
      image: "/images/exotic/butter-chocochips-cake.jpg",
      rating: 4.5,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "40",
      name: "Plum Cake Slice",
      price: 280,
      description: "Traditional rich fruit cake loaded with rum-soaked plums, raisins, and warm spices for a festive flavor.",
      category: "Exotic Cakes",
      tags: ["Festive", "Classic"],
      image: "/images/exotic/plum-cake-slice.jpg",
      rating: 4.6,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "41",
      name: "Carrot Cake Slice",
      price: 320,
      description: "Moist spiced cake with grated carrots, walnuts, and warm cinnamon, topped with tangy cream cheese frosting.",
      category: "Exotic Cakes",
      tags: ["Best Seller"],
      image: "/images/exotic/carrot-cake-slice.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },
    {
      id: "42",
      name: "Tutti Fruit Cake Slice",
      price: 250,
      description: "Light vanilla sponge studded with colorful candied fruit pieces, perfect for a sweet nostalgic treat.",
      category: "Exotic Cakes",
      tags: ["Classic"],
      image: "/images/exotic/tutti-fruit-cake-slice.jpg",
      rating: 4.4,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "43",
      name: "Choco Vanilla Cake",
      price: 650,
      description: "Half chocolate, half vanilla sponge layered with dual creams, perfect for those who can't choose just one flavor.",
      category: "Exotic Cakes",
      tags: ["Best Seller"],
      image: "/images/exotic/choco-vanilla-cake.jpg",
      rating: 4.6,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },

    // ==================== INDIAN CAKES ====================
    {
      id: "44",
      name: "Rasmalai Cake",
      price: 950,
      description: "Soft cardamom sponge soaked in saffron-infused rabri milk, layered with whipped cream and topped with rasmalai pieces.",
      category: "Indian Cakes",
      tags: ["Chef Special", "Indian Fusion", "Best Seller"],
      image: "/images/indian/rasmalai-cake.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },
    {
      id: "45",
      name: "Gulab Jamun Cake",
      price: 900,
      description: "Vanilla sponge soaked in rose-cardamom sugar syrup, layered with cream and topped with bite-sized gulab jamuns.",
      category: "Indian Cakes",
      tags: ["Indian Fusion", "Signature"],
      image: "/images/indian/gulab-jamun-cake.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "46",
      name: "Kaju Katli Cake",
      price: 1050,
      description: "Rich cashew-flavored sponge layered with thick boiled milk cream and topped with silver-leafed kaju katli pieces.",
      category: "Indian Cakes",
      tags: ["Premium", "Indian Fusion"],
      image: "/images/indian/kaju-katli-cake.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },
    {
      id: "47",
      name: "Rabri Cake",
      price: 980,
      description: "Aromatic cardamom and saffron sponge layered with thickened reduced milk rabri and crushed pistachios.",
      category: "Indian Cakes",
      tags: ["Chef Special", "Indian Fusion"],
      image: "/images/indian/rabri-cake.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },

    // ==================== SPECIAL CAKES ====================
    {
      id: "48",
      name: "Photo Cake",
      price: 1200,
      description: "Personalized cake featuring your edible photo print on a soft vanilla or chocolate sponge with buttercream finish.",
      category: "Special Cakes",
      tags: ["Customizable", "Special Occasion"],
      image: "/images/special/photo-cake.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "49",
      name: "Semifondant Cake",
      price: 1500,
      description: "Elegant cake with smooth buttercream base and fondant accents, perfect blend of classic taste and modern design.",
      category: "Special Cakes",
      tags: ["Premium", "Customizable"],
      image: "/images/special/semifondant-cake.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "50",
      name: "Fondant Cake",
      price: 1800,
      description: "Fully covered fondant cake with intricate handcrafted designs, ideal for weddings and special celebrations.",
      category: "Special Cakes",
      tags: ["Premium", "Customizable", "Wedding"],
      image: "/images/special/fondant-cake.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "51",
      name: "Cut-out & Shaped Cake",
      price: 2000,
      description: "Custom-shaped cakes carved into any design - characters, objects, or themes - perfect for themed celebrations.",
      category: "Special Cakes",
      tags: ["Customizable", "Themed"],
      image: "/images/special/cut-out-shape-cake.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "52",
      name: "Tiers Cake",
      price: 3500,
      description: "Stunning multi-tier celebration cake with elegant decorations, customizable flavors per tier for grand occasions.",
      category: "Special Cakes",
      tags: ["Premium", "Wedding", "Customizable"],
      image: "/images/special/tiers-cake.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },

    // ==================== CAKE FLAVOURS ====================
    {
      id: "53",
      name: "Chocolate Cake",
      price: 600,
      description: "Classic moist chocolate sponge layered with rich chocolate cream and topped with chocolate shavings.",
      category: "Cake Flavours",
      tags: ["Classic", "Best Seller"],
      image: "/images/cake-flavours/chocolate-cake.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "54",
      name: "Dark Truffle Cake",
      price: 750,
      description: "Intense dark chocolate sponge layered with bittersweet truffle ganache and finished with a glossy chocolate glaze.",
      category: "Cake Flavours",
      tags: ["Premium", "Chef Special"],
      image: "/images/cake-flavours/dark-truffle-cake.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "55",
      name: "Chocolate Truffle Cake (Light)",
      price: 700,
      description: "Light milk chocolate sponge layered with smooth milk chocolate truffle cream, perfect for those who love mild chocolate.",
      category: "Cake Flavours",
      tags: ["Best Seller"],
      image: "/images/cake-flavours/chocolate-truffle-cake-light.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "56",
      name: "Swiss Chocolate Cake",
      price: 800,
      description: "Premium Swiss chocolate sponge layered with rich ganache, finished with delicate Swiss chocolate curls.",
      category: "Cake Flavours",
      tags: ["Premium", "Signature"],
      image: "/images/cake-flavours/swiss-chocolate-cake.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "57",
      name: "Hazelnut Chocolate Cake",
      price: 850,
      description: "Decadent chocolate sponge layered with hazelnut praline cream and topped with roasted hazelnuts and chocolate drizzle.",
      category: "Cake Flavours",
      tags: ["Premium", "Chef Special"],
      image: "/images/cake-flavours/hazelnut-chocolate-cake.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },
    {
      id: "58",
      name: "Oreo Chocolate Cake",
      price: 750,
      description: "Chocolate sponge layered with Oreo cookie cream, decorated with crushed Oreos and chocolate ganache drip.",
      category: "Cake Flavours",
      tags: ["Best Seller", "Fun"],
      image: "/images/cake-flavours/oreo-chocolate-cake.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "59",
      name: "Ferrero Rocher Chocolate Cake",
      price: 1100,
      description: "Luxurious chocolate-hazelnut cake layered with Nutella cream, topped with whole Ferrero Rocher chocolates.",
      category: "Cake Flavours",
      tags: ["Premium", "Signature Gold", "Best Seller"],
      image: "/images/cake-flavours/ferrero-rocher-chocolate-cake.jpg",
      rating: 4.9,
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"]
    },
    {
      id: "60",
      name: "Fruit Cake",
      price: 700,
      description: "Light vanilla sponge layered with whipped cream and a medley of fresh seasonal fruits for a refreshing taste.",
      category: "Cake Flavours",
      tags: ["Fresh", "Light"],
      image: "/images/cake-flavours/fruit-cake.jpg",
      rating: 4.6,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "61",
      name: "Pineapple Cake",
      price: 650,
      description: "Soft vanilla sponge layered with pineapple-infused whipped cream and topped with fresh pineapple chunks.",
      category: "Cake Flavours",
      tags: ["Classic", "Fruit Forward"],
      image: "/images/cake-flavours/pineapple-cake.jpg",
      rating: 4.6,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "62",
      name: "Strawberry Cake",
      price: 750,
      description: "Vanilla sponge layered with strawberry cream and fresh strawberry slices, finished with a pink strawberry glaze.",
      category: "Cake Flavours",
      tags: ["Best Seller", "Fruit Forward"],
      image: "/images/cake-flavours/strawberry-cake.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "63",
      name: "Blueberry Cake",
      price: 800,
      description: "Vanilla sponge layered with blueberry compote and cream cheese frosting, topped with fresh blueberries.",
      category: "Cake Flavours",
      tags: ["Fruit Forward"],
      image: "/images/cake-flavours/blueberry-cake.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "64",
      name: "Mango Vanilla Cake",
      price: 850,
      description: "Vanilla sponge layered with Alphonso mango cream and fresh mango chunks, topped with a mango glaze.",
      category: "Cake Flavours",
      tags: ["Seasonal", "Best Seller"],
      image: "/images/cake-flavours/mango-vanilla-cake.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "65",
      name: "Choco Mango Cake",
      price: 900,
      description: "Unique fusion of chocolate sponge and mango cream layers, finished with chocolate ganache and mango pearls.",
      category: "Cake Flavours",
      tags: ["Chef Special", "Seasonal", "New"],
      image: "/images/cake-flavours/choco-mango-cake.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "66",
      name: "Black Forest Cake",
      price: 700,
      description: "German classic chocolate sponge layered with whipped cream and morello cherries, finished with chocolate shavings.",
      category: "Cake Flavours",
      tags: ["Classic", "Best Seller"],
      image: "/images/cake-flavours/black-forest-cake.jpg",
      rating: 4.8,
      allergens: ["Gluten", "Dairy", "Eggs"]
    },
    {
      id: "67",
      name: "Fresh Fruit Cake",
      price: 800,
      description: "Light vanilla sponge generously topped with a colorful assortment of fresh seasonal fruits and a clear fruit glaze.",
      category: "Cake Flavours",
      tags: ["Fresh", "Light", "Best Seller"],
      image: "/images/cake-flavours/fresh-fruit-cake.jpg",
      rating: 4.7,
      allergens: ["Gluten", "Dairy", "Eggs"]
    }
  ]
};