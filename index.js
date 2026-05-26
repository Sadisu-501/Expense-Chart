const monthlyTotal = document.getElementById("monthlyTotal");
const balance = document.getElementById("balance");
const dayIds = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const tip = document.getElementById("mon");
const monToolTip = document.getElementById("monTooltip");

async function getData() {
  try {
    const response = await fetch("data.json");
    const jsonData = await response.json();

    // Show monthly total immediately
    monthlyTotal.textContent = `$${jsonData[7].monthlyTotal.toFixed(2)}`;
    balance.textContent = `$${jsonData[7].balance.toFixed(2)}`;

    // Loop through each day bar
    dayIds.forEach((id, index) => {
      const bar = document.getElementById(id);
      const amountValue = `$${jsonData[index].amount.toFixed(2)}`;

      // Hover events
      bar.addEventListener("mouseover", () => {
        bar.textContent = amountValue;
        bar.style.display = "flex";
        // bar.style.alignItems = "start";
        bar.style.justifyContent = "center";
        bar.style.color = "#hsl(25, 47%, 15%)";
        bar.style.fontSize = "10px";
        bar.style.fontWeight = "bold";
        bar.style.paddingTop = "5px";
      });

      bar.addEventListener("mouseout", () => {
        bar.textContent = "";
      });
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();
