import z from 'zod'

export const signUpSchemaValidation = z.object({
    email: z.email(),
    fullname: z.string().min(6).max(50),
    password: z.string().min(6)
})

export const loginSchemaValidation = z.object({
    email: z.email(),
    password: z.string().min(6)
})

export const createBlogSchemaValidation = z.object({
    title: z.string().min(1).max(100),
    content: z.string().min(1).max(5000),
    published: z.boolean().optional()
})

export const updateBlogSchemaValidation = z.object({
    title: z.string().min(1).max(100).optional(),
    content: z.string().min(1).max(5000).optional(),
    published: z.boolean().optional()
})

export type signUpSchemaValidation = z.infer<typeof signUpSchemaValidation>
export type loginSchemaValidation = z.infer<typeof loginSchemaValidation>
export type createBlogSchemaValidation = z.infer<typeof createBlogSchemaValidation>
export type updateBlogSchemaValidation = z.infer<typeof updateBlogSchemaValidation>