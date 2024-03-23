import React from "react";
import { Box, Heading, Text, Flex, Image, SimpleGrid, Link, Container, Input, InputGroup, InputRightElement, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Insane Valorant Ace Clutch",
    thumbnail: "https://images.unsplash.com/photo-1567861911437-538298e4232c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMGdhbWVwbGF5JTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxMTE1NjQxN3ww&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Valorant Aiming Guide",
    thumbnail: "https://images.unsplash.com/photo-1522515218385-a5488252fa90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMGFpbWluZyUyMHR1dG9yaWFsJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxMTE1NjQxN3ww&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Jett Movement Tips",
    thumbnail: "https://images.unsplash.com/photo-1567861911437-538298e4232c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMGpldHQlMjBnYW1lcGxheSUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MTExNTY0MTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Sova Lineups on Ascent",
    thumbnail: "https://images.unsplash.com/photo-1567861911437-538298e4232c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMHNvdmElMjB0aHVtYm5haWx8ZW58MHx8fHwxNzExMTU2NDE4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const Index = () => {
  return (
    <Box bg="black" minHeight="100vh" color="white">
      <Box bgImage="https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzExMTU2NDE4fDA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" py={20}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Valorant Clips & Guides
          </Heading>
          <Text fontSize="xl" mb={8}>
            Level up your Valorant gameplay with top-tier clips and educational content
          </Text>
          <InputGroup size="lg" maxW="md">
            <Input placeholder="Search videos..." bg="blackAlpha.600" borderColor="whiteAlpha.400" _hover={{ borderColor: "whiteAlpha.600" }} />
            <InputRightElement pointerEvents="none">
              <Icon as={FaSearch} color="whiteAlpha.600" />
            </InputRightElement>
          </InputGroup>
        </Container>
      </Box>

      <Container maxW="container.lg" py={12}>
        <Heading as="h2" size="xl" mb={8}>
          Featured Videos
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {videos.map((video) => (
            <Link key={video.id} href={video.url} isExternal>
              <Box borderRadius="md" overflow="hidden">
                <Image src={video.thumbnail} alt={video.title} />
                <Box p={4} bg="whiteAlpha.100">
                  <Heading as="h3" size="md" mb={2}>
                    {video.title}
                  </Heading>
                </Box>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Container>

      <Box bg="blackAlpha.800" py={12}>
        <Container maxW="container.lg">
          <Flex direction={["column", "row"]} align="center" justify="space-between">
            <Heading as="h2" size="xl" mb={[8, 0]}>
              Tutorials & Tips
            </Heading>
            <Link href="/tutorials" color="red.400" fontWeight="bold">
              View All Tutorials
            </Link>
          </Flex>
          <SimpleGrid columns={[1, 2, 3]} spacing={8} mt={8}>
            <Box>
              <Heading as="h3" size="lg" mb={4}>
                Beginner
              </Heading>
              <Link href="/tutorials/beginner">
                <Image src="https://images.unsplash.com/photo-1567861911437-538298e4232c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMGJlZ2lubmVyJTIwdHV0b3JpYWwlMjB0aHVtYm5haWx8ZW58MHx8fHwxNzExMTU2NDE5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beginner Tutorials" borderRadius="md" />
              </Link>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={4}>
                Intermediate
              </Heading>
              <Link href="/tutorials/intermediate">
                <Image src="https://images.unsplash.com/photo-1567861911437-538298e4232c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMGludGVybWVkaWF0ZSUyMHR1dG9yaWFsJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxMTE1NjQxOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Intermediate Tutorials" borderRadius="md" />
              </Link>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={4}>
                Advanced
              </Heading>
              <Link href="/tutorials/advanced">
                <Image src="https://images.unsplash.com/photo-1567861911437-538298e4232c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMGFkdmFuY2VkJTIwdHV0b3JpYWwlMjB0aHVtYm5haWx8ZW58MHx8fHwxNzExMTU2NDIwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Advanced Tutorials" borderRadius="md" />
              </Link>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
