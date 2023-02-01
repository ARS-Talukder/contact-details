import React from 'react';

const Details = ({user}) => {
    return (
        <section className='mt-16 mx-4 px-10 py-6 border-2 border-slate-200 rounded-2xl'>
            <div className='mb-8'>
                <h4 className='font-bold'>Description</h4>
                <p>Providing service of {user.company.bs} @ lowest price guaranteed. Giving services to our customers since 1995. Now going to start new one with great price.</p>
            </div>

            <div className='w-1/2 flex justify-between'>
                <div>
                    <h4 className='font-bold mb-4'>Contact Person</h4>
                    <p>{user.name}</p>

                    <h4 className='font-bold mb-4'>Designation</h4>
                    <p>Proprietor</p>

                    <h4 className='font-bold mb-4'>Emails</h4>
                    <p>{user.email}</p>

                    <h4 className='font-bold mb-4'>Phones</h4>
                    <p>{user.phone}</p>
                </div>

                <div>
                    <h4 className='font-bold mb-4'>Address</h4>
                    <p>{user.address.zipcode}, {user.address.street}, {user.address.city}</p>

                    <h4 className='font-bold mb-4'>City</h4>
                    <p>{user.address.city}</p>

                    <h4 className='font-bold mb-4'>Street</h4>
                    <p>{user.address.street}</p>

                    <h4 className='font-bold mb-4'>Zip</h4>
                    <p>{user.address.zipcode}</p>
                </div>
            </div>


        </section>
    );
};

export default Details;