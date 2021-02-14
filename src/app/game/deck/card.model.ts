export class Card {
  id: number;
  value: string;
  color: string;
  special: boolean;

  constructor(id: number, value: string, color: string, special: boolean) {
    this.id = id;
    this.value = value;
    this.color = color;
    this.special = special;
  }
}
