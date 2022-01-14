const product = {
    itemName: "phone",
    Price: 50,
    discount: 10,
    itemCode: "p1",
   
}



//Factory Function
 function createProduct(name, price, discount, itemCode) {
     return{
         itemName: name,
         price: price,
         discount: discount,
         itemCode: itemCode
     }
 }
 const football = createProduct("football",400,10,"F30"); 

 //Constructor Function
 //always use pascal Case
 function Product(name, price, discount, itemCode){
     this.itemCode = name;
     this.price = price;
     this.discount =  discount;
     this.itemCode = itemCode;
     this.discountValue = function(){
         return price = price * discount/100;
     }

 }
 const mobile =  new Product("Oneplus Nord", 30000, 5, "op5")