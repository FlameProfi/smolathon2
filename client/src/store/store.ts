import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";
import { IToken } from "../models/IToken";

export default class Store {
    user = {} as IUser;
    tokens = {} as IToken;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }
    setToken(tokens: IToken) {
        this.tokens = tokens;
        localStorage.setItem('accessToken', tokens.accessToken);
        localStorage.setItem('refreshToken', tokens.refreshToken);
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            console.log(response.status)
            this.setToken(response.data.token);
            this.setAuth(true);
            this.setUser(response.data.user);
            return(response.status)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(email: string, password: string, passwordConfirm: string, name: string, surname: string, nickname: string, phoneNumber: string) {
        try {
            const response = await AuthService.registration(email, password, passwordConfirm, name, surname, nickname, phoneNumber);
            console.log(response)
            console.log(response.status)
            this.setToken(response.data.token);
            this.setAuth(true);
            this.setUser(response.data.user);
            return(response.status)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async testBearer() {
        try {
            const response = await AuthService.bearer();
            console.log(response);
            this.setAuth(false);
            this.setUser({} as IUser);
            localStorage.clear();
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
            localStorage.clear();
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            // const response = await axios.post<AuthResponse>(`${API_URL}accounts/refresh-token`, {withCredentials: true})
            var credentialsToken = localStorage.getItem('accessToken');
            var credentialsRefreshToken = localStorage.getItem('refreshToken');
            if(!credentialsToken || !credentialsRefreshToken) return;
            const response = await AuthService.refresh(credentialsToken, credentialsRefreshToken);
            console.log(response);
            this.setToken(response.data.token);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}
