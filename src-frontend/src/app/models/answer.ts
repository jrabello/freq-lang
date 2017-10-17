export class Answer{
    //word to translate
    correct: boolean;
    data: String;    
    
    getData(): String{
        return this.data;
    }
    
    setCorrect(correct: boolean){
        this.correct = correct;
    }

    isCorrect(): boolean{
        return this.correct;
    }
}