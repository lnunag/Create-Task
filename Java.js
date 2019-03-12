let total = 0;
let x = 0;
let userscore = 0;
let botscore = 0;
let name = "User";
let number = 0;
let n = 0;
let chance = 0;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let saved = 0;
let difficulty = 10;
let impossible = false;
let impossibleValues = [1, 12, 23, 34, 45, 56, 67, 78, 89, 100];
let turn = 1;
let botFirst = false;
let confirmation = false;

function process() {
  editValues();
  saved = total;
  number = numbers[n];
  if (total != 100) {
    if ((total + numbers[n]) < 101) {
      total += numbers[n];
      x = bot();
      botWin();
      x = (impossible) ? botImpossible() : x;
      if (total >= 100) {
        userVictory();
        return;
      }
      while (x + total > 100) {
        x = bot();
      }
      total += x;
      if (total == 100) {
        aiVictory();
        return;
      }
    }
    end();
  }
}

function botImpossible() {
  x = (impossibleValues[turn] - total);
  x = Math.min(x, 10);
  turn++;
  return x;
}

function changeName() {
  let username = document.getElementById("username");
  name = prompt("What are your initials?");
  username.innerHTML = name;
}

function editValues() {
  p = document.getElementById("display");
  uscore = document.getElementById("user");
  bscore = document.getElementById("bot");
  text = document.getElementById("text");
  impossibleText = document.getElementById("impossible");
  disappear = document.getElementsByClassName("disappear");
}

function bot() {
  x = Math.floor((Math.random() * 10) + 1);
  return(x);
}

function botWin() {
  if (total > 89) {
    x = 100 - total;
  }
  if (total >= 79 && total <= 88) {
    chance = Math.floor((Math.random() * difficulty) + 1);
    if (chance == 1) {
      x = 89 - total;
    }
    return;
  }
}

function userVictory() {
  p.innerHTML = "Total: " + total;
  userscore++;
  uscore.innerHTML = userscore;
  text.innerHTML = "Total was " + saved + "<br/>" + name + " added " + number + "<br/>" + name + " has won";
  for (let i = 0; i < disappear.length; i++) {
    disappear[i].style.display = "block";
  }
  confirmation = false;
}

function aiVictory() {
  p.innerHTML = "Total: " + total;
  botscore++;
  bscore.innerHTML = botscore;
  text.innerHTML = "Total was " + saved + "<br/>" + name + " added " + number + "<br/>" + "A.I. added " + x + "<br/>" + "A.I. has won";
  for (let i = 0; i < disappear.length; i++) {
    disappear[i].style.display = "block";
  }
  confirmation = false;
}

function end() {
  editValues();
  p.innerHTML = "Total: " + total;
  text.innerHTML = "Total was " + saved + "<br/>" + name + " added " + number + "<br/>" + "A.I. added " + x;
}

function b1() {
  if (confirmation) {
    n = 0;
    process();
  }
}

function b2() {
  if (confirmation) {
    n = 1;
    process();
  }
}

function b3() {
  if (confirmation) {
    n = 2;
    process();
  }
}

function b4() {
  if (confirmation) {
    n = 3;
    process();
  }
}

function b5() {
  if (confirmation) {
    n = 4;
    process();
  }
}

function b6() {
  if (confirmation) {
    n = 5;
    process();
  }
}

function b7() {
  if (confirmation) {
    n = 6;
    process();
  }
}

function b8() {
  if (confirmation) {
    n = 7;
    process();
  }
}

function b9() {
  if (confirmation) {
    n = 8;
    process();
  }
}

function b10() {
  if (confirmation) {
    n = 9;
    process();
  }
}

function reset() {
  let p = document.getElementById("display");
  total = 0;
  saved = 0;
  chance = 0;
  if (botFirst) {
    turn = 0;
  } else {
    turn = 1;
  }
  p.innerHTML = "Total: " + total;
}

function scoreReset() {
  editValues();
  botscore = 0;
  userscore = 0;
  bscore.innerHTML = botscore;
  uscore.innerHTML = userscore;
}

function setHard() {
  difficulty = 1;
  impossible = false;
}

function setEasy() {
  difficulty = 10;
  impossible = false;
}

function setToNearImpossible() {
  impossible = true;
}

function first() {
  editValues();
  impossibleText.innerHTML = "Set To Near Impossible";
  turn = 1;
  botFirst = false;
}

function second() {
  editValues();
  impossibleText.innerHTML = "Set To Impossible";
  turn = 0;
  botFirst = true;
}

function confirm() {
  editValues();
  reset();
  for (let i = 0; i < disappear.length; i++) {
    disappear[i].style.display = "none";
  }
  confirmation = true;
  if (botFirst) {
    editValues();
    saved = total;
    number = numbers[n];
    x = bot();
    x = (impossible) ? botImpossible() : x;
    total += x;
    text.innerHTML = "Total was " + saved + "<br/>" + "A.I. added " + x;
    p.innerHTML = "Total: " + total;
  }
}
