"use strict";

window.onload = function () {
    particlesJS.load("particles-js", "json/particles.json", function () {});

    let radio = document.getElementsByName("form-radio");

    const arr = new Map([
        ["Telegram", "#039be5"],
        ["WhatsApp", "#4caf50"],
        ["Viber", "#7f40bd"],
    ]);

    for (let i = 0; i < radio.length; i++) {
        radio[i].onchange = function () {
            let messenger = document.querySelector(".form__label-socials");
            messenger.innerHTML = this.value;
            for (let key of arr.keys()) {
                if (this.value == key) {
                    messenger.style.color = arr.get(key);
                }
            }
        };
    }
};
