module.exports = () => {
  const data = {
    products: [],
  };
  for (let i = 0; i < 100; i++) {
    data.products.push({
      id: i,
      title: `products${i}`,
    });
  }
  return data;
};
