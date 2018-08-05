function addCustomer() {
    let firstName = document.querySelector('#first_name').value,
        lastName = document.querySelector('#last_name').value,
        email = document.querySelector('#email').value;
    axios.post('/customers/add', { firstName, lastName, email })
        .then(result => {
            showCustomers();
        })
}
function fetchCustomers() {
    return axios.get('/customers')
        .then(data => data.data.data)
        .catch(err => {
            console.log(err);
        })
}

async function showCustomers() {
    let customers = await fetchCustomers();
    document.getElementById('customers').innerHTML = '';
    customers.forEach(customer => {
        document.getElementById('customers').innerHTML += `<li>${`${customer.firstName + ' ' + customer.lastName}`} <a href="JavaScript:void(0)" onClick="removeCustomer('${customer._id}')">Remove</a></li>`;
    });
}

function removeCustomer(id) {
    console.log(id)
    axios.delete(`/customers/remove?id=${id}`).then(data => {
        console.log(data);
        showCustomers();
    }).catch(err => {
        console.log(err);
    });
}