"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";

    // ========================         AUTH FORM SCHEMA   =============================

    const authFormSchema = (type:FormType)=>{
        return z.object({
            name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
            email: z.string().email(),
            password: z.string().min(8),
        })
    }

    // =========================           DEFINING FORM             ===========================

    const AuthForm = ({type}:{type: FormType}) => {
        const router = useRouter();

        const formSchema = authFormSchema(type)
        const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: "",
                email: "",
                password: "",
            },
    })

    

    //  =======================        FORM SUBMIT HANDLER            ===================================
    function onSubmit(values: z.infer<typeof formSchema>) {

        try{
            if(type ==='sign-up'){
                toast.success('Account created successfully. Please sign in.');
                router.push('/sign-in')
            }
            else{
                toast.success('Signed in  successfully. ');
                router.push('/')
            }

        }
        catch(error){
            console.log("Error is ", (error as Error).message);
            toast.error(`There was an error ${error}`);
        }
    
    }

    const isSignIn = type ==='sign-in';

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src="/logo.svg" alt="PrepAce's Logo" height={32} width={38}/>
                    <h2 className="text-primary-100">PrepAce</h2>
                </div>
                <h3>Practice Job interviews with AI</h3>    
                {/* =======================         FORM              =============================== */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} 
                        className="w-full space-y-6 mt-4 form">
                        {/*------------------------               NAME            ---------------------------- */}
                        {!isSignIn && (
                            <FormField 
                                control={form.control} 
                                name="name" 
                                lable="Name" 
                                placeholder="Your Name" 
                            />
                        )}
                        {/*------------------------               Email            ---------------------------- */}
                        <FormField 
                                control={form.control} 
                                name="email" 
                                lable="Email" 
                                placeholder="example@email.com"
                                type="email" 
                            />
                        {/*------------------------               PASSWORD            ---------------------------- */}
                        <FormField 
                                control={form.control} 
                                name="password" 
                                lable="Password" 
                                placeholder="Your Password" 
                                type="password"
                            />
                        <Button className="btn" type="submit">{isSignIn ? 'Sign in':'Create an Account'}</Button>
                    </form>
                </Form>
                <p className="text-center">
                    {isSignIn ? 'No account yet ? ':'Have an account already ? '}
                    <Link href={!isSignIn ? '/sign-in':'sign-up'} className='font-bold text-user-primary ml-1 '>
                    {!isSignIn ? 'Sign In':'Sign Up'}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default AuthForm