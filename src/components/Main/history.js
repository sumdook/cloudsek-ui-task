import React from 'react';
import { Button, Flex, Text } from 'rebass';

export default function History({ history }) {
  console.log(history);
  const [toggle, set] = React.useState('true');
  return (
    <Flex
      style={{ minWidth: 300 }}
      flexDirection="column"
      alignItems={['center', 'flex-start']}
      pl={[0, 100]}
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
