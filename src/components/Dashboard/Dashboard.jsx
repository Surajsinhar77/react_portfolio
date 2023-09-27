import AdminLogin from "../AuthPages/AdminLogin";

export default function dashboard(){
    // const [userName, setUserName] = useState("default");
    return(
        <>  
            {/* <AppContext.Provider value={{userName, setUserName}}> */}
                <AdminLogin/>
                {/* <h1>Hell</h1> */}
            {/* </AppContext.Provider> */}
        </>
    )
};