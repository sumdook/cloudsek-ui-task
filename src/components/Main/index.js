import React from 'react';
import createPersistedState from '../../util/persist-state';
import Calculator from './calculator';
import History from './history';

const useOp1State = createPersistedState('op1');
const useOp2State = createPersistedState('op2');
const operatorState = createPersistedState('operator');
const resultState = createPersistedState('result');
const historyState = createPersistedState('history1');

export default function Main() {
  const [op1, setOp1] = useOp1State('');
  const [op2, setOp2] = useOp2State('');
  const [operator, setOperator] = operatorState('');
  const [result, setResult] = resultState('');
  const [history, setHistory] = historyState([]);

  const handleOperandClick = value => {
    if (result) {
      setOp1(value);
      setOp2('');
      setOperator('');
      setResult('');
      return;
    }
    if (`${op1} ${operator} ${op2}`.length > 27) return;
    var [operand, setter] = operator ? [op2, setOp2] : [op1, setOp1];
    if (value === '0' && operand === '0') return;
    if (value === '.' && operand.indexOf('.') !== -1) return;
    setter(operand + value);
  };

  const handleOperatorClick = value => {
    if (result) {
      setOp1(result);
      setOp2('');
      setOperator(value);
      setResult('');
    }
    if (!op1 || op2) return;
    setOperator(value);
  };

  const handleEvaluate = () => {
    if (!operator || !op2) return;
    let res;
    switch (operator) {
      case '+':
        res = +op1 + +op2;
        break;
      case '-':
        res = op1 - op2;
        break;
      case 'x':
        res = op1 * op2;
        break;
      case '÷':
        res = (op1 / op2).toFixed(2);
        break;
      default:
        return;
    }
    setResult(res);
    history.length > 4
      ? setHistory([...history.slice(1), `${op1} ${operator} ${op2} = ${res}`])
      : setHistory([...history, `${op1} ${operator} ${op2} = ${res}`]);
  };

  const handleClear = () => {
    setOp1('');
    setOp2('');
    setOperator('');
    setResult('');
  };

  return (
    <>
      <Calculator
        op1={op1}
        op2={op2}
        result={result}
        operator={operator}
        handleOperandClick={handleOperandClick}
        handleOperatorClick={handleOperatorClick}
        handleEvaluate={handleEvaluate}
        handleClear={handleClear}
      />
      <History history={history} />
    </>
  );
}
