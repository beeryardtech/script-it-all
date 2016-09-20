// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7552__auto__,writer__7553__auto__,opt__7554__auto__){
return cljs.core._write.call(null,writer__7553__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8217 = arguments.length;
var i__8022__auto___8218 = (0);
while(true){
if((i__8022__auto___8218 < len__8021__auto___8217)){
args__8028__auto__.push((arguments[i__8022__auto___8218]));

var G__8219 = (i__8022__auto___8218 + (1));
i__8022__auto___8218 = G__8219;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq8216){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8216));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8221 = arguments.length;
var i__8022__auto___8222 = (0);
while(true){
if((i__8022__auto___8222 < len__8021__auto___8221)){
args__8028__auto__.push((arguments[i__8022__auto___8222]));

var G__8223 = (i__8022__auto___8222 + (1));
i__8022__auto___8222 = G__8223;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq8220){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8220));
});

var g_QMARK__8224 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_8225 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__8224){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__8224))
,null));
var mkg_8226 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__8224,g_8225){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__8224,g_8225))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__8224,g_8225,mkg_8226){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__8224).call(null,x);
});})(g_QMARK__8224,g_8225,mkg_8226))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__8224,g_8225,mkg_8226){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_8226).call(null,gfn);
});})(g_QMARK__8224,g_8225,mkg_8226))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__8224,g_8225,mkg_8226){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_8225).call(null,generator);
});})(g_QMARK__8224,g_8225,mkg_8226))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8188__auto___8244 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__8188__auto___8244){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8245 = arguments.length;
var i__8022__auto___8246 = (0);
while(true){
if((i__8022__auto___8246 < len__8021__auto___8245)){
args__8028__auto__.push((arguments[i__8022__auto___8246]));

var G__8247 = (i__8022__auto___8246 + (1));
i__8022__auto___8246 = G__8247;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8244))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8244){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8244),args);
});})(g__8188__auto___8244))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__8188__auto___8244){
return (function (seq8227){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8227));
});})(g__8188__auto___8244))
;


var g__8188__auto___8248 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__8188__auto___8248){
return (function cljs$spec$impl$gen$list(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8249 = arguments.length;
var i__8022__auto___8250 = (0);
while(true){
if((i__8022__auto___8250 < len__8021__auto___8249)){
args__8028__auto__.push((arguments[i__8022__auto___8250]));

var G__8251 = (i__8022__auto___8250 + (1));
i__8022__auto___8250 = G__8251;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8248))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8248){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8248),args);
});})(g__8188__auto___8248))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__8188__auto___8248){
return (function (seq8228){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8228));
});})(g__8188__auto___8248))
;


var g__8188__auto___8252 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__8188__auto___8252){
return (function cljs$spec$impl$gen$map(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8253 = arguments.length;
var i__8022__auto___8254 = (0);
while(true){
if((i__8022__auto___8254 < len__8021__auto___8253)){
args__8028__auto__.push((arguments[i__8022__auto___8254]));

var G__8255 = (i__8022__auto___8254 + (1));
i__8022__auto___8254 = G__8255;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8252))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8252){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8252),args);
});})(g__8188__auto___8252))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__8188__auto___8252){
return (function (seq8229){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8229));
});})(g__8188__auto___8252))
;


var g__8188__auto___8256 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__8188__auto___8256){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8257 = arguments.length;
var i__8022__auto___8258 = (0);
while(true){
if((i__8022__auto___8258 < len__8021__auto___8257)){
args__8028__auto__.push((arguments[i__8022__auto___8258]));

var G__8259 = (i__8022__auto___8258 + (1));
i__8022__auto___8258 = G__8259;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8256))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8256){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8256),args);
});})(g__8188__auto___8256))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__8188__auto___8256){
return (function (seq8230){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8230));
});})(g__8188__auto___8256))
;


