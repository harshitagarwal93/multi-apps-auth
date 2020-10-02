import React from 'react';
import { AzureAD } from 'react-aad-msal';
import { authProvider as authProvider1 } from '../AuthProviders/authProvider1';

const Component1 = (): JSX.Element => {
    return (
        <AzureAD provider={authProvider1} forceLogin={true}>
            <p>this is component 1</p>
        </AzureAD>
    );
};

export default Component1;