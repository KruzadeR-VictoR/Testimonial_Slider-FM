const Btns = [...document.querySelectorAll(".Btn")];
const displayImage = document.querySelector(".display-image");
const quote = document.querySelector(".quote");
const name = document.querySelector(".name");
const role = document.querySelector(".role");

console.log(Btns);
console.log(displayImage);

Btns.forEach((Btn) => {
  Btn.addEventListener("click", () => {
    // console.log({ displayImage });

    if (Btn.className.includes("nextBtn")) {
      displayImage.src = "./images/image-john.jpg";
      quote.innerHTML = `“ If you want to lay the best foundation possible I’d recommend taking this course. 
      The depth the instructors go into is incredible. I now feel so confident about 
      starting up as a professional developer. ”`;
      name.innerText = `John Tarkpor`;
      role.innerText = `Junior Front-end Developer`;
    } else {
      displayImage.src = "./images/image-tanya.jpg";
      quote.innerHTML = `  “ I’ve been interested in coding for a while but never taken the jump, until now. 
      I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
      excited about the future. ”`;
      name.innerText = `Tanya Sinclair`;
      role.innerText = `UX Engineer`;
    }
    console.log("object");
  });
});
