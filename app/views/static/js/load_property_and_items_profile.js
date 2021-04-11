const profile_property_cards = document.querySelector(
  ".profile-property-cards"
);
const crop_cards = document.querySelector(".profile-item-cards");
const i_loading = document.querySelector(".item-loading");
const p_loading = document.querySelector(".property-loading");
let limit = 9;
let page = 1;
let output = "";
let item_output = "";

const get_data = async (route) => {
  const properties_promise = await fetch(route);
  const properties = await properties_promise.json();
  if (!properties.properties) return {};
  if (properties.properties.length === 0) {
    p_loading.innerHTML = "nothing to show &#x1F614";
    return {};
  }
  page++;
  return properties;
};

const load_profile_property_data = async () => {
  const { properties, images } = await get_data(
    `/property/user/list?version=v1.0&limit=${limit}&page=${page}`
  );
  if (properties) {
    properties.forEach((property, index) => {
      output += `<div class="card">
                <img src="data:image/jpg;base64,${images[index]}" alt="" />
                <div class="dets">
                    <p><b>Location:</b> ${property.state}</p>
                    <p><b>Price:</b> ${property.amount}</p>
                </div>
                <a href="/property/delete?id=${property._id}&version=v1.0" style="font-size:1.3em; background-color: red;" class="plus"><i class="fas fa-trash fa-xs"></i></a>
              </div>`;
    });
    profile_property_cards.innerHTML = output;
  }
};

const load_new_data = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting === true) load_profile_property_data();
    },
    { threshold: [1] }
  );
  observer.observe(p_loading);
};
load_new_data();


let i_limit = 9;
let i_page = 1;

const get_item_data = async (route) => {
  const items_promise = await fetch(route);
  const items = await items_promise.json();

  if (!items) return {};
  if (items.items.length === 0) {
    i_loading.innerHTML = "nothing to show &#x1F614";
    return {};
  }
  i_page++;
  return items;
};

const load_item_data = async () => {
  const { items, images } = await get_item_data(
    `/item/user/list?version=v1.0&limit=${i_limit}&page=${i_page}`
  );
  if (items) {
    items.forEach((item, index) => {
      item_output += `<div class="card">
          <img src="data:image/jpg;base64,${images[index]}" alt="" />
          <div class="dets">
              <p><b>Name:</b> ${item.name}</p>
              <p><b>Quantity:</b> ${item.quantity}</p>
              <p><b>Price:</b> ${item.price}</p>
          </div>
          <a href="/item/delete?id=${item._id}&version=v1.0" style="font-size:1.3em; background-color: red;" class="plus"><i class="fas fa-trash fa-xs"></i></a>
          </div>`;
    });
    crop_cards.innerHTML = item_output;
  }
};

const load_new_item_data = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting === true) load_item_data();
    },
    { threshold: [1] }
  );
  observer.observe(i_loading);
};
load_new_item_data();
