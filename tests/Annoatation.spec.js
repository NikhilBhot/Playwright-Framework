const{test,expect}=require('@playwright/test')
//only
/*
test.only('test1',async({page})=>{
    console.log("This Is Test 1");

})

*/
//skip
/*
test.skip('test2',async({page})=>{
    console.log("This Is Test 2");
    
})
    */

/*
test('test3',async({page,browserName})=>{
    console.log("This Is Test 3");
    if(browserName==='chromium'){
        test.skip();
    }
    
})
    */
//fixme
/*
test('test4',async({page})=>{
    test.fixme();
    console.log("This Is Test 4");
    
})
    */

//fail
/*
test('test5',async({page})=>{
    test.fail();
    console.log("This Is Test 5");
    expect(1).toBe(2)
    
})
*/
/*
test('test6',async({page,browserName})=>{
    console.log("This Is Test 6");
    if(browserName==="firefox"){
        test.fail();
    }
    
})
    */
   test('test7',async({page})=>{
    console.log("This Is Test 7");
    //test.slow();
    test.setTimeout(5000);
    await page.goto("https://www.demoblaze.com/");


})
