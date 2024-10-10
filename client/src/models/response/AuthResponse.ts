import {IUser} from "../IUser";
import {IToken} from "../IToken"

export interface AuthResponse {
    user: IUser;
    token: IToken;
}
