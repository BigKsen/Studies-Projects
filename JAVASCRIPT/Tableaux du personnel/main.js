// weekdays.forEach((th, index) => {
//     th.textContent = dayjs().day(index + 1).format("dddd")
// })


const StaffArray = [
    {
        Name: "Kozjanova",
        Surname: "Ksenia",
        Birthdate: "25/03/1987",
        Phone_number: "0488/600.300",
    },

    {
        Name: "Dupont",
        Surname: "Mathieu",
        Birthdate: "20/03/1990",
        Phone_number: "0487/500.400",
    },

    {
        Name: "Braxx",
        Surname: "Marina",
        Birthdate: "15/09/1978",
        Phone_number: "0499/789.123",
    },


    {
        Name: "Smith",
        Surname: "Paul",
        Birthdate: "19/08/1960",
        Phone_number: "0485/600.800",
    },

    {
        Name: "Johnson",
        Surname: "Yorick",
        Birthdate: "25/03/1979",
        Phone_number: "0465/700.456",
    }

]

const table = document.querySelectorAll("#staff_table")
const table_titels_DIV = document.querySelectorAll("#table_titels")
const employees_DIV = document.querySelectorAll(".employees")

const name_DIV = document.querySelector(".name")
const surname_DIV = document.querySelector(".surname")
const birthdate_DIV = document.querySelector(".birthdate")
const phone_number_DIV = document.querySelector(".phone_number")



// function displayStaff(i) {

//     StaffArray.forEach(function (StaffArray) {
//         console.log(StaffArray)


//     })
// }
// displayStaff(StaffArray)
