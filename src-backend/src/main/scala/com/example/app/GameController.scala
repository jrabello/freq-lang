package com.example.app

import scala.util.Random
import scala.collection.mutable.ListBuffer

import org.scalatra._
import org.scalatra.json._
import org.scalatra.CorsSupport
import org.json4s.{DefaultFormats, Formats}

import com.example.app.models._
import com.example.app.data._

class GameController extends ScalatraServlet with JacksonJsonSupport with CorsSupport{
  protected implicit val jsonFormats: Formats = DefaultFormats
  
  before(){
    contentType = formats("json")
  }

  def getGame(): Game = {
    //generate six random indexes
    val rand_idxs = collection.mutable.Set[Int]()
    while (rand_idxs.size != 6)
      rand_idxs += Random.nextInt(TranslationData.all.size)
    
    //building list with random translations
    val random_translations = ListBuffer[Translation]()
    for (rand_idx <- rand_idxs){
      random_translations += TranslationData.all(rand_idx)
    }

    //generating random game
    val rand_idx = Random.nextInt(random_translations.size)
    val question = random_translations(rand_idx).text
    val answer = random_translations(rand_idx).translated
    val answers = ListBuffer[String]()
    for (translation <- random_translations){
      answers += translation.translated
    }
    
    Game(question, answer, answers.toList)
  }

  get("/game"){
    //GameData.all
    response.setHeader("Access-Control-Allow-Origin","*")
    getGame()
  } 

  // options("/*"){
  //     response.setHeader("Access-Control-Allow-Option","*")    
  //     //request.getHeader("Access-Control-Request-Headers"))
  // }
}
