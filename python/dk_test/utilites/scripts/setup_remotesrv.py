#-------------------------------------------------------------------------------
# Name:             setup_remotesrv.py
#-------------------------------------------------------------------------------
__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "01/17/2013"
__copyright__		= "(c) SIOS Technology Corp 2013"

from distutils.core import setup
import py2exe


if __name__ == '__main__':
    setup(console=[r"c:\Programs\dk_test\libs\remotesrv.py"])
