beforeEach(() => {
    console.log('beforeEach');
});
  
afterEach(() => {
    console.log('afterEach');
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
