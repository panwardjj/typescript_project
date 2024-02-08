import merge from "./merge";

test('merge 3 collection and sorts correctly', () => {
    const collection_1 = [1,3,5];
    const collection_2 = [2,4,6];
    const collection_3 = [9,7];
  
    const expected = [1,2,3,4,5,6,7,9];
    const result = merge(collection_1,collection_2,collection_3);

    expect(result).toEqual(expected);
})