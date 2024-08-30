import {
  ICharacterAbilities,
  ICharacterGender,
  ICharacterPersonality,
  ICharacterSexuality,
  ICharacterSkills,
  abilities,
  genders,
  personalities,
  sexualities,
  skills,
  toSentenceCase
} from '@vision/core';

import { femaleNames, maleNames, neutralNames, surnames } from './data/names';


export type GenderType = 'male' | 'female' | 'neutral';

export function getRandomElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// #region DROPDOWN OPTIONS
export const genderOptions = genders.map((gender: ICharacterGender) => ({
  label: toSentenceCase(gender),
  value: gender,
}));

export const sexualityOptions = sexualities.map((sexuality: ICharacterSexuality) => ({
  label: toSentenceCase(sexuality),
  value: sexuality,
}));

export const personalityOptions = personalities.map((personality: ICharacterPersonality) => ({
  label: toSentenceCase(personality),
  value: personality,
}));

export const skillOptions = skills.map((skill: ICharacterSkills) => ({
  label: toSentenceCase(skill),
  value: skill,
}));

export const abilityOptions = abilities.map((ability: ICharacterAbilities) => ({
  label: toSentenceCase(ability),
  value: ability,
}));
// #endregion

// #region GENERATORS
export function generateRandomName(gender?: GenderType, withSurname?: boolean): string {
  if (gender === 'male') {
    const firstName = getRandomElement<string>(maleNames);
    const lastName = withSurname ? getRandomElement<string>(surnames) : '';
    return `${firstName}${withSurname ? ' ' : ''}${lastName}`;
  } else if (gender === 'female') {
    const firstName = getRandomElement<string>(femaleNames);
    const lastName = withSurname ? getRandomElement<string>(surnames) : '';
    return `${firstName}${withSurname ? ' ' : ''}${lastName}`;
  } else {
    const firstName = getRandomElement<string>(neutralNames);
    const lastName = withSurname ? getRandomElement<string>(surnames) : '';
    return `${firstName}${withSurname ? ' ' : ''}${lastName}`;
  }
}

export function getRandomGender(): ICharacterGender {
  const randomIndex = Math.floor(Math.random() * genders.length);
  return genders[randomIndex];
}

export function getRandomSexuality(): ICharacterSexuality {
  const randomIndex = Math.floor(Math.random() * sexualities.length);
  return sexualities[randomIndex];
}

export function getRandomPersonality(): ICharacterPersonality {
  const randomIndex = Math.floor(Math.random() * personalities.length);
  return personalities[randomIndex];
}

export function getRandomSkills(): ICharacterSkills {
  const randomIndex = Math.floor(Math.random() * skills.length);
  return skills[randomIndex];
}

export function getRandomAbilities(): ICharacterAbilities {
  const randomIndex = Math.floor(Math.random() * abilities.length);
  return abilities[randomIndex];
}
// #endregion