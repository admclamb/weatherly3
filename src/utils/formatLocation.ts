export const stateAbbreviation = (state: string) => {
  return state
    .split(' ')
    .map((w) => w[0].toUpperCase())
    .join('');
};
