#!/bin/bash

upperstart=65
upperend=90
lowerstart=97
lowerend=122

#for (( inval=$upperstart; $inval<$upperend; $inVal++ )) ; do
for inVal in $( seq $upperstart $upperend ) ; do
	outVal=$(( $inVal + 32 ))
	#echo $inVal
	printf \\$(printf '%03o' ${inVal})
	echo -en \\t
	printf \\$(printf '%03o' ${outVal})
	echo ""
done
unset inVal outVal 

echo
echo

for inVal in $( seq $lowerstart $lowerend ) ; do
#for (( inval=$lowerstart ; $inval < $lowerend ; $inVal++ )) ; do
	outVal=$(( $inVal - 32 ))
	printf \\$(printf '%03o' ${inVal})
	echo -en \\t
	printf \\$(printf '%03o' ${outVal})
	echo ""
done
