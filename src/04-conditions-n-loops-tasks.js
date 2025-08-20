/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  // %15=>FizzBuzz, %5=>Buzz, %3=>Fizz, else num
  if (num % 15 === 0) {
    return 'FizzBuzz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }

  return num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  // 3!===3*2*1===3*2!; 1!=1;
  // n!===n*(n-1)!

  // if (n === 1) {
  //   return 1;
  // }
  // return n * getFactorial(n - 1);
  return n === 1 ? 1 : n * getFactorial(n - 1);
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  // 1,5 1+2+3+4+5 === 5+(4+...)===n2+ sum(n2-1)...
  // recursion base
  if (n2 === n1) {
    return n2;
  }
  return n2 + getSumBetweenNumbers(n1, n2 - 1);
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  // if a+b===c we'll get a line
  // if a+b>c(the same for others) we'll get a triangle

  return a + b > c && b + c > a && c + a > b;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  // (x1≤x4)и(x3≤x2)и(y1≥y4)и(y3≥y2)
  // x1y1 левый верхний угол, x2y2 правый нижний
  const x1 = rect1.left;
  const y1 = rect1.top;
  const x2 = x1 + rect1.width;
  const y2 = y1 + rect1.height;

  const x3 = rect2.left;
  const y3 = rect2.top;

  if (x2 >= x3 && y2 >= y3) {
    return true;
  }
  return false;
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  // если расстояниеот точки до цетнра круга меньше радиуса
  // то внутри
  // sqrt((xp-xc)**2+(yp-yc)**2)<r
  const xp = point.x;
  const yp = point.y;
  const xc = circle.center.x;
  const yc = circle.center.y;
  const r = circle.radius;

  return Math.sqrt((xp - xc) ** 2 + (yp - yc) ** 2) < r;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  // можно попробовать через рекурсию- не сработало

  for (let i = 0; i < str.length; i += 1) {
    let counter = 0;

    for (let j = 0; j < str.length; j += 1) {
      if (j !== i && str[i] === str[j]) {
        counter += 1;
      }
    }
    if (counter === 0) {
      return str[i];
    }
  }
  return null;
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const trueStart = '[';
  const trueEnd = ']';
  const falseStart = '(';
  const falseEnd = ')';

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return `${isStartIncluded ? trueStart : falseStart}${min}, ${max}${
    isEndIncluded ? trueEnd : falseEnd
  }`;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return num.toString().split('').reverse().join('');
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  //  reverse number
  const chars = ccn.toString().split('').reverse();

  // double odd numbers
  const doubledNums = chars.map((item, i) => {
    if (i % 2 !== 0) {
      return item * 2;
    }
    return Number(item);
  });

  // if num has 2 digits substract 9
  function convertTwoDigits(num) {
    return num.toString().length === 2 ? num - 9 : num;
  }

  const resNums = doubledNums.map(convertTwoDigits);

  // sum all numbers
  const sum = resNums.reduce((acc, item) => acc + item, 0);

  // if the sum is divisible by 10- right number
  if (sum % 10 === 0) {
    return true;
  }
  return false;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  // get sum
  const sum = num
    .toString()
    .split('')
    .reduce((acc, n) => acc + Number(n), 0);

  if (sum <= 9) {
    return sum;
  }
  return getDigitalRoot(sum);
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  // (),{},[].
  const stack = [];
  const dict = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
  };
  const openBrackets = ['(', '[', '{', '<'];
  const closeBrackets = [')', ']', '}', '>'];
  let bracketsAreRight = true;

  function isOpenBracket(char) {
    return openBrackets.indexOf(char) > -1;
  }
  function isCloseBracket(char) {
    return closeBrackets.indexOf(char) > -1;
  }

  for (let i = 0; i < str.length; i += 1) {
    if (isOpenBracket(str[i])) {
      stack.push(str[i]);
    } else if (isCloseBracket(str[i])) {
      //  проверяеям что стек не пуст перед pop()
      if (stack.length === 0 || dict[str[i]] !== stack.at(-1)) {
        bracketsAreRight = false;
        break;
      }
      stack.pop();
    }
  }

  //  возвращаем true только если стек пуст и нет ошибок
  if (stack.length > 0) {
    bracketsAreRight = false;
  }

  return bracketsAreRight;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const resultArr = [];
  const firstPath = pathes[0];

  for (let i = 0; i < firstPath.length; i += 1) {
    const char = firstPath[i];
    let isCommon = true;

    for (let j = 1; j < pathes.length; j += 1) {
      if (pathes[j][i] !== char) {
        isCommon = false;
        // символ не совпал - прерываем
        break;
      }
    }

    if (isCommon) {
      resultArr.push(char);
    } else {
      // общий префикс закончился - прерываем
      break;
    }
  }

  const commonPath = resultArr.join('');
  // нужно обрезать по каталогу, а не по случайной части имени...  правим
  const lastIndex = commonPath.lastIndexOf('/');

  // console.log(commonPath.slice(0, lastIndex + 1));
  return commonPath.slice(0, lastIndex + 1);
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  function getColumn(m, j) {
    const col = [];
    for (let i = 0; i < m.length; i += 1) {
      col.push(m[i][j]);
    }
    return col;
  }
  function transponateMatrix(m) {
    const arr = [];

    for (let i = 0; i < m[0].length; i += 1) {
      arr.push(getColumn(m, i));
    }
    return arr;
  }

  function mulRows(row1, row2) {
    let sum = 0;

    for (let i = 0; i < row1.length; i += 1) {
      sum += row1[i] * row2[i];
    }

    return sum;
  }

  const m2Transponated = transponateMatrix(m2);

  const multipliedMatrix = [];

  for (let i = 0; i < m1.length; i += 1) {
    const currentRow = [];

    for (let j = 0; j < m2Transponated.length; j += 1) {
      const result = mulRows(m1[i], m2Transponated[j]);
      currentRow.push(result);
    }
    multipliedMatrix.push(currentRow);
  }

  return multipliedMatrix;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  // написать ф-ии проверяющие строки, столбцы и две диагонали
  let winner;

  function checkRows() {
    for (let i = 0; i < 3; i += 1) {
      const row = position[i];
      let isEqual = true;

      for (let j = 0; j < 3; j += 1) {
        if (row[0] !== row[j]) {
          isEqual = false;
          break;
        }
      }

      if (isEqual && row[0] !== undefined) {
        [winner] = row;
        return winner;
      }
    }
    return winner; // for linter rules
  }
  checkRows();

  function checkColumns() {
    for (let i = 0; i < 3; i += 1) {
      let isEqual = true;
      const td0 = position[0][i];

      for (let j = 0; j < 3; j += 1) {
        // go through column
        // 00, 10, 20
        // 01, 11, 21
        // 02, 12, 22

        if (td0 !== position[j][i]) {
          isEqual = false;
          break;
        }
      }

      if (isEqual && td0 !== undefined) {
        winner = td0;
        return winner;
      }
    }
    return winner; // for linter rules
  }
  checkColumns();

  function checkDiags() {
    // главную;
    const td0 = position[0][0];
    let isEqual = true;

    for (let i = 0; i < 3; i += 1) {
      if (position[i][i] !== td0) {
        isEqual = false;
        break;
      }
    }

    if (isEqual && td0 !== undefined) {
      winner = td0;
      return winner;
    }

    // и другую
    // 02, 11, 20 => i мняется в прямом порядке, а джи в обратном
    const td00 = position[0][2];
    let isEqual2 = true;

    for (let i = 0; i < 3; i += 1) {
      if (position[i][2 - i] !== td00) {
        isEqual2 = false;
        break;
      }
    }

    if (isEqual2 && td00 !== undefined) {
      winner = td00;
      return winner;
    }
    return winner; // for linter rules
  }
  checkDiags();

  return winner;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
