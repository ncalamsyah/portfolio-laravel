import React, { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-dark">
                    {status}
                </div>
            )}
            <div className="form-login">
                <form onSubmit={submit}>
                    <div>
                        <InputLabel
                            className="text-dark mb-2"
                            forInput="email"
                            value="Email"
                        />

                        <TextInput
                            type="text"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full rounded-md border-none bg-zinc-50"
                            autoComplete="username"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            className="text-dark mb-2"
                            forInput="password"
                            value="Password"
                        />

                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full rounded-md border-none bg-zinc-50"
                            autoComplete="current-password"
                            handleChange={onHandleChange}
                        />

                        <InputError
                            message={errors.password}
                            className="mt-1"
                        />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                value={data.remember}
                                handleChange={onHandleChange}
                            />

                            <span className="ml-2 text-sm text-dark">
                                Remember me
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-dark hover:text-primary"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <PrimaryButton
                            className="ml-4 bg-transparent border-primary hover:bg-primary"
                            processing={processing}
                        >
                            Log in
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
