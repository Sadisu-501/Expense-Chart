const balance = document.getElementById("balance");
const monthlyTotal = document.getElementById("monthlyTotal");
const amount = document.getElementById("amount");

async function getData() {
  try {
    const response = await fetch("data.json");
    const jsonData = await response.json();

    // Set balance and monthlyTotal immediately
    balance.textContent = `$${jsonData[7].balance.toFixed(2)}`;
    monthlyTotal.textContent = `$${jsonData[7].monthlyTotal.toFixed(2)}`;

    // Store the amount value
    const amountValue = `$${jsonData[0].amount.toFixed(2)}`;

    // Attach hover events (inside getData, so amountValue is available)
    amount.addEventListener("mouseover", () => {
      amount.textContent = amountValue;
    });

    amount.addEventListener("mouseout", () => {
      amount.textContent = ""; // clears when not hovered
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();
