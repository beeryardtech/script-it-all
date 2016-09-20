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
var len__8021__auto___13865 = arguments.length;
var i__8022__auto___13866 = (0);
while(true){
if((i__8022__auto___13866 < len__8021__auto___13865)){
args__8028__auto__.push((arguments[i__8022__auto___13866]));

var G__13867 = (i__8022__auto___13866 + (1));
i__8022__auto___13866 = G__13867;
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

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq13864){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13864));
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
var len__8021__auto___13869 = arguments.length;
var i__8022__auto___13870 = (0);
while(true){
if((i__8022__auto___13870 < len__8021__auto___13869)){
args__8028__auto__.push((arguments[i__8022__auto___13870]));

var G__13871 = (i__8022__auto___13870 + (1));
i__8022__auto___13870 = G__13871;
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

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq13868){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13868));
});

var g_QMARK__13872 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_13873 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13872){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__13872))
,null));
var mkg_13874 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13872,g_13873){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__13872,g_13873))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__13872,g_13873,mkg_13874){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13872).call(null,x);
});})(g_QMARK__13872,g_13873,mkg_13874))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__13872,g_13873,mkg_13874){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_13874).call(null,gfn);
});})(g_QMARK__13872,g_13873,mkg_13874))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__13872,g_13873,mkg_13874){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_13873).call(null,generator);
});})(g_QMARK__13872,g_13873,mkg_13874))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8188__auto___13892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__8188__auto___13892){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13893 = arguments.length;
var i__8022__auto___13894 = (0);
while(true){
if((i__8022__auto___13894 < len__8021__auto___13893)){
args__8028__auto__.push((arguments[i__8022__auto___13894]));

var G__13895 = (i__8022__auto___13894 + (1));
i__8022__auto___13894 = G__13895;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13892))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13892){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13892),args);
});})(g__8188__auto___13892))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__8188__auto___13892){
return (function (seq13875){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13875));
});})(g__8188__auto___13892))
;


var g__8188__auto___13896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__8188__auto___13896){
return (function cljs$spec$impl$gen$list(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13897 = arguments.length;
var i__8022__auto___13898 = (0);
while(true){
if((i__8022__auto___13898 < len__8021__auto___13897)){
args__8028__auto__.push((arguments[i__8022__auto___13898]));

var G__13899 = (i__8022__auto___13898 + (1));
i__8022__auto___13898 = G__13899;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13896))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13896){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13896),args);
});})(g__8188__auto___13896))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__8188__auto___13896){
return (function (seq13876){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13876));
});})(g__8188__auto___13896))
;


var g__8188__auto___13900 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__8188__auto___13900){
return (function cljs$spec$impl$gen$map(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13901 = arguments.length;
var i__8022__auto___13902 = (0);
while(true){
if((i__8022__auto___13902 < len__8021__auto___13901)){
args__8028__auto__.push((arguments[i__8022__auto___13902]));

var G__13903 = (i__8022__auto___13902 + (1));
i__8022__auto___13902 = G__13903;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13900))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13900){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13900),args);
});})(g__8188__auto___13900))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__8188__auto___13900){
return (function (seq13877){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13877));
});})(g__8188__auto___13900))
;


var g__8188__auto___13904 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__8188__auto___13904){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13905 = arguments.length;
var i__8022__auto___13906 = (0);
while(true){
if((i__8022__auto___13906 < len__8021__auto___13905)){
args__8028__auto__.push((arguments[i__8022__auto___13906]));

var G__13907 = (i__8022__auto___13906 + (1));
i__8022__auto___13906 = G__13907;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13904))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13904){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13904),args);
});})(g__8188__auto___13904))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__8188__auto___13904){
return (function (seq13878){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13878));
});})(g__8188__auto___13904))
;


