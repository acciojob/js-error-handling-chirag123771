//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = 'OutOfRangeError';
  }
}

class InvalidExprError extends Error {
  constructor() {
    super('Expression should not have an invalid combination of expression');
    this.name = 'InvalidExprError';
  }
}

function evalString(expr) {
  try {
    if (/[\+\-\*\/]{2,}/.test(expr)) {
      throw new InvalidExprError();
    }
    if (/^[\*\/\+]/.test(expr)) {
      throw new SyntaxError('Expression should not start with invalid operator');
    }
    if (/[\*\/\+\-]$/.test(expr)) {
      throw new SyntaxError('Expression should not end with invalid operator');
    }
    const result = eval(expr);
    if (!Number.isInteger(result)) {
      throw new OutOfRangeError('floating point value');
    }
    return result;
  } catch (e) {
    if (e instanceof OutOfRangeError || e instanceof InvalidExprError) {
      throw e;
    }
    throw new OutOfRangeError(e.message);
  }
}

