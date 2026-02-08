exports.CartPage=class CartPage {

    constructor(page) {
        this.page=page;
        this.noOfProducts="//tbody/tr/td[2]";
    }

    async checkTheProductInCart(productName){
        

        const productInCart=await this.page.$$(this.noOfProducts);
       // console.log(await  productInCart);
        //const product=null;
        for(let product of  productInCart){
            const productName1=await product.textContent();
            console.log(productName1);
            console.log(await product.textContent());
            const text=await product.textContent();
            if(text?.trim()==productName){
                return true;
                break;
            }
        }
        return false;
    
        
    }
}