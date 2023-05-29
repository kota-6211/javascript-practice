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

// let user_hand = prompt("ぐーちょきぱー");


// while ((user_hand != "ぐー") && (user_hand != "ちょき") && (user_hand != "ぱー") && (user_hand != null)){
//   alert("違います");
//   user_hand = prompt("ぐーちょきぱー");
// }

// let js_hand = getJShand();

// let judge = winlose(user_hand,js_hand)

// if (user_hand != null) {
//   alert("あなた" + user_hand + "機械" + js_hand + judge);
// } else {
//   alert("またね");
// }


// function getJShand() {
//   let js_hand_num = Math.floor(Math.random() * 3);
//   let js_hand;

//   if (js_hand_num == 0) {
//     js_hand = "ぐー";
//   } else if (js_hand_num == 1) {
//     js_hand = "ちょき";
//   } else if (js_hand_num == 2) {
//     js_hand = "ぱー";
//   }
//   return js_hand;
// }

// function winlose(user,js) {
//   let winlose_s;

//   if (user == "ぐー" ) {
//     if (js == "ぐー") {
//       winlose_s = "あいこ";
//     }else if (js == "ちょき") {
//       winlose_s = "かち";
//     }else if (js == "ぱー") {
//       winlose_s = "まけ";
//     }
//   }else if (user == "ちょき") {
//     if (js == "ぐー") {
//       winlose_s = "まけ";
//     }else if (js == "ちょき") {
//       winlose_s = "あいこ";
//     }else if (js == "ぱー") {
//       winlose_s = "かち";
//     }
//   }else if (user == "ぱー") {
//     if (js == "ぐー") {
//       winlose_s = "かち";
//     }else if (js == "ちょき") {
//       winlose_s = "まけ";
//     }else if (js == "ぱー") {
//       winlose_s = "あいこ";
//     }
//   }

//   return winlose_s;
// }

// 1から10までの数字を順番にコンソールに表示するプログラムを作成してください。

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // ユーザーに名前を入力してもらい、それをコンソールに表示するプログラムを作成してください。

// let name = prompt("please name");
// console.log(name);

// // 与えられた整数が偶数か奇数かを判定するプログラムを作成してください。

// let num = Math.floor(Math.random() * 300);
// if (num % 2 == 0) {
//   console.log (num + "is even number");
// } else {
//   console.log (num + "is odd number");
// }

// // ユーザーに2つの数字を入力してもらい、それらの合計をコンソールに表示するプログラムを作成してください。

// let num1 = prompt("number");
// let num2 = prompt("number");

// console.log(parseInt(num1) + parseInt(num2));

// // 与えられた半径をもとに、円の面積を計算してコンソールに表示するプログラムを作成してください。
// let radius = prompt("radius");

// console.log(parseInt(radius) * parseInt(radius) * 3.14);

// 1から100までの数値を順番に出力していくループを作成し、ただし、3の倍数の場合は代わりに "Fizz" を、5の倍数の場合は代わりに "Buzz" を、3と5の公倍数の場合は "FizzBuzz" を出力してください。
// for (let i = 1; i <101; i++) {
//   if ((i % 3 == 0) && (i % 5 == 0)) {
//     console.log("FIZZ BUZZ")
//   } else if (i % 5 == 0) {
//     console.log("BUZZ");
//   } else if(i % 3 == 0) {
//     console.log("FIZZ");
//   } else {
//   console.log(i);}

// function string(str){
//   let addString = str.split("");
//   let leversedAdd = addString.reverse();
//   let leversed = leversedAdd.join("");
//   if(leversed === str) {
//     alert(leversed + "は回文です");
//   } else {
//     alert("残念");
//   }

// }

// let kaibun = prompt("name");
// string(kaibun);

// $(function() {
//     $('.box1').slideDown(3000,function() {
//         $('.box1').css({
//         'width': '200px',
//         'height': '200px',
//         'background-color': 'blue'
//         }).slideUp(500);
//     });
// });

// $(function(){
//     $('.box2').on('click', function(){
//         $('.box2').addClass('box2-ext');
//     });
//     $('.box2').on('click', function() {
//         $('.box2').slideUp(1000, function(){
//             $('.box2').removeClass('box2-ext');
//         });
//     });
// });

// $(function() {
//     $('.box3').on('click', function() {
//         $(this).slideUp();
//     });
// });


// $(function() {
//     $('button').on('click', function() {
//         $('ul').children().css('color','red');
//     });
// });

const swiper = new Swiper('.swiper', {
    loop: true,
    
    pagination: {
        el:'.swiper-pagination',
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});