function findHighest(){
    var topTotal = 0;
    var highest = 0
    var tempHighest = 0
    const calList = document.getElementById("values").value.split('\n');

    for(var i = 0; i<calList.length; i++){
        if(calList[i] == ''){
            if( tempHighest > highest){
                highest = tempHighest       
                      
            } 
            tempHighest = 0
            
        }
        else if(i == calList.length-1){
            tempHighest += parseInt(calList[i])
            if( tempHighest > highest){
                highest = tempHighest       
                      
            }
        }
        else{
            tempHighest += parseInt(calList[i])
        }
        
    }
    
    topTotal = array[0] + array[1] + array[2]

    document.getElementById("topTotal").innerHTML = topTotal

    document.getElementById("high").innerHTML = highest
}