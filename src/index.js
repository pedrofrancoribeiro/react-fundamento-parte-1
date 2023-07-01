'use strict';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Title from './app';

const container = document.querySelector('[data-js="app"]');
const root = ReactDOM.createRoot(container);
root.render(<Title />);