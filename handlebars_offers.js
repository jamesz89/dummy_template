const fetchProducts = async (categoryId) => {
  let url = "";
  categoryId
    ? (url = `https://dry-ocean-06510.herokuapp.com/offersByCategory/${categoryId}`)
    : (url = "https://dry-ocean-06510.herokuapp.com/offers");
  try {
    const response = await fetch(url);
    const products = await response.json();
    return products;
  } catch (err) {
    console.log(err);
  }
};

const renderOffers = async () => {
  let data = {
    products: await fetchProducts(),
  };
  let template = Handlebars.compile(
    document.querySelector("#offers").innerHTML
  );
  let rendered = template(data);
  document.querySelector("#output").innerHTML = rendered;
};

// const renderOffersByCategory = async (categoryId) => {
//   let data = {
//     products: await fetchProducts(categoryId),
//   };
//   let template = Handlebars.compile(
//     document.querySelector("#offers").innerHTML
//   );
//   let rendered = template(data);
//   document.querySelector("#output").innerHTML = rendered;
// };