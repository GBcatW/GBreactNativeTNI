enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Cancelled = "Cancelled",
}
//สร้างปังก์ชัน
function displayOrderStatus(status: OrderStatus) {
  switch (status) {
    case OrderStatus.Pending:
      console.log("Your order is pending.");
      break;
    case OrderStatus.Shipped:
      console.log("Your order is Shipped.");
      break;
    case OrderStatus.Cancelled:
      console.log("Your order is Cancelled.");
      break;
    default:
      console.log("Unknown order status.");
  }
}//end of function

//ทดสอบ function
displayOrderStatus(OrderStatus.Shipped);
displayOrderStatus(OrderStatus.Cancelled);

