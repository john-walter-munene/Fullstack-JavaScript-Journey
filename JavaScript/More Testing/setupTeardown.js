// Repeating Setup

beforeEach(() => {
    initializeCityDatabase();
  });
  
afterEach(() => {
    clearCityDatabase();
  });
  
test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });

// Returning a promise
beforeEach(() => {
    return initializeCityDatabase();
  });

// One-Time Setup
beforeAll(() => {
    return initializeCityDatabase();
  });
  
afterAll(() => {
    return clearCityDatabase();
  });
  
test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });

// Scoping
// Applies to all tests in this file
beforeEach(() => {
    return initializeCityDatabase();
  });
  
test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });
  
describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
      return initializeFoodDatabase();
    });
  
    test('Vienna <3 veal', () => {
      expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });
  
    test('San Juan <3 plantains', () => {
      expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});

// Excution order follow up.
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll

// Order of Execution
describe('describe outer', () => {
    console.log('describe outer-a');
  
    describe('describe inner 1', () => {
      console.log('describe inner 1');
  
      test('test 1', () => console.log('test 1'));
    });
  
    console.log('describe outer-b');
  
    test('test 2', () => console.log('test 2'));
  
    describe('describe inner 2', () => {
      console.log('describe inner 2');
  
      test('test 3', () => console.log('test 3'));
    });
  
    console.log('describe outer-c');
  });
  
// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test 1
// test 2
// test 3

beforeEach(() => console.log('connection setup'));
beforeEach(() => console.log('database setup'));

afterEach(() => console.log('database teardown'));
afterEach(() => console.log('connection teardown'));

test('test 1', () => console.log('test 1'));

describe('extra', () => {
  beforeEach(() => console.log('extra database setup'));
  afterEach(() => console.log('extra database teardown'));

  test('test 2', () => console.log('test 2'));
});

// connection setup
// database setup
// test 1
// database teardown
// connection teardown

// connection setup
// database setup
// extra database setup
// test 2
// extra database teardown
// database teardown
// connection teardown