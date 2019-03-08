let total = 0;
let x = 0;
let userscore = 0;
let botscore = 0;
let name = "User";

function changeName() {
  let username = document.getElementById("username");
  name = prompt("What is your name?");
  username.innerHTML = name;
}

function bot() {
  x = Math.floor((Math.random() * 10) + 1);
  return(x);
}

function b1() {
  let p = document.getElementById("display");
  let uscore = document.getElementById("user");
  let bscore = document.getElementById("bot");
  if ((total + 1) < 101) {
    total += 1;
    x = bot();
    if (total >= 100) {
      p.innerHTML = "Total: " + total;
      userscore++;
      uscore.innerHTML = userscore;
      return;
    }
    while (x + total > 100) {
      x = bot();
    }
    total += x;
    if (total == 100) {
      p.innerHTML = "Total: " + total;
      botscore++;
      bscore.innerHTML = botscore;
      return;
    }
  }
  p.innerHTML = "Total: " + total;

  let text = document.getElementById("text");
  let number = 1;
  text.innerHTML = name + " added " + number + "<br/>" + "A.I added " + x;
}

function b2() {
  let p = document.getElementById("display");
  let uscore = document.getElementById("user");
  let bscore = document.getElementById("bot");
  if ((total + 2 < 101)) {
    total += 2;
    x = bot();
    if (total >= 100) {
      p.innerHTML = "Total: " + total;
      userscore++;
      uscore.innerHTML = userscore;
      return;
    }
    while (x + total > 100) {
      x = bot();
    }
    total += x;
    if (total == 100) {
      p.innerHTML = "Total: " + total;
      botscore++;
      bscore.innerHTML = botscore;
      return;
    }
  }
  p.innerHTML = "Total: " + total;
  let text = document.getElementById("text");
  let number = 2;
  text.innerHTML = name + " added " + number + "<br/>" + "A.I added " + x;
}

function b3() {
  let p = document.getElementById("display");
  let uscore = document.getElementById("user");
  let bscore = document.getElementById("bot");
  if ((total + 3 < 101)) {
    total += 3;
    x = bot();
    if (total >= 100) {
      p.innerHTML = "Total: " + total;
      userscore++;
      uscore.innerHTML = userscore;
      return;
    }
    while (x + total > 100) {
      x = bot();
    }
    total += x;
    if (total == 100) {
      p.innerHTML = "Total: " + total;
      botscore++;
      bscore.innerHTML = botscore;
      return;
    }
  }
  p.innerHTML = "Total: " + total;
  let text = document.getElementById("text");
  let number = 3;
  text.innerHTML = name + " added " + number + "<br/>" + "A.I added " + x;
}

function b4() {
  let p = document.getElementById("display");
  let uscore = document.getElementById("user");
  let bscore = document.getElementById("bot");
  if ((total + 4 < 101)) {
    total += 4;
    x = bot();
    if (total >= 100) {
      p.innerHTML = "Total: " + total;
      userscore++;
      uscore.innerHTML = userscore;
      return;
    }
    while (x + total > 100) {
      x = bot();
    }
    total += x;
    if (total == 100) {
      p.innerHTML = "Total: " + total;
      botscore++;
      bscore.innerHTML = botscore;
      return;
    }
  }
  p.innerHTML = "Total: " + total;
  let text = document.getElementById("text");
  let number = 4;
  text.innerHTML = name + " added " + number + "<br/>" + "A.I added " + x;
}

function b5() {
  let p = document.getElementById("display");
  let uscore = document.getElementById("user");
  let bscore = document.getElementById("bot");
  if ((total + 5 < 101)) {
    total += 5;
    x = bot();
    if (total >= 100) {
      p.innerHTML = "Total: " + total;
      userscore++;
      uscore.innerHTML = userscore;
      return;
    }
    while (x + total > 100) {
      x = bot();
    }
    total += x;
    if (total == 100) {
      p.innerHTML = "Total: " + total;
      botscore++;
      bscore.innerHTML = botscore;
      return;
    }
  }
  p.innerHTML = "Total: " + total;
  let text = document.getElementById("text");
  let number = 5;
  text.innerHTML = name + " added " + number + "<br/>" + "A.I added " + x;
}

