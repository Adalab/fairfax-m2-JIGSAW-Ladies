"use strict";const valueInput=document.querySelector(".input__name"),valueName=document.querySelector(".preview__title");function previewCard(){const e=valueInput.value;valueName.innerHTML=""===e?"Nombre Apellido":e}valueInput.addEventListener("keyup",previewCard);