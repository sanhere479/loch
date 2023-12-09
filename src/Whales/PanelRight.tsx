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
        classNames={{ 
          input: "inputHover", 
        }}
        {...form.getInputProps('email')}
        />
        
        <Button size='xl' type='submit' loading={loading} fullWidth color='#19191A' radius={"6px"} 
        classNames={{ 
          root: "buttonHover", 
        }}
        >Get Started</Button>
        </form>

      </Flex>
        
    </Flex>
  )
}
