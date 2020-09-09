var expected = {foo: 6, bar: 6};

var actual = {foo: 6, bar: 5}

assertObjectsEqual(actual, expected, 'detects that two objects are equal');



function assertObjectsEqual(act, exp, test) {
    //convert object to string.
  var actualStr = JSON.stringify(actual);
  var expectedStr = JSON.stringify(expected);
  if(actualStr != expectedStr) {
    console.log("FAILED : Expected " + expectedStr + " but got " + actualStr + '"');
  } else {
  console.log("passed");
  }
}