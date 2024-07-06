//การกำหนด enum สำหรับสถานะสินค้า
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "Out of Stock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
//การกำหนด array ของสินค้าใช้ชนิดข้อมูล any
var products = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Taplet", status: ProductStatus.Discontinued, price: 300 },
];
//ฟังก์เชันสำหรับแสดงข้อมูลสินค้า
function displayOrderDetails(productdetails) {
    productdetails.forEach(function (productdetails) {
        console.log("Product:".concat(productdetails.name, ", Status: ").concat(productdetails.status, ", price: ").concat(productdetails.price));
    });
}
displayOrderDetails(products);
