const { TIMEOUT } = require("node:dns");

exports.HomePage=class HomePage{
    constructor(page){
        this.page=page;
        this.productList="//h4[@class='card-title']";
        this.cartButton="//a[text()='Add to cart']";
        // constructor
        //this.addToCartLink = page.getByRole('link', { name: 'Add to cart' });

        this.cart="//a[normalize-space()='Cart']"
    }
    /*
    async addProductToCart(productName){
        const productList=await this.page.$$(this.productList);
        for(const product of productList){
            //const text=product.textContent();
            if(productName===await product.textContent()){
                await product.click();
                break;
            }
        }
        await this.page.on('dialog',async dialog=>{
            if(dialog.message().includes("added")){
                await dialog.accept();
            }
        })
        
        
         //await this.page.waitForSelector(this.cartButton);   
        await this.page.locator(this.cartButton).click();
    }
    */
   async addProductToCart(productName) {
  const product = this.page.locator(
    "//h4[@class='card-title']/a",
    { hasText: productName }
  );

  await product.click(); // safe: locator re-attaches automatically

  // Register dialog handler BEFORE clicking
  this.page.once('dialog', dialog => dialog.accept());
  //await this.page.waitForLoadState('load');
//await this.page.waitForLoadState('domcontentloaded')
  await this.page.locator(this.cartButton).click();
}

    async gotoCart(){
        await this.page.locator(this.cart).click();
        
    }
}