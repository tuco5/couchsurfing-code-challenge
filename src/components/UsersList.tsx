interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: 38;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  friends: User[];
}

async function getUsers() {
  const res = await fetch("http://localhost:3000/api/v0/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function UsersList() {
  const { users }: { users: User[] } = await getUsers();
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </div>
  );
}
