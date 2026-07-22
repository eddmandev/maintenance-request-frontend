import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import FormInput from "../components/FormInput";

function RegisterPage() {

    const [form, setForm] = useState({

        firstName: "",
        lastName: "",

        username: "",
        email: "",

        password: "",

        addressLine: "",
        addressLine2: "",

        buildingNr: "",
        apartmentNr: ""

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

        // axios.post("/api/register", form)

    };

    return (

        <AuthLayout
            title="Create Account"
            subtitle="Register your residence to submit maintenance requests."
        >

            <form onSubmit={submit}>

                <div className="two-column">

                    <FormInput
                        label="First Name"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Last Name"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                    />

                </div>

                <FormInput
                    label="Username"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                />

                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />

                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />

                <FormInput
                    label="Address Line"
                    name="addressLine"
                    value={form.addressLine}
                    onChange={handleChange}
                />

                <FormInput
                    label="Address Line 2"
                    name="addressLine2"
                    value={form.addressLine2}
                    onChange={handleChange}
                />

                <div className="two-column">

                    <FormInput
                        label="Building Number"
                        name="buildingNr"
                        value={form.buildingNr}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Apartment Number"
                        name="apartmentNr"
                        value={form.apartmentNr}
                        onChange={handleChange}
                    />

                </div>

                <button className="primary-btn">

                    Register

                </button>

            </form>

        </AuthLayout>

    );

}

export default RegisterPage;