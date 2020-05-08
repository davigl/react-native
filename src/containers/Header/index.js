import React from 'react';

import {
  Wrapper, Title, Text, Button
} from './styles';

const Header = () => (
  <Wrapper>
    <Title> This is a Title </Title>
    <Text> This is a Subtitle </Text>
    <Button>
      <Text> Press Me </Text>
    </Button>
  </Wrapper>
);

export default Header;
