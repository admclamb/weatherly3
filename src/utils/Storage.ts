interface LocalStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

class Storage<T extends string> {
  private readonly storage: LocalStorage;

  constructor(getSotrage = (): LocalStorage => window.localStorage) {
    this.storage = getSotrage();
  }

  public get(key: T): any {
    return this.storage.getItem(key);
  }

  public set(key: T, value: string): void {
    this.storage.setItem(key, value);
  }

  public append(key: T, value: string): void {
    try {
      let data = [];
      const foundKey = this.get(key);
      if (foundKey) {
        data = JSON.parse(foundKey);
      }
      data.unshift(data);
      if (data.length > 5) {
        data.pop();
      }
      this.set(key, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  public remove(key: T): void {
    this.storage.removeItem(key);
  }

  public removeMultiple(keys: T[]): void {
    keys.forEach((key) => this.remove(key));
  }
}

export const storage = new Storage<string>();
