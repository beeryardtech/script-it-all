// Compiled by ClojureScript 1.9.89 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11462){
var map__11487 = p__11462;
var map__11487__$1 = ((((!((map__11487 == null)))?((((map__11487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11487):map__11487);
var m = map__11487__$1;
var n = cljs.core.get.call(null,map__11487__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11487__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__11489_11511 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11490_11512 = null;
var count__11491_11513 = (0);
var i__11492_11514 = (0);
while(true){
if((i__11492_11514 < count__11491_11513)){
var f_11515 = cljs.core._nth.call(null,chunk__11490_11512,i__11492_11514);
cljs.core.println.call(null,"  ",f_11515);

var G__11516 = seq__11489_11511;
var G__11517 = chunk__11490_11512;
var G__11518 = count__11491_11513;
var G__11519 = (i__11492_11514 + (1));
seq__11489_11511 = G__11516;
chunk__11490_11512 = G__11517;
count__11491_11513 = G__11518;
i__11492_11514 = G__11519;
continue;
} else {
var temp__4657__auto___11520 = cljs.core.seq.call(null,seq__11489_11511);
if(temp__4657__auto___11520){
var seq__11489_11521__$1 = temp__4657__auto___11520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11489_11521__$1)){
var c__7387__auto___11522 = cljs.core.chunk_first.call(null,seq__11489_11521__$1);
var G__11523 = cljs.core.chunk_rest.call(null,seq__11489_11521__$1);
var G__11524 = c__7387__auto___11522;
var G__11525 = cljs.core.count.call(null,c__7387__auto___11522);
var G__11526 = (0);
seq__11489_11511 = G__11523;
chunk__11490_11512 = G__11524;
count__11491_11513 = G__11525;
i__11492_11514 = G__11526;
continue;
} else {
var f_11527 = cljs.core.first.call(null,seq__11489_11521__$1);
cljs.core.println.call(null,"  ",f_11527);

var G__11528 = cljs.core.next.call(null,seq__11489_11521__$1);
var G__11529 = null;
var G__11530 = (0);
var G__11531 = (0);
seq__11489_11511 = G__11528;
chunk__11490_11512 = G__11529;
count__11491_11513 = G__11530;
i__11492_11514 = G__11531;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11532 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6576__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6576__auto__)){
return or__6576__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11532);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11532)))?cljs.core.second.call(null,arglists_11532):arglists_11532));
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
var seq__11493_11533 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11494_11534 = null;
var count__11495_11535 = (0);
var i__11496_11536 = (0);
while(true){
if((i__11496_11536 < count__11495_11535)){
var vec__11497_11537 = cljs.core._nth.call(null,chunk__11494_11534,i__11496_11536);
var name_11538 = cljs.core.nth.call(null,vec__11497_11537,(0),null);
var map__11500_11539 = cljs.core.nth.call(null,vec__11497_11537,(1),null);
var map__11500_11540__$1 = ((((!((map__11500_11539 == null)))?((((map__11500_11539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11500_11539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11500_11539):map__11500_11539);
var doc_11541 = cljs.core.get.call(null,map__11500_11540__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11542 = cljs.core.get.call(null,map__11500_11540__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11538);

cljs.core.println.call(null," ",arglists_11542);

if(cljs.core.truth_(doc_11541)){
cljs.core.println.call(null," ",doc_11541);
} else {
}

var G__11543 = seq__11493_11533;
var G__11544 = chunk__11494_11534;
var G__11545 = count__11495_11535;
var G__11546 = (i__11496_11536 + (1));
seq__11493_11533 = G__11543;
chunk__11494_11534 = G__11544;
count__11495_11535 = G__11545;
i__11496_11536 = G__11546;
continue;
} else {
var temp__4657__auto___11547 = cljs.core.seq.call(null,seq__11493_11533);
if(temp__4657__auto___11547){
var seq__11493_11548__$1 = temp__4657__auto___11547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11493_11548__$1)){
var c__7387__auto___11549 = cljs.core.chunk_first.call(null,seq__11493_11548__$1);
var G__11550 = cljs.core.chunk_rest.call(null,seq__11493_11548__$1);
var G__11551 = c__7387__auto___11549;
var G__11552 = cljs.core.count.call(null,c__7387__auto___11549);
var G__11553 = (0);
seq__11493_11533 = G__11550;
chunk__11494_11534 = G__11551;
count__11495_11535 = G__11552;
i__11496_11536 = G__11553;
continue;
} else {
var vec__11502_11554 = cljs.core.first.call(null,seq__11493_11548__$1);
var name_11555 = cljs.core.nth.call(null,vec__11502_11554,(0),null);
var map__11505_11556 = cljs.core.nth.call(null,vec__11502_11554,(1),null);
var map__11505_11557__$1 = ((((!((map__11505_11556 == null)))?((((map__11505_11556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11505_11556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11505_11556):map__11505_11556);
var doc_11558 = cljs.core.get.call(null,map__11505_11557__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11559 = cljs.core.get.call(null,map__11505_11557__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11555);

cljs.core.println.call(null," ",arglists_11559);

if(cljs.core.truth_(doc_11558)){
cljs.core.println.call(null," ",doc_11558);
} else {
}

var G__11560 = cljs.core.next.call(null,seq__11493_11548__$1);
var G__11561 = null;
var G__11562 = (0);
var G__11563 = (0);
seq__11493_11533 = G__11560;
chunk__11494_11534 = G__11561;
count__11495_11535 = G__11562;
i__11496_11536 = G__11563;
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

var seq__11507 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11508 = null;
var count__11509 = (0);
var i__11510 = (0);
while(true){
if((i__11510 < count__11509)){
var role = cljs.core._nth.call(null,chunk__11508,i__11510);
var temp__4657__auto___11564__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11564__$1)){
var spec_11565 = temp__4657__auto___11564__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_11565));
} else {
}

var G__11566 = seq__11507;
var G__11567 = chunk__11508;
var G__11568 = count__11509;
var G__11569 = (i__11510 + (1));
seq__11507 = G__11566;
chunk__11508 = G__11567;
count__11509 = G__11568;
i__11510 = G__11569;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__11507);
if(temp__4657__auto____$1){
var seq__11507__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11507__$1)){
var c__7387__auto__ = cljs.core.chunk_first.call(null,seq__11507__$1);
var G__11570 = cljs.core.chunk_rest.call(null,seq__11507__$1);
var G__11571 = c__7387__auto__;
var G__11572 = cljs.core.count.call(null,c__7387__auto__);
var G__11573 = (0);
seq__11507 = G__11570;
chunk__11508 = G__11571;
count__11509 = G__11572;
i__11510 = G__11573;
continue;
} else {
var role = cljs.core.first.call(null,seq__11507__$1);
var temp__4657__auto___11574__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11574__$2)){
var spec_11575 = temp__4657__auto___11574__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_11575));
} else {
}

var G__11576 = cljs.core.next.call(null,seq__11507__$1);
var G__11577 = null;
var G__11578 = (0);
var G__11579 = (0);
seq__11507 = G__11576;
chunk__11508 = G__11577;
count__11509 = G__11578;
i__11510 = G__11579;
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

//# sourceMappingURL=repl.js.map