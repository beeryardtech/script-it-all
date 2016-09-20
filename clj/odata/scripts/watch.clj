(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'odata.core
   :output-to "out/odata.js"
   :output-dir "out"})
