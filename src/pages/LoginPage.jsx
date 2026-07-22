import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import FormInput from "../components/FormInput";

function LoginPage() {

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const submit = (e) => {
        e.preventDefault();

        console.log(form);

        axios.post("/api/login", form)
    };

    return (

        <AuthLayout
            title="Welcome Back"
            subtitle="Log into your ReNew account."
        >

            <form onSubmit={submit}>

                <FormInput
                    label="Username"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                />

                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />

                <button className="primary-btn">
                    Login
                </button>

            </form>

        </AuthLayout>

    );

}

export default LoginPage;