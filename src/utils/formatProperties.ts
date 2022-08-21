/*
  takes in a state as a parameter and returns the capitalized abbreviation
*/
export default function formatState(state: string) {
  return state
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
}
