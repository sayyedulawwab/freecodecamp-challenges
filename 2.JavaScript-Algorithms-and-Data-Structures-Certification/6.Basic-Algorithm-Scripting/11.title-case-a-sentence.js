function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  let result = arr.map(function (word) {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
