(defproject odata "0.1.0-SNAPSHOT"
    :dependencies [
                   [org.clojure/clojure "1.8.0"]
                   [org.clojure/clojurescript "1.9.89"]
                   ]
    :clean-targets ["out" "release"]
    :description "FIXME: write this!"
    :jvm-opts ^:replace ["-Xmx1g" "-server"]
    :main odata.core
    :npm {:dependencies [[source-map-support "0.4.0"]]}
    :plugins [[lein-npm "0.6.1"]
              [lein-cljsbuild "1.1.3"]
              ]
    :source-paths ["src" "target/classes"]
    :target-path "target"
    :url "http://example.com/FIXME")
