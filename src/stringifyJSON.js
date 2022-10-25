// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


//boolean, string, number, objects, arrays
//true -> "true" // return obj + ''
//{} -> recursion(input)
//var typeOF = typeof obj;


// if(['boolean', 'string', 'number'].includes(type)) {return obj + ''}

var stringifyJSON = function(obj) {
  var result = '';
  var type = typeof obj;
  if (['boolean', 'number'].includes(type)) {
    return obj + '';
  }
  if (type === 'string') {
    return '\"' + obj + '\"';
  }
  if (obj === null) {
    return 'null';
  }
  if (type === 'function') {
    return '';
  }
  if (obj === undefined) {
    return '';
  }
  if (type === 'object') {
    //checking if it is an array
    if (Array.isArray(obj)) {
      if (obj.length < 1) {
        return '[]';
      }
      //if array has indexes
      result += '[';
      //for loop array
        // if item is not array, append item, to result
        //if item is array, do recursion
      for (var i = 0; i < obj.length; i++) {
        result += stringifyJSON(obj[i]) + ',';
      }
      result = result.slice(0, -1) + ']';
    } else {
        // result += stringifyJSON(obj[key])
      //type is object
      // "key": value
      if (Object.values(obj).length < 1) {
        return '{}';
      }
      result += '{';
      for (var key in obj) {
        if (key === 'functions' || key === 'undefined') {
          result += '';
        } else {
        result += '\"' + key + '\":' + stringifyJSON(obj[key]) + ',';
        }
      }
      if(result.slice(-1) === ',') {
        result = result.slice(0, -1) + '}';
      } else {
        result += '}';
      }

    }
  }
  return result;
};