var g__8188__auto___8260 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__8188__auto___8260){
return (function cljs$spec$impl$gen$set(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8261 = arguments.length;
var i__8022__auto___8262 = (0);
while(true){
if((i__8022__auto___8262 < len__8021__auto___8261)){
args__8028__auto__.push((arguments[i__8022__auto___8262]));

var G__8263 = (i__8022__auto___8262 + (1));
i__8022__auto___8262 = G__8263;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8260))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8260){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8260),args);
});})(g__8188__auto___8260))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__8188__auto___8260){
return (function (seq8231){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8231));
});})(g__8188__auto___8260))
;


var g__8188__auto___8264 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__8188__auto___8264){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8265 = arguments.length;
var i__8022__auto___8266 = (0);
while(true){
if((i__8022__auto___8266 < len__8021__auto___8265)){
args__8028__auto__.push((arguments[i__8022__auto___8266]));

var G__8267 = (i__8022__auto___8266 + (1));
i__8022__auto___8266 = G__8267;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8264))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8264){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8264),args);
});})(g__8188__auto___8264))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__8188__auto___8264){
return (function (seq8232){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8232));
});})(g__8188__auto___8264))
;


var g__8188__auto___8268 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__8188__auto___8268){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8269 = arguments.length;
var i__8022__auto___8270 = (0);
while(true){
if((i__8022__auto___8270 < len__8021__auto___8269)){
args__8028__auto__.push((arguments[i__8022__auto___8270]));

var G__8271 = (i__8022__auto___8270 + (1));
i__8022__auto___8270 = G__8271;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8268))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8268){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8268),args);
});})(g__8188__auto___8268))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__8188__auto___8268){
return (function (seq8233){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8233));
});})(g__8188__auto___8268))
;


var g__8188__auto___8272 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__8188__auto___8272){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8273 = arguments.length;
var i__8022__auto___8274 = (0);
while(true){
if((i__8022__auto___8274 < len__8021__auto___8273)){
args__8028__auto__.push((arguments[i__8022__auto___8274]));

var G__8275 = (i__8022__auto___8274 + (1));
i__8022__auto___8274 = G__8275;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8272))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8272){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8272),args);
});})(g__8188__auto___8272))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__8188__auto___8272){
return (function (seq8234){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8234));
});})(g__8188__auto___8272))
;


var g__8188__auto___8276 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__8188__auto___8276){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8277 = arguments.length;
var i__8022__auto___8278 = (0);
while(true){
if((i__8022__auto___8278 < len__8021__auto___8277)){
args__8028__auto__.push((arguments[i__8022__auto___8278]));

var G__8279 = (i__8022__auto___8278 + (1));
i__8022__auto___8278 = G__8279;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8276))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8276){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8276),args);
});})(g__8188__auto___8276))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__8188__auto___8276){
return (function (seq8235){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8235));
});})(g__8188__auto___8276))
;


var g__8188__auto___8280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__8188__auto___8280){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8281 = arguments.length;
var i__8022__auto___8282 = (0);
while(true){
if((i__8022__auto___8282 < len__8021__auto___8281)){
args__8028__auto__.push((arguments[i__8022__auto___8282]));

var G__8283 = (i__8022__auto___8282 + (1));
i__8022__auto___8282 = G__8283;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8280))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8280){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8280),args);
});})(g__8188__auto___8280))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__8188__auto___8280){
return (function (seq8236){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8236));
});})(g__8188__auto___8280))
;


var g__8188__auto___8284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__8188__auto___8284){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8285 = arguments.length;
var i__8022__auto___8286 = (0);
while(true){
if((i__8022__auto___8286 < len__8021__auto___8285)){
args__8028__auto__.push((arguments[i__8022__auto___8286]));

var G__8287 = (i__8022__auto___8286 + (1));
i__8022__auto___8286 = G__8287;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8284))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8284){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8284),args);
});})(g__8188__auto___8284))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__8188__auto___8284){
return (function (seq8237){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8237));
});})(g__8188__auto___8284))
;


