import contacts from "./contactsData"


function getContacts(pageNumber, pageSize = 10){

    let start = (pageNumber - 1);
    let end = start + pageSize


    return contacts.slice(start, end);    

}

// function pagination(pageNumber){
//    return new Promise((res, rej) => {
        
//         setTimeout(()=> {
//             res(getContacts(pageNumber))
//         }, 1000)
//     })
// }

export default getContacts;