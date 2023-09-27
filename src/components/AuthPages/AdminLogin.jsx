import React from 'react';
import { useState } from 'react';

function Adminlogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remenber, setRemember] = useState(false);

    return (
        <div>
            
            <div className="flex h-full">
                <div className="left w-8/12 ">
                    <div className="logo">
                        <h1 className="text-4xl p-7 font-bold  uppercase"> Admin Panel</h1>
                        <div className="mainContainer ">
                            <img className="m-auto"  />
                            
                        </div>
                    </div>
                </div>
                <div className="right w-4/12 bg-slate-200  flex items-center flex-row px-20 h-screen">
                    <div className="formContainer">
                        <div className="headingpart my-5">
                            <h1 className="text-3xl">Manage your Work here  </h1>
                            <p className="text-sm font-light">Please sign-in to your account and start the adventure</p>
                        </div>
                        <div>
                            <form className="h-64 flex flex-col justify-between" >
                                <div className="row flex flex-col">
                                    <label className="text-xs" htmlFor="">Email</label>
                                    <input className="h-10 rounded pl-3 mt-1" onChange={(e)=>setEmail(e.target.value)} placeholder="admin@myportfolio.com" type="email" required/>
                                </div>
                                <div className="row flex flex-col">
                                    <label className="text-xs" htmlFor="">Password</label>
                                    <input className="h-10 rounded pl-3 mt-1" onChange={(e)=>setPassword(e.target.value)} type="password" required/>
                                </div>
                                <div className="row pl-3">
                                    <div className="one">
                                        <input className="mr-1" type="checkbox" />
                                        <label htmlFor="">Remenber me</label>
                                    </div>
                                    <div className="two">
                                        
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="bg-black text-white py-2 px-4 border border-white rounded-lg">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Adminlogin;