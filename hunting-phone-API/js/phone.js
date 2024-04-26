const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = await data.data;
  console.log("fsdfsd", phones);
  displayPhones(phones, isShowAll);
};

// const displayPhones = (phones) => {
//   //   console.log(phones);
//   phones.forEach((phone) => {
//     console.log(phone.phone_name);
//   });
// };

const displayPhones = (phones, isShowAll) => {
  // 1. id
  const phoneContainer = document.getElementById("phone-container");
  //clear phone container cards before adding new cards
  phoneContainer.innerText = "";
  console.log("fsa", isShowAll);
  //display show all button if there are more then 12 phones
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
    console.log("hello");
  } else {
    showAllContainer.classList.add("hidden");
  }
  // //display only first 12 phones if not show all
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

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
        <div class="card-actions justify-center">
          <button onClick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
        </div>
      </div>
      `;

    //4. append child
    phoneContainer.appendChild(phoneCard);
  });
  //hide loading spinner
  toggleLoadingSpinner(false);
};

const handleShowDetails = async (id) => {
  console.log("show details", id);
  //load single phone data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  console.log(data);
};

// handle search button
const handleSearch = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText, isShowAll);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

//handle Show All

const handleShowAll = (isShowAll) => {
  handleSearch(true);
};

// loadPhone("iphone");
