export default function isValidIndex(array, index){
    if(index >= 0 && index < array.length){
        return true;
    }

    return false;
}