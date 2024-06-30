val calibanVersion        = "2.8.0"
val zioVersion            = "2.1.5"
val zioLoggingVersion     = "2.3.0"

lazy val root = (project in file("."))
  .settings(
    inThisBuild(
      List(
        organization := "example",
        scalaVersion := "3.4.2",
        run / fork := true,
        run / connectInput := true,
      )
    ),
    name           := "graphql-server-example",
    libraryDependencies ++= Seq(
      "com.github.ghostdogpr" %% "caliban-quick" % calibanVersion,

      // logging
      "dev.zio"       %% "zio-logging"       % zioLoggingVersion,

      // test
      "dev.zio"       %% "zio-test"          % zioVersion % Test,
      "dev.zio"       %% "zio-test-sbt"      % zioVersion % Test,
    ),
    testFrameworks := Seq(new TestFramework("zio.test.sbt.ZTestFramework")),
  )
  .enablePlugins(JavaAppPackaging)
