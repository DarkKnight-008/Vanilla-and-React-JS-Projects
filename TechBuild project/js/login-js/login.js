const lock_icon = document.querySelector("#lock_icon");
const lock_input = document.querySelector("#lock_input");

lock_icon.addEventListener("click", () => {
    if (lock_input.type === "password") 
    {
        lock_input.type = "text";
        lock_icon.className = "ri-lock-unlock-line input-icon";
    } else {
        lock_input.type = "password";
        lock_icon.className = "ri-lock-fill input-icon";
    }

});