var g__8188__auto___13908 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__8188__auto___13908){
return (function cljs$spec$impl$gen$set(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13909 = arguments.length;
var i__8022__auto___13910 = (0);
while(true){
if((i__8022__auto___13910 < len__8021__auto___13909)){
args__8028__auto__.push((arguments[i__8022__auto___13910]));

var G__13911 = (i__8022__auto___13910 + (1));
i__8022__auto___13910 = G__13911;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13908))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13908){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13908),args);
});})(g__8188__auto___13908))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__8188__auto___13908){
return (function (seq13879){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13879));
});})(g__8188__auto___13908))
;


var g__8188__auto___13912 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__8188__auto___13912){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13913 = arguments.length;
var i__8022__auto___13914 = (0);
while(true){
if((i__8022__auto___13914 < len__8021__auto___13913)){
args__8028__auto__.push((arguments[i__8022__auto___13914]));

var G__13915 = (i__8022__auto___13914 + (1));
i__8022__auto___13914 = G__13915;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13912))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13912){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13912),args);
});})(g__8188__auto___13912))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__8188__auto___13912){
return (function (seq13880){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13880));
});})(g__8188__auto___13912))
;


var g__8188__auto___13916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__8188__auto___13916){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13917 = arguments.length;
var i__8022__auto___13918 = (0);
while(true){
if((i__8022__auto___13918 < len__8021__auto___13917)){
args__8028__auto__.push((arguments[i__8022__auto___13918]));

var G__13919 = (i__8022__auto___13918 + (1));
i__8022__auto___13918 = G__13919;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13916))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13916){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13916),args);
});})(g__8188__auto___13916))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__8188__auto___13916){
return (function (seq13881){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13881));
});})(g__8188__auto___13916))
;


var g__8188__auto___13920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__8188__auto___13920){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13921 = arguments.length;
var i__8022__auto___13922 = (0);
while(true){
if((i__8022__auto___13922 < len__8021__auto___13921)){
args__8028__auto__.push((arguments[i__8022__auto___13922]));

var G__13923 = (i__8022__auto___13922 + (1));
i__8022__auto___13922 = G__13923;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13920))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13920){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13920),args);
});})(g__8188__auto___13920))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__8188__auto___13920){
return (function (seq13882){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13882));
});})(g__8188__auto___13920))
;


var g__8188__auto___13924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__8188__auto___13924){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13925 = arguments.length;
var i__8022__auto___13926 = (0);
while(true){
if((i__8022__auto___13926 < len__8021__auto___13925)){
args__8028__auto__.push((arguments[i__8022__auto___13926]));

var G__13927 = (i__8022__auto___13926 + (1));
i__8022__auto___13926 = G__13927;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13924))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13924){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13924),args);
});})(g__8188__auto___13924))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__8188__auto___13924){
return (function (seq13883){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13883));
});})(g__8188__auto___13924))
;


var g__8188__auto___13928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__8188__auto___13928){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13929 = arguments.length;
var i__8022__auto___13930 = (0);
while(true){
if((i__8022__auto___13930 < len__8021__auto___13929)){
args__8028__auto__.push((arguments[i__8022__auto___13930]));

var G__13931 = (i__8022__auto___13930 + (1));
i__8022__auto___13930 = G__13931;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13928))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13928){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13928),args);
});})(g__8188__auto___13928))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__8188__auto___13928){
return (function (seq13884){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13884));
});})(g__8188__auto___13928))
;


var g__8188__auto___13932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__8188__auto___13932){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13933 = arguments.length;
var i__8022__auto___13934 = (0);
while(true){
if((i__8022__auto___13934 < len__8021__auto___13933)){
args__8028__auto__.push((arguments[i__8022__auto___13934]));

var G__13935 = (i__8022__auto___13934 + (1));
i__8022__auto___13934 = G__13935;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13932))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13932){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13932),args);
});})(g__8188__auto___13932))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__8188__auto___13932){
return (function (seq13885){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13885));
});})(g__8188__auto___13932))
;


