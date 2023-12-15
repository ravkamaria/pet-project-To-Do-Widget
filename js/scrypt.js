const widget = document.querySelector(".widget");
const widgetList = document.querySelector(".widget-list");
const widgetText = document.querySelector(".widget-list-empty");
const btnAddTask = document.querySelector(".action-add");
const widgetRibbon = document.querySelector(".widget-ribbon");
const modalMenu = document.querySelector(".menu-root");
const bodyAria = document.querySelector("body");
const draggableModal = document.querySelector(".draggable-modal");

widgetRibbon.addEventListener("click", handlerMenu);
btnAddTask.addEventListener("click", handlerAddTask);

function handlerAddTask() {
  const markUp = `<div class="item">
    <div class="item-content">
        <div class="item-checkbox">
            <div class="item-checkbox-tag">
                <img src="./images/Icon (4).svg" alt="">
            </div>
            <input class="item-checkbox-content" placeholder="Title..."></input>
        </div>
    </div>
    <div class="item-actions">
        <button class="action-up"><img src="./images/Icon (7).svg" alt=""></button>
        <button class="action-down"><img src="./images/Icon (1).svg" alt=""></button>
        <button class="action-menu"><img src="./images/Icon (6).svg" alt=""></button>
    </div>
    </div>`;
  widgetList.insertAdjacentHTML("beforeend", markUp);
  widgetText.style.display = "none";
  const btnActionMenu = document.querySelectorAll(".action-menu");
  btnActionMenu.forEach((btnMenu) => {
    btnMenu.addEventListener("click", handlerActionMenu);
  });
}

function handlerActionMenu() {
  const headerModalTitle = document.querySelector(".header-modal-title");
  const btnClose = document.querySelector(".header-modal-close-btn");
  const inputTitle = document.querySelector(".item-checkbox-content");
  headerModalTitle.textContent = `Task: ${inputTitle.value}`;
  draggableModal.classList.add("menu-open");
  btnClose.addEventListener("click", function () {
    draggableModal.classList.remove("menu-open");
  });
}

function handlerMenu() {
  modalMenu.classList.add("menu-open");
  bodyAria.addEventListener("click", handlerCloseModal);
}

function handlerCloseModal(e) {
  if (e.target !== bodyAria) {
    return;
  }
  modalMenu.classList.remove("menu-open");
}
