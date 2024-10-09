import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/accounts/login', {email, password})
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/accounts/registration', {email, password})
    }

    static async refresh(accessToken: string, refreshToken: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/accounts/refresh-token', {accessToken, refreshToken})
    }

    static async logout(): Promise<void> {
        return $api.post('/accounts/logout')
    }

}

