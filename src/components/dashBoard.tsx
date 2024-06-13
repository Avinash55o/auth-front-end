import { useEffect } from "react";

const dashBoard=()=>{
    useEffect(()=>{
        const urlParams=new URLSearchParams(window.location.search);
        const usernameParam=urlParams.get("username");
        if(usernameParam){
            localStorage.setItem("username",usernameParam);
            window.history.replaceState({},document.title,)
        } 
    })
    

    return <div>
        welcome <br />
        <a href="/login">go to login</a>
        <br />
        <a href="/profile">go to login</a>
    </div>
}
export default dashBoard;