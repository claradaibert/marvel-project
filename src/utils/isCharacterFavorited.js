export const isCharacterFavorited = (character, favorites) => {
  const isCharacterAlreadyFavorited = favorites.some(
    (char) => char.name === character.name
  );

  return isCharacterAlreadyFavorited;
};
