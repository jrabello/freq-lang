val ScalatraVersion = "2.5.1"

organization := "com.example"

name := "My Scalatra Web App"

version := "0.1.0-SNAPSHOT"

scalaVersion := "2.12.3"

resolvers +=  Classpaths.typesafeReleases
resolvers ++= Seq(
            "sonatype snapshots" at "https://oss.sonatype.org/content/repositories/snapshots",
            "sonatype releases" at "https://oss.sonatype.org/content/repositories/releases"
)

libraryDependencies ++= Seq(
  "org.scalatra" %% "scalatra" % ScalatraVersion,
  "org.scalatra" %% "scalatra-scalatest" % ScalatraVersion % "test",
  "org.scalatra" %% "scalatra-json" % ScalatraVersion,
  "ch.qos.logback" % "logback-classic" % "1.1.5" % "runtime",
  "org.eclipse.jetty" % "jetty-webapp" % "9.2.15.v20160210" % "container",
  "javax.servlet" % "javax.servlet-api" % "3.1.0" % "provided",    
  "org.json4s" % "json4s-jackson_2.12" % "3.5.3",  
)

enablePlugins(SbtTwirl)
enablePlugins(ScalatraPlugin)
