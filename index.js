const balance = document.getElementById("balance");
const monthlyTotal = document.getElementById("monthlyTotal");
const amount = document.getElementById("amount");

async function getData() {
  try {
    const response = await fetch("data.json");
    const jsonData = await response.json();
    // Process the fetched data
    balance.textContent = `$${jsonData[7].balance.toFixed(2)}`;
    monthlyTotal.textContent = `$${jsonData[7].monthlyTotal.toFixed(2)}`;
    amount.textContent = `$${jsonData[0].amount.toFixed(2)}`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getData();
