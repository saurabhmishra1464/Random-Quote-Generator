
const tabs = document.querySelector('.tabs');
const listofTabs =  tabs.querySelectorAll('div');
const tabContents = document.querySelector('.content-wrapper');
const listofContent =  tabContents.querySelectorAll('div');
const info = document.querySelector('.info');

listofTabs.forEach((value,index) => {
    debugger
    value.addEventListener('click', (event)=>{
        debugger
        const currentId = event.target.dataset.id;
        listofTabs.forEach(tab => {
            tab.classList.remove('active');
        });
        value.classList.add('active');

        listofContent.forEach((tabcontent)=>{
            tabcontent.classList.remove("active");
        });
        const currentElement = document.getElementById(currentId);
        currentElement.classList.add('active');
    })
})


