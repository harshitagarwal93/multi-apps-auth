import React from 'react';
import { AzureAD } from 'react-aad-msal';
import { authProvider as authProvider2 } from '../AuthProviders/authProvider2';

const Component2 = (): JSX.Element => {
    return (
        <AzureAD provider={authProvider2} forceLogin={true}>
            <p>this is component 2</p>
        </AzureAD>
    );
};

export default Component2;