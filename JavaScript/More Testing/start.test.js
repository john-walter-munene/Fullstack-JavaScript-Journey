import axios from 'axios';
import { forEach, newForEach, fetchData } from './start'

test('Mock callback', () => {
    const mockBack = (number) => 42 + number;
    let actual = forEach([0, 1], mockBack);
    expect(actual.length).toBe(2);
});

test('Mock calledback', () => {
    const mockCalledBack = jest.fn(x => 42 + x);

    newForEach([0, 1], mockCalledBack);
    expect(mockCalledBack.mock.calls.length).toBe(2);

    // [call1, call2]
    expect(mockCalledBack.mock.calls[0][0]).toBe(0);
    expect(mockCalledBack.mock.calls[1][0]).toBe(1);

    expect(mockCalledBack.mock.results[0].value).toEqual(42);
    expect(mockCalledBack.mock.results[1].value).toEqual(43);
});

test('Mock return', () => {
    const mock = jest.fn();
    mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce('Hello');

    const results = mock();
    const resultsTwo = mock();
    const resultsThree = mock();

    expect(results).toBe(true);
    expect(resultsTwo).not.toBe(true);
    expect(resultsThree).toBe('Hello');
});

test('Mock axios', async () => {
    jest.spyOn(axios, 'get').mockReturnValueOnce({
        data: {
            id: 1,
            todo: 'Get 1M Subs',
        }
    });

    const results = await fetchData();
    expect(results.todo).toBe('Get 1M Subs');
});