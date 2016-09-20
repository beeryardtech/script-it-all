// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9547){
var map__9572 = p__9547;
var map__9572__$1 = ((((!((map__9572 == null)))?((((map__9572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9572):map__9572);
var m = map__9572__$1;
var n = cljs.core.get.call(null,map__9572__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9572__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__9574_9596 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9575_9597 = null;
var count__9576_9598 = (0);
var i__9577_9599 = (0);
while(true){
if((i__9577_9599 < count__9576_9598)){
var f_9600 = cljs.core._nth.call(null,chunk__9575_9597,i__9577_9599);
cljs.core.println.call(null,"  ",f_9600);

var G__9601 = seq__9574_9596;
var G__9602 = chunk__9575_9597;
var G__9603 = count__9576_9598;
var G__9604 = (i__9577_9599 + (1));
seq__9574_9596 = G__9601;
chunk__9575_9597 = G__9602;
count__9576_9598 = G__9603;
i__9577_9599 = G__9604;
continue;
} else {
var temp__4657__auto___9605 = cljs.core.seq.call(null,seq__9574_9596);
if(temp__4657__auto___9605){
var seq__9574_9606__$1 = temp__4657__auto___9605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9574_9606__$1)){
var c__7757__auto___9607 = cljs.core.chunk_first.call(null,seq__9574_9606__$1);
var G__9608 = cljs.core.chunk_rest.call(null,seq__9574_9606__$1);
var G__9609 = c__7757__auto___9607;
var G__9610 = cljs.core.count.call(null,c__7757__auto___9607);
var G__9611 = (0);
seq__9574_9596 = G__9608;
chunk__9575_9597 = G__9609;
count__9576_9598 = G__9610;
i__9577_9599 = G__9611;
continue;
} else {
var f_9612 = cljs.core.first.call(null,seq__9574_9606__$1);
cljs.core.println.call(null,"  ",f_9612);

var G__9613 = cljs.core.next.call(null,seq__9574_9606__$1);
var G__9614 = null;
var G__9615 = (0);
var G__9616 = (0);
seq__9574_9596 = G__9613;
chunk__9575_9597 = G__9614;
count__9576_9598 = G__9615;
i__9577_9599 = G__9616;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9617 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6946__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6946__auto__)){
return or__6946__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9617);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9617)))?cljs.core.second.call(null,arglists_9617):arglists_9617));
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
var seq__9578_9618 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9579_9619 = null;
var count__9580_9620 = (0);
var i__9581_9621 = (0);
while(true){
if((i__9581_9621 < count__9580_9620)){
var vec__9582_9622 = cljs.core._nth.call(null,chunk__9579_9619,i__9581_9621);
var name_9623 = cljs.core.nth.call(null,vec__9582_9622,(0),null);
var map__9585_9624 = cljs.core.nth.call(null,vec__9582_9622,(1),null);
var map__9585_9625__$1 = ((((!((map__9585_9624 == null)))?((((map__9585_9624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9585_9624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9585_9624):map__9585_9624);
var doc_9626 = cljs.core.get.call(null,map__9585_9625__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9627 = cljs.core.get.call(null,map__9585_9625__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9623);

cljs.core.println.call(null," ",arglists_9627);

if(cljs.core.truth_(doc_9626)){
cljs.core.println.call(null," ",doc_9626);
} else {
}

var G__9628 = seq__9578_9618;
var G__9629 = chunk__9579_9619;
var G__9630 = count__9580_9620;
var G__9631 = (i__9581_9621 + (1));
seq__9578_9618 = G__9628;
chunk__9579_9619 = G__9629;
count__9580_9620 = G__9630;
i__9581_9621 = G__9631;
continue;
} else {
var temp__4657__auto___9632 = cljs.core.seq.call(null,seq__9578_9618);
if(temp__4657__auto___9632){
var seq__9578_9633__$1 = temp__4657__auto___9632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9578_9633__$1)){
var c__7757__auto___9634 = cljs.core.chunk_first.call(null,seq__9578_9633__$1);
var G__9635 = cljs.core.chunk_rest.call(null,seq__9578_9633__$1);
var G__9636 = c__7757__auto___9634;
var G__9637 = cljs.core.count.call(null,c__7757__auto___9634);
var G__9638 = (0);
seq__9578_9618 = G__9635;
chunk__9579_9619 = G__9636;
count__9580_9620 = G__9637;
i__9581_9621 = G__9638;
continue;
} else {
var vec__9587_9639 = cljs.core.first.call(null,seq__9578_9633__$1);
var name_9640 = cljs.core.nth.call(null,vec__9587_9639,(0),null);
var map__9590_9641 = cljs.core.nth.call(null,vec__9587_9639,(1),null);
var map__9590_9642__$1 = ((((!((map__9590_9641 == null)))?((((map__9590_9641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9590_9641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9590_9641):map__9590_9641);
var doc_9643 = cljs.core.get.call(null,map__9590_9642__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9644 = cljs.core.get.call(null,map__9590_9642__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9640);

cljs.core.println.call(null," ",arglists_9644);

if(cljs.core.truth_(doc_9643)){
cljs.core.println.call(null," ",doc_9643);
} else {
}

var G__9645 = cljs.core.next.call(null,seq__9578_9633__$1);
var G__9646 = null;
var G__9647 = (0);
var G__9648 = (0);
seq__9578_9618 = G__9645;
chunk__9579_9619 = G__9646;
count__9580_9620 = G__9647;
i__9581_9621 = G__9648;
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

var seq__9592 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9593 = null;
var count__9594 = (0);
var i__9595 = (0);
while(true){
if((i__9595 < count__9594)){
var role = cljs.core._nth.call(null,chunk__9593,i__9595);
var temp__4657__auto___9649__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9649__$1)){
var spec_9650 = temp__4657__auto___9649__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_9650));
} else {
}

var G__9651 = seq__9592;
var G__9652 = chunk__9593;
var G__9653 = count__9594;
var G__9654 = (i__9595 + (1));
seq__9592 = G__9651;
chunk__9593 = G__9652;
count__9594 = G__9653;
i__9595 = G__9654;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__9592);
if(temp__4657__auto____$1){
var seq__9592__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9592__$1)){
var c__7757__auto__ = cljs.core.chunk_first.call(null,seq__9592__$1);
var G__9655 = cljs.core.chunk_rest.call(null,seq__9592__$1);
var G__9656 = c__7757__auto__;
var G__9657 = cljs.core.count.call(null,c__7757__auto__);
var G__9658 = (0);
seq__9592 = G__9655;
chunk__9593 = G__9656;
count__9594 = G__9657;
i__9595 = G__9658;
continue;
} else {
var role = cljs.core.first.call(null,seq__9592__$1);
var temp__4657__auto___9659__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9659__$2)){
var spec_9660 = temp__4657__auto___9659__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_9660));
} else {
}

var G__9661 = cljs.core.next.call(null,seq__9592__$1);
var G__9662 = null;
var G__9663 = (0);
var G__9664 = (0);
seq__9592 = G__9661;
chunk__9593 = G__9662;
count__9594 = G__9663;
i__9595 = G__9664;
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