import React from 'react';
import { AzureAD } from 'react-aad-msal';
import { authProvider as authProvider2 } from './authProvider2';

const Component2 = (): JSX.Element => {
    console.log('component2');
    return (
        <AzureAD provider={authProvider2} forceLogin={true}>
            <p>this is component 2</p>
        </AzureAD>
    );
    console.log('efefef');
};

export default Component2;