module.exports = {
  baseURL: 'https://mamaworld.in',
  
  validUsers: {
    email: 'testuser@mamaworld.in',
    phone: '9820584377',
    password: 'Test@123456',
    name: 'Test User'
  },
  
  invalidUsers: {
    email: 'invalid@test',
    phone: '1234567890',
    password: 'wrong'
  },
  
  testAddress: {
    name: 'Test User',
    address: '123 Test Street',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400083',
    phone: '9820584377',
    email: 'test@test.com'
  },
  
  productSearch: [
    'Kurta',
    'Night Wear',
    'Feeding Kurta',
    'Maternity',
    'Co-ord Set',
    'Best Seller'
  ],
  
  categories: [
    { name: 'Maternity Night Wear', path: '/collection/Aahm3Wot' },
    { name: 'Maternity Co-ord Set', path: '/collection/keR5QsOH' },
    { name: 'New Arrivals', path: '/collection/cF1wR54K' },
    { name: 'Best Sellers', path: '/collection/kRr89Z5K' }
  ],
  
  securityTestData: {
    sqlInjection: [
      "' OR '1'='1'",
      "admin'--",
      "1' UNION SELECT * FROM users--",
      "' DROP TABLE users--"
    ],
    xssPayloads: [
      '<script>alert("xss")</script>',
      '<img src=x onerror=alert(1)>',
      '<svg onload=alert(1)>'
    ]
  },
  
  paymentMethods: ['COD', 'Card', 'Net Banking', 'UPI'],
  
  couponCodes: {
    valid: 'SAVE50',
    invalid: 'INVALID123',
    expired: 'EXPIRED2020'
  },
  
  pincode: {
    valid: '400083',
    invalid: '000000'
  }
};