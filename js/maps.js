function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }    
        return admins;
}

const usuarios = new Map()

usuarios.set('Rafael', 'Admin');
usuarios.set('Gabriel', 'Admin');
usuarios.set('Waleska', 'User');
usuarios.set('Geriscleidson', 'Admin');
usuarios.set('Emanuela', 'Admin');

console.log(getAdmins(usuarios))
