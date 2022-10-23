data = require("./userData");

handleData = () => {
  if (
    data[4].answer == "A" ||
    data[7].answer == "A" ||
    data[8].answer == "B" ||
    data[9].answer == "C"
  ) {
    return "Eggs";
  } else if (
    data[7].answer == "C" ||
    data[3].answer == "C" ||
    data[9].answer == "D" ||
    data[9].answer == "C"
  ) {
    return "Pizza";
  } else if (
    data[2].answer == "B" ||
    data[9].answer == "A" ||
    data[3].answer == "A" ||
    data[4].answer == "C" ||
    data[1].answer == "A" ||
    data[1].answer == "B" ||
    data[1].answer == "C"
  ) {
    return "ArrozConPollo";
  } else if (
    data[3].answer == "D" ||
    data[2].answer == "C" ||
    data[1].answer == "D" ||
    data[5].answer == "C" ||
    data[6].answer == "D"
  ) {
    return "FettucineSteak";
  } else if (
    data[2].answer == "A" ||
    data[2].answer == "D" ||
    data[3].answer == "B" ||
    data[4].answer == "A" ||
    data[4].answer == "B" ||
    data[4].answer == "D"
  ) {
    return "Risotto";
  } else if (
    data[5].answer == "A" ||
    data[5].answer == "B" ||
    data[5].answer == "D" ||
    data[6].answer == "B" ||
    data[6].answer == "A" ||
    data[6].answer == "C"
  ) {
    return "PadThai";
  } else if (
    data[7].answer == "B" ||
    data[7].answer == "D" ||
    data[8].answer == "A" ||
    data[8].answer == "C" ||
    data[8].answer == "D" ||
    data[9].answer == "C"
  ) {
    return "Salmon";
  } else {
    return "default";
  }
};

module.exports = handleData;
