//pure js so .js extension
//UserContext hai vaise hi login-product-card context ho skte h

import React from 'react'

//creating context
const UserContext=React.createContext()
//just like useState,useEffect it is a methods so varaiable mai store karo

//throwing in output
export default UserContext



//Context is a Provider
//all can access global UserContext
//<UserContext>
// <Login/>
// <Card>
//     <Data/>
// </Card>
// </UserContext>

