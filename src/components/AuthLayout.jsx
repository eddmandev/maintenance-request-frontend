import "../styles/auth.css";

function AuthLayout({ title, subtitle, children }) {
    return (
        <div className="auth-container">

            <div className="auth-card">

                <h1 className="auth-logo">
                    Re<span>New</span>
                </h1>

                <h2>{title}</h2>

                <p>{subtitle}</p>

                {children}

            </div>

        </div>
    );
}

export default AuthLayout;