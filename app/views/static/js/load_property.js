const index_cards = document.querySelector(".index-cards");
const loading = document.querySelector(".loading");
let limit = 9;
let page = 1;
let output = "";

const get_data = async (route) => {
  const properties_promise = await fetch(route);
  const properties = await properties_promise.json();
  if (!properties.properties) return {};
  if (properties.properties.length === 0) {
    loading.innerHTML = "nothing to show &#x1F614";
    return {};
  }
  page++;
  return properties;
};

const load_index_property_data = async () => {
  const { properties, images } = await get_data(
    `/property/properties/list?version=v1.0&limit=${limit}&page=${page}`
  );
  if (properties) {
    properties.forEach((property, index) => {
      output += `<div class="card">
              <img src="data:image/jpg;base64,${images[index]}" alt="" />
              <div class="dets">
                  <p><b>Location:</b> ${property.state}</p>
                  <p><b>Price:</b> ${property.amount}</p>
              </div>
              <a href="singLandPage.html" class="plus"><i class="fas fa-paper-plane fa-xs"></i></a>
            </div>`;
    });
    index_cards.innerHTML = output;
  }
};

const load_new_data = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting === true) load_index_property_data();
    },
    { threshold: [1] }
  );
  observer.observe(loading);
};
load_new_data();
