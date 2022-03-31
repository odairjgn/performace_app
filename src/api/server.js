module.exports = () => {
  const data = {
    friends: [],
  };

  for (let i = 0; i < 500; i++) {
    data.friends.push({
      id: i + 1,
      name: `Friend ${i}`,
      likes: Math.floor(Math.random() * 100),
    });
  }

  return data;
};
