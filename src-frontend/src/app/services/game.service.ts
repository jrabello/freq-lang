import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Game } from '../models/game'
import { Translation } from '../models/translation'
import { GAME } from '../mocks/mock-game';
import { TRANSLATIONS } from '../mocks/mock-translations'


@Injectable()
export class GameService {
    gameUrl: String = //"http://www.mocky.io/v2";
        "http://192.168.1.39:8080";

    constructor(private http: Http) { }

    //this method should get a game from backend server
    getGame(): Promise<Game> {
        let url = `${this.gameUrl}/game`
        ///59d474cd270000290507b331`;
        return this.http.get(url)
            .toPromise()
            .then((response) =>                 
                response.json() as Game
            )
            .catch(this.handleError);
    }

    //this method gets a game from manipulating mock-translations
    // getGame2(): Promise<Game> {
    //     //generating 6 random indexes
    //     let randIdxArr = []
    //     while (randIdxArr.length != 6) {
    //         var idx = Math.floor(Math.random() * TRANSLATIONS.length);
    //         if (randIdxArr.indexOf(idx) > -1) continue;
    //         randIdxArr[randIdxArr.length] = idx;
    //     }

    //     //generating random words
    //     let chosenWord: Translation = TRANSLATIONS[randIdxArr[Math.floor(Math.random() * randIdxArr.length)]];
    //     let allWords: String[] = [];
    //     for (let idx of randIdxArr) {
    //         allWords.push(TRANSLATIONS[idx].to);
    //     }

    //     return Promise.resolve({
    //         question: chosenWord.from,
    //         correctAnswer: chosenWord.to,
    //         answers: allWords
    //     });
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}