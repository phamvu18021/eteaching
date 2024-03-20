"use client";

import { FormMain } from "@/components/FormContact";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  GridItem,
  HStack,
  Heading,
  Icon,
  ListItem,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList
} from "@chakra-ui/react";

import { BiPlus } from "react-icons/bi";

interface IBranch {
  titleprogram: string[];
  name: string;
  overview: string[];
  jobs: string[];
  program: string[];
  title: string;
  work: string[];
  workjobs: string[];
  programtitle: string;
  worktitle: string;
  workjobstitle: string;
  overviewtitle: string;
}

export const AboutDk = (props: IBranch) => {
  const {
    titleprogram,
    name,
    program,
    work,
    workjobs,
    programtitle,
    worktitle,
    workjobstitle
  } = props;
  return (
    <>
      <Container maxW="6xl" color="#42474c">
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={"24px"} py={"70px"}>
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Text
              fontWeight={"bold"}
              textAlign={"left"}
              pt={"12px"}
              fontSize={{ base: "28px", lg: "40px" }}
              lineHeight="48px"
            >
              {name}
            </Text>

            <Tabs variant="unstyled" mt="30px">
              <TabList mb="25px">
                {titleprogram?.map((item, index) => (
                  <Tab
                    key={index}
                    bg="#f7f7f7"
                    borderRadius="5px"
                    mr="10px"
                    _selected={{ color: "white", bg: "#558dd9" }}
                    fontSize="20px"
                  >
                    {item}
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text mb="20px">{programtitle}</Text>

                  {program?.map((item, index) => (
                    <UnorderedList key={index}>
                      <ListItem fontWeight={500} pb={"12px"}>
                        {item}
                      </ListItem>
                    </UnorderedList>
                  ))}
                </TabPanel>
                <TabPanel>
                  <Text mb="20px">{worktitle}</Text>
                  {work?.map((item, index) => (
                    <UnorderedList key={index}>
                      <ListItem fontWeight={500} pb={"12px"}>
                        {item}
                      </ListItem>
                    </UnorderedList>
                  ))}
                </TabPanel>
                <TabPanel>
                  <Text mb="20px">{workjobstitle}</Text>
                  {workjobs?.map((item, index) => (
                    <UnorderedList key={index}>
                      <ListItem fontWeight={500} pb={"12px"}>
                        {item}
                      </ListItem>
                    </UnorderedList>
                  ))}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
          <GridItem py={"33px"}>
            <FormMain title="Để lại thông tin" />
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};

export const Accs = ({
  accs
}: {
  accs: {
    title: string;
    detail: {
      title: string;
      list: string[];
    }[];
  }[];
}) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {accs.map((acc, index) => (
        <AccordionItem border={"none"} key={index} py={"12px"} rounded={"sm"}>
          <AccordionButton bg={"gray.50"} py="16px" rounded={"sm"}>
            <Box flex="1" textAlign="left">
              <HStack>
                <Heading fontSize={{ base: "sm", md: "md" }}>
                  {acc.title}
                </Heading>
              </HStack>
            </Box>
            <Icon as={BiPlus} />
          </AccordionButton>
          <AccordionPanel pb={4} color={"gray.900"}>
            {acc?.detail?.map((item, index) => (
              <Box key={index}>
                <Heading as={"h4"} size={"sm"}>
                  {item?.title}
                </Heading>
                <UnorderedList>
                  {item?.list?.map((item, i) => (
                    <ListItem key={i}>{item}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            ))}
            <UnorderedList></UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const ListNd = (props: IBranch) => {
  const { overview, jobs, overviewtitle } = props;

  return (
    <Container maxW={"6xl"} py="60px">
      <SimpleGrid
        spacing={"8"}
        gridTemplateColumns={{
          base: "1fr",
          md: " 1fr",
          lg: "repeat(2, 1fr)"
        }}
      >
        <GridItem color="#42474c">
          <Text
            textAlign={"left"}
            pt={"12px"}
            fontSize={"14px"}
            textTransform="uppercase"
          >
            NEU E-LEARNING
          </Text>

          <Text
            fontWeight={"bold"}
            textAlign={"left"}
            pt={"12px"}
            fontSize={{ base: "28px", lg: "40px" }}
            lineHeight="48px"
          >
            {overviewtitle}
          </Text>
        </GridItem>
        <GridItem></GridItem>
      </SimpleGrid>
      <SimpleGrid
        spacing={"8"}
        gridTemplateColumns={{
          base: "1fr",
          md: " 1fr",
          lg: "repeat(2, 1fr)"
        }}
      >
        <GridItem color="#42474c">
          <Box textAlign={"left"} fontSize={"16px"} lineHeight="30px" mt="15px">
            {/* tìm và in đậm phần tử đầu*/}
            {overview?.map((item, index) => (
              <Text key={index} fontWeight={500} pb={"12px"}>
                {index === 0 ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.replace(
                        /(Luật kinh tế|Quản trị Kinh doanh|Ngành Kế toán|Ngành Tài chính Ngân hàng)/g,
                        (match) => `<strong>${match}</strong>`
                      )
                    }}
                  />
                ) : (
                  item
                )}
              </Text>
            ))}
          </Box>
        </GridItem>
        <GridItem>
          <Box
            mt="15px"
            color="#42474c"
            textAlign={"left"}
            fontSize={"16px"}
            lineHeight="30px"
          >
            {jobs?.map((item, index) => (
              <Text key={index} fontWeight={500} pb={"12px"}>
                {item}
              </Text>
            ))}
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export const Branch = (props: IBranch) => {
  return (
    <Box color={"blue.800"}>
      <ListNd {...props} />

      <AboutDk {...props} />
    </Box>
  );
};
