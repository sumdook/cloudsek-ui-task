import React from 'react';
import { Button, Flex, Text } from 'rebass';

export default function History({ history }) {
  console.log(history);
  const [toggle, set] = React.useState('true');
  return (
    <Flex
      width="500px"
      style={{ minWidth: 400 }}
      flexDirection="column"
      pl={100}
    >
      <Button
        variant="show"
        onClick={() => {
          set(!toggle);
        }}
      >
        {toggle ? 'HIDE' : 'SHOW'}
      </Button>
      <Flex flexDirection="column" my={5}>
        {toggle &&
          history.map((item, i) => (
            <Text
              color="white"
              fontSize={item.length > 15 ? 2 : 4}
              my={3}
              fontWeight={200}
              key={i + item}
            >
              {item}
            </Text>
          ))}
      </Flex>
    </Flex>
  );
}
