// document.addEventListener('DOMContentLoaded', () => {
//     let editingIndex = null;

//     function getStoredData() {
//         return JSON.parse(localStorage.getItem('products'));
//     }

//     function saveData(data) {
//         localStorage.setItem('products', JSON.stringify(data));
//     }

//     function clearForm() {
//         document.getElementById('data-form').reset();
//         document.getElementById('create-update-btn').textContent = 'Add Product';
//         editingIndex = null;
//     }

//     function addRowToTable(product, index) {
//         const tableBody = document.getElementById('data-table-body');
//         const row = tableBody.insertRow();
//         row.dataset.index = index;

//         const cell1 = row.insertCell(0);
//         const cell2 = row.insertCell(1);
//         const cell3 = row.insertCell(2);
//         const cell4 = row.insertCell(3);
//         const cell5 = row.insertCell(4);
//         const cell6 = row.insertCell(5);
//         const cell7 = row.insertCell(6);

//         cell1.textContent = index + 1;
//         cell2.textContent = product.name;
//         cell3.textContent = product.category;
//         cell4.textContent = product.price;
//         cell5.textContent = product.description;

//         const editButton = document.createElement('button');
//         editButton.className = 'btn btn-warning btn-edit';
//         editButton.textContent = 'Edit';
//         editButton.addEventListener('click', () => editProduct(index));
//         cell6.appendChild(editButton);

//         const deleteButton = document.createElement('button');
//         deleteButton.className = 'btn btn-danger btn-delete';
//         deleteButton.textContent = 'Delete';
//         deleteButton.addEventListener('click', () => deleteProduct(index));
//         cell7.appendChild(deleteButton);
//     }

//     function loadTable(data) {
//         const tableBody = document.getElementById('data-table-body');
//         tableBody.innerHTML = '';
//         data.forEach((product, index) => addRowToTable(product, index));
//     }

//     function loadAllProducts() {
//         const data = getStoredData();
//         loadTable(data);
//     }

//     function addOrUpdateProduct() {
//         const name = document.getElementById('productName').value.trim();
//         const category = document.getElementById('productCategory').value.trim();
//         const price = document.getElementById('productPrice').value.trim();
//         const description = document.getElementById('productDescription').value.trim();

//         if (!name || !category || !price || !description) {
//             Swal.fire('Error', 'All fields are required!', 'error');
//             return;
//         }

//         const product = { name, category, price, description };
//         const data = getStoredData();

//         if (editingIndex !== null) {
//             data[editingIndex] = product;
//         } else {
//             data.push(product);
//         }

//         saveData(data);
//         loadAllProducts();
//         clearForm();
//     }

//     function editProduct(index) {
//         const product = getStoredData()[index];
//         document.getElementById('productName').value = product.name;
//         document.getElementById('productCategory').value = product.category;
//         document.getElementById('productPrice').value = product.price;
//         document.getElementById('productDescription').value = product.description;
//         document.getElementById('create-update-btn').textContent = 'Update';
//         editingIndex = index;
//     }

//     function deleteProduct(index) {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 const data = getStoredData();
//                 data.splice(index, 1);
//                 saveData(data);
//                 loadAllProducts();
//             }
//         });
//     }

//     function searchByCategory() {
//         const query = document.getElementById('search').value.toLowerCase();
//         const data = getStoredData();
//         const filteredData = data.filter(product => product.category.toLowerCase().includes(query));
//         loadTable(filteredData);
//     }

//     document.getElementById('create-update-btn').addEventListener('click', addOrUpdateProduct);
//     document.getElementById('clear-btn').addEventListener('click', clearForm);
//     document.getElementById('search-btn').addEventListener('click', searchByCategory);

//     loadAllProducts();
// });



document.addEventListener('DOMContentLoaded', () => {
    let editingIndex = null;

    function getStoredData() {
        // If localStorage doesn't have products, return an empty array
        return JSON.parse(localStorage.getItem('products')) || [];
    }

    function saveData(data) {
        localStorage.setItem('products', JSON.stringify(data));
    }

    function clearForm() {
        document.getElementById('data-form').reset();
        document.getElementById('create-update-btn').textContent = 'Add Product';
        editingIndex = null;
    }

    function addRowToTable(product, index) {
        const tableBody = document.getElementById('data-table-body');
        const row = tableBody.insertRow();
        row.dataset.index = index;

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);

        cell1.textContent = index + 1;
        cell2.textContent = product.name;
        cell3.textContent = product.category;
        cell4.textContent = product.price;
        cell5.textContent = product.description;

        const editButton = document.createElement('button');
        editButton.className = 'btn btn-warning btn-edit';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editProduct(index));
        cell6.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-delete';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteProduct(index));
        cell7.appendChild(deleteButton);
    }

    function loadTable(data) {
        const tableBody = document.getElementById('data-table-body');
        tableBody.innerHTML = '';
        data.forEach((product, index) => addRowToTable(product, index));
    }

    function loadAllProducts() {
        const data = getStoredData();
        loadTable(data);
    }

    function addOrUpdateProduct() {
        const name = document.getElementById('productName').value.trim();
        const category = document.getElementById('productCategory').value.trim();
        const price = document.getElementById('productPrice').value.trim();
        const description = document.getElementById('productDescription').value.trim();

        if (!name || !category || !price || !description) {
            Swal.fire('Error', 'All fields are required!', 'error');
            return;
        }

        const product = { name, category, price, description };
        const data = getStoredData();

        if (editingIndex !== null) {
            data[editingIndex] = product;
        } else {
            data.push(product);
        }

        saveData(data);
        loadAllProducts();
        clearForm();
    }

    function editProduct(index) {
        const product = getStoredData()[index];
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productDescription').value = product.description;
        document.getElementById('create-update-btn').textContent = 'Update';
        editingIndex = index;
    }

    function deleteProduct(index) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const data = getStoredData();
                data.splice(index, 1);
                saveData(data);
                loadAllProducts();
            }
        });
    }

    function searchByCategory() {
        const query = document.getElementById('search').value.toLowerCase();
        const data = getStoredData();
        const filteredData = data.filter(product => product.category.toLowerCase().includes(query));
        loadTable(filteredData);
    }

    document.getElementById('create-update-btn').addEventListener('click', addOrUpdateProduct);
    document.getElementById('clear-btn').addEventListener('click', clearForm);
    document.getElementById('search-btn').addEventListener('click', searchByCategory);

    // Initialize localStorage if it's empty
    if (!localStorage.getItem('products')) {
        saveData([]);
    }

    loadAllProducts();
});
