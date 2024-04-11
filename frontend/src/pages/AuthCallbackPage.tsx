import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    const navigate = useNavigate()
    const { user } = useAuth0();
    const { createUser } = useCreateMyUser();

    const hasCreatedUser = useRef(false)
    // the useRef hook stores the state value. Whenever the state changes,
    // that does not trigger a component to rerender.

    useEffect(() => {
        // we use the ".current" syntax to access the actual value of the useRef hook
        if (user?.sub && user?.email && hasCreatedUser.current) {
            createUser({ auth0Id: user.sub, email: user.email })
            hasCreatedUser.current = true;
        }
        navigate("/");
    }, [createUser, navigate, user ])

    return <>Loading...</>
};

export default AuthCallbackPage;