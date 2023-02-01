import React, { useState } from 'react';
import Details from './Details';

const User = ({ user }) => {
    const [show, setShow] = useState(false);
    console.log(user);
    // console.log(show)
    return (
        <div className='bg-white my-2 rounded-lg p-8 py-12'>
            <section className='grid grid-cols-5 gap-4 px-6'>
                <div className='flex items-center'>
                    <p>{user.company.name}</p>
                </div>

                <div>
                    <h4 className='font-bold'>CONTACT</h4>
                    <p>{user.name}</p>
                </div>

                <div>
                    <h4 className='font-bold'>CITY</h4>
                    <p>{user.address.city}</p>
                </div>

                <div>
                    <h4 className='font-bold'>STREET</h4>
                    <p>{user.address.street}</p>
                </div>

                <div className='flex justify-end items-center'>
                    <button className='view-button' onClick={() => setShow(!show)}>{show ? <span>Hide Details</span> : <span>Show Details</span>}</button>
                </div>
            </section>

            {
                show ? <Details user={user}></Details> : null
            }


        </div>
    );
};

export default User;