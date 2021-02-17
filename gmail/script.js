async function getData(){
    let apiResponse = await fetch(`https://gmail.googleapis.com/gmail/v1/users/testaccg76@gmail.com/profile`)
    let apiData = await apiResponse.json()
    console.log(apiData)
}
getData()