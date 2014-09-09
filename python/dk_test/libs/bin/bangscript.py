#-------------------------------------------------------------------------------
# Name:             bangscript.py
#-------------------------------------------------------------------------------
from __future__ import with_statement

__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "04/29/2013"
__copyright__		= "(c) SIOS Technology Corp 2013"

import argparse
import subprocess
import sys
from time import sleep


def main():
	parser = argparse.ArgumentParser(description="Panic System",
										prog="bangscript")

	parser.add_argument(dest='bangexe',
							action='store')

	parser.add_argument(dest='delay',
							nargs='?',
							action='store',
							default=0)

	parser.add_argument(dest='prompt',
							nargs='?',
							action='store',
							default='yes',
							help="Either yes or no")

	args = parser.parse_args()

	sleep(float(args.delay))

	if args.prompt == 'no':
		subprocess.call([args.bangexe, '-s'])
	else:
		subprocess.call([args.bangexe])




if __name__ == '__main__':
	main()
