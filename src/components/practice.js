function charater_asc(testing) {
  let x = testing.toString().split("");
  let a = "",
    b = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i].toString() == "0") {
      a += x[i].toString();
    } else {
      b += x[i].toString();
    }
  }
  console.log(a + b);
}

const char_asc = (inputstring) => {
  let a = inputstring.split("");
  a.sort();
  console.log(a.join(""));
};

const char_desc = (inputstring) => {
  let a = inputstring.split("");
  a.sort(function (c, d) {
    return d.localecompare(c);
  });
  console.log(a.join(""));
};
