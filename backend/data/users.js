import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Manindra",
    email: "manindra810@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Akhil",
    email: "Akhilbodakuntla@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
