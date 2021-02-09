# JavaScript 정리

Tags: https://www.notion.so/WEB-2afd1583b26241bd8b0b9042f60c7c1a
생성일: 2021년 2월 9일 오후 4:56

- 1.html

```html
<!doctype html> 
    <html>
        <head> 
            <title>도원</title> 
            <meta charset="utf-8"> 
            <link rel="stylesheet" href="style.css">
            <script src = "colors.js"></script>
        </head>
        <body>
            <h1><a href="index.html">WEB</a></h1> 
            <input type="button" value="night" onclick="
            nightdayHandler(this);
        ">
            <div id="grid">
                <ol>
                    <li><a href="1.html">HTML</a></li>
            <h2>HTML</h2>
                    Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.
                    Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. 
                    HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
            </div>
        </body>
    </html>
```

1. <script> 태그

외부 스크립트를 가져오는 법

2. href 속성

온전한 URL을 값으로 가지는 USVString

3. <link> 태그

1) 외부 스타일 시트 연결하기 위해서 <head> 안에 삽입

2) href 특성에 스타일 시트의 경로, rel 특성에 stylesheet를 사용

3) rel: 관계를 의미, 현재 문서와 연결한 아이템의 관계가 어떻게 되는지

```html
// 사이트의 파비콘을 연결하려면
<link rel="icon" href="favicon.ico">
```

4. onClick="nightdayHandler(this);"

1) 이벤트 리스너(이벤트가 발생했을 때 그 처리를 담당하는 함수, 이벤트 헨들러) 안에서 this 키워드를 사용하면 이벤트라 발생한 객체를 찾을 수 있음

2) this 키워드의 스타일을 바꾸면 이벤트가 발생한 객체의 스타일을 변경하는 것과 같음

- 2.html

```html
<!doctype html>
<html>
    <head>
    <title>WEB1 - CSS</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <script src = "colors.js"></script>
    </head>

    <body>
    <h1><a href="index.html">WEB</a></h1>
    <input type="button" value="night" onclick="
    nightdayHandler(this);
    ">
    <div id = "grid">
        <ol>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.html">CSS</a></li>
        <li><a href="3.html">JavaScript</a></li>
        </ol>
        <div id = "article">
        <h2>CSS</h2>
        <p>
            Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document 
            written in a markup language. Although most often used to set the visual style of web pages and user 
            interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, 
            SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, 
            CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces 
            for web applications, and user interfaces for many mobile applications.
        </p>
        </div> 
    </div>
    </body>
</html>
```

- 3.html

```html
<!doctype html>
<html>
    <head>
    <title>WEB1 - JavaScript</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <script src = "colors.js"></script>
    </head>

    <body style = "background-color:black;color:white;">
    <!-- search: js get element by css selector multiple -->
    <h1><a href="index.html">WEB</a></h1>
        <input type="button" value="night" onclick="
        nightdayHandler(this);
        ">
        <div id = "grid">
            <ol>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
            </ol>
            <div id = "article">
            <h2>JavaScript</h2>
                <p>
                JavaScript (/ˈdʒɑːvəˌskrɪpt/[6]), often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.
                </p>
            </div>
        </div>
    </body>
</html>
```

- index.html

```html
<!doctype html>
<html>
    <head>
    <title>WEB1 - Welcome</title>
    <meta charset="utf-8">
    <script src = "colors.js"></script>
    </head>
    
    <body>
        <h1><a href="index.html">WEB</a></h1> 
        <input type="button" value="night" onclick="
        nightdayHandler(this);
        ">
        <ol>
            <li><a href="1.html">HTML</a></li> 
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

- color.js

```jsx
var Body = {
  setColor: function (color){
      <!-- search: js get element by css selector multiple -->
      <!-- 클래스가 여러개인 요소를 가져오는 법 .↓-->
    document.querySelector('body').style.color= color;
  },
  setBackgroundColor: function (color){
    document.querySelector('body').style.backgroundColor= color;
  }
}
var Links = {
  setColor: function (color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length) {
  <!-- 색을 다양하게 변화시키는 -->
  alist[i].style.color = 'color'
  i = i + 1;
    }
  }
}

function nightdayHandler(self){
    var target = document.querySelector('body');
    if (self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        <!-- ↓해주지 않으면 오류가 남 -->
        self.value = 'day';

        Links.setColor('powerderblue');
    }  else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}
