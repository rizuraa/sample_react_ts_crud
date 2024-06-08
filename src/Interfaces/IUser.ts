export interface IUser {
    id: number; 
    nama: string;
    email: string;
    role: string;
    password?: string;
    access_token?: string;
    created_at?: Date;
    updated_at?: Date;        
}