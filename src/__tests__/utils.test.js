import { currentAgeForBirthYear } from '../utils';

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const currentYear = 2024; 
    const ageOfPerson = currentAgeForBirthYear(birthYear, currentYear);
    expect(ageOfPerson).toBe(40); 
  });
});