var g__8188__auto___8288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__8188__auto___8288){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8289 = arguments.length;
var i__8022__auto___8290 = (0);
while(true){
if((i__8022__auto___8290 < len__8021__auto___8289)){
args__8028__auto__.push((arguments[i__8022__auto___8290]));

var G__8291 = (i__8022__auto___8290 + (1));
i__8022__auto___8290 = G__8291;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8288))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8288){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8288),args);
});})(g__8188__auto___8288))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__8188__auto___8288){
return (function (seq8238){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8238));
});})(g__8188__auto___8288))
;


var g__8188__auto___8292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__8188__auto___8292){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8293 = arguments.length;
var i__8022__auto___8294 = (0);
while(true){
if((i__8022__auto___8294 < len__8021__auto___8293)){
args__8028__auto__.push((arguments[i__8022__auto___8294]));

var G__8295 = (i__8022__auto___8294 + (1));
i__8022__auto___8294 = G__8295;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8292))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8292){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8292),args);
});})(g__8188__auto___8292))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__8188__auto___8292){
return (function (seq8239){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8239));
});})(g__8188__auto___8292))
;


var g__8188__auto___8296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__8188__auto___8296){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8297 = arguments.length;
var i__8022__auto___8298 = (0);
while(true){
if((i__8022__auto___8298 < len__8021__auto___8297)){
args__8028__auto__.push((arguments[i__8022__auto___8298]));

var G__8299 = (i__8022__auto___8298 + (1));
i__8022__auto___8298 = G__8299;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8296))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8296){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8296),args);
});})(g__8188__auto___8296))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__8188__auto___8296){
return (function (seq8240){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8240));
});})(g__8188__auto___8296))
;


var g__8188__auto___8300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__8188__auto___8300){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8301 = arguments.length;
var i__8022__auto___8302 = (0);
while(true){
if((i__8022__auto___8302 < len__8021__auto___8301)){
args__8028__auto__.push((arguments[i__8022__auto___8302]));

var G__8303 = (i__8022__auto___8302 + (1));
i__8022__auto___8302 = G__8303;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8300))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8300){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8300),args);
});})(g__8188__auto___8300))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__8188__auto___8300){
return (function (seq8241){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8241));
});})(g__8188__auto___8300))
;


var g__8188__auto___8304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__8188__auto___8304){
return (function cljs$spec$impl$gen$return(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8305 = arguments.length;
var i__8022__auto___8306 = (0);
while(true){
if((i__8022__auto___8306 < len__8021__auto___8305)){
args__8028__auto__.push((arguments[i__8022__auto___8306]));

var G__8307 = (i__8022__auto___8306 + (1));
i__8022__auto___8306 = G__8307;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8304))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8304){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8304),args);
});})(g__8188__auto___8304))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__8188__auto___8304){
return (function (seq8242){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8242));
});})(g__8188__auto___8304))
;


var g__8188__auto___8308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__8188__auto___8308){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8309 = arguments.length;
var i__8022__auto___8310 = (0);
while(true){
if((i__8022__auto___8310 < len__8021__auto___8309)){
args__8028__auto__.push((arguments[i__8022__auto___8310]));

var G__8311 = (i__8022__auto___8310 + (1));
i__8022__auto___8310 = G__8311;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___8308))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___8308){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___8308),args);
});})(g__8188__auto___8308))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8188__auto___8308){
return (function (seq8243){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8243));
});})(g__8188__auto___8308))
;

var g__8201__auto___8333 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8201__auto___8333){
return (function cljs$spec$impl$gen$any(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8334 = arguments.length;
var i__8022__auto___8335 = (0);
while(true){
if((i__8022__auto___8335 < len__8021__auto___8334)){
args__8028__auto__.push((arguments[i__8022__auto___8335]));

var G__8336 = (i__8022__auto___8335 + (1));
i__8022__auto___8335 = G__8336;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8333))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8333){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8333);
});})(g__8201__auto___8333))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8201__auto___8333){
return (function (seq8312){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8312));
});})(g__8201__auto___8333))
;


