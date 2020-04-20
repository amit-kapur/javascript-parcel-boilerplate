import axios from 'axios';

const User = async () => {
    const response = await axios.get('https://randomuser.me/api');
    const user = response.data.results[0];

    console.log(user);

    const template = `
        <div class="card">
            <img src="${user.picture.large}" />
            <div class="card-body">
                <h1>${user.name.first} ${user.name.last} </h1
            </div>
            <ul>
                <li>${user.email}</l1>
                <li>${user.phone}</l1>
                <li>${user.location.city}</l1>
            </ul>
        </card>
    `;

    return template;

}

export default User;