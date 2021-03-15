const groupByGenre = (items) => items.reduce((acc, song) => {
  const newSong = {
    ...song,
  };
  const { genre } = song;
  if (!acc[genre.name]) {
    acc[genre.name] = [];
  }
  acc[genre.name].push(newSong);
  return acc;
}, {});

export default { groupByGenre };
