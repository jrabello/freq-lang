import {Answer} from './answer'

export class User{    
    answer: Answer;  

    constructor(){
        this.answer = new Answer();
    }

    setAnswer(data: String){
        this.answer.data = data;        
    }

    getAnswer(): Answer{
        return this.answer;
    }            
}