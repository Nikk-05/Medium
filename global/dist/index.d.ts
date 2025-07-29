import z from 'zod';
export declare const signUpSchemaValidation: z.ZodObject<{
    email: z.ZodEmail;
    fullname: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const loginSchemaValidation: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export declare const createBlogSchemaValidation: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateBlogSchemaValidation: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type signUpSchemaValidation = z.infer<typeof signUpSchemaValidation>;
export type loginSchemaValidation = z.infer<typeof loginSchemaValidation>;
export type createBlogSchemaValidation = z.infer<typeof createBlogSchemaValidation>;
export type updateBlogSchemaValidation = z.infer<typeof updateBlogSchemaValidation>;
