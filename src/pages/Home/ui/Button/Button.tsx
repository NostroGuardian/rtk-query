import { Button as ChakraButton } from '@chakra-ui/react';

import type { RefObject } from 'react';

const Button = ({ text, asChild, ref }: { text: string; asChild?: boolean; ref?: RefObject<HTMLButtonElement> }) => {
  if (asChild) {
    return (
      <ChakraButton as='span' ref={ref}>
        {text}
      </ChakraButton>
    );
  }

  return <ChakraButton ref={ref}>{text}</ChakraButton>;
};

export default Button;
