/*
fetch(url)//Promise server request (GET) 
.then(function(response)){ //Promise to transform the data
    return response.json();
}
.then(function(data)){ //Processing of data by means of a promise
    console.log(data);
}
.catch(function(error)){ //Handle errors by preventing possible errors in the conversion process.
    console.log("unexpected error", error);
}
*/
//comentario aparte