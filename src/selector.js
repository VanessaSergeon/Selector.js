  var resultSet = [];
var traverseDomAndCollectElements = function(matchFunc, startEl) {

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // your code here
  // traverse the DOM tree and collect matching elements in resultSet
  // use .children to travers
    // use recursion

  var matchFunc= function(el) {
    var elCheckingAgainst = startEl;
    if (el.tagName.toLowerCase() == elCheckingAgainst.toLowerCase()) {
      resultSet.push(el);
      return true;
    }
    else {
      return false;
    }
  };

  return resultSet;
};


// detect and return the type of selector
// return one of these types: id, class, tag.class, tag
//
var selectorTypeMatcher = function(selector) {
console.log(resultSet);
  for(var i=0; i<resultSet.length; i++) {
    //if # then id
    if(resultSet[i].splice(0, 1) == "#") {
      return "id";
    }
    //if . then class
    if(resultSet[i].splice(0, 1) == ".") {
      return "class";
    } else {
      //if word then tag
        // if word then . tag.class
      if (resultSet[i].search('.') !== -1) {
        return "tag.class";
      };
      return "tag";
    }

  }



  // var tags = [];
  // var ids = [];

  // for(var i = 0; i < resultSet.length; i++) {
  //   var tagItems = resultSet[i].split(" ");
  //   tags.push(tagItems[0]);
  //   if(typeof tagItems[1] !== "undefined") {
  //     if(tagItems[1].slice(0, 1) === "c") {
  //       return "class";
  //     } // first letter c
  //     if(tagItems[1].slice(0, 1) === "i") {
  //       return "id";
  //     } // first letter i
  //   }
  // }



}; // end selectorTypeMatcher


  // use matchFunc to identify matching elements
var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    // define matchFunction for id

  } else if (selectorType === "class") {
    // define matchFunction for class

  } else if (selectorType === "tag.class") {
    // define matchFunction for tag.class

  } else if (selectorType === "tag") {
    // define matchFunction for tag

  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
