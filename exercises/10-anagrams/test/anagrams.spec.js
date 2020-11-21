// Fuente (punto de partida) de las pruebas:
// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/anagrams

[
  'anagrams',
  'anagrams.map-filter',
  'anagrams.reduce'
].forEach((pathToSolution) => {
  const anagrams = require(`../solutions/${pathToSolution}`);

  describe(pathToSolution, () => {
    it('should be a function', () => {
      expect(typeof anagrams).toEqual('function');
    });

    it('should say "hello" is an anagram of "llohe"', () => {
      expect(anagrams('hello', 'llohe')).toBe(true);
    });

    it('should say "Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
      expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
    });

    it('should say "One One" is not an anagram of "Two two two"', () => {
      expect(anagrams('One One', 'Two two two')).toBeFalsy();
    });

    it('should say "One one" is not an anagram of "One one c"', () => {
      expect(anagrams('One one', 'One one c')).toBeFalsy();
    });

    it('should say "A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
      expect(
        anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
      ).toBeFalsy();
    });
  });
});
