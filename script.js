const wrapper = document.querySelector(`.wrapper`);
const loginLink = document.querySelector(`.login_link`);
const registerLink = document.querySelector(`.register_link`);
const btnLogin = document.querySelector(`.btnLogin_popup`);
const closeLogin = document.querySelector(`.icon_close`);
const formBoxLogin = document.querySelector(`.login`);
const fromBoxRegis = document.querySelector(`.registration`);

registerLink.addEventListener(`click`, () => {
    formBoxLogin.classList.add(`added`);
    fromBoxRegis.classList.remove(`added`);
    wrapper.classList.add(`registration_height`);
});

loginLink.addEventListener(`click`, () => {
    formBoxLogin.classList.remove(`added`);
    fromBoxRegis.classList.add(`added`);
    wrapper.classList.remove(`registration_height`);
});

btnLogin.addEventListener(`click`, () => {
    wrapper.classList.add(`Wrapper_OpenClose`);
});

closeLogin.addEventListener(`click`, () => {
    wrapper.classList.remove(`Wrapper_OpenClose`);
});
