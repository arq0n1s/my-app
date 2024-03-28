import React from 'react';
import { Button, Flex } from 'antd';

function DeleteCardButton ({onClick}:{onClick: any}) {

  return (
  <Flex gap="small" wrap="wrap"
  onClick={onClick}>
    <Button style={{marginLeft:30, display: "flex", width: 300, alignItems: 'center', justifyContent: 'center'}} 
      type="primary" danger>
        Delete
      </Button>
  </Flex>)
};

export default DeleteCardButton;