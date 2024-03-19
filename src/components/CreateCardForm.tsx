import { Button, Form, type FormProps, Input } from 'antd';

type FieldType = {
  ownerName: string;
  number: number,
  cvv: number,
  valabilityStart: number,
  valabilityEnd: number, 
};




const CreateCardForm = ({
    setCardList,
    cardList
}: {
    setCardList: Function,
    cardList: Array<FieldType>
}) => {

    // const array = [1, 2, 3, 4, 5];
    // const newArray = [...array].filter(item => item.name !==  currentCard.name)
    // setCardList(newArray)
  
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        Array.isArray(cardList) ? setCardList([...cardList,values]): setCardList([values]) 
        console.log('Success:', values);
        alert("Card has been created");

    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
        alert("Card doesn't been created")
    };
  
  
return (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Owner Name"
      name="ownerName"
      rules={[{ required: true, message: 'Please input your Owner Name', type: 'string' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Card Number"
      name="number"

      rules={[{ required: true, message: 'Please input your Card Number (12 characters)', len: 12  }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="CVV"
      name="cvv"
      rules={[{ required: true, message: 'Please input your CVV (3 characters)', len: 3  }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Create Date"
      name="valabilityStart"
      rules={[{ required: true, message: 'Please input your Create Date (2 characters)', len:2  }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Expire Date"
      name="valabilityEnd"
      rules={[{ required: true, message: 'Please input your Expire Date (2 characters)', len:2  }]}
    >
      <Input />
    </Form.Item>

    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
)};

export default CreateCardForm;