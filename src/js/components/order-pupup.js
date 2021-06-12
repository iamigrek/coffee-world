const btns = document.querySelectorAll(".order__select");
const modalOverlay = document.querySelector(".modal-overlay ");
const modals = document.querySelectorAll(".modal");

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

modalOverlay.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});

function closeModal() {
  modalOverlay.classList.remove("modal-overlay--visible");
  modals.forEach((el) => {
    el.classList.remove("modal--visible");
  });
}

function ClearFields() {
  modalOverlay.classList.remove("modal-overlay--visible");
  modals.forEach((el) => {
    el.classList.remove("modal--visible");
  });

  document.getElementById("order-inp-1").value = "";
  document.getElementById("order-inp-2").value = "";
  document.getElementById("order-inp-3").value = "";

  var uncheck = document.getElementsByTagName("input");
  for (var i = 0; i < uncheck.length; i++) {
    if (uncheck[i].type == "checkbox") {
      uncheck[i].checked = false;
    }
  }
}
