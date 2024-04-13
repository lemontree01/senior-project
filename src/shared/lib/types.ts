export interface ICriminal {
  firstName: string;
  lastName: string;
  iin: string;
  gender: string;
  maritalStatus: string;
  offense: string;
  zipCode: string;
  image: string;
  dob: string;
}

export interface IUser {
  first_name: string;
  last_name: string;
  iin: string;
  dob: string;
  department: string;
  badge_number: string;
  role: string;
  password: string;
}