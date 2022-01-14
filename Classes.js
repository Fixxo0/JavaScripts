//Declaring A Class
class product{
    constructor(itemName, Price, Discount, Productcode){
        this.itemName = itemName ; 
        this.Price = Price;
        this.Discount = Discount;
        this.Productcode = Productcode;
    }
}
let Pencil = new product("pencil", 20, 2, "P10");
//Extended Classes 
class Furniture extends product{
    constructor(itemName){
        super (item)
    }
}
//Class Expression and Getter and Shetter 
const Product1 = class product{
    constructor(itemName, Price, Discount, Productcode){
        this.itemName = itemName;
        this.Price = Price;
        this.Discount = Discount;
        this.Productcode = Productcode;
    }
    get getDiscountValue(){  // using Getter Method;
        return this.Discount;
    }
    set  setDiscountValue(value){ // Using Setter Method;
        this.Discount = value;
    }
    get discountValue(){  //
        return this.Discount*this.Price/100
    }
}
let chair = new Product1("Chair", 499, 15, "C10");