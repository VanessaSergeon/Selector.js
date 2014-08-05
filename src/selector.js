var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // your code here
  // traverse the DOM tree and collect matching elements in resultSet
  // use matchFunc to identify matching elements

  for(var i = 0; i < startEl.childNodes.length-1; i++) {
    if(matchFunc(startEl.childNodes[i]) === true) {
      resultSet.push(startEl.childNodes[i]);
    }
    traverseDomAndCollectElements(matchFunc, startEl.childNodes[i]);
  }

  return resultSet;
};


// detect and return the type of selector
// return one of these types: id, class, tag.class, tag
//
var selectorTypeMatcher = function(selector) {
  // your code here
  if(selector.slice(0, 1) == '#') {
    return "id";
  }
  if(selector.slice(0, 1)  == ".") {
    return "class";
  }
  if(selector.split(".").length === 2) {
    return "tag.class";
  } else {
    return "tag";
  }
};

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    // define matchFunction for id
    matchFunction = function(element) {
      if(element.id == selector.substring(1, selector.length)) {
        return true;
      } else {
        return false
      }
    };

  } else if (selectorType === "class") {
    // define matchFunction for class
    matchFunction = function(element) {
      var listOfClasses = element.classList.toString();
      // console.log(element.className);
      // console.log("selector:" + selector.substring(1, selector.length));
      // var classNames = element.className.split(" ");
      if((listOfClasses.search(element.className) !== -1)) {
        return true;
      } else {
        return false;
      }
    };


// solution should not work with multiple class names. fix using .classList
  } else if (selectorType === "tag.class") {
    // define matchFunction for tag.class
    matchFunction = function(element) {
      var elAndClass = element.tagName.toLowerCase() + "." + element.className;
      console.log(elAndClass);
      if(selector == elAndClass){
        return true;
      } else {
        return false;
      }
    };


  } else if (selectorType === "tag") {
    // define matchFunction for tag
    matchFunction = function(element) {
      if(selector.search(element) !== -1) {
        return true;
      } else {
        return false;
      }
    };
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};






