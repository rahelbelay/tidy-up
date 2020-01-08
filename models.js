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

module.exports = {
    stuff,
    // users
};