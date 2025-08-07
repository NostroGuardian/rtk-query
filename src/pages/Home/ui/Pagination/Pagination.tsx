import { ButtonGroup, IconButton, Pagination as ChakraPagination } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const Pagination = ({
  count,
  pageSize,
  page,
  onPageChange,
}: {
  count: number;
  pageSize: number;
  page: number;
  onPageChange: (value: number) => void;
}) => (
  <ChakraPagination.Root count={count} pageSize={pageSize} page={page} onPageChange={(e) => onPageChange(e.page)}>
    <ButtonGroup variant='outline' size='sm'>
      <ChakraPagination.PrevTrigger asChild>
        <IconButton>
          <LuChevronLeft />
        </IconButton>
      </ChakraPagination.PrevTrigger>

      <ChakraPagination.Items
        render={(p) => <IconButton variant={{ base: 'outline', _selected: 'solid' }}>{p.value}</IconButton>}
      />

      <ChakraPagination.NextTrigger asChild>
        <IconButton>
          <LuChevronRight />
        </IconButton>
      </ChakraPagination.NextTrigger>
    </ButtonGroup>
  </ChakraPagination.Root>
);

export default Pagination;
