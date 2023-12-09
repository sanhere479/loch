import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import {
  Paper,
  Flex,
  Image,
  Text,
  TextInput,
  Checkbox,
  Box,
  Select,
} from "@mantine/core";

export default function NotificationCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3500 }));
  return (
    <Carousel
      slideSize="220px"
      height={200}
      align="start"
      slideGap="0"
      controlSize={14}
      withControls={false}
      loop
      plugins={[autoplay.current]}
      draggable={false}
      >
      <Carousel.Slide>
        <Paper shadow="sm" p="md" radius="md" w={"200px"}>
          <Flex direction={"column"} justify={"space-between"} mih="150px">
            <Flex justify={"space-between"}>
              <Image src={"/asset/Bell1.svg"} alt={"whales"} w={"32"} />
              <Text fw={"700"} size="xs">
                Save
              </Text>
            </Flex>
            <Text fw={"500"} lh={"xs"} size="sm">
              We’ll be sending notifications to you here
            </Text>
            <TextInput
              placeholder="Enter your email"
              value={"hello@gmail.com"}
              readOnly
              radius={"6px"}
              styles={{
                input: {
                  fontWeight: 500,
                  fontSize: "12px",
                },
              }}
            />
          </Flex>
        </Paper>
      </Carousel.Slide>
      <Carousel.Slide>
        <Paper shadow="sm" p="md" radius="md" w={"200px"}>
          <Flex direction={"column"} justify={"space-between"} mih="150px">
            <Flex justify={"space-between"}>
              <Image src={"/asset/bar-chart.svg"} alt={"bar-chart"} w={"32"} />
              <Checkbox label="" size="xs" defaultChecked />
            </Flex>
            <Box component="div">
              <Text fw={"500"} lh={"xs"} size="xs">
              Notify me when any wallets move more than
              </Text>
              <Select
                mt={10}
                data={[{ label: "$1000", value: "1000" }]}
                w={"100px"}
                size="xs"
                variant="filled"
                defaultValue={"1000"}
                placeholder="Select an option"
              />
            </Box>
          </Flex>
        </Paper>
      </Carousel.Slide>
      <Carousel.Slide>
        <Paper shadow="sm" p="md" radius="md" w={"200px"}>
          <Flex direction={"column"} justify={"space-between"} mih="150px">
            <Flex justify={"space-between"}>
              <Image src={"/asset/clock.svg"} alt={"whales"} w={"32"} />
              <Checkbox label="" size="xs" defaultChecked />
            </Flex>
            <Box component="div">
              <Text fw={"500"} lh={"xs"} size="xs">
                Notify me when any wallet dormant for
              </Text>
              <Select
                mt={8}
                data={[{ label: ">30 days", value: "30" }]}
                w={"100px"}
                size="xs"
                variant="filled"
                defaultValue={"30"}
                placeholder="Select an option"
              />
              <Text mt={8} fw={"500"} lh={"xs"} size="xs">becomes active</Text>
            </Box>
          </Flex>
        </Paper>
      </Carousel.Slide> <Carousel.Slide>
        <Paper shadow="sm" p="md" radius="md" w={"200px"}>
          <Flex direction={"column"} justify={"space-between"} mih="150px">
            <Flex justify={"space-between"}>
              <Image src={"/asset/Bell1.svg"} alt={"whales"} w={"32"} />
              <Text fw={"700"} size="xs">
                Save
              </Text>
            </Flex>
            <Text fw={"500"} lh={"xs"} size="sm">
              We’ll be sending notifications to you here
            </Text>
            <TextInput
              placeholder="Enter your email"
              value={"hello@gmail.com"}
              readOnly
              radius={"6px"}
              styles={{
                input: {
                  fontWeight: 500,
                  fontSize: "12px",
                },
              }}
            />
          </Flex>
        </Paper>
      </Carousel.Slide>
      <Carousel.Slide>
        <Paper shadow="sm" p="md" radius="md" w={"200px"}>
          <Flex direction={"column"} justify={"space-between"} mih="150px">
            <Flex justify={"space-between"}>
              <Image src={"/asset/bar-chart.svg"} alt={"bar-chart"} w={"32"} />
              <Checkbox label="" size="xs" defaultChecked />
            </Flex>
            <Box component="div">
              <Text fw={"500"} lh={"xs"} size="xs">
              Notify me when any wallets move more than
              </Text>
              <Select
                mt={10}
                data={[{ label: "$1000", value: "1000" }]}
                w={"100px"}
                size="xs"
                variant="filled"
                defaultValue={"1000"}
                placeholder="Select an option"
              />
            </Box>
          </Flex>
        </Paper>
      </Carousel.Slide>
      <Carousel.Slide>
        <Paper shadow="sm" p="md" radius="md" w={"200px"}>
          <Flex direction={"column"} justify={"space-between"} mih="150px">
            <Flex justify={"space-between"}>
              <Image src={"/asset/clock.svg"} alt={"whales"} w={"32"} />
              <Checkbox label="" size="xs" defaultChecked />
            </Flex>
            <Box component="div">
              <Text fw={"500"} lh={"xs"} size="xs">
                Notify me when any wallet dormant for
              </Text>
              <Select
                mt={8}
                data={[{ label: ">30 days", value: "30" }]}
                w={"100px"}
                size="xs"
                variant="filled"
                defaultValue={"30"}
                placeholder="Select an option"
              />
              <Text mt={8} fw={"500"} lh={"xs"} size="xs">becomes active</Text>
            </Box>
          </Flex>
        </Paper>
      </Carousel.Slide> 
    </Carousel>
  );
}
