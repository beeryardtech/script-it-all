(ns odata.core
  (:require [clojure.browser.repl :as repl]))

 (defonce conn
   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(def hello (fn [] "Hello world"))

(println "Hello world!")
(println "Hello world!")