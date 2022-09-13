import './bootstrap';
import '../css/app.css';

import React from 'react';
import {createInertiaApp} from '@inertiajs/inertia-react';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import 'clockwork-browser/toolbar'
import {createRoot} from 'react-dom/client';
import {ChakraProvider} from '@chakra-ui/react'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el); // createRoot(container!) if you use TypeScript
        return root.render(<ChakraProvider><App {...props} /></ChakraProvider>);
    },
});

InertiaProgress.init({ color: '#4B5563' });