var g__8201__auto___8337 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8201__auto___8337){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8338 = arguments.length;
var i__8022__auto___8339 = (0);
while(true){
if((i__8022__auto___8339 < len__8021__auto___8338)){
args__8028__auto__.push((arguments[i__8022__auto___8339]));

var G__8340 = (i__8022__auto___8339 + (1));
i__8022__auto___8339 = G__8340;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8337))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8337){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8337);
});})(g__8201__auto___8337))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8201__auto___8337){
return (function (seq8313){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8313));
});})(g__8201__auto___8337))
;


var g__8201__auto___8341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8201__auto___8341){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8342 = arguments.length;
var i__8022__auto___8343 = (0);
while(true){
if((i__8022__auto___8343 < len__8021__auto___8342)){
args__8028__auto__.push((arguments[i__8022__auto___8343]));

var G__8344 = (i__8022__auto___8343 + (1));
i__8022__auto___8343 = G__8344;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8341))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8341){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8341);
});})(g__8201__auto___8341))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8201__auto___8341){
return (function (seq8314){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8314));
});})(g__8201__auto___8341))
;


var g__8201__auto___8345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8201__auto___8345){
return (function cljs$spec$impl$gen$char(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8346 = arguments.length;
var i__8022__auto___8347 = (0);
while(true){
if((i__8022__auto___8347 < len__8021__auto___8346)){
args__8028__auto__.push((arguments[i__8022__auto___8347]));

var G__8348 = (i__8022__auto___8347 + (1));
i__8022__auto___8347 = G__8348;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8345))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8345){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8345);
});})(g__8201__auto___8345))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8201__auto___8345){
return (function (seq8315){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8315));
});})(g__8201__auto___8345))
;


var g__8201__auto___8349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8201__auto___8349){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8350 = arguments.length;
var i__8022__auto___8351 = (0);
while(true){
if((i__8022__auto___8351 < len__8021__auto___8350)){
args__8028__auto__.push((arguments[i__8022__auto___8351]));

var G__8352 = (i__8022__auto___8351 + (1));
i__8022__auto___8351 = G__8352;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8349))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8349){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8349);
});})(g__8201__auto___8349))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8201__auto___8349){
return (function (seq8316){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8316));
});})(g__8201__auto___8349))
;


var g__8201__auto___8353 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8201__auto___8353){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8354 = arguments.length;
var i__8022__auto___8355 = (0);
while(true){
if((i__8022__auto___8355 < len__8021__auto___8354)){
args__8028__auto__.push((arguments[i__8022__auto___8355]));

var G__8356 = (i__8022__auto___8355 + (1));
i__8022__auto___8355 = G__8356;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8353))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8353){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8353);
});})(g__8201__auto___8353))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8201__auto___8353){
return (function (seq8317){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8317));
});})(g__8201__auto___8353))
;


var g__8201__auto___8357 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8201__auto___8357){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8358 = arguments.length;
var i__8022__auto___8359 = (0);
while(true){
if((i__8022__auto___8359 < len__8021__auto___8358)){
args__8028__auto__.push((arguments[i__8022__auto___8359]));

var G__8360 = (i__8022__auto___8359 + (1));
i__8022__auto___8359 = G__8360;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8357))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8357){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8357);
});})(g__8201__auto___8357))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8201__auto___8357){
return (function (seq8318){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8318));
});})(g__8201__auto___8357))
;


var g__8201__auto___8361 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8201__auto___8361){
return (function cljs$spec$impl$gen$double(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8362 = arguments.length;
var i__8022__auto___8363 = (0);
while(true){
if((i__8022__auto___8363 < len__8021__auto___8362)){
args__8028__auto__.push((arguments[i__8022__auto___8363]));

var G__8364 = (i__8022__auto___8363 + (1));
i__8022__auto___8363 = G__8364;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8361))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8361){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8361);
});})(g__8201__auto___8361))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8201__auto___8361){
return (function (seq8319){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8319));
});})(g__8201__auto___8361))
;


