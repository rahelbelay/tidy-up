const userDb = [];
const bcrypt = require('bcryptjs')

function createHash(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}
 function createUser(username, password){
     const hash = createHash(password);
     const newUser = {
         username,
         hash
     };
     console.log(newUser);
     userDb.push(newUser);
 }

 function getUser(username) {
     return userDb.find(user => user.username == username)
 }
 function login(username, password) {
     const theUser = getUser(username);
     return bcrypt.compareSync(password,theUser.hash)

 }



const db = [];
function all() {
    // return copyOf(db);
    // return db; // this gives them
                  // access to the
                  // original

    return [   // return a new array
        ...db  // with the contents of
               // `db` sprinkled
               // inside.
    ];
}

function create(name, joyVal) {
    // let givesJoy = joyVal || 'off';

    // let givesJoy;
    // if (joyVal){
    //     givesJoy = true;
    // }else {
    //     givesJoy = false;
    // }
    
    let givesJoy =joyVal? true : false;
    
    //after question mark the value is always true


    const newItem = {
        name,
        givesJoy
    };
    db.push(newItem);
}

const stuff = {
    all,
    create
};

// const users = {
//     allUsers,
//     signup,
//     login
// };

const users = {
    create: createUser,
    login

};
module.exports = {
    stuff,
    users
};