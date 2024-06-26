// .jsx bcz wrappper banayenge
import React from "react";
import UserContext from "./UserContext";

//jo bhi aaye as it is pass karo "children"-more like div
const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    //api call idr karo
    return(
        <UserContext.Provider value={{user,setUser}}>  {/* bt konsa data access karega */}  {/* //access idr karo */}
             {/* {Accessing .Provider   its property} */}      
        {children}    {/* {rendering children as it is} */}
        </UserContext.Provider>
    )
}
export default UserContextProvider  