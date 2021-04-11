let item_output = "";
const crop_cards = document.querySelector(".crop-cards");
const loading = document.querySelector(".loading");
let limit = 9;
let page = 1;

const get_item_data = async (route) => {
  const items_promise = await fetch(route);
  const items = await items_promise.json();
  if (!items) return {};
  if (items.items.length === 0) {
    loading.innerHTML = "nothing to show &#x1F614";
    return {};
  }
  page++;
  return items;
};

const load_item_data = async () => {
  const { items, images } = await get_item_data(
    `/item/items/list?version=v1.0&limit=${limit}&page=${page}`
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
        <a href="/purchase" class="plus">&plus;</a>
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
  observer.observe(loading);
};
load_new_item_data();
