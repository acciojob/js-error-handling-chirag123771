class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = 'OutOfRangeError';
  }
}

class InvalidExprError extends Error {
  constructor() {
    super('Expression should not have an invalid combination of operators');
    this.name = 'InvalidExprError';
  }
}

function evalString(expression) {
  try {
    if (/(\+\+|\-\-|\*\*|\/\/|\+\*|\-\*|\*\+|\/\*)/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^(\+|\*|\/)/.test(expression)) {
      throw new SyntaxError('Expression should not start with an invalid operator');
    }

    if (/(\+|\-|\*|\/)$/.test(expression)) {
      throw new SyntaxError('Expression should not end with an invalid operator');
    }

    // Your evaluation logic here (not provided in the question)

  } catch (error) {
    if (error instanceof InvalidExprError || error instanceof SyntaxError) {
      console.error(error.message);
    } else {
      throw error;
    }
  }
}