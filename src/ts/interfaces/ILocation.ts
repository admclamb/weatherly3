export interface ILocation {
  name?: string;
  local_names?: [];
  lat: number | null;
  lon: number | null;
  country?: string;
  state?: string;
}
