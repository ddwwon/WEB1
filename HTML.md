# HTML

생성일: 2021년 2월 8일 오후 11:36

```html
# index.html
<!doctype html>
<html>
<head>
  <title>WEB1 - Welcome</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="index.html">WEB</a></h1> # web 페이지 재 등장
  <ol>
    <li><a href="1.html">HTML</a></li> # html 관련 내용 나옴
    <li><a href="2.html">CSS</a></li>
    <li><a href="3.html">JavaScript</a></li>
  </ol>
  <h2>WEB</h2>
  <p>

    The World Wide Web (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet.[1] English scientist Tim Berners-Lee invented the World Wide Web in 1989. He wrote the first web browser computer program in 1990 while employed at CERN in Switzerland.[2][3] The Web browser was released outside of CERN in 1991, first to other research institutions starting in January 1991 and to the general public on the Internet in August 1991.
  </p>
</body>
</html>
```

![HTML%205d383360bbe44ed3959832fb1c5315cf/Untitled.png](HTML%205d383360bbe44ed3959832fb1c5315cf/Untitled.png)

```html
# 1.html
<!doctype html> # html로 만들어졌다는 것을 표현하기 위해서
<html>
    <head> # 본문을 설명하는 부분
        <title>도원</title> # 제목 정하기, 검색엔진이 웹페이지를 분석할 때 가장 중요하게 생각하는 태그이기 때문에 안쓰면 손해
        <meta charset="utf-8"> # utf-8로 만들어졌기 때문에 utf-8로 열어야해
    </head>
    
    # 본문
    <body>
        <h1><a href="index.html">WEB</a></h1> # 각 부분에 링크를 걸어서 다른 페이지와 연결시키기
        <ol> # ol을 사용해서 목차 정렬 가능, 만약 첫번째 항목을 지우더라도 알아서 번호가 정렬됨
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ol>
        <h2>HTML</h2> # a는 링크를 거는 것
        <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 specification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.</p>
        <p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. </p>
       z  # 동영상 삽입
        <p>
            <div id="disqus_thread"></div>
        <script>
        
        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
        /*
        var disqus_config = function () {
        this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        */
        (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://web1-2.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </p>
    </body>
</html>
```

```html
# 2.html
<!doctype html>
<html>
<head>
  <title>WEB1 - CSS</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="index.html">WEB</a></h1>
  <ol>
    <li><a href="1.html">HTML</a></li>
    <li><a href="2.html">CSS</a></li>
    <li><a href="3.html">JavaScript</a></li>
  </ol>
  <h2>CSS</h2>
  <p>
    Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.
  </p>
</body>
</html>
```

![HTML%205d383360bbe44ed3959832fb1c5315cf/Untitled%201.png](HTML%205d383360bbe44ed3959832fb1c5315cf/Untitled%201.png)

```html
# 3.html
<!doctype html>
<html>
<head>
  <title>WEB1 - JavaScript</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="index.html">WEB</a></h1>
  <ol>
    <li><a href="1.html">HTML</a></li>
    <li><a href="2.html">CSS</a></li>
    <li><a href="3.html">JavaScript</a></li>
  </ol>
  <h2>JavaScript</h2>
  <p>
    JavaScript (/ˈdʒɑːvəˌskrɪpt/[6]), often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.
  </p>
</body>
</html>
```

![HTML%205d383360bbe44ed3959832fb1c5315cf/Untitled%202.png](HTML%205d383360bbe44ed3959832fb1c5315cf/Untitled%202.png)

- <!doctype html>

: html로 만들어졌다는 것을 표현하기 위해서

- <html></html>
- <head> </head>
: 본문을 설명하는 부분

- <title> </title>
1. 제목 정하기
2. 검색엔진이 웹페이지를 분석할 때 가장 중요하게 생각하는 태그
3. 안쓰면 손해
4. ex) <title>도원</title>

-<body> </body>
: 본문

- <h1> </h1> ~ <h6></h6>
: 헤더, 글자 크기 조정

- <ol></ol>
: 목차 정렬 가능, 항목이 삭제되어도 자동으로 번호가 정렬됨

- <li></li>
1. 목차
2. li와 ol은 항상 함께 사용

-<a></a>
1. 링크걸기
2. ex) <a href="index.html">WEB</a>
3. ex) <a href="[https://www.w3.org/TR/html5/](https://www.w3.org/TR/html5/)" target="_blank" title="html5 specification">Hypertext Markup Language (HTML)</a>
4. target="_blank"
: 링크를 클릭했을 때 새창에서 페이지가 열리게 하는 속성

- <p></p>
: 단락 구분, 자동으로 띄어쓰기 됨

- <strong> </strong>
: 진하게 표시하고 싶은 구간을 감싸줄때

- <u></u>
: 밑줄 긋기

- <meta charset="utf-8">
: utf-8로 만들었기 때문에 utf-8로 열라는 의미

- <p><iframe width="560" height="315" src="[https://www.youtube.com/embed/jSJM9iOiQ1g](https://www.youtube.com/embed/jSJM9iOiQ1g)" frameborder="0" allowfullscreen></iframe> </p>
: 동영상 삽입

- <br>
: 무엇인가를 설명하지 않는 태그들은 감싸야하는 컨텐츠가 없기 때문에 태그를 닫지 않는다
1. ex) img, input, br, hr, meta
