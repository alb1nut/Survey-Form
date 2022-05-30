//Components
import {
  Box,
  Stack,
  HStack,
  VStack,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";
const Footer = ({ length }) => {
  const today = new Date();

  return (
    <footer>
      <Flex>
        <Box bg="green.900" w="100vw"  color="white">
          <Center>
            <VStack>
              <Box>
                <Text fontSize="2xl">
                  {length} {length === 1 ? "item" : "items"} on list
                </Text>
              </Box>
              <Text fontSize="md">Copyright &copy; {today.getFullYear()}</Text>
            </VStack>
          </Center>
        </Box>
      </Flex>
    </footer>
  );
};

export default Footer;
