import * as z from 'zod'

export const userFormSchema = z.object({
    nama: z.string().min(3, {message: "name must be at least 3", }),
    email: z.string().email({message: "contain an email format"}),
    password: z.string().min(8, {message: "name must be at least 8  ", }),
    role: z.string().min(5, {message: "name must be at least 5", }),
    access_token: z.string().min(3, {message: "write test", }),
})