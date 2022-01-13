export class Cars {
  id: number | string;
  name: string;
  brand: string;
  desc: string;

  constructor(id: string | number, name: string, brand: string, desc: string) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.desc = desc;
  }
}
