export const generateUserErrorInfo = user => {
    return `One or more properties were incomplete or no valid.
    List of required properties: 
    * first_name: needs to be a String, recived ${user.first_name}
    * last_name : needs to be a String, recived ${user.last_name}
    * email     : needs to be a String, recived ${user.email}
    `
}