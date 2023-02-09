const share_button = document.querySelector(".share_button");
const share_option = document.querySelector(".share_option");
const share_button_close = document.querySelector(".share_button_close");

share_button.addEventListener("click", function()  {
    share_option.classList.toggle("active");
    
})

share_button_close.addEventListener("click", function()  {
    share_option.classList.remove("active");
    
})