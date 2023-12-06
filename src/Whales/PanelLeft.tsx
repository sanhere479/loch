import { Box, Image, Grid, Title, Text, Flex, Divider } from '@mantine/core';
import NotificationCarousel from './NotificationCarousel';
import Testimonial from './Testimonial';
import { useMediaQuery } from '@mantine/hooks';

export default function PanelLeft() { 
  const isDesktop = useMediaQuery("(min-width: 1360px)");
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <Box style={{zIndex:10}} pos={"relative"} p={"86 0"}>
        <Grid pl={isMobile ? 30 : 60} gutter="xl">
            <Grid.Col span={isDesktop ? 7 : 12}>
                <Image src={"/asset/Bell.svg"} alt={"whales"} w={"32"}  />
                <Title order={2} my={16} c={"#fff"}>Get notified when a 
                highly correlated whale makes a move</Title>
                <Text c={"#B8B1E9"}>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</Text>
            </Grid.Col>
            <Grid.Col span={isDesktop ? 5 : 12}>
                <NotificationCarousel />
            </Grid.Col>
        </Grid>
        <Grid mt={72} px={isMobile ? 30 : 60} gutter="xl">
            <Grid.Col span={isDesktop ? 7 : isMobile ? 12 : 5}>
                <Image src={"/asset/panel-left.png"} alt={"Dashboard"} radius={"md"} maw={330} mx={isDesktop ? "center" : "auto"} />
            </Grid.Col>
            <Grid.Col span={isDesktop ? 5 :  isMobile ? 12 : 7}>
              <Flex direction={"column"} align={isDesktop ? "flex-end" : "center"} style={{textAlign:isDesktop ? "right" : "center"}}>
                <Image src={"/asset/Eye.svg"} alt={"Eye"} w={"32"}  />
                <Title order={2} my={16} c={"#fff"}>Watch what the <br /> whales are doing</Title>
                <Text c={"#B8B1E9"}>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</Text>
                </Flex>
            </Grid.Col>
        </Grid>
        <Grid mt={40} px={isMobile ? 30 : 60} gutter="xl">
        <Grid.Col span={12}>
          <Title style={{textAlign:isMobile ? "center" : "right"}} order={3} my={16} c={"#fff"}>Testimonials</Title>
          <Divider c={"#878FC0"} />
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 2}>
            <Flex align={isMobile ? "center" : "flex-end"} justify={isMobile ? "center" : "unset"} h={"100%"}>
              <Image src={"/asset/loch.svg"} alt={"Dashboard"}  />
              </Flex>
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 10}>
            <Testimonial />
            </Grid.Col>
          </Grid>
    </Box>
  )
}
