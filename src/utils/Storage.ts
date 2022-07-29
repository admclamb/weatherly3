import { IWeather } from '../ts/interfaces/IWeather';
import { ILocation } from '../ts/interfaces/ILocation';
interface IStorage {
  getItem(key: string): string | IWeather | ILocation | null;
  setItem(key: string, value: string | IWeather | ILocation): void;
  removeItem(key: string): void;
}

class Storage<T extends string> {
  private readonly storage: IStorage;

  private constructor(getSotrage = (): IStorage => window.localStorage) {
    this.storage = getSotrage();
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  protected get(key: T): string | IWeather | ILocation | null {
    return this.storage.getItem(key);
  }

  protected set(key: T, value: string | IWeather | ILocation): void {
    this.storage.setItem(key, value);
  }

  protected remove(key: T): void {
    this.storage.removeItem(key);
  }

  protected removeMultiple(keys: T[]): void {
    keys.forEach((key) => this.remove(key));
  }
}

export const storage = Storage.instance;
