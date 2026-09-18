export default function isValidIndex(array, index){
    if(index == ""){
        return false;
    }

    else if(index >= 0 && index < array.length){
        return true;
    }

    return false;
}