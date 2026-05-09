const BASE_URL = 'https://mamaworld.in';
const PRODUCT_URLS = [
  'https://mamaworld.in/collection/cF1wR54K',
  'https://mamaworld.in/collection/kRr89Z5K',
  'https://mamaworld.in/collection/keR5QsOH',
  'https://mamaworld.in/only-night-wear/collection/Aahm3Wot'
];

const TEST_DATA = {
  validEmail: 'testuser@mamaworld.in',
  validPhone: '9820584377',
  validPassword: 'Test@123456',
  invalidEmail: 'invalid@test',
  invalidPhone: '1234567890',
  testProductName: 'Maternity Kurta',
  testAddress: {
    name: 'Test User',
    address: '123 Test Street',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400083',
    phone: '9820584377'
  },
  invalidAddresses: [
    { pincode: '000000', city: '' },
    { pincode: '12345', city: 'InvalidCity' },
    { pincode: '999999', city: 'Test' }
  ],
  sqlInjectionStrings: [
    "' OR '1'='1",
    "' OR '1'='1' --",
    "admin'--",
    "1' UNION SELECT * FROM users--",
    "' DROP TABLE users--"
  ],
  xssStrings: [
    '<script>alert("xss")</script>',
    '<img src=x onerror=alert(1)>',
    '<svg onload=alert(1)>',
    'javascript:alert(1)',
    '<iframe src="javascript:alert(1)">'
  ]
};

const TIMEOUTS = {
  pageLoad: 30000,
  elementWait: 5000,
  apiCall: 10000,
  navigation: 15000
};

module.exports = {
  BASE_URL,
  PRODUCT_URLS,
  TEST_DATA,
  TIMEOUTS
};