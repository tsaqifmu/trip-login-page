const btnShowPass = document.getElementsByTagName("button")[0];
const btnCloseEye = document.getElementById("closeEye");
const btnEye = document.getElementById("eye");

// validate
const btnDaftar = document.getElementById("btn");
const inputs = document.querySelectorAll("input");
const password = document.getElementById("sandi");
const alertEmail = document.querySelector('h3[class="hidden mt-2 text-rose-400 text-xs font-medium lg:text-sm"]');
const alertPassword = document.querySelector('h3[class="mt-2 text-xs text-stone-400 font-medium lg:text-sm"]');

// untuk show password kolom input password
btnShowPass.addEventListener("click", () => {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    btnCloseEye.classList.toggle("hidden");
    btnEye.classList.toggle("hidden");
  } else {
    password.type = "password";
    btnCloseEye.classList.toggle("hidden");
    btnEye.classList.toggle("hidden");
  }
});

// validasi email dan password tidak boleh kosong
btnDaftar.addEventListener("click", () => {
  if (inputs[0].value == "" && inputs[1].value == "") {
    // email
    alertEmail.classList.remove("hidden");
    alertEmail.innerHTML = "Harap masukkan email";

    // password
    alertPassword.innerHTML = "harap masukkan sandi";
    alertPassword.classList.replace("text-stone-400", "alert");

    // border input menjadi merah
    inputs.forEach((input) => {
      input.classList.replace("border-stone-400", "borderAlert");
    });
  } else {
    alertEmail.classList.add("hidden");
    alertPassword.classList.add("hidden");
    alertPassword.classList.replace("alert", "text-stone-400");

    // border input kembali default
    inputs.forEach((input) => {
      input.classList.replace("borderAlert", "border-stone-400");
    });
  }
});

//validasi email atau password tidak boleh kosong
btnDaftar.addEventListener("click", () => {
  if (inputs[0].value == "") {
    // email
    alertEmail.classList.remove("hidden");
    alertEmail.innerHTML = "Harap masukkan email";
    inputs[0].classList.replace("border-stone-400", "borderAlert");
  } else if (inputs[1].value == "") {
    // password
    alertPassword.innerHTML = "Harap masukkan sandi";
    alertPassword.classList.replace("text-stone-400", "alert");
    alertPassword.classList.remove("hidden");
    inputs[1].classList.replace("border-stone-400", "borderAlert");
  } else {
    alertEmail.classList.add("hidden");
    alertPassword.classList.add("hidden");
    alertPassword.classList.replace("alert", "text-stone-400");
    inputs.forEach((input) => {
      input.classList.replace("borderAlert", "border-stone-400");
    });
  }
});
