import { Collapsible as ChakraCollapsible } from '@chakra-ui/react';

import type { ReactNode } from 'react';

const Collapsible = ({ trigger, content }: { trigger: ReactNode; content: ReactNode }) => (
  <ChakraCollapsible.Root>
    <ChakraCollapsible.Trigger>{trigger}</ChakraCollapsible.Trigger>
    <ChakraCollapsible.Content>{content}</ChakraCollapsible.Content>
  </ChakraCollapsible.Root>
);

export default Collapsible;
