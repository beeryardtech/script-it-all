// Compiled by ClojureScript 1.9.89 {}
goog.provide('odata.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof odata.core.conn !== 'undefined'){
} else {
odata.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
odata.core.hello = (function odata$core$hello(){
return "Hello world";
});
cljs.core.println.call(null,"Hello world!");
cljs.core.println.call(null,"Hello world!");

//# sourceMappingURL=core.js.map