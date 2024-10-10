import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/accounts/login', {email, password})
    }

    static async registration(email: string, password: string, passwordConfirm: string, name: string, surname: string, nickname: string, phoneNumber: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/accounts/register', {email, password, passwordConfirm, name, surname, nickname, phoneNumber})
    }

    static async refresh(accessToken: string, refreshToken: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/accounts/refresh-token', {accessToken, refreshToken})
    }

    static async bearer(): Promise<void> {
        return $api.post('/accounts/revoke-all')
    }

    static async logout(): Promise<void> {
        return $api.post('/accounts/logout')
    }

}