var g__8188__auto___13936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__8188__auto___13936){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13937 = arguments.length;
var i__8022__auto___13938 = (0);
while(true){
if((i__8022__auto___13938 < len__8021__auto___13937)){
args__8028__auto__.push((arguments[i__8022__auto___13938]));

var G__13939 = (i__8022__auto___13938 + (1));
i__8022__auto___13938 = G__13939;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13936))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13936){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13936),args);
});})(g__8188__auto___13936))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__8188__auto___13936){
return (function (seq13886){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13886));
});})(g__8188__auto___13936))
;


var g__8188__auto___13940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__8188__auto___13940){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13941 = arguments.length;
var i__8022__auto___13942 = (0);
while(true){
if((i__8022__auto___13942 < len__8021__auto___13941)){
args__8028__auto__.push((arguments[i__8022__auto___13942]));

var G__13943 = (i__8022__auto___13942 + (1));
i__8022__auto___13942 = G__13943;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13940))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13940){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13940),args);
});})(g__8188__auto___13940))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__8188__auto___13940){
return (function (seq13887){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13887));
});})(g__8188__auto___13940))
;


var g__8188__auto___13944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__8188__auto___13944){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13945 = arguments.length;
var i__8022__auto___13946 = (0);
while(true){
if((i__8022__auto___13946 < len__8021__auto___13945)){
args__8028__auto__.push((arguments[i__8022__auto___13946]));

var G__13947 = (i__8022__auto___13946 + (1));
i__8022__auto___13946 = G__13947;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13944))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13944){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13944),args);
});})(g__8188__auto___13944))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__8188__auto___13944){
return (function (seq13888){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13888));
});})(g__8188__auto___13944))
;


var g__8188__auto___13948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__8188__auto___13948){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13949 = arguments.length;
var i__8022__auto___13950 = (0);
while(true){
if((i__8022__auto___13950 < len__8021__auto___13949)){
args__8028__auto__.push((arguments[i__8022__auto___13950]));

var G__13951 = (i__8022__auto___13950 + (1));
i__8022__auto___13950 = G__13951;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13948))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13948){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13948),args);
});})(g__8188__auto___13948))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__8188__auto___13948){
return (function (seq13889){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13889));
});})(g__8188__auto___13948))
;


var g__8188__auto___13952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__8188__auto___13952){
return (function cljs$spec$impl$gen$return(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13953 = arguments.length;
var i__8022__auto___13954 = (0);
while(true){
if((i__8022__auto___13954 < len__8021__auto___13953)){
args__8028__auto__.push((arguments[i__8022__auto___13954]));

var G__13955 = (i__8022__auto___13954 + (1));
i__8022__auto___13954 = G__13955;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13952))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13952){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13952),args);
});})(g__8188__auto___13952))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__8188__auto___13952){
return (function (seq13890){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13890));
});})(g__8188__auto___13952))
;


var g__8188__auto___13956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__8188__auto___13956){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13957 = arguments.length;
var i__8022__auto___13958 = (0);
while(true){
if((i__8022__auto___13958 < len__8021__auto___13957)){
args__8028__auto__.push((arguments[i__8022__auto___13958]));

var G__13959 = (i__8022__auto___13958 + (1));
i__8022__auto___13958 = G__13959;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8188__auto___13956))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8188__auto___13956){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8188__auto___13956),args);
});})(g__8188__auto___13956))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8188__auto___13956){
return (function (seq13891){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13891));
});})(g__8188__auto___13956))
;

var g__8201__auto___13981 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8201__auto___13981){
return (function cljs$spec$impl$gen$any(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13982 = arguments.length;
var i__8022__auto___13983 = (0);
while(true){
if((i__8022__auto___13983 < len__8021__auto___13982)){
args__8028__auto__.push((arguments[i__8022__auto___13983]));

var G__13984 = (i__8022__auto___13983 + (1));
i__8022__auto___13983 = G__13984;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___13981))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___13981){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___13981);
});})(g__8201__auto___13981))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8201__auto___13981){
return (function (seq13960){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13960));
});})(g__8201__auto___13981))
;


