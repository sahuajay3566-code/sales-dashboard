const data = [
  { month: "Jan", sales: 12000, orders: 40 },
  { month: "Feb", sales: 18000, orders: 55 },
  { month: "Mar", sales: 15000, orders: 48 },
  { month: "Apr", sales: 22000, orders: 65 }
];

document.getElementById("totalSales").innerText =
  data.reduce((sum, item) => sum + item.sales, 0);

document.getElementById("orders").innerText =
  data.reduce((sum, item) => sum + item.orders, 0);

new Chart(document.getElementById("salesChart"), {
  type: "bar",
  data: {
    labels: data.map(d => d.month),
    datasets: [{
      label: "Sales (₹)",
      data: data.map(d => d.sales)
    }]
  }
});