```

1. 클래스가 여러개인 요소를 가져오는 법

1) document.querySelector

2) document.querySelectorAll

2. var

1) 변수 선언

2) 선택적으로 초기화 가능

3) 함수 또는 전역 번위인지 여부와 상관없이, 항상 변수를 선언 하는 것을 추천

- ex2.html

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>

        </title>
    </head>
    <body>
        <!-- 글씨를 적고 싶으면 value 사용, 버튼은 버튼 
        alert: 경고창 onclick의 속성값은 반드시 js가 와야한다-->
        <input type="button" value="hi" onclick="alert('hi')">
        <input type="text" onchange="alert('changed')">
        <input type="text" onkeydown="alert('key down!')">
    </body>
</html>
```

- 함수 사용법

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>Fuction</h1>
        <h2>Basic</h2>
        <ul>
            <script>
                function two() {
                    document.write('<li>2-1</li>');
                    document.write('<li>2-2</li>');
                }
                document.write('<li>1</li>');
                two();
                document.write('<li>3</li>');
                two();
            </script>
        </ul>
        <h2>Parameter & Argument</h2>
        <h2>Return</h2>
    </body>
</html>
```

- 객체의 읽기와 쓰기

```html
<!-- 객체: 이름이 있는 정리정돈 상자 -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>Object</h1>
        <h2>Create</h2>
        <script>
            // 객체는 중괄호, 배열은 대괄호
            var coworkers = {
                "humon": "dowon",
                "animal": "summer"
            };
            document.write("humon: "+coworkers.humon+"<br>");
            document.write("animal: "+coworkers.animal+"<br>");
            coworkers.bookkeeper = "duu";
            document.write("bookkeeper: "+coworkers.bookkeeper+"<br>");
            // 대괄호에 이름을 넣으면 띄어쓰기도 가능
            coworkers["data scientist"] = "eoo";
            document.write("data scientist: "+ coworkers["data scientist"]+"<br>");

        </script>
    </body>
</html>
```

1. 객체는 중괄호, 배열은 대괄호 사용

- 객체와 반복문

```html
<!-- 순서를 보장하진 않음 -->
<!DOCTYPE html>
<html>
    <head>
       // 대괄호에 이름을 넣으면 띄어쓰기도 가능
            coworkers["data scientist"] = "eoo";
            document.write("data scientist: "+ coworkers["data scientist"]+"<br>");
             </script>
        <h2>Iterate</h2>
        <script>
            // search: js object iterate; 객체에서 반복문으로 데이터 다 가져오는 법
            // key로 꼭 해야함
            // key : humon, animal, bookkeeper, data scientist
            for(var key in coworkers){
                document.write(key + " : " + coworkers[key] + "<br>")
            }
              </script>
    </body>
</html>
```

- 프로퍼티와 메소드

```html
<!DOCTYPE html>
<html>
    <head>
     <h1>Object</h1>
        <h2>Create</h2>
        <script>
        var coworkers = {
                "humon": "dowon",
                "animal": "summer"
                document.write("animal: "+coworkers.animal+"<br>");
            coworkers.bookkeeper = "duu";
            document.write("bookkeeper: "+coworkers.bookkeeper+"<br>");
             coworkers["data scientist"] = "eoo";
            document.write("data scientist: "+ coworkers["data scientist"]+"<br>");
        </script>
        <h2>Iterate</h2>
        <script>
         for(var key in coworkers){
                document.write(key + " : " + coworkers[key] + "<br>")
            }
        </script>
        <h2>Property & Method</h2>
        <script>
            // 객체에 함수를 담는 법
            coworkers.showAll = function(){
                // coworkers라는 변수의 이름이 바뀌어도 사용가능하게 하려면 this로 바꿔줘야 함
                for(var key in this){
                    document.write(key + " : " + this[key] + "<br>")
                }   
            }
            coworkers.showAll();
        </script>
    </body>
 </html>
```

1. 메소드

객체에 소속된 함수

2. 프로퍼티

객체에 소속된 변수

3. 객체에 함수 담는 법

```html
coworkers.showAll = function(){
                for(var key in this){
                    document.write(key + " : " + this[key] + "<br>")
                    }
```

coworkers라는 변수의 이름이 바뀌어도 사용가능하게 하려면 this로 바꿔줘야 함