var g__8201__auto___13985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8201__auto___13985){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13986 = arguments.length;
var i__8022__auto___13987 = (0);
while(true){
if((i__8022__auto___13987 < len__8021__auto___13986)){
args__8028__auto__.push((arguments[i__8022__auto___13987]));

var G__13988 = (i__8022__auto___13987 + (1));
i__8022__auto___13987 = G__13988;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___13985))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___13985){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___13985);
});})(g__8201__auto___13985))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8201__auto___13985){
return (function (seq13961){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13961));
});})(g__8201__auto___13985))
;


var g__8201__auto___13989 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8201__auto___13989){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13990 = arguments.length;
var i__8022__auto___13991 = (0);
while(true){
if((i__8022__auto___13991 < len__8021__auto___13990)){
args__8028__auto__.push((arguments[i__8022__auto___13991]));

var G__13992 = (i__8022__auto___13991 + (1));
i__8022__auto___13991 = G__13992;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___13989))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___13989){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___13989);
});})(g__8201__auto___13989))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8201__auto___13989){
return (function (seq13962){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13962));
});})(g__8201__auto___13989))
;


var g__8201__auto___13993 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8201__auto___13993){
return (function cljs$spec$impl$gen$char(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13994 = arguments.length;
var i__8022__auto___13995 = (0);
while(true){
if((i__8022__auto___13995 < len__8021__auto___13994)){
args__8028__auto__.push((arguments[i__8022__auto___13995]));

var G__13996 = (i__8022__auto___13995 + (1));
i__8022__auto___13995 = G__13996;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___13993))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___13993){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___13993);
});})(g__8201__auto___13993))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8201__auto___13993){
return (function (seq13963){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13963));
});})(g__8201__auto___13993))
;


var g__8201__auto___13997 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8201__auto___13997){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8028__auto__ = [];
var len__8021__auto___13998 = arguments.length;
var i__8022__auto___13999 = (0);
while(true){
if((i__8022__auto___13999 < len__8021__auto___13998)){
args__8028__auto__.push((arguments[i__8022__auto___13999]));

var G__14000 = (i__8022__auto___13999 + (1));
i__8022__auto___13999 = G__14000;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___13997))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___13997){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___13997);
});})(g__8201__auto___13997))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8201__auto___13997){
return (function (seq13964){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13964));
});})(g__8201__auto___13997))
;


var g__8201__auto___14001 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8201__auto___14001){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14002 = arguments.length;
var i__8022__auto___14003 = (0);
while(true){
if((i__8022__auto___14003 < len__8021__auto___14002)){
args__8028__auto__.push((arguments[i__8022__auto___14003]));

var G__14004 = (i__8022__auto___14003 + (1));
i__8022__auto___14003 = G__14004;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14001))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14001){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14001);
});})(g__8201__auto___14001))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8201__auto___14001){
return (function (seq13965){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13965));
});})(g__8201__auto___14001))
;


var g__8201__auto___14005 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8201__auto___14005){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14006 = arguments.length;
var i__8022__auto___14007 = (0);
while(true){
if((i__8022__auto___14007 < len__8021__auto___14006)){
args__8028__auto__.push((arguments[i__8022__auto___14007]));

var G__14008 = (i__8022__auto___14007 + (1));
i__8022__auto___14007 = G__14008;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14005))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14005){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14005);
});})(g__8201__auto___14005))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8201__auto___14005){
return (function (seq13966){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13966));
});})(g__8201__auto___14005))
;


var g__8201__auto___14009 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8201__auto___14009){
return (function cljs$spec$impl$gen$double(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14010 = arguments.length;
var i__8022__auto___14011 = (0);
while(true){
if((i__8022__auto___14011 < len__8021__auto___14010)){
args__8028__auto__.push((arguments[i__8022__auto___14011]));

var G__14012 = (i__8022__auto___14011 + (1));
i__8022__auto___14011 = G__14012;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14009))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14009){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14009);
});})(g__8201__auto___14009))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8201__auto___14009){
return (function (seq13967){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13967));
});})(g__8201__auto___14009))
;


