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
  const page1 = document.querySelector(".page1");
  const page2 = document.querySelector(".page2");

  function started() {
    let min1 = 3;
    let max1 = 9;
    const numcou1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
    num1.textContent = numcou1;

    let min2 = 4;
    let max2 = 9;
    const numcou2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);
    num2.textContent = numcou2;
    let min3 = 3;
    let max3 = 9;

    const numcou3 = Math.floor(Math.random() * (max3 - min3 + 1) + min3);
    num3.textContent = numcou3;
    let min4 = 3;
    let max4 = 9;

    const numcou4 = Math.floor(Math.random() * (max4 - min4 + 1) + min4);
    num4.textContent = numcou4;

    ansnum1.textContent = "";
    ansnum2.textContent = "";
  }

  start.addEventListener("click", () => {
    started();
    correct.classList.add("hidden");
    mistake.classList.add("hidden");
    qes2.style.display = "none";
    qes.style.display = "block";
    prev1.classList.remove("eras");
    prev2.classList.add("eras");
    prev3.classList.add("eras");
    prev4.classList.add("eras");
    prev5.classList.add("eras");
    next.classList.remove("eras");
    // check.classList.remove("eras");
    page1.style.display = "none";
    page2.classList.remove("hidden");

    if (
      start.textContent === "スタート" ||
      coun.textContent === "1" ||
      "2" ||
      "3" ||
      "4" ||
      "5"
    ) {
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

  const qes2 = document.querySelector(".qes2");
  const qes3 = document.querySelector(".qes3");
  const qes4 = document.querySelector(".qes4");
  const qes5 = document.querySelector(".qes5");

  let qes2bus = document.querySelector(".qes2bus");
  let qes2tra = document.querySelector(".qes2tra");
  let qes3pc = document.querySelector(".qes3pc");
  let qes3fiar = document.querySelector(".qes3fiar");

  next.addEventListener("click", () => {
    let numcou1 = parseInt(num1.textContent);
    let numcou2 = parseInt(num2.textContent);
    let numcou3 = parseInt(num3.textContent);
    let numcou4 = parseInt(num4.textContent);

    if (coun.textContent === "1") {
      coun.textContent = "2";

      let min1 = 1;
      let max1 = 6;
      const qes2bus1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);

      let min2 = 1;
      let max2 = 7;

      const qes2tra1 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);

      if (numcou1 < qes2bus1) {
        qes2bus.textContent = numcou1;
      } else {
        qes2bus.textContent = qes2bus1;
      }
      if (numcou2 < qes2tra1) {
        qes2tra.textContent = numcou2;
      } else {
        qes2tra.textContent = qes2tra1;
      }

      ansnum1.textContent = "";
      ansnum2.textContent = "";

      correct.classList.add("hidden");
      mistake.classList.add("hidden");

      qes.style.display = "none";
      qes2.style.display = "block";
      prev2.classList.remove("eras");
    } else if (coun.textContent === "2") {
      coun.textContent = "3";
      correct.classList.add("hidden");
      mistake.classList.add("hidden");

      prev3.classList.remove("eras");

      qes2.style.display = "none";
      qes3.style.display = "block";

      let min1 = 1;
      let max1 = 6;
      const qes3pc1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);

      let min2 = 1;
      let max2 = 7;
      const qes3fiar1 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);

      if (numcou3 < qes3pc1) {
        qes3pc.textContent = numcou3;
      } else {
        qes3pc.textContent = qes3pc1;
      }
      if (numcou4 < qes3fiar1) {
        qes3fiar.textContent = numcou4;
      } else {
        qes3fiar.textContent = qes3fiar1;
      }


      ansnum1.textContent = "";
      ansnum2.textContent = "";
    } else if (coun.textContent === "3") {
      coun.textContent = "4";
      prev4.classList.remove("eras");
      qes3.style.display = "none";
      qes4.style.display = "block";
      ansnum1.textContent = "";
      ansnum2.textContent = "";
      correct.classList.add("hidden");
      mistake.classList.add("hidden");
    } else if (coun.textContent === "4") {
      coun.textContent = "5";

      prev5.classList.remove("eras");
      qes4.style.display = "none";
      qes5.style.display = "block";
      next.classList.add("eras");
      ansnum1.textContent = "";
      ansnum2.textContent = "";
      correct.classList.add("hidden");
      mistake.classList.add("hidden");
      
    }
  });

  const prev1 = document.querySelector(".prev1");
  const prev2 = document.querySelector(".prev2");
  const prev3 = document.querySelector(".prev3");
  const prev4 = document.querySelector(".prev4");
  const prev5 = document.querySelector(".prev5");

  prev1.addEventListener("click", () => {
    coun.textContent = "1";
    qes2.style.display = "none";
    qes3.style.display = "none";
    qes4.style.display = "none";
    qes5.style.display = "none";
    qes.style.display = "block";
    ansnum2.textContent = "";
    ansnum1.textContent = "";
    correct.classList.add("hidden");
    mistake.classList.add("hidden");
    // prev1.classList.add("eras");
    // prev2.classList.remove("eras");
  });
  prev2.addEventListener("click", () => {
    coun.textContent = "2";

    qes.style.display = "none";
    qes3.style.display = "none";
    qes4.style.display = "none";
    qes5.style.display = "none";
    qes2.style.display = "block";
    ansnum2.textContent = "";
    ansnum1.textContent = "";
    correct.classList.add("hidden");
    mistake.classList.add("hidden");
    // prev2.classList.add("eras");
  });
  prev3.addEventListener("click", () => {
    coun.textContent = "3";

    qes.style.display = "none";
    qes2.style.display = "none";
    qes4.style.display = "none";
    qes5.style.display = "none";
    qes3.style.display = "block";
    ansnum2.textContent = "";
    ansnum1.textContent = "";
    correct.classList.add("hidden");
    mistake.classList.add("hidden");
  });
  prev4.addEventListener("click", () => {
    coun.textContent = "4";

    qes.style.display = "none";
    qes2.style.display = "none";
    qes3.style.display = "none";
    qes5.style.display = "none";
    qes4.style.display = "block";
    ansnum2.textContent = "";
    ansnum1.textContent = "";
    correct.classList.add("hidden");
    mistake.classList.add("hidden");
  });
  prev5.addEventListener("click", () => {
    coun.textContent = "5";

    qes.style.display = "none";
    qes2.style.display = "none";
    qes3.style.display = "none";
    qes4.style.display = "none";
    qes5.style.display = "block";
    ansnum2.textContent = "";
    ansnum1.textContent = "";
    correct.classList.add("hidden");
    mistake.classList.add("hidden");
  });

  check.addEventListener("click", () => {
    let numcou1 = parseInt(num1.textContent);
    let numcou2 = parseInt(num2.textContent);
    let numcou3 = parseInt(num3.textContent);
    let numcou4 = parseInt(num4.textContent);
    let qes2busis = parseInt(qes2bus.textContent);
    let qes2trais = parseInt(qes2tra.textContent);
    let qes3pcis = parseInt(qes3pc.textContent);
    let qes3fiaris = parseInt(qes3fiar.textContent);
    // console.log(qes3fiaris);

    if (coun.textContent === "1" || "2" || "3" || "4" || "5") {
      if (coun.textContent === "1") {
        if (
          numcou1 + numcou2 + numcou3 + numcou4 ===
          parseInt(ansnum1.textContent * 10) + parseInt(ansnum2.textContent)
        ) {
          console.log(numcou1 + numcou2 + numcou3 + numcou4);

          correct.classList.remove("hidden");
          mistake.classList.add("hidden");
        } else {
          correct.classList.add("hidden");
          mistake.classList.remove("hidden");
        }
      }

      if (coun.textContent === "2") {
        if (
          numcou1 + numcou2 + numcou3 + numcou4 - qes2busis - qes2trais ===
          parseInt(ansnum1.textContent * 10) + parseInt(ansnum2.textContent)
        ) {
          console.log(
            numcou1 + numcou2 + numcou3 + numcou4 - qes2busis - qes2trais
          );
          correct.classList.remove("hidden");
          mistake.classList.add("hidden");
        } else {
          correct.classList.add("hidden");
          mistake.classList.remove("hidden");
        }
      }

      if (coun.textContent === "3") {
        if (
          numcou1 +
            numcou2 +
            numcou3 +
            numcou4 -
            qes2busis -
            qes2trais -
            qes3pcis -
            qes3fiaris ===
          parseInt(ansnum1.textContent * 10) + parseInt(ansnum2.textContent)
        ) {
          correct.classList.remove("hidden");
          mistake.classList.add("hidden");
          console.log(
            numcou1 +
              numcou2 +
              numcou3 +
              numcou4 -
              qes2busis -
              qes2trais -
              qes3pcis -
              qes3fiaris
          );
        } else {
          correct.classList.add("hidden");
          mistake.classList.remove("hidden");
        }
      }

      if (coun.textContent === "4") {
        if (
          numcou1 + numcou3 - qes2busis - qes3pcis ===
          parseInt(ansnum1.textContent * 10) + parseInt(ansnum2.textContent)
        ) {
          correct.classList.remove("hidden");
          mistake.classList.add("hidden");
          console.log(qes2busis + qes3pcis);
        } else {
          correct.classList.add("hidden");
          mistake.classList.remove("hidden");
        }
      }

      if (coun.textContent === "5") {
        if (
          numcou2 + numcou4 - qes2trais - qes3fiaris ===
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
    ansnum2.textContent = "";
    ansnum1.textContent = "";
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
