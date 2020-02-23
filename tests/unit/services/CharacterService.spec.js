import CharacterService from '../../../src/services/api/CharacterService';

describe('CharacterService.vue', () => {
  it('has a buildQuery function', () => {
    expect(typeof CharacterService.buildQuery).toBe('function');
  })

  it('buildQuery if parameters is string return emtpty string', () => {
    const mockParamsStr = "Mock parameters";
    const result = CharacterService.buildQuery(mockParamsStr);
    expect(result).toEqual("");
  })

  it('buildQuery if parameters is number return query string of this numer', () => {
    const mockParamsNumber = 20;
    const result = CharacterService.buildQuery(mockParamsNumber);
    expect(result).toEqual("20");
  })

  it('buildQuery if parameters is array return query string of this array', () => {
    const mockParamsArray = [1, 2, 3];
    const result = CharacterService.buildQuery(mockParamsArray);
    expect(result).toEqual("1,2,3");
  })

  it('buildQuery if parameters is object and has keys return query string with "?" and keys', () => {
    const mockParamsObject = { query1: 1, query2: 2 };
    const result = CharacterService.buildQuery(mockParamsObject);
    expect(result).toEqual("?query1=1&query2=2");
  })

  it('buildQuery if parameters is object and has zero key return emtpty string', () => {
    const mockParamsObject = {};
    const result = CharacterService.buildQuery(mockParamsObject);
    expect(result).toEqual("");
  })
})
