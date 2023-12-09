import { Carousel } from "@mantine/carousel";
import {
  Paper,
  Text,
} from "@mantine/core";
import { testimonial } from "./WhalesConstants";

export default function Testimonial() { 
  return (
    <Carousel
      slideSize="353px" 
      align="start"
      slideGap="20"
      controlSize={14}
      withControls={false}
      loop  
      >
        {
            testimonial.map((item, index) => {
                return (
                    <Carousel.Slide key={index}>
                        <Paper shadow="sm" p="md" radius="md" w={"max-content"} maw={item.longText ? "500px" : "353px"}>
                            <Text fw={700}>{item.name} <Text span size="xs" c={"#96979A"} ml={10}>{item.title}</Text></Text>
                            <Text fw={500} mt={20}>{item.text}</Text>
                        </Paper>
                    </Carousel.Slide>
                )
            })
        }
    </Carousel>
  )
}