var g__8201__auto___8365 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8201__auto___8365){
return (function cljs$spec$impl$gen$int(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8366 = arguments.length;
var i__8022__auto___8367 = (0);
while(true){
if((i__8022__auto___8367 < len__8021__auto___8366)){
args__8028__auto__.push((arguments[i__8022__auto___8367]));

var G__8368 = (i__8022__auto___8367 + (1));
i__8022__auto___8367 = G__8368;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8365))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8365){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8365);
});})(g__8201__auto___8365))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8201__auto___8365){
return (function (seq8320){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8320));
});})(g__8201__auto___8365))
;


var g__8201__auto___8369 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8201__auto___8369){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8370 = arguments.length;
var i__8022__auto___8371 = (0);
while(true){
if((i__8022__auto___8371 < len__8021__auto___8370)){
args__8028__auto__.push((arguments[i__8022__auto___8371]));

var G__8372 = (i__8022__auto___8371 + (1));
i__8022__auto___8371 = G__8372;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8369))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8369){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8369);
});})(g__8201__auto___8369))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8201__auto___8369){
return (function (seq8321){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8321));
});})(g__8201__auto___8369))
;


var g__8201__auto___8373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8201__auto___8373){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8374 = arguments.length;
var i__8022__auto___8375 = (0);
while(true){
if((i__8022__auto___8375 < len__8021__auto___8374)){
args__8028__auto__.push((arguments[i__8022__auto___8375]));

var G__8376 = (i__8022__auto___8375 + (1));
i__8022__auto___8375 = G__8376;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8373))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8373){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8373);
});})(g__8201__auto___8373))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8201__auto___8373){
return (function (seq8322){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8322));
});})(g__8201__auto___8373))
;


var g__8201__auto___8377 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8201__auto___8377){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8378 = arguments.length;
var i__8022__auto___8379 = (0);
while(true){
if((i__8022__auto___8379 < len__8021__auto___8378)){
args__8028__auto__.push((arguments[i__8022__auto___8379]));

var G__8380 = (i__8022__auto___8379 + (1));
i__8022__auto___8379 = G__8380;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8377))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8377){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8377);
});})(g__8201__auto___8377))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8201__auto___8377){
return (function (seq8323){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8323));
});})(g__8201__auto___8377))
;


var g__8201__auto___8381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8201__auto___8381){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8382 = arguments.length;
var i__8022__auto___8383 = (0);
while(true){
if((i__8022__auto___8383 < len__8021__auto___8382)){
args__8028__auto__.push((arguments[i__8022__auto___8383]));

var G__8384 = (i__8022__auto___8383 + (1));
i__8022__auto___8383 = G__8384;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8381))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8381){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8381);
});})(g__8201__auto___8381))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8201__auto___8381){
return (function (seq8324){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8324));
});})(g__8201__auto___8381))
;


var g__8201__auto___8385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8201__auto___8385){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8386 = arguments.length;
var i__8022__auto___8387 = (0);
while(true){
if((i__8022__auto___8387 < len__8021__auto___8386)){
args__8028__auto__.push((arguments[i__8022__auto___8387]));

var G__8388 = (i__8022__auto___8387 + (1));
i__8022__auto___8387 = G__8388;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8385))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8385){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8385);
});})(g__8201__auto___8385))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8201__auto___8385){
return (function (seq8325){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8325));
});})(g__8201__auto___8385))
;


var g__8201__auto___8389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8201__auto___8389){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8390 = arguments.length;
var i__8022__auto___8391 = (0);
while(true){
if((i__8022__auto___8391 < len__8021__auto___8390)){
args__8028__auto__.push((arguments[i__8022__auto___8391]));

var G__8392 = (i__8022__auto___8391 + (1));
i__8022__auto___8391 = G__8392;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8389))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8389){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8389);
});})(g__8201__auto___8389))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8201__auto___8389){
return (function (seq8326){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8326));
});})(g__8201__auto___8389))
;


