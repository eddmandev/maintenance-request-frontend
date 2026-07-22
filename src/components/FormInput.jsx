import "../styles/form.css";

function FormInput({
    label,
    type = "text",
    name,
    value,
    onChange
}) {

    return (
        <div className="form-group">

            <label>{label}</label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />

        </div>
    );

}

export default FormInput;