// Mock product data
export const mockProducts = [
  {
    id: '1',
    name: 'Wirelesspop Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 199.99,
    image: 'https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    rating: 4.8,
    store: 'TechHub',
    discount: 15
  },
  {
    id: '2',
    name: 'Designer Leather Bag',
    description: 'Handcrafted genuine leather bag with premium metal hardware',
    price: 149.95,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Fashion',
    rating: 4.5,
    store: 'Fashion Forward',
    discount: 0
  },
  {
    id: '3',
    name: 'Smart Home Speaker',
    description: 'Voice-controlled smart speaker with premium sound quality',
    price: 129.99,
    image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    rating: 4.6,
    store: 'TechHub',
    discount: 10
  },
  {
    id: '4',
    name: 'Ceramic Dinnerware Set',
    description: 'Modern 16-piece ceramic dinnerware set for 4 people',
    price: 89.99,
    image: 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home',
    rating: 4.3,
    store: 'HomeStyle',
    discount: 0
  },
  {
    id: '5',
    name: 'Premium Skincare Set',
    description: 'Complete skincare regimen with cleanser, toner, and moisturizer',
    price: 79.99,
    image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Beauty',
    rating: 4.7,
    store: 'Glow Beauty',
    discount: 20
  },
  {
    id: '6',
    name: 'Gourmet Coffee Beans',
    description: 'Freshly roasted single-origin coffee beans, 1lb bag',
    price: 18.99,
    image: 'https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Food',
    rating: 4.9,
    store: 'Bean & Brew',
    discount: 0
  },
  {
    id: '7',
    name: 'Fitness Smartwatch',
    description: 'Water-resistant smartwatch with health and fitness tracking',
    price: 159.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    rating: 4.4,
    store: 'TechHub',
    discount: 5
  },
  {
    id: '8',
    name: 'Scented Candle Set',
    description: 'Set of 3 luxury scented candles in decorative glass jars',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home',
    rating: 4.2,
    store: 'HomeStyle',
    discount: 0
  },
  {
    id: '9',
    name: 'Scented Candle Set',
    description: 'Set of 3 luxury scented candles in decorative glass jars',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home',
    rating: 4.2,
    store: 'HomeStyle',
    discount: 0
  },
  {
    id: '10',
    name: 'Scented Candle Set',
    description: 'Set of 3 luxury scented candles in decorative glass jars',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home',
    rating: 4.2,
    store: 'HomeStyle',
    discount: 0
  }
];

// Mock store data
export const mockStores = [
  {
    id: '1',
    name: 'TechHub',
    description: 'The premier destination for all your tech needs, from smartphones to smart home devices.',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Downtown, New York',
    categories: ['Electronics', 'Gadgets', 'Accessories'],
    rating: 4.7,
    reviewCount: 532
  },
  {
    id: '2',
    name: 'Fashion Forward',
    description: 'Trendy clothing and accessories for the fashion-conscious shopper.',
    image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'SoHo, New York',
    categories: ['Fashion', 'Clothing', 'Accessories'],
    rating: 4.5,
    reviewCount: 329
  },
  {
    id: '3',
    name: 'HomeStyle',
    description: 'Everything you need to make your house a home, from furniture to décor.',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Brooklyn, New York',
    categories: ['Home', 'Furniture', 'Decor'],
    rating: 4.3,
    reviewCount: 287
  },
  {
    id: '4',
    name: 'Glow Beauty',
    description: 'Premium skincare and makeup products for all skin types.',
    image: 'https://images.pexels.com/photos/3373743/pexels-photo-3373743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Upper East Side, New York',
    categories: ['Beauty', 'Skincare', 'Makeup'],
    rating: 4.6,
    reviewCount: 412
  },
  {
    id: '5',
    name: 'Bean & Brew',
    description: 'Specialty coffee shop offering freshly roasted beans and brewing equipment.',
    image: 'https://images.pexels.com/photos/1438445/pexels-photo-1438445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Chelsea, New York',
    categories: ['Food', 'Beverages', 'Coffee'],
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: '6',
    name: 'Fitness First',
    description: 'Sporting goods and fitness equipment for athletes of all levels.',
    image: 'https://images.pexels.com/photos/2204179/pexels-photo-2204179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Midtown, New York',
    categories: ['Sports', 'Fitness', 'Equipment'],
    rating: 4.4,
    reviewCount: 201
  },
  {
    id: '7',
    name: 'Fitness First',
    description: 'Sporting goods and fitness equipment for athletes of all levels.',
    image: 'https://images.pexels.com/photos/2204179/pexels-photo-2204179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Midtown, New York',
    categories: ['Sports', 'Fitness', 'Equipment'],
    rating: 4.4,
    reviewCount: 201
  },
  {
    id: '8',
    name: 'Fitness First',
    description: 'Sporting goods and fitness equipment for athletes of all levels.',
    image: 'https://images.pexels.com/photos/2204179/pexels-photo-2204179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Midtown, New York',
    categories: ['Sports', 'Fitness', 'Equipment'],
    rating: 4.4,
    reviewCount: 201
  }
];