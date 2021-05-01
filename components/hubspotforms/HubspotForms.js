import React from 'react';
import HubspotForm from 'react-hubspot-form'

const HubspotForms = () => {
    return (
        <div className=' container flex flex-col items-center'>
            <div className="w-full text-center text-lg text-gray-800">
            <br />
            <p>To get on our list complete this form.</p></div>
            <div className="w-full"><HubspotForm
                portalId="8636647"
                formId="573f714f-a1d7-4bb0-97f0-2fb22b0376af"
                onSubmit={() => console.log("Submit!")}
                onReady={(form) => console.log("Form ready!")}
                loading={<div>Loading...</div>}
                cssClass=" w-1/2"
            /></div>
        </div>
    )
}
export default HubspotForms;

