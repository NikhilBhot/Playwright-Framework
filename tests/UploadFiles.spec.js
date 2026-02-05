const{expect,test}=require('@playwright/test');

test('Upload Single File',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator("//input[@id='file-upload']").setInputFiles("F:/YoutubePlaywright/tests/UploadFiles/Nikhil_Bhot.CandidateDetails (1).docx")
    await page.locator("//input[@id='file-submit']").click();
    
    await page.waitForTimeout(5000);
    const text=await page.locator("div[class='example'] h3").textContent();
    await expect(text).toBe('File Uploaded!');
})

test.only('Upload multiple File',async({page})=>{
    await page.goto('https://www.testkru.com/Elements/Files?utm_source=chatgpt.com');
    await page.locator("//input[@id='multiFileUpload']").setInputFiles(['F:/YoutubePlaywright/tests/UploadFiles/Nikhil_Bhot.CandidateDetails (1).docx',
        'F:/YoutubePlaywright/tests/UploadFiles/NikhilBhotPlaywrightQA.pdf'
    ]);

    const text=await page.locator("//input[@id='multiFileUpload']").textContent();
    //await expect(page.locator("//input[@id='multiFileUpload']")).toContainText('2');
    await page.waitForTimeout(5000);

})
    