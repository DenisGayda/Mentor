import { UserRole } from '../enums/user-role';

export interface UserInterface {
    firstName: string;
    role: UserRole;
    secondName: string;
    email: string;
    password: string;
}
