export interface PotionRecipe {
  id: string;
  name: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  effect: string;
}

export const potionRecipes: PotionRecipe[] = [
  {
    id: 'polyjuice',
    name: 'Polyjuice Potion',
    description: 'A complex potion that allows the drinker to assume the appearance of another person',
    difficulty: 'Hard',
    ingredients: ['lacewing_flies', 'leeches', 'horn_of_bicorn', 'knotgrass', 'fluxweed'],
    effect: 'Transforms the drinker into another person'
  },
  {
    id: 'felix_felicis',
    name: 'Felix Felicis',
    description: 'Also known as "Liquid Luck"',
    difficulty: 'Hard',
    ingredients: ['ashwinder_egg', 'squill_bulb', 'murtlap_tentacle', 'tincture_of_thyme'],
    effect: 'Gives the drinker incredible luck'
  },
  {
    id: 'pepperup',
    name: 'Pepperup Potion',
    description: 'A potion that cures the common cold',
    difficulty: 'Easy',
    ingredients: ['mandrake_root', 'bicorn_horn', 'peppermint'],
    effect: 'Cures colds and warms up the drinker'
  }
];