
type Role = "Admin" | "User" | "Editor" | (string & {});

export type User = {
  id: number;
  avatar : string;
  name: string;
  email: string;
  bio: string;
  age : number;
  joined : string;
  role : Role
  moreInfo : string
};