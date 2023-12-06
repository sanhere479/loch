import { Button, Flex, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

export default function PanelRight() {

  const [loading, { toggle }] = useDisclosure();

  const form  = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Please enter a valid email'),
    },
  });

  const handleSubmit = () => {
    if(form.validate()){
      toggle();
      window.location.href = "https://app.loch.one/welcome";
    }
  }
  return (
    <Flex mih={"100vh"} align={"center"} justify={"center"}>
      <Flex direction={"column"}>
        <Title order={1} c={"#B0B1B3"}>Sign up for <br /> exclusive access.</Title>
        <form onSubmit={form.onSubmit(() => handleSubmit())}>
        <TextInput
        my={40}
        type='email'
        placeholder='Your email address'
        radius={"6px"}
        size='xl'
        styles={{
          input: {boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)'}
        }}
        {...form.getInputProps('email')}
        />
        
        <Button size='xl' type='submit' loading={loading} fullWidth color='#19191A' radius={"6px"}
        style={{
            fontSize: "16px",
        }}
        >Get Started</Button>
        </form>

      </Flex>
        
    </Flex>
  )
}
