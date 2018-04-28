class Rectangle {


    constructor(height,width){
        this.height = height;
        this.width = width;
    }

    test(){
        console.log('calling a function from a class which seems to be working XD');              
    }

    getArea(){
        return this.height * this.width;
    }

    setVars(newVar){

        this.newVar = newVar;

    }   

    getVars(){
        return this.newVar;
    }

    }


module.exports = Rectangle;