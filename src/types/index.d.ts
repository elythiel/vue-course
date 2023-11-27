export type CardColor =  'blue' | 'red' | 'white' | 'black' | 'green' | 'none';

export type CardCost = {
  [colorKey: CardColor]: number;
};

export type Card = {
  name: string;
  cost: CardCost;
  description: string;
  types: string;
  isLegendary: boolean;
  attack: number;
  defense: number;
  image: string;
}