var g__8201__auto___8393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8201__auto___8393){
return (function cljs$spec$impl$gen$string(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8394 = arguments.length;
var i__8022__auto___8395 = (0);
while(true){
if((i__8022__auto___8395 < len__8021__auto___8394)){
args__8028__auto__.push((arguments[i__8022__auto___8395]));

var G__8396 = (i__8022__auto___8395 + (1));
i__8022__auto___8395 = G__8396;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8393))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8393){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8393);
});})(g__8201__auto___8393))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8201__auto___8393){
return (function (seq8327){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8327));
});})(g__8201__auto___8393))
;


var g__8201__auto___8397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8201__auto___8397){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8398 = arguments.length;
var i__8022__auto___8399 = (0);
while(true){
if((i__8022__auto___8399 < len__8021__auto___8398)){
args__8028__auto__.push((arguments[i__8022__auto___8399]));

var G__8400 = (i__8022__auto___8399 + (1));
i__8022__auto___8399 = G__8400;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8397))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8397){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8397);
});})(g__8201__auto___8397))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8201__auto___8397){
return (function (seq8328){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8328));
});})(g__8201__auto___8397))
;


var g__8201__auto___8401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8201__auto___8401){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8402 = arguments.length;
var i__8022__auto___8403 = (0);
while(true){
if((i__8022__auto___8403 < len__8021__auto___8402)){
args__8028__auto__.push((arguments[i__8022__auto___8403]));

var G__8404 = (i__8022__auto___8403 + (1));
i__8022__auto___8403 = G__8404;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8401))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8401){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8401);
});})(g__8201__auto___8401))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8201__auto___8401){
return (function (seq8329){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8329));
});})(g__8201__auto___8401))
;


var g__8201__auto___8405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8201__auto___8405){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8406 = arguments.length;
var i__8022__auto___8407 = (0);
while(true){
if((i__8022__auto___8407 < len__8021__auto___8406)){
args__8028__auto__.push((arguments[i__8022__auto___8407]));

var G__8408 = (i__8022__auto___8407 + (1));
i__8022__auto___8407 = G__8408;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8405))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8405){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8405);
});})(g__8201__auto___8405))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8201__auto___8405){
return (function (seq8330){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8330));
});})(g__8201__auto___8405))
;


var g__8201__auto___8409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8201__auto___8409){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8410 = arguments.length;
var i__8022__auto___8411 = (0);
while(true){
if((i__8022__auto___8411 < len__8021__auto___8410)){
args__8028__auto__.push((arguments[i__8022__auto___8411]));

var G__8412 = (i__8022__auto___8411 + (1));
i__8022__auto___8411 = G__8412;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8409))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8409){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8409);
});})(g__8201__auto___8409))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8201__auto___8409){
return (function (seq8331){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8331));
});})(g__8201__auto___8409))
;


var g__8201__auto___8413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8201__auto___8413){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8414 = arguments.length;
var i__8022__auto___8415 = (0);
while(true){
if((i__8022__auto___8415 < len__8021__auto___8414)){
args__8028__auto__.push((arguments[i__8022__auto___8415]));

var G__8416 = (i__8022__auto___8415 + (1));
i__8022__auto___8415 = G__8416;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___8413))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___8413){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___8413);
});})(g__8201__auto___8413))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8201__auto___8413){
return (function (seq8332){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8332));
});})(g__8201__auto___8413))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8028__auto__ = [];
var len__8021__auto___8419 = arguments.length;
var i__8022__auto___8420 = (0);
while(true){
if((i__8022__auto___8420 < len__8021__auto___8419)){
args__8028__auto__.push((arguments[i__8022__auto___8420]));

var G__8421 = (i__8022__auto___8420 + (1));
i__8022__auto___8420 = G__8421;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__8417_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__8417_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq8418){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8418));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__8422_SHARP_){
return (new Date(p1__8422_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map