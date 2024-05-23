export declare global {
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
}
