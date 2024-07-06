type Product = {
  name: string;
  price: number;
  category: string;
};

//กำหนด array ของผลิตภัณฑ์
let products: Product[] = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Shirt", price: 1200, category: "Apparel" },
  { name: "Coffee Maker", price: 2500, category: "Appliances" },
];

//Create function filterProductByPrice สำหรับข้อมูลผลิตภัณฑ์ตามราคาที่กำหนด
function filterProductByPrice(products:Product[],minPrice:number):Product[]{
  return products.filter(product=>product.price>minPrice);

}

//create discountProduct funtion ใช้สำหรับลดราคาสินค้า 10%
function discountProduct(products:Product[]):Product[]{
  return products.map(product=>({...product,price:product.price * 0.9}));

}


//call Function
let filterProduct = filterProductByPrice(products,2000);
let discountProducts = discountProduct(filterProduct);

//output
console.log(discountProducts);