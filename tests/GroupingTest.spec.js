const{test,expect}=require('@playwright/test')
test.beforeAll(async()=>{
    console.log("This Is Before All Hooks");
})

test.afterAll(async()=>{
    console.log("This is after All Hooks");
})
test.beforeEach(async()=>{
    console.log("This is agter each");
})

test.afterEach(async()=>{
    console.log('This is after ecah Hooks');
})

test.describe.only('Group1',()=>{
    test('Test1',async({page})=>{
        console.log("Test 1");

    })

    test('Test2',async({page})=>{
        console.log("Test 2");

    })
})

test.describe("Group1",()=>{
    test('Test3',async({page})=>{
    console.log("Test 3");

    })

    test('Test4',async({page})=>{
        console.log("Test 4");

    })
})


test.describe('Group2',()=>{
    test('Test5',async({page})=>{
        console.log("Test 5");

    })
})

