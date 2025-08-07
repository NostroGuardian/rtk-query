'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

import { ColorModeProvider } from './colorMode';

import type { ColorModeProviderProps } from './colorMode';

export const Provider = (props: ColorModeProviderProps) => (
  <ChakraProvider value={defaultSystem}>
    <ColorModeProvider defaultTheme='light' {...props} />
  </ChakraProvider>
);
