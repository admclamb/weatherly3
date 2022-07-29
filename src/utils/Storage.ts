import { IWeather } from '../ts/interfaces/IWeather';
import { ILocation } from '../ts/interfaces/ILocation';
interface IStorage {
  getItem(key: string): string | IWeather | ILocation | null;
  setItem(key: string, value: string | IWeather | ILocation): void;
  removeItem(key: string): void;
}

class Storage<T extends string> {
  private readonly storage: IStorage;

  constructor(getSotrage = (): IStorage => window.localStorage) {
    this.storage = getSotrage();
  }

  public get(key: T): any {
    return this.storage.getItem(key);
  }

  public set(key: T, value: string | IWeather | ILocation): void {
    this.storage.setItem(key, value);
  }

  public remove(key: T): void {
    this.storage.removeItem(key);
  }

  public removeMultiple(keys: T[]): void {
    keys.forEach((key) => this.remove(key));
  }
}

export const storage = new Storage<string>();
