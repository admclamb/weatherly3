type parsedLocation = {
  city: string | null;
  stateCode: string | null;
  countryCode: string | null;
};

export const parseLocation = (location: string) => {
  const parsedLocation: parsedLocation = {
    city: null,
    stateCode: null,
    countryCode: null,
  };
  const splitStrings = [];
  let string = '';
  const seperators = [' ', ','];
  for (const char of location) {
    if (seperators.includes(char) && string.length) {
      splitStrings.push(string);
      string = '';
    }
    if (!seperators.includes(char)) {
      string += char;
    }
  }
  if (string.length) {
    splitStrings.push(string);
  }
  parsedLocation.city = splitStrings[0] || '';
  parsedLocation.stateCode = splitStrings[1] || '';
  parsedLocation.countryCode = splitStrings[2] || '';
  return parsedLocation;
};
