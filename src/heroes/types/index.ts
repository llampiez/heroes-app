export type HeroPublisher = 'DC Comics' | 'Marvel Comics';

export type Hero = {
  id: string;
  superhero: string;
  publisher: HeroPublisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
};

export type Heroes = Hero[];
