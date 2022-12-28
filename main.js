let notifications =document.querySelector(".notifications"),
 buttons =document.querySelectorAll(".buttons .btn");

let toastDetails ={
    timer:5000,
    success:{
        icon:"fa-circle-check",
        text:"success: this is a success toast."
    },
   error :{
        icon:"fa-circle-xmark",
        text:"Error: This is an error toast."
    },
    warning:{
        icon:"fa-triangle-exclamation",
        text:"Warning: this is a warning toast."
    },
    info:{
        icon:"fa-circle-info",
        text:"info: this is a info toast."
        }
    }

    let removeToast = (toast) =>{
    toast.classList.add('hide');
    setTimeout(() => toast.remove(),500);
    }


let createToast = (id) =>{
    //Getting the icon and text for the toast based on the passed
    let {icon, text}= toastDetails[id];
    let toast = document.createElement("li"); // Creating a new 'li'element for the toast
    toast.className = `toast ${id}`;
    toast.innerHTML = ` <div class="column">
                             <i class="fa-solid ${icon}"></i>
                              <span>${text}</span>
                            </div>
                             <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)" ></i></li>`;    

    notifications.appendChild(toast);  //Append the toast to the notifications ul

    setTimeout(() => removeToast(toast),toastDetails.timer);
    //Setting a timeout to remove the toast after the specified du
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});