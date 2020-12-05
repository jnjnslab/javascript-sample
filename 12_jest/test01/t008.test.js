beforeAll(() => {
    console.log('beforeAll');
});
  
afterAll(() => {
    console.log('afterAll');
});

test('test1', () => {
    expect(2 + 2).toBe(4);
});


test('test2', () => {
    expect(2 + 2).toBe(4);
});


test('test3', () => {
    expect(2 + 2).toBe(4);
});
