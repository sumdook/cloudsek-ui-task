import React from 'react';
import { Flex, Text, Button } from 'rebass';

export default function Calculator({
  op1,
  op2,
  operator,
  result,
  handleOperandClick,
  handleOperatorClick,
  handleEvaluate,
  handleClear
}) {
  const BUTTONS = [
    { value: '7', type: 'number', action: handleOperandClick },
    { value: '8', type: 'number', action: handleOperandClick },
    { value: '9', type: 'number', action: handleOperandClick },
    { value: '÷', type: 'operator', action: handleOperatorClick },
    { value: '4', type: 'number', action: handleOperandClick },
    { value: '5', type: 'number', action: handleOperandClick },
    { value: '6', type: 'number', action: handleOperandClick },
    { value: 'x', type: 'operator', action: handleOperatorClick },
    { value: '1', type: 'number', action: handleOperandClick },
    { value: '2', type: 'number', action: handleOperandClick },
    { value: '3', type: 'number', action: handleOperandClick },
    { value: '-', type: 'operator', action: handleOperatorClick },
    { value: '.', type: 'number', action: handleOperandClick },
    { value: '0', type: 'number', action: handleOperandClick },
    { value: '=', type: 'number', action: handleEvaluate },
    { value: '+', type: 'operator', action: handleOperatorClick }
  ];
  return (
    <Flex style={{ minWidth: 300 }} flexDirection="column" my={[40, 0]}>
      <Flex
        width={1}
        bg="primary"
        alignItems="center"
        justifyContent="flex-end"
        px={3}
        style={{ height: 100 }}
      >
        <Text
          color="white"
          fontSize={`${op1} ${operator} ${op2}`.length > 15 ? 4 : 6}
        >
          {`${op1} ${operator} ${op2}`}
        </Text>
      </Flex>
      <Flex
        width={1}
        bg="white"
        alignItems="center"
        justifyContent="space-between"
        px={4}
        style={{ height: 80 }}
      >
        <Button variant="clear" onClick={handleClear}>
          CLEAR
        </Button>
        <Text color="black" fontSize={result.toString().length > 15 ? 2 : 4}>
          {result}
        </Text>
      </Flex>
      <Flex width={1} flexWrap="wrap">
        {BUTTONS.map(button => {
          const { value, action } = button;
          return (
            <Button
              width={1 / 4}
              onClick={() => action(value)}
              variant="primary"
            >
              {value}
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
}
