// // alert('Hello World');

// let hello = "Hello World";
// // alert(hello);

// let int = 1;
// // alert(int);

// let str1 = "Hello";
// let str2 = "World";

// alert(str1 + str2);

// let orange = 100;
// let apple = 100;

// if(orange > apple) {
//   alert("りんご安い");
// } else if(orange == apple) {
//   alert("同じ値段");
// } else {
//   alert("りんご高い");
// }

// let i = 1;
// let count = 0;
// while (i < 101) {
//   i = i*2;
//   count = count + 1;
// }

// alert(count);

// let n = 32;
// let i = 1;
// let num = 0;
// do {
//   if (n % i == 0){
//     num = i
//   }

//   i++;
// }while(i <= n);

// alert(n + "の約数は" + num );

// let n = 32;
// let i = 1;
// let num = 0;

// do {
//   if (n % i === 0) {
//     num += i + "\n";
//   }

//   i++;
// } while (i <= n);

// alert(n + "の約数は " + num);

// let num = 0
// for(let i = 0; i <= 10; i++) {
//   num += i ;
// }

// // alert(num);

// let alertString;

// alertString = addString("WebCamp");

// // alert(alertString);

// function addString(strA) {
//   let addStr = "hello" + strA;
//   return addStr;
// }

// let promptStr = prompt("好きな文字を入力");
// alert(promptStr);

let user_hand = prompt("ぐーちょきぱー");

let js_hand = getJShand();

let judge = winlose(user_hand,js_hand)

alert("あなた" + user_hand + "機械" + js_hand + judge);

function getJShand() {
  let js_hand_num = Math.floor(Math.random() * 3);
  let js_hand;
  
  if (js_hand_num == 0) {
    js_hand = "ぐー";
  } else if (js_hand_num == 1) {
    js_hand = "ちょき";
  } else if (js_hand_num == 2) {
    js_hand = "ぱー";
  }
  return js_hand;
}

function winlose(user,js) {
  let winlose_s;
  
  if (user == "ぐー" ) {
    if (js == "ぐー") {
      winlose_s = "あいこ";
    }else if (js == "ちょき") {
      winlose_s = "かち";
    }else if (js == "ぱー") {
      winlose_s = "まけ";
    }
  }else if (user == "ちょき") {
    if (js == "ぐー") {
      winlose_s = "まけ";
    }else if (js == "ちょき") {
      winlose_s = "あいこ";
    }else if (js == "ぱー") {
      winlose_s = "かち";
    }
  }else if (user == "ぱー") {
    if (js == "ぐー") {
       winlose_s = "かち";
    }else if (js == "ちょき") {
      winlose_s = "まけ";
    }else if (js == "ぱー") {
      winlose_s = "あいこ";
    }
  }
  
  return winlose_s;
}