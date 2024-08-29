import React, { useEffect, useState } from 'react'




const UseEffectapi = () => {

    const [user, setuser]= useState([]);


    const getuserdata = async () => {

        try{
            const response = await fetch('https://api.github.com/users');
            setuser( await response.json());
        }catch(error){
             console.log(error);
        }
    

    }

    useEffect(()=> {
        getuserdata();
    }, [])
    return (
        <>
            <h2 className='text-center'> List of Github Users</h2>
            <div className='container-fluid mt-5'>
                <div className='row'>
                 {
                    user.map((curelem)=> {
                       return(
                        <>
                        <div className='col-lg-4 col-md-6 col-sm-12' key={curelem.id}>
                        <div className="card">
                            <img src={curelem.avatar_url} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{curelem.html_url}.</p>
                            </div>
                        </div>
                    </div>
                            
                        </>
                       )
                    })
                 }
                    

                </div>
            </div>
        </>
    )
}

export default UseEffectapi;