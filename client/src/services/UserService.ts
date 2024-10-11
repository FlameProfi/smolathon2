import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {IUser} from "../models/IUser";
import { IProfile, WorkInProfile, AllWorks } from "../models/IProfile";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }
    static async fetchProfile(userName: string): Promise<AxiosResponse<IProfile>> {
        return $api.post<IProfile>('/accounts/get-user', {userName})
    }
    static fetchWorkProfile(userName: string): Promise<AxiosResponse<WorkInProfile[]>> {
        return $api.get<WorkInProfile[]>(`api/Product/userName?UserName=${userName}`)
    }
    static fetchAllWorks(): Promise<AxiosResponse<AllWorks[]>> {
        return $api.get<AllWorks[]>("api/PictureProduct/all")
    }
    static async putGood(name: string, description: string, count: number, price: number, userId: number): Promise<AxiosResponse<IProfile>> {
        return $api.post<IProfile>('/api/PictureProduct', {name, description, count, price, userId})
    }
}

