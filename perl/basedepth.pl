use strict;
use warnings;

use File::Spec;

my @path = File::Spec->splitdir($ARGV[0]);
print File::Spec->catdir(splice @path, -$ARGV[1]), "\n";
