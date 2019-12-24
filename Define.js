
const firstName = 'IVAN';
const lastName = 'SENSEY';
const space = ' '
const userfullName = firstName + space + lastName;
console.log(userfullName)
console.log(Object.prototype)
const user = {
    firstName: 'IVAN', lastName: 'SENSEY'
}

user.fullName = user.firstName + space + user.lastName

console.log(InputEvent)

const users = [
    { firstName: 'user1', lastName: 'user1' }, { firstName: 'user9', lastName: 'user9' },
]
console.log(users)
for (let i = 0; i < users.length; i++) {
    console.log(users[i].firstName)
    users[i].firstName
}
function getUserFullName() {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].firstName)

    }
}
getUserFullName ()
