export type Page = {
  name: string;
  route: string;
};

export const pages: Page[] = [
  {
    name: "Home",
    route: "/home",
  },
  {
    name: "Text",
    route: "/text",
  },
  {
    name: "Audio",
    route: "/audio",
  },
  // {
  //   name: "Login",
  //   route: "login",
  // },
  // {
  //   name: "Register",
  //   route: "register",
  // },
  {
    name: "Admin Dashboard",
    route: "/admin",
  },
];
