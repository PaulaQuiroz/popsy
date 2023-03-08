#!C:\Users\pquiroz\AppData\Local\Programs\Python\Python311\python.exe
import cgi
import os

print('content-type:text/html')
form= cgi.FieldStorage()
pn=str(form.getvalue("pname"))

print('<h1>hola %s</h1>'%pn)