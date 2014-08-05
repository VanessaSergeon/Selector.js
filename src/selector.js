var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // your code here
  // traverse the DOM tree and collect matching elements in resultSet
  // use matchFunc to identify matching elements

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

  } else if (selectorType === "tag.class") {
    // define matchFunction for tag.class


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




























//   var resultSet = [];
// var traverseDomAndCollectElements = function(matchFunc, startEl) {

//   if (typeof startEl === "undefined") {
//     startEl = document.body;
//   }

//   // your code here
//   // traverse the DOM tree and collect matching elements in resultSet
//   // use .children to travers
//     // use recursion

//   var matchFunc= function(el) {
//     var n=0;

//     var elCheckingAgainst = startEl;
//     if (el.tagName.toLowerCase() == elCheckingAgainst.toLowerCase()) {
//       resultSet.push(el);
//       if (typeOf el.nextSibling !== ("undefined") {
//         matchFunc(el.nextSibling);
//       };
//       if (typeOf el.children[0] !==("undefined") {
//         matchFunc(el.children[n]);
//       }
//       if el.children.length>n {
//         matchFunc(el[n+1].children);
//       }

//       return true;
//     }
//     else {
//       return false;
//     }
//   };

//   return resultSet;
// };


// // detect and return the type of selector
// // return one of these types: id, class, tag.class, tag
// //
// var selectorTypeMatcher = function(selector) {
// console.log(resultSet);
//   for(var i=0; i<resultSet.length; i++) {
//     //if # then id
//     if(resultSet[i].splice(0, 1) == "#") {
//       return "id";
//     }
//     //if . then class
//     if(resultSet[i].splice(0, 1) == ".") {
//       return "class";
//     } else {
//       //if word then tag
//         // if word then . tag.class
//       if (resultSet[i].search('.') !== -1) {
//         return "tag.class";
//       };
//       return "tag";
//     }

//   }



//   // var tags = [];
//   // var ids = [];

//   // for(var i = 0; i < resultSet.length; i++) {
//   //   var tagItems = resultSet[i].split(" ");
//   //   tags.push(tagItems[0]);
//   //   if(typeof tagItems[1] !== "undefined") {
//   //     if(tagItems[1].slice(0, 1) === "c") {
//   //       return "class";
//   //     } // first letter c
//   //     if(tagItems[1].slice(0, 1) === "i") {
//   //       return "id";
//   //     } // first letter i
//   //   }
//   // }



// }; // end selectorTypeMatcher


//   // use matchFunc to identify matching elements
// var matchFunctionMaker = function(selector) {
//   var selectorType = selectorTypeMatcher(selector);
//   var matchFunction;
//   if (selectorType === "id") {
//     // define matchFunction for id

//   } else if (selectorType === "class") {
//     // define matchFunction for class

//   } else if (selectorType === "tag.class") {
//     // define matchFunction for tag.class

//   } else if (selectorType === "tag") {
//     // define matchFunction for tag

//   }
//   return matchFunction;
// };

// var $ = function(selector) {
//   var elements;
//   var selectorMatchFunc = matchFunctionMaker(selector);
//   elements = traverseDomAndCollectElements(selectorMatchFunc);
//   return elements;
// };
