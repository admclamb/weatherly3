export const getCoordinates = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (resposne) => {
        resolve({
          lng: resposne.coords.longitude,
          lat: resposne.coords.latitude,
        });
      },
      (err) => {
        reject(err);
      }
    );
  });
};