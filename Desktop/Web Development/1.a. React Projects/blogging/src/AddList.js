import {
  Input,
  Flex,
  FormControl,
  IconButton,
  Center,
  HStack,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";

const AddList = ({ handleAdd, addItem, setAddItem }) => {
  return (
    <FormControl className="" onSubmit={handleAdd}>
      <Flex alignItems="center" justifyContent="center" >
        <HStack mt={3}>
          <Input
          w='80vw'
          size='lg'
            ml={2}
            mr={2}
            required
            // className="addInput"
            id="addItem"
            type="text"
            placeholder="Add Item"
            value={addItem}
            onChange={(e) => setAddItem(e.target.value)}
            variant="filled"
          />
          <Center w="40px" h="40px" color="green.900">
          <IconButton border='2px' 
  borderColor='green.900'  aria-label='Add to friends' icon={<AddIcon />} />
          </Center>
        </HStack>
        {/* <IconButton
  colorScheme='teal'
  aria-label='Call Segun'
  size='lg'
  icon={<AddIcon />}
/> */}

        {/* <Button h="1.75rem" size="sm">
          Add
        </Button> */}

        {/* <button aria-label="Add Item" type="submit" className="addBtn" >
        Add
      </button> */}
      </Flex>
    </FormControl>
  );
};

export default AddList;
