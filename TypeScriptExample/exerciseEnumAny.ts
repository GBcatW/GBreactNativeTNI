//การกำหนด enum สำหรับสถานะสินค้า
enum ProductStatus {
  Available = "Available",
  OutOfStock = "Out of Stock",
  Discontinued = "Discontinued",
}

//การกำหนด array ของสินค้าใช้ชนิดข้อมูล any
let products: any[] = [
  { name: "Laptop", status: ProductStatus.Available, price: 1200 },
  { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
  { name: "Taplet", status: ProductStatus.Discontinued, price: 300 },
];
//ฟังก์เชันสำหรับแสดงข้อมูลสินค้า
function displayOrderDetails(productdetails: any[]) {
  productdetails.forEach((productdetails) => {
    console.log(`Product:${productdetails.name}, Status: ${productdetails.status}, price: ${productdetails.price}`)
  });
}

displayOrderDetails(products);
