import { useGetAllUsersQuery } from '../api/usersApi';

const HomePage = () => {
  const { data } = useGetAllUsersQuery();

  return <main>{data ? data.users.map((user) => <div key={user.id}>{user.firstName}</div>) : null}</main>;
};

export default HomePage;
