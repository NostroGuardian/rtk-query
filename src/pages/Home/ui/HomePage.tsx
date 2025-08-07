import { useState } from 'react';

import { useGetAllUsersQuery, useGetRecipesQuery } from '../api/usersApi';
import Button from './Button/Button';
import Collapsible from './Collapsible/Collapsible';
import Pagination from './Pagination/Pagination';

const HomePage = () => {
  const limit = 10;

  const [page, setPage] = useState<number>(1);

  const { data } = useGetAllUsersQuery();
  const { data: recipesData } = useGetRecipesQuery({ limit, skip: (page - 1) * limit });

  const handlePageChange = (value: number) => setPage(value);

  return (
    <main>
      <Collapsible
        trigger={<Button text='Users' asChild />}
        content={data ? data.users.map((user) => <div key={user.id}>{user.firstName}</div>) : null}
      />
      {recipesData ? recipesData.recipes.map((recipe) => <div key={recipe.id}>{recipe.name}</div>) : null}
      {recipesData ? (
        <Pagination count={recipesData.total} pageSize={limit} page={page} onPageChange={handlePageChange} />
      ) : null}
    </main>
  );
};

export default HomePage;
