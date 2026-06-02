# Browser Journey - Network Tab Observations

## Website Used
**URL:** https://www.wikipedia.org

---

## Network Requests Documented

### 1. Main HTML File
| Field        | Details               |
|--------------|-----------------------|
| File         | www.wikipedia.org     |
| Status Code  | 200 OK                |
| File Size    | 78.4 KB               |
| Load Time    | 312 ms                |

### 2. CSS File
| Field        | Details                          |
|--------------|----------------------------------|
| File         | load.php (stylesheet bundle)     |
| Status Code  | 200 OK                           |
| File Size    | 34.1 KB                          |
| Load Time    | 189 ms                           |

### 3. JavaScript File
| Field        | Details                          |
|--------------|----------------------------------|
| File         | load.php (js bundle)             |
| Status Code  | 200 OK                           |
| File Size    | 52.7 KB                          |
| Load Time    | 224 ms                           |

### 4. Image File
| Field        | Details                          |
|--------------|----------------------------------|
| File         | Wikipedia-logo-v2.png            |
| Format       | PNG                              |
| File Size    | 12.3 KB                          |

---

## Full Request-Response Flow Diagram

```
User types URL in browser
         |
         v
+------------------+
|   DNS Lookup     |
|                  |
| Browser checks   |
| local cache ->   |
| OS cache ->      |
| ISP DNS server   |
| resolves domain  |
| to IP address    |
+------------------+
         |
         v
+------------------+
|   TCP Handshake  |
|                  |
| SYN  ----------> |
| <---------- SYN-ACK
| ACK  ----------> |
| (3-way handshake |
|  complete)       |
+------------------+
         |
         v
+------------------+
|  TLS Handshake   |
| (HTTPS only)     |
|                  |
| Client Hello --> |
| <-- Server Hello |
| Certificate      |
| verification,    |
| session keys     |
| exchanged        |
+------------------+
         |
         v
+------------------+
|  HTTP GET        |
|                  |
| GET / HTTP/1.1   |
| Host: wikipedia  |
| Accept: text/html|
| User-Agent: ...  |
+------------------+
         |
         v
+------------------+
|  Server Response |
|                  |
| HTTP/1.1 200 OK  |
| Content-Type:    |
| text/html        |
| Body: HTML file  |
+------------------+
         |
         v
+------------------+
|  DOM Build       |
|                  |
| Browser parses   |
| HTML top to      |
| bottom, builds   |
| DOM tree, finds  |
| <link> and       |
| <script> tags,   |
| sends new GET    |
| requests for     |
| CSS, JS, images  |
+------------------+
         |
         v
+------------------+
|  CSSOM Build     |
|                  |
| Browser parses   |
| CSS files and    |
| builds CSSOM     |
| (CSS Object      |
| Model)           |
+------------------+
         |
         v
+------------------+
|  Render Tree     |
|                  |
| DOM + CSSOM      |
| combined into    |
| Render Tree      |
| (only visible    |
| elements)        |
+------------------+
         |
         v
+------------------+
|  Layout          |
|                  |
| Browser calculates
| size and position|
| of every element |
| on the page      |
+------------------+
         |
         v
+------------------+
|  Paint & Render  |
|                  |
| Pixels drawn to  |
| screen, page is  |
| visible to user  |
+------------------+
```

---

## Step-by-Step Summary

1. **User types URL** - Browser receives the address `https://www.wikipedia.org`
2. **DNS Resolution** - Domain name is converted to an IP address via DNS lookup
3. **TCP Connection** - Browser establishes a TCP connection using a 3-way handshake (SYN, SYN-ACK, ACK)
4. **TLS Handshake** - Encrypted connection is negotiated for HTTPS
5. **HTTP GET Request** - Browser sends `GET /` request with headers to the server
6. **Server Response** - Server replies with `200 OK` and the HTML document body
7. **DOM Build** - Browser parses HTML and constructs the Document Object Model (DOM)
8. **Additional Requests** - Browser discovers linked CSS, JS, and image files and fetches them
9. **CSSOM Build** - CSS is parsed and the CSS Object Model is built
10. **Render Tree** - DOM and CSSOM are combined to form the Render Tree
11. **Layout** - Browser calculates the geometry and position of all visible elements
12. **Paint** - Pixels are drawn to the screen and the page appears to the user