import LogInForm from "@/components/auth/LogInForm";
import Link from 'next/link'

export default function LogInPage() {
    return (
        <section className="grid place-items-center">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 className="font-bold text-2xl">Sign in</h4>
                <LogInForm />
                <span className="text-center text-xs text-gray-500">
                    Do not have an account?
                    <Link
                        className="underline hover:text-indigo-600 mx-1"
                        href="/register"
                    >
                        Register
                    </Link>
                </span>
            </div>
        </section>
    )
}
