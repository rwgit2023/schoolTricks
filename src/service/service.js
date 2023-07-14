function setLocalStorageValue(key,value){
    console.log('bateu')
    localStorage.setItem(key,value)
}

function getLocalStorageValue(key){
    return (localStorage.getItem(key))
}