const introSec = document.getElementById("intro-sec");
const dailySec = document.getElementById("daily-sec");
const endSec = document.getElementById("end-sec");
const introTasks = document.getElementById("intro-tasks");
const introDuration = document.getElementById("intro-duration");
const introTime = document.getElementById("intro-time");
const introMsg = document.getElementById("intro-msg");
const introTasksBtns = document.getElementById("intro-tasks-btns");
const introDurationBtns = document.getElementById("intro-duration-btns");
const introTimeBtns = document.getElementById("intro-time-btns");
// const navBtnPrev = document.getElementById("nav-btn-prev");
// const navBtnNext = document.getElementById("nav-btn-next");
const navBtnPrev = document.getElementsByClassName("nav-btn-prev");
const navBtnNext = document.getElementsByClassName("nav-btn-next");
const form = document.getElementsByClassName("form");
const formSubmit = document.getElementsByClassName("form-submit");

window.addEventListener("load", () => {
  dailySec.style.display = "none";
  endSec.style.display = "none";
  introDuration.style.display = "none";
  introTime.style.display = "none";
  introMsg.style.display = "none";
  // navBtnPrev[0].style.display = "none";
  navBtnPrev[0].style.backgroundColor = "gray";

  form[0].addEventListener("submit", (e) => {
    e.preventDefault();
  });
  form[1].addEventListener("submit", (e) => {
    e.preventDefault();
  });
  form[2].addEventListener("submit", (e) => {
    e.preventDefault();
  });

  window.addEventListener("mouseover", () => {
    // navBtnPrev[0].addEventListener("click", () => {
    // navBtnPrev[0].style.backgroundColor = "gray";
    // });

    //   form.addEventListener("submit", (e) => {
    //     e.preventDefault();

    //     const task = input.value
    //     if (!task) {
    //       alert("Please fill out the task");
    //       return;
    //     }
    formSubmit[0].addEventListener("click", () => {
      formSubmit[0].value = "Submitted";
      formSubmit[0].style.backgroundColor = "red";
    });
    navBtnNext[0].addEventListener("click", () => {
      introDuration.style.display = "block";
      introTasks.style.display = "none";
    });

    formSubmit[1].addEventListener("click", () => {
      formSubmit[1].value = "Submitted";
      formSubmit[1].style.backgroundColor = "red";
    });
    navBtnPrev[1].addEventListener("click", () => {
      introDuration.style.display = "none";
      introTasks.style.display = "block";
    });
    navBtnNext[1].addEventListener("click", () => {
      introDuration.style.display = "none";
      introTime.style.display = "block";
    });

    formSubmit[2].addEventListener("click", () => {
      formSubmit[2].value = "Submitted";
      formSubmit[2].style.backgroundColor = "red";
    });
    navBtnPrev[2].addEventListener("click", () => {
      introDuration.style.display = "block";
      introTime.style.display = "none";
    });
    navBtnNext[2].addEventListener("click", () => {
      introMsg.style.display = "block";
      introTime.style.display = "none";
    });
  });
  introDurationBtns.addEventListener("mouseover", () => {
    // formSubmit[1].addEventListener("click", () => {
    //   formSubmit[1].value = "Submitted";
    //   formSubmit[1].style.backgroundColor = "red";
    // });
    // navBtnPrev[1].addEventListener("click", () => {
    //   introDuration.style.display = "none";
    //   introTasks.style.display = "block";
    // });
    // navBtnNext[1].addEventListener("click", () => {
    //   introDuration.style.display = "none";
    //   introTime.style.display = "block";
    // });
  });
});
introTimeBtns.addEventListener("mouseover", () => {
  // formSubmit[2].addEventListener("click", () => {
  //   formSubmit[2].value = "Submitted";
  //   formSubmit[2].style.backgroundColor = "red";
  // });
  // navBtnPrev[2].addEventListener("click", () => {
  //   introDuration.style.display = "block";
  //   introTime.style.display = "none";
  // });
  // navBtnNext[2].addEventListener("click", () => {
  //   introMsg.style.display = "block";
  //   introTime.style.display = "none";
  // });
});

// window.onload = function () {
//   if (localStorage.getItem("hasCodeRunBefore") === null) {
//     //code here
//     localStorage.setItem("hasCodeRunBefore", true);
//   }
// };
// });
// window.addEventListener("load", () => {
//   const form = document.querySelector("#new-task-form");
//   const input = document.querySelector("#new-task-input");
//   const list_el = document.querySelector("#tasks");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const task = input.value;
//     if (!task) {
//       alert("Please fill out the task");
//       return;
//     }
//     const task_el = document.createElement("div");
//     task_el.classList.add("task");
//     const task_content_el = document.createElement("div");
//     task_content_el.classList.add("content");
//     task_content_el.innerText = null;

//     task_el.appendChild(task_content_el);

//     const task_input_el = document.createElement("input");
//     task_input_el.classList.add("text");
//     task_input_el.type = "text";
//     task_input_el.value = task;
//     task_input_el.setAttribute("readonly", "readonly");

//     task_content_el.appendChild(task_input_el);

//     const task_actions_el = document.createElement("div");
//     task_actions_el.classList.add("actions");

//     const task_edit_el = document.createElement("button");
//     task_edit_el.classList.add("edit");
//     task_edit_el.innerHTML = "Edit";

//     const task_delete_el = document.createElement("button");
//     task_delete_el.classList.add("delete");
//     task_delete_el.innerHTML = "Delete";

//     task_actions_el.appendChild(task_edit_el);
//     task_actions_el.appendChild(task_delete_el);

//     task_el.appendChild(task_actions_el);

//     list_el.appendChild(task_el);

//     input.value = "";

//     task_edit_el.addEventListener("click", () => {
//       if (task_edit_el.innerText.toLocaleLowerCase() == "edit") {
//         task_input_el.removeAttribute("readonly");
//         task_input_el.focus();
//         task_edit_el.innerText = "Save";
//       } else {
//         task_input_el.setAttribute("readonly", "readonly");
//         task_edit_el.innerText = "Edit";
//       }
//     });

//     task_delete_el.addEventListener("click", () => {
//       list_el.removeChild(task_el);
//     });
//   });
// });

// 25:45
