import './scss/app.scss';

import Header from './components/header';
import User from './components/user';

const app = async () => {
    document.getElementById('header').innerHTML = Header();
    document.getElementById('user').innerHTML = await User();
}

// Init app
app();
