'use client';
import { HStack, VStack } from "panda";
import Image from "next/image";
import { Heading, Text } from "@radix-ui/themes";
import { Fade } from "react-awesome-reveal";
import { token } from "ss/tokens";

export function DesktopAboutMeView() {
  return(
    <HStack width='100%' justifyContent='space-evenly' minHeight='screen' height='fit-content'>
      <VStack alignItems='start' borderRadius='12px' padding='20px' width='60%' bg='gray.12'>
        <HStack gap='25' alignItems='flex-end'>
          <Heading size='8'>Lucas Amberg</Heading>
          <Image src='/logos/logo.jpg' style={{borderRadius:'12px'}} alt='Lucas Amberg Logo' width='75' height='75' />
        </HStack>
        <Text size='6'>As an enthusiastic and dedicated</Text>
        <Heading size='9'>Software Engineer</Heading>
        <Text size='6'>currently pursuing a Bachelor of Science in Computer Science at</Text>
        <Heading color='yellow' size='8'>California State University, Long Beach<span style={{color: 'white'}}>,</span></Heading>
        <Text size='6'>I am set to </Text>
        <Heading size='8'>graduate in <span style={{color: token('colors.purple.9')}}>May 2026</span>.</Heading>
        <Text size='6'>My professional journey includes years of hands-on experience in full stack web development and software engineering.</Text>
      </VStack>
      <Fade style={{marginLeft: 'auto', marginTop: 'auto'}} triggerOnce direction='up' duration={1000}>
        <Image  src='/images/me-transparent.png' width='450' height='700' alt='Lucas Amberg'/>
      </Fade>
    </HStack>
  )
}