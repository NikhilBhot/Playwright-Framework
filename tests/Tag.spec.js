const{test,expect}=require('@playwright/test')

test('test1@sanity',async({page})=>{
    console.log("This  Is My Test 1");
})

test('test2@sanity',async({page})=>{
    console.log("This  Is My Test 2");
})

test('test3@reg',async({page})=>{
    console.log("This  Is My Test 3");
})

test('test4@reg',async({page})=>{
    console.log("This  Is My Test 4");
})
test('test5@sanity@reg',async({page})=>{
    console.log("This  Is My Test 5");
})