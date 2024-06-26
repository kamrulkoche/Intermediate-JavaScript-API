const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = await data.data;
  // console.log( phones);

  displayPhones(phones, true);
};

// const displayPhones = (phones) => {
//   //   console.log(phones);
//   phones.forEach((phone) => {
//     console.log(phone.phone_name);
//   });
// };

const displayPhones = (phones, isSearch) => {
  // 1. id
  const phoneContainer = document.getElementById("phone-container");
  //clear phone container cards before adding new cards
  isSearch && (phoneContainer.innerText = "");

  //   console.log(phones);
  phones.forEach((phone) => {
    //console.log(phone);
    //2.create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100  p-4 shadow-xl`;
    //console.log(phoneCard);
    //3.set innerHTML
    phoneCard.innerHTML = `
      <figure><img src="${phone.image}" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
      `;

    //4. append child
    phoneContainer.appendChild(phoneCard);
  });
};

// handle search button
const handleSearch = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
};


const loadAll = async (allPhone) => {
  allPhone.map(async (value) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
    const res = await fetch(url);
    const data = await res.json();
    const allData = await data.data;
    // console.log(x);
    displayPhones(allData, false);
  });
};


const allPhones = ["opp", "iphone","samsung"];
loadAll(allPhones);
// loadAll("samsung");
// loadAll("opp");
// loadPhone("iphone");
