Difference between HTTP1.1 vs HTTP2

HTTP1.1:
i) HTTP - Hyper Text Transfer Protocol. Used for 'client-sever communication'. i.e; user send a request to the server and server send an response to the user's request.
ii) HTTP1.1 is a update version of HTTP.
iii) HTTP1.1 is founded on 1997.
iv) HTTP1.1 works as a 'text format'.That is both user request and server response will come as plain text.
v) HTTP1.1 as a problem known as 'head-of- line blocking,which means 'if sending a multiple request in a same connection/time means the TCP will block other request and need to wait until the previous response finshed and send or processed.
vi) It is difficult for the large/multiple files.
vii) This is called as HTTP1.1.

HTTP2:
i) HTTP - Hyper Text Transfer Protocol. 
ii) HTTP2 is updated version of HTTP1.1
iii) HTTP2 is founded on 2015.
iv) HTTP2 is works as a 'binary protocol'. That is 'request and response communication will be on byte value and read by machine rather than human being'.
v) HTTP2 is developed used 'SPDY protocol (speedy)', that means 'it is a more efficient web protocol from google basis for HTTP2. 
vi) HTTP2 will send multiple request at a time and TCP will connection used for this multiple request and get the responses without blocking.
vii) HTTP2 uses 'HPACK (header compression algorithm)'used for spliting the data from header and compress the header.
viii) This is called as HTTP2.