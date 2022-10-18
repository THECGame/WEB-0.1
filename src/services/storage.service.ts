import { Lang } from '../constants/langs';

export class StorageService {

    public static setSomething(model: any){
        return localStorage.setItem('any', JSON.stringify(model));
    }

    public static getSomething(): Promise<Lang> {
        return JSON.parse(localStorage.getItem('any') as any);
    }

    public static getMainVideoDate(): Promise<any> {
        return JSON.parse(localStorage.getItem('mainVideoDate') as any);
    }

    public static setMainVideoDate(model: any){
        return localStorage.setItem('mainVideoDate', JSON.stringify(model));
    }
   
}