// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15030){
var map__15055 = p__15030;
var map__15055__$1 = ((((!((map__15055 == null)))?((((map__15055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15055):map__15055);
var m = map__15055__$1;
var n = cljs.core.get.call(null,map__15055__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__15055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15057_15079 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15058_15080 = null;
var count__15059_15081 = (0);
var i__15060_15082 = (0);
while(true){
if((i__15060_15082 < count__15059_15081)){
var f_15083 = cljs.core._nth.call(null,chunk__15058_15080,i__15060_15082);
cljs.core.println.call(null,"  ",f_15083);

var G__15084 = seq__15057_15079;
var G__15085 = chunk__15058_15080;
var G__15086 = count__15059_15081;
var G__15087 = (i__15060_15082 + (1));
seq__15057_15079 = G__15084;
chunk__15058_15080 = G__15085;
count__15059_15081 = G__15086;
i__15060_15082 = G__15087;
continue;
} else {
var temp__4657__auto___15088 = cljs.core.seq.call(null,seq__15057_15079);
if(temp__4657__auto___15088){
var seq__15057_15089__$1 = temp__4657__auto___15088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15057_15089__$1)){
var c__7757__auto___15090 = cljs.core.chunk_first.call(null,seq__15057_15089__$1);
var G__15091 = cljs.core.chunk_rest.call(null,seq__15057_15089__$1);
var G__15092 = c__7757__auto___15090;
var G__15093 = cljs.core.count.call(null,c__7757__auto___15090);
var G__15094 = (0);
seq__15057_15079 = G__15091;
chunk__15058_15080 = G__15092;
count__15059_15081 = G__15093;
i__15060_15082 = G__15094;
continue;
} else {
var f_15095 = cljs.core.first.call(null,seq__15057_15089__$1);
cljs.core.println.call(null,"  ",f_15095);

var G__15096 = cljs.core.next.call(null,seq__15057_15089__$1);
var G__15097 = null;
var G__15098 = (0);
var G__15099 = (0);
seq__15057_15079 = G__15096;
chunk__15058_15080 = G__15097;
count__15059_15081 = G__15098;
i__15060_15082 = G__15099;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15100 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6946__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6946__auto__)){
return or__6946__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_15100);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_15100)))?cljs.core.second.call(null,arglists_15100):arglists_15100));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15061_15101 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15062_15102 = null;
var count__15063_15103 = (0);
var i__15064_15104 = (0);
while(true){
if((i__15064_15104 < count__15063_15103)){
var vec__15065_15105 = cljs.core._nth.call(null,chunk__15062_15102,i__15064_15104);
var name_15106 = cljs.core.nth.call(null,vec__15065_15105,(0),null);
var map__15068_15107 = cljs.core.nth.call(null,vec__15065_15105,(1),null);
var map__15068_15108__$1 = ((((!((map__15068_15107 == null)))?((((map__15068_15107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15068_15107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15068_15107):map__15068_15107);
var doc_15109 = cljs.core.get.call(null,map__15068_15108__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15110 = cljs.core.get.call(null,map__15068_15108__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15106);

cljs.core.println.call(null," ",arglists_15110);

if(cljs.core.truth_(doc_15109)){
cljs.core.println.call(null," ",doc_15109);
} else {
}

var G__15111 = seq__15061_15101;
var G__15112 = chunk__15062_15102;
var G__15113 = count__15063_15103;
var G__15114 = (i__15064_15104 + (1));
seq__15061_15101 = G__15111;
chunk__15062_15102 = G__15112;
count__15063_15103 = G__15113;
i__15064_15104 = G__15114;
continue;
} else {
var temp__4657__auto___15115 = cljs.core.seq.call(null,seq__15061_15101);
if(temp__4657__auto___15115){
var seq__15061_15116__$1 = temp__4657__auto___15115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15061_15116__$1)){
var c__7757__auto___15117 = cljs.core.chunk_first.call(null,seq__15061_15116__$1);
var G__15118 = cljs.core.chunk_rest.call(null,seq__15061_15116__$1);
var G__15119 = c__7757__auto___15117;
var G__15120 = cljs.core.count.call(null,c__7757__auto___15117);
var G__15121 = (0);
seq__15061_15101 = G__15118;
chunk__15062_15102 = G__15119;
count__15063_15103 = G__15120;
i__15064_15104 = G__15121;
continue;
} else {
var vec__15070_15122 = cljs.core.first.call(null,seq__15061_15116__$1);
var name_15123 = cljs.core.nth.call(null,vec__15070_15122,(0),null);
var map__15073_15124 = cljs.core.nth.call(null,vec__15070_15122,(1),null);
var map__15073_15125__$1 = ((((!((map__15073_15124 == null)))?((((map__15073_15124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15073_15124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15073_15124):map__15073_15124);
var doc_15126 = cljs.core.get.call(null,map__15073_15125__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15127 = cljs.core.get.call(null,map__15073_15125__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15123);

cljs.core.println.call(null," ",arglists_15127);

if(cljs.core.truth_(doc_15126)){
cljs.core.println.call(null," ",doc_15126);
} else {
}

var G__15128 = cljs.core.next.call(null,seq__15061_15116__$1);
var G__15129 = null;
var G__15130 = (0);
var G__15131 = (0);
seq__15061_15101 = G__15128;
chunk__15062_15102 = G__15129;
count__15063_15103 = G__15130;
i__15064_15104 = G__15131;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__15075 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15076 = null;
var count__15077 = (0);
var i__15078 = (0);
while(true){
if((i__15078 < count__15077)){
var role = cljs.core._nth.call(null,chunk__15076,i__15078);
var temp__4657__auto___15132__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___15132__$1)){
var spec_15133 = temp__4657__auto___15132__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_15133));
} else {
}

var G__15134 = seq__15075;
var G__15135 = chunk__15076;
var G__15136 = count__15077;
var G__15137 = (i__15078 + (1));
seq__15075 = G__15134;
chunk__15076 = G__15135;
count__15077 = G__15136;
i__15078 = G__15137;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__15075);
if(temp__4657__auto____$1){
var seq__15075__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15075__$1)){
var c__7757__auto__ = cljs.core.chunk_first.call(null,seq__15075__$1);
var G__15138 = cljs.core.chunk_rest.call(null,seq__15075__$1);
var G__15139 = c__7757__auto__;
var G__15140 = cljs.core.count.call(null,c__7757__auto__);
var G__15141 = (0);
seq__15075 = G__15138;
chunk__15076 = G__15139;
count__15077 = G__15140;
i__15078 = G__15141;
continue;
} else {
var role = cljs.core.first.call(null,seq__15075__$1);
var temp__4657__auto___15142__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___15142__$2)){
var spec_15143 = temp__4657__auto___15142__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_15143));
} else {
}

var G__15144 = cljs.core.next.call(null,seq__15075__$1);
var G__15145 = null;
var G__15146 = (0);
var G__15147 = (0);
seq__15075 = G__15144;
chunk__15076 = G__15145;
count__15077 = G__15146;
i__15078 = G__15147;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
