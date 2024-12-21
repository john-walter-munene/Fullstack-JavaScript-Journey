describe('Compose function output type', () => {
    test('compose() should return a function', () => {
        const actual = typeof compose();
        expect(actual).toBe('function');
    });
});