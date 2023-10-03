import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/UserSlice";

const PrivateRoute = ({children}) => {
    const { email} = useSelector((state) => state.userSlice)
    console.log('email form P R', email)
    const dispatch = useDispatch();

    useEffect(() =>{
        onAuthStateChanged(auth, (user) =>{
            if(user){
                console.log(user.displayName)
                dispatch(setUser({
                    name: user.displayName,
                    email: user.email,
                }));
            }
        })
    }, [])

    if(email){
        return children;
    }else{
       return <Navigate to="/login"></Navigate>
    }
};

export default PrivateRoute;