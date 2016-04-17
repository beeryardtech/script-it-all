/*******************************************************************************
*
* Name: setfill
* Abstract: fills in random chars to a file
* Author: Travis Goldie
* Date: Febuary 2012
* Args: $1 -
*
*******************************************************************************/

// setfill example
#include <stdio.h>
#include <cstdlib>
#include <ctype.h>
#include <fstream>
//#include <iostream>
//#include <iomanip>
#include <sys/types.h>
#include <sys/stat.h>
//#include <unistd.h>
using namespace std;

int main ( int argc, char *argv[] )
{
   ofstream log;
   struct stat filestate;
   unsigned int size = 0;
   char path[] = "test.log";
   string filler;
   unsigned int max = 1048576000;
   
   //Check args or show usuage
   //Will be using getopt function

   while ((c = getopt (argc, argv, "abc:")) != -1)
   {
         switch (c)
           {
           case 'a':
             aflag = 1;
             break;
           case 'b':
             bflag = 1;
             break;
           case 'c':
             cvalue = optarg;
             break;
           case '?':
           }
   }


   //Get path to file from user or use default value

   //Get max file size or use default value

   //Open the file stream
   log.open( path );
   
   if(log != NULL)
   {
      //Stop when file size is less than needed number of bits
      while(size < max)
      {
         for(int i; i<200; ++i)
         {
            filler += (char) (rand() % ('z' - '0' + 1) + '0');
         }

         //fwrite (filler, 1, sizeof(filler), log);
         log << filler << endl;
         
         stat( path, &filestate );
         size = filestate.st_size;
         cout << "size: " << size << endl;
         //return 0;
      }   
      log.close();
      //fclose(log);
   }

   //cout << setfill ('x') << setw (10);
   //cout << 77 << endl;
   return 0;
}
