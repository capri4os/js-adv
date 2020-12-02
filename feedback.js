const name = document.querySelector('.form-name')
const nameExp = /[а-я]\s[а-я]i/
nameExp.match(name)


// const nameRes = name.match(nameExp)
// console.log(nameRes)

// const form = document.querySelector('.form')
// const submitButton = document.querySelector('.form-submit')

// form.addEventListener('submit', function (Event) {
//     Event.preventDefault()
//     console.log('Clicked on validate')
// })

// class Name {
//     name = ''

//     constructor(name) {
//         this.name = name
//     }

//     checkName(Name) {
//         if (Name) {
//             const nameExp = /[а-я]\s[а-я]i/
//             const nameInput = document.querySelector('.form-name')
//             const nameRes = nameInput.match(nameExp)
//             console.log(nameRes)
//         }
//     }
// }



// const nameExp = /[а-я]\s[а-я]i/
// const phoneExp = /\+7\(\d{3}\)\d{3}\-\d{4}/

// const emailExp = /^([a-z0 -9 _\.-]+)@([a-z0 -9 _\.-]+)\.([a-z\.]{ 2 , 6 })$/

