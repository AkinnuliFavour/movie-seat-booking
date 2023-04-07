const notSelectedSeats = document.querySelectorAll(".not-selected-seat");
const options = document.querySelector(".j-form-options");
const seatsAmount = document.querySelector(".j-seats-amount");
const seatsPrice = document.querySelector(".j-seats-price");

let optionsValue = 0;
let price = 0;

let seats = 0;

[...notSelectedSeats].map((seat) =>
  seat.addEventListener("click", () => selectSeat(seat))
);
options.addEventListener("change", () => resetPrice());

const resetPrice = () => {
  optionsValue = options.value;
  seatsPrice.textContent = `$${seats * Number(optionsValue)}`;
};

function selectSeat(seat) {
  if (seat.style.backgroundColor !== "aqua") {
    optionsValue = options.value;
    seats++;
    seat.style.backgroundColor = "aqua";
    seatsAmount.textContent = `${seats}`;
    seatsPrice.textContent = `$${seats * Number(optionsValue)}`;
    console.log(optionsValue);
  } else if (seat.style.backgroundColor === "aqua") {
    seats--;
    seat.style.backgroundColor = "gray";
    seatsAmount.textContent = `${seats}`;
    seatsPrice.textContent = `$${seats * Number(optionsValue)}`;
  }
}
