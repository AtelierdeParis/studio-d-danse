import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Maintenance: NextPage = () => (
  <Flex
    minH="100vh"
    align="center"
    justify="center"
    bg="grayBackground"
    p={6}
  >
    <Box
      bg="white"
      borderRadius="xl"
      maxW="700px"
      w="full"
      p={{ base: 8, md: 12 }}
      boxShadow="sm"
    >
      <VStack spacing={6} textAlign="center">
        <Image
          src="/assets/img/logo-studio-d.svg"
          alt="Logo Studio D"
          h="32px"
        />
        <Heading as="h1" fontSize={{ base: 'xl', md: '2xl' }} color="blue.500">
          StudioD fait peau neuve
        </Heading>
        <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
          La plateforme est momentanément en maintenance, le temps de mettre
          en ligne la nouvelle version du site. Elle sera de retour dans
          quelques heures.
        </Text>
        <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
          Vos comptes, espaces, réservations et candidatures sont conservés.
        </Text>
        <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
          À votre première connexion sur le nouveau site, vous devrez
          renouveler votre mot de passe : un email vous sera envoyé
          automatiquement.
        </Text>
      </VStack>
    </Box>
  </Flex>
)

export default Maintenance
