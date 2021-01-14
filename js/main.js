"use strict";
{
  const start = document.querySelector(".start");
  const ansnum = document.getElementById("ansnum");
  const ansnum2 = document.getElementById("ansnum2");
  const box0 = document.querySelector(".box0");
  const box1 = document.querySelector(".box1");
  const box2 = document.querySelector(".box2");
  const box3 = document.querySelector(".box3");
  const box4 = document.querySelector(".box4");
  const box5 = document.querySelector(".box5");
  const box6 = document.querySelector(".box6");
  const box7 = document.querySelector(".box7");
  const box8 = document.querySelector(".box8");
  const box9 = document.querySelector(".box9");
  const clear2 = document.querySelector(".clear2");
  const clear3 = document.querySelector(".clear3");
  const check = document.querySelector(".check");
  const correct = document.querySelector(".correct");
  const mistake = document.querySelector(".mistake");
  let num1 = document.querySelector(".num1");
  let num2 = document.querySelector(".num2");
  let num3 = document.querySelector(".num3");
  let num4 = document.querySelector(".num4");

  function started() {
    const nums1 = [5, 6, 7, 8, 9];
    let numcou1 = nums1[Math.floor(Math.random() * nums1.length)];
    num1.textContent = numcou1;
    const nums2 = [1, 2, 3, 4];
    let numcou2 = nums2[Math.floor(Math.random() * nums2.length)];
    num2.textContent = numcou2;
    const nums3 = [1, 2, 4];
    let numcou3 = nums3[Math.floor(Math.random() * nums3.length)];
    num3.textContent = numcou3;
    const nums4 = [3, 5];
    let numcou4 = nums4[Math.floor(Math.random() * nums4.length)];
    num4.textContent = numcou4;

    ansnum1.textContent = "";
    ansnum2.textContent = "";
   
  }

  start.addEventListener("click", () => {
    started();
    correct.classList.add("hidden");
    mistake.classList.add("hidden");
    if (start.textContent === "スタート" || coun.textContent === "1" || "2" || "3" || "4" || "5") {
      start.textContent = "つぎのもんだい";      
      coun.textContent = "1";
      qes.style.display = "block";
      qes2.style.display = "none";
      qes3.style.display = "none";
      qes4.style.display = "none";
      qes5.style.display = "none";

      
   }    
  });

  const next = document.querySelector(".next");
  const coun = document.querySelector(".coun");
  let qes = document.querySelector(".qes");

  check.addEventListener("click", () => {
    let numcou1 = parseInt(num1.textContent);
    let numcou2 = parseInt(num2.textContent);
    let numcou3 = parseInt(num3.textContent);
    let numcou4 = parseInt(num4.textContent);
    let red = 2;
    let blue = 1;

    if (coun.textContent === "1" || "2" || "3" || "4" || "5") {
      if (coun.textContent === "1") {
        if (
          numcou1 + numcou2 ===
          parseInt(ansnum1.textContent * 10) + parseInt(ansnum2.textContent)
        ) {
          console.log(numcou1 + numcou2);
          correct.classList.remove("hidden");
          mistake.classList.add("hidden");
        } else {
          correct.classList.add("hidden");
          mistake.classList.remove("hidden");
        }
      }

      if (coun.textContent === "2") {
        if (
          numcou3 + numcou4 ===
          parseInt(ansnum1.textContent * 10) + parseInt(ansnum2.textContent)
        ) {
          correct.classList.remove("hidden");
          mistake.classList.add("hidden");
        } else {
          correct.classList.add("hidden");
          mistake.classList.remove("hidden");
        }
      }

      if (coun.textContent === "3") {
        if (
          numcou1 + numcou2 + numcou3 + numcou4 ===
          parseInt(ansnum1.textContent * 10) + parseInt(ansnum2.textContent)
        ) {
          correct.classList.remove("hidden");
          mistake.classList.add("hidden");
        } else {
          correct.classList.add("hidden");
          mistake.classList.remove("hidden");
        }
      }

      if (coun.textContent === "4") {
        if (
          numcou1 + numcou3 - red ===
          parseInt(ansnum1.textContent * 10) + parseInt(ansnum2.textContent)
        ) {
          correct.classList.remove("hidden");
          mistake.classList.add("hidden");
        } else {
          correct.classList.add("hidden");
          mistake.classList.remove("hidden");
        }
      }

      if (coun.textContent === "5") {
        if (
          numcou1 + numcou2 + numcou3 + numcou4 - red - blue ===
          parseInt(ansnum1.textContent * 10) + parseInt(ansnum2.textContent)
        ) {
          correct.classList.remove("hidden");
          mistake.classList.add("hidden");
        } else {
          correct.classList.add("hidden");
          mistake.classList.remove("hidden");
        }
      }
    }
  });

  const qes2 = document.querySelector('.qes2');
  const qes3 = document.querySelector('.qes3');
  const qes4 = document.querySelector('.qes4');
  const qes5 = document.querySelector('.qes5');

  next.addEventListener("click", () => {
    ansnum1.textContent = "";
    ansnum2.textContent = "";

    correct.classList.add("hidden");
    mistake.classList.add("hidden");

    if (coun.textContent === "1") {
      coun.textContent = "2";
      qes.style.display = "none";  
      qes2.style.display = "block";  

    
    
    } else if (coun.textContent === "2") {
      coun.textContent = "3";
      qes2.style.display = "none";
      qes3.style.display = "block";
      
    } else if (coun.textContent === "3") {
      coun.textContent = "4";
      qes3.style.display = "none";
      qes4.style.display = "block";
      
    } else if (coun.textContent === "4") {
      coun.textContent = "5";
      qes4.style.display = "none";
      qes5.style.display = "block";
     
    }


   
  });

  const prev = document.querySelector('.prev');
  prev.addEventListener('click', () => {
 
    if (coun.textContent === "5") {
      coun.textContent = "4";
      qes5.style.display = "none";
      qes4.style.display = "block";
     
    } else if (coun.textContent === "4") {
      coun.textContent = "3";
      qes4.style.display = "none";
      qes3.style.display = "block";
          
    } else if (coun.textContent === "3") {
      coun.textContent = "2";
      qes3.style.display = "none";
      qes2.style.display = "block";
      
    } else if (coun.textContent === "2") {
      coun.textContent = "1";
      qes2.style.display = "none";
      qes.style.display = "block";

    }
  });

  box1.addEventListener("click", () => {
    if (ansnum2.value === "") {
      ansnum2.textContent = box1.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = box1.textContent;
    }
  });
  box2.addEventListener("click", () => {
    if (ansnum2.value === "") {
      ansnum2.textContent = box2.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = box2.textContent;
    }
  });

  box3.addEventListener("click", () => {
    if (ansnum2.value === "") {
      ansnum2.textContent = box3.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = box3.textContent;
    }
  });
  box4.addEventListener("click", () => {
    if (ansnum2.value === "") {
      ansnum2.textContent = box4.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = box4.textContent;
    }
  });
  box5.addEventListener("click", () => {
    if (ansnum2.value === "") {
      ansnum2.textContent = box5.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = box5.textContent;
    }
  });
  box6.addEventListener("click", () => {
    if (ansnum2.value === "") {
      ansnum2.textContent = box6.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = box6.textContent;
    }
  });
  box7.addEventListener("click", () => {
    if (ansnum2.value === "") {
      ansnum2.textContent = box7.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = box7.textContent;
    }
  });
  box8.addEventListener("click", () => {
    if (ansnum2.value === "") {
      ansnum2.textContent = box8.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = box8.textContent;
    }
  });
  box9.addEventListener("click", () => {
    if (ansnum2.value === "") {
      ansnum2.textContent = box9.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = box9.textContent;
    }
  });
  box0.addEventListener("click", () => {
    if (ansnum2.value === "") {
      ansnum2.textContent = box0.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = box0.textContent;
    }
  });
  clear2.addEventListener("click", () => {
    ansnum2.textContent = "　";
    ansnum1.textContent = "　";
    correct.classList.add("hidden");
    mistake.classList.add("hidden");
  });

  function reset() {
    window.location.reload();
  }

  clear3.addEventListener("click", () => {
    reset();
  });
}
