import React from 'react';
import Layout from '@theme-original/Layout';
import LocaleWatcher from '../../components/LocaleWatcher';
import TenantResolver from '../../components/TenantResolver';

export default function LayoutWrapper(props) {
    return (
        <>
            <TenantResolver />
            <LocaleWatcher />
            <Layout {...props} />
        </>
    );
}