function b6() {
  let p = document.getElementById("display");
  let uscore = document.getElementById("user");
  let bscore = document.getElementById("bot");
  if ((total + 6 < 101)) {
    total += 6;
    x = bot();
    if (total >= 100) {
      p.innerHTML = "Total: " + total;
      userscore++;
      uscore.innerHTML = userscore;
      return;
    }
    while (x + total > 100) {
      x = bot();
    }
    total += x;
    if (total == 100) {
      p.innerHTML = "Total: " + total;
      botscore++;
      bscore.innerHTML = botscore;
      return;
    }
  }
  p.innerHTML = "Total: " + total;
  let text = document.getElementById("text");
  let number = 6;
  text.innerHTML = name + " added " + number + "<br/>" + "A.I added " + x;
}

function b7() {
  let p = document.getElementById("display");
  let uscore = document.getElementById("user");
  let bscore = document.getElementById("bot");
  if ((total + 7 < 101)) {
    total += 7;
    x = bot();
    if (total >= 100) {
      p.innerHTML = "Total: " + total;
      userscore++;
      uscore.innerHTML = userscore;
      return;
    }
    while (x + total > 100) {
      x = bot();
    }
    total += x;
    if (total == 100) {
      p.innerHTML = "Total: " + total;
      botscore++;
      bscore.innerHTML = botscore;
      return;
    }
  }
  p.innerHTML = "Total: " + total;
  let text = document.getElementById("text");
  let number = 7;
  text.innerHTML = name + " added " + number + "<br/>" + "A.I added " + x;
}

function b8() {
  let p = document.getElementById("display");
  let uscore = document.getElementById("user");
  let bscore = document.getElementById("bot");
  if ((total + 8 < 101)) {
    total += 8;
    x = bot();
    if (total >= 100) {
      p.innerHTML = "Total: " + total;
      userscore++;
      uscore.innerHTML = userscore;
      return;
    }
    while (x + total > 100) {
      x = bot();
    }
    total += x;
    if (total == 100) {
      p.innerHTML = "Total: " + total;
      botscore++;
      bscore.innerHTML = botscore;
      return;
    }
  }
  p.innerHTML = "Total: " + total;
  let text = document.getElementById("text");
  let number = 8;
  text.innerHTML = name + " added " + number + "<br/>" + "A.I added " + x;
}

function b9() {
  let p = document.getElementById("display");
  let uscore = document.getElementById("user");
  let bscore = document.getElementById("bot");
  if ((total + 9 < 101)) {
    total += 9;
    x = bot();
    if (total >= 100) {
      p.innerHTML = "Total: " + total;
      userscore++;
      uscore.innerHTML = userscore;
      return;
    }
    while (x + total > 100) {
      x = bot();
    }
    total += x;
    if (total == 100) {
      p.innerHTML = "Total: " + total;
      botscore++;
      bscore.innerHTML = botscore;
      return;
    }
  }
  p.innerHTML = "Total: " + total;
  let text = document.getElementById("text");
  let number = 9;
  text.innerHTML = name + " added " + number + "<br/>" + "A.I added " + x;
}

function b10() {
  let p = document.getElementById("display");
  let uscore = document.getElementById("user");
  let bscore = document.getElementById("bot");
  if ((total + 10 < 101)) {
    total += 10;
    x = bot();
    if (total >= 100) {
      p.innerHTML = "Total: " + total;
      userscore++;
      uscore.innerHTML = userscore;
      return;
    }
    while (x + total > 100) {
      x = bot();
    }
    total += x;
    if (total == 100) {
      p.innerHTML = "Total: " + total;
      botscore++;
      bscore.innerHTML = botscore;
      return;
    }
  }
  p.innerHTML = "Total: " + total;
  let text = document.getElementById("text");
  let number = 10;
  text.innerHTML = name + " added " + number + "<br/>" + "A.I added " + x;
}

function reset() {
  let p = document.getElementById("display");
  total = 0;
  p.innerHTML = "Total: " + total;
}
