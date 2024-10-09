import {IUser} from "../IUser";

export interface AuthResponse {
    username: string;
    email: string;
    token: string;
    refreshToken: string;
}
