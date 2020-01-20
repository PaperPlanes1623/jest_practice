const functions = require('./functions');

//toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

//not toBe
test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull tests for null
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

//ToBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

//toBeTruthy ...can also use .not.toBeFalsy
test('User should be Dylan Taft object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Dylan', lastName: 'Taft' })
});

//less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

//Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

//working with async data
//promise
test('User fetched name should be Leanne Graham promise handle', () => {
  //must include or test will always pass
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
    })
});

//async await
test('User fetched name should be Leanne Graham async await', async () => {
  //must include or test will always pass
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});


