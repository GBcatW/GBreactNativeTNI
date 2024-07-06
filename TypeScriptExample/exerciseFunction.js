var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//กำหนด array ของผลิตภัณฑ์
var products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Apparel" },
    { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
//Create function filterProductByPrice สำหรับข้อมูลผลิตภัณฑ์ตามราคาที่กำหนด
function filterProductByPrice(products, minPrice) {
    return products.filter(function (product) { return product.price > minPrice; });
}
//create discountProduct funtion ใช้สำหรับลดราคาสินค้า 10%
function discountProduct(products) {
    return products.filter(function (product) { return (__assign(__assign({}, products), { price: product.price * 0.9 })); });
}
//call Function
var filterProduct = filterProductByPrice(products, 2000);
var discountProducts = discountProduct(filterProduct);
//output
console.log(filterProduct);
