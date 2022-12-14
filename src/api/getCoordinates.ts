import { Coordinates } from '../ts/interfaces/Coordinates';

export const getCoordinates = (): Promise<Coordinates> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (resposne) => {
        resolve({
          lon: resposne.coords.longitude,
          lat: resposne.coords.latitude,
        });
      },
      (err) => {
        reject(err);
      }
    );
  });
};
