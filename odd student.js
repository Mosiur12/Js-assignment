// PROBLEM-4:
// var students = ["tanjil", "robin","dipu","Mustafizz"];
// let names ="";
function oddFriend (friendsName){ 

    for (i = 0; i<friendsName.length; i++){
        let lengthOfName = friendsName[i].length;

        if (lengthOfName % 2 == 1){
            names = friendsName[i];
            return names;
            
            
        }
        
    }
   return "There is no odd number element ";

}
console.log(oddFriend(["tanjil", "jim","robin","dipu", "fizz"]));