export const visitorLogin = (visitorname, phone, tokenid) => {
   return fetch('http://localhost:4488/api/visitorLogin', 
    {method: 'POST',
    headers: {
         Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "name": visitorname,
        "tokenId": tokenid,
        "phone": phone
    })
}
    ).then(response => {
        console.log(response)
       return response.json()
    }).catch( error => console.log(error))
}


export const visitorLogut = (visitorId) => {
    return fetch(`http://localhost:4488/api/visitorLogout/${visitorId}`, {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch(error => console.log(error))
}

export const visitorStatus =  () => {
    return fetch(`http://localhost:4488/api/status`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        }
    }).then(response => response.json())
        .then(response => {
            console.log(response);
            return response
        })
        .catch(error => console.log(error))
}