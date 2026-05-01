const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");


tabs.forEach(tab => {
  tab.addEventListener("click", event => {

    // Remove active from all tabs
    tabs.forEach(t => t.classList.remove("active"));

    // Remove active from all contents
    contents.forEach(c => c.classList.remove("active"));

    // Add active to clicked tab
    tab.classList.add("active");

    // Show the correct content
    const table = tab.dataset.tab;

    document.getElementById(`tab-${table}`).classList.add("active");

  });
});



// Array.from(tabs).forEach(tab => {
//     tab.addEventListener("click", event =>{
        
//         tabs.forEach(a => a.classList.remove("active"));
        
//         contents.forEach(b => b.classList.remove("active"));

//         tab.classList.add("active");
         
//         const tabId = tab.dataset.tab;
        
//         document.getElementById(`tab-${tabId}`).classList.add("active");

//     })
// })

// Array.from(tabs).forEach(tab => {
//     button1.addEventListener("click", event => {
//         button2.style.display = "none";
//         button3.style.display = "none";
//         button4.style.display = "none";
//         button1.textContent = "Content for Tab 1";
//     })
//     button2.addEventListener("click", event => {
//         button1.style.display = "none";
//         button3.style.display = "none";
//         button4.style.display = "none";
//         button2.textContent = "Content for Tab 2";
//     })
//     button3.addEventListener("click", event => {
//         button1.style.display = "none";
//         button2.style.display = "none";
//         button4.style.display = "none";
//         button3.textContent = "Content for Tab 3";
//     })
//     button4.addEventListener("click", event => {
//         button1.style.display = "none";
//         button2.style.display = "none";
//         button3.style.display = "none";
//         button4.textContent = "Content for Tab 4";
//     })

// })