var g__8201__auto___14013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8201__auto___14013){
return (function cljs$spec$impl$gen$int(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14014 = arguments.length;
var i__8022__auto___14015 = (0);
while(true){
if((i__8022__auto___14015 < len__8021__auto___14014)){
args__8028__auto__.push((arguments[i__8022__auto___14015]));

var G__14016 = (i__8022__auto___14015 + (1));
i__8022__auto___14015 = G__14016;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14013))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14013){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14013);
});})(g__8201__auto___14013))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8201__auto___14013){
return (function (seq13968){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13968));
});})(g__8201__auto___14013))
;


var g__8201__auto___14017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8201__auto___14017){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14018 = arguments.length;
var i__8022__auto___14019 = (0);
while(true){
if((i__8022__auto___14019 < len__8021__auto___14018)){
args__8028__auto__.push((arguments[i__8022__auto___14019]));

var G__14020 = (i__8022__auto___14019 + (1));
i__8022__auto___14019 = G__14020;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14017))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14017){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14017);
});})(g__8201__auto___14017))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8201__auto___14017){
return (function (seq13969){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13969));
});})(g__8201__auto___14017))
;


var g__8201__auto___14021 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8201__auto___14021){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14022 = arguments.length;
var i__8022__auto___14023 = (0);
while(true){
if((i__8022__auto___14023 < len__8021__auto___14022)){
args__8028__auto__.push((arguments[i__8022__auto___14023]));

var G__14024 = (i__8022__auto___14023 + (1));
i__8022__auto___14023 = G__14024;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14021))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14021){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14021);
});})(g__8201__auto___14021))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8201__auto___14021){
return (function (seq13970){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13970));
});})(g__8201__auto___14021))
;


var g__8201__auto___14025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8201__auto___14025){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14026 = arguments.length;
var i__8022__auto___14027 = (0);
while(true){
if((i__8022__auto___14027 < len__8021__auto___14026)){
args__8028__auto__.push((arguments[i__8022__auto___14027]));

var G__14028 = (i__8022__auto___14027 + (1));
i__8022__auto___14027 = G__14028;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14025))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14025){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14025);
});})(g__8201__auto___14025))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8201__auto___14025){
return (function (seq13971){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13971));
});})(g__8201__auto___14025))
;


var g__8201__auto___14029 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8201__auto___14029){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14030 = arguments.length;
var i__8022__auto___14031 = (0);
while(true){
if((i__8022__auto___14031 < len__8021__auto___14030)){
args__8028__auto__.push((arguments[i__8022__auto___14031]));

var G__14032 = (i__8022__auto___14031 + (1));
i__8022__auto___14031 = G__14032;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14029))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14029){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14029);
});})(g__8201__auto___14029))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8201__auto___14029){
return (function (seq13972){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13972));
});})(g__8201__auto___14029))
;


var g__8201__auto___14033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8201__auto___14033){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14034 = arguments.length;
var i__8022__auto___14035 = (0);
while(true){
if((i__8022__auto___14035 < len__8021__auto___14034)){
args__8028__auto__.push((arguments[i__8022__auto___14035]));

var G__14036 = (i__8022__auto___14035 + (1));
i__8022__auto___14035 = G__14036;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14033))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14033){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14033);
});})(g__8201__auto___14033))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8201__auto___14033){
return (function (seq13973){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13973));
});})(g__8201__auto___14033))
;


var g__8201__auto___14037 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8201__auto___14037){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14038 = arguments.length;
var i__8022__auto___14039 = (0);
while(true){
if((i__8022__auto___14039 < len__8021__auto___14038)){
args__8028__auto__.push((arguments[i__8022__auto___14039]));

var G__14040 = (i__8022__auto___14039 + (1));
i__8022__auto___14039 = G__14040;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14037))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14037){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14037);
});})(g__8201__auto___14037))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8201__auto___14037){
return (function (seq13974){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13974));
});})(g__8201__auto___14037))
;


