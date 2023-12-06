import { Container, Grid, Box } from '@mantine/core'
import PanelRight from './PanelRight'
import PanelLeft from './PanelLeft'
import './WhalesStyle.css'
import { useMediaQuery } from '@mantine/hooks';

export default function Whales() {
  const isDesktop = useMediaQuery("(min-width: 980px)");
  return (
    <Container fluid size={"xl"} p={0} mih={"100vh"}>
      <Grid mih={"100vh"} gutter={0}>
        <Grid.Col span={isDesktop ? 7 : 12} bg={"#19191A"} mih={"100vh"} p={0} pos={"relative"}>
          <Box component="div" className='backgroundPanel'></Box>
          <PanelLeft />
        </Grid.Col>
        <Grid.Col span={isDesktop ? 5 : 12} bg={"#fff"} style={{zIndex:10}} pos={"relative"}>
          <PanelRight />
        </Grid.Col>
      </Grid>

    </Container>
  )
}