var g__8201__auto___14041 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8201__auto___14041){
return (function cljs$spec$impl$gen$string(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14042 = arguments.length;
var i__8022__auto___14043 = (0);
while(true){
if((i__8022__auto___14043 < len__8021__auto___14042)){
args__8028__auto__.push((arguments[i__8022__auto___14043]));

var G__14044 = (i__8022__auto___14043 + (1));
i__8022__auto___14043 = G__14044;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14041))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14041){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14041);
});})(g__8201__auto___14041))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8201__auto___14041){
return (function (seq13975){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13975));
});})(g__8201__auto___14041))
;


var g__8201__auto___14045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8201__auto___14045){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14046 = arguments.length;
var i__8022__auto___14047 = (0);
while(true){
if((i__8022__auto___14047 < len__8021__auto___14046)){
args__8028__auto__.push((arguments[i__8022__auto___14047]));

var G__14048 = (i__8022__auto___14047 + (1));
i__8022__auto___14047 = G__14048;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14045))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14045){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14045);
});})(g__8201__auto___14045))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8201__auto___14045){
return (function (seq13976){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13976));
});})(g__8201__auto___14045))
;


var g__8201__auto___14049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8201__auto___14049){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14050 = arguments.length;
var i__8022__auto___14051 = (0);
while(true){
if((i__8022__auto___14051 < len__8021__auto___14050)){
args__8028__auto__.push((arguments[i__8022__auto___14051]));

var G__14052 = (i__8022__auto___14051 + (1));
i__8022__auto___14051 = G__14052;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14049))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14049){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14049);
});})(g__8201__auto___14049))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8201__auto___14049){
return (function (seq13977){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13977));
});})(g__8201__auto___14049))
;


var g__8201__auto___14053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8201__auto___14053){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14054 = arguments.length;
var i__8022__auto___14055 = (0);
while(true){
if((i__8022__auto___14055 < len__8021__auto___14054)){
args__8028__auto__.push((arguments[i__8022__auto___14055]));

var G__14056 = (i__8022__auto___14055 + (1));
i__8022__auto___14055 = G__14056;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14053))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14053){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14053);
});})(g__8201__auto___14053))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8201__auto___14053){
return (function (seq13978){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13978));
});})(g__8201__auto___14053))
;


var g__8201__auto___14057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8201__auto___14057){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14058 = arguments.length;
var i__8022__auto___14059 = (0);
while(true){
if((i__8022__auto___14059 < len__8021__auto___14058)){
args__8028__auto__.push((arguments[i__8022__auto___14059]));

var G__14060 = (i__8022__auto___14059 + (1));
i__8022__auto___14059 = G__14060;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14057))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14057){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14057);
});})(g__8201__auto___14057))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8201__auto___14057){
return (function (seq13979){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13979));
});})(g__8201__auto___14057))
;


var g__8201__auto___14061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8201__auto___14061){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14062 = arguments.length;
var i__8022__auto___14063 = (0);
while(true){
if((i__8022__auto___14063 < len__8021__auto___14062)){
args__8028__auto__.push((arguments[i__8022__auto___14063]));

var G__14064 = (i__8022__auto___14063 + (1));
i__8022__auto___14063 = G__14064;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});})(g__8201__auto___14061))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8201__auto___14061){
return (function (args){
return cljs.core.deref.call(null,g__8201__auto___14061);
});})(g__8201__auto___14061))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8201__auto___14061){
return (function (seq13980){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13980));
});})(g__8201__auto___14061))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8028__auto__ = [];
var len__8021__auto___14067 = arguments.length;
var i__8022__auto___14068 = (0);
while(true){
if((i__8022__auto___14068 < len__8021__auto___14067)){
args__8028__auto__.push((arguments[i__8022__auto___14068]));

var G__14069 = (i__8022__auto___14068 + (1));
i__8022__auto___14068 = G__14069;
continue;
} else {
}
break;
}

var argseq__8029__auto__ = ((((0) < args__8028__auto__.length))?(new cljs.core.IndexedSeq(args__8028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8029__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__14065_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__14065_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq14066){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14066));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__14070_SHARP_){
return (new Date(p1__14070_SHARP_));
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
