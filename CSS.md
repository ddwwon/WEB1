# CSS

생성일: 2021년 2월 8일 오후 11:50

- 1.html

```html
<!doctype html> 
	<html>
        <head> 
        <title>도원</title> 
        <meta charset="utf-8"> 
        <!-- css 파일 연결 -->
        <link rel="stylesheet" href="style.css"> 
    </head>
    
        <h1><a href="index.html">WEB</a></h1> 
        <div id="grid">
            <ol>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </ol>
            
               <div id = "article">
            <h2>HTML</h2>
            <p>
                Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.
                Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. 
                HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
            </p>
            </div>
        </div>
    </body>
</html>
```

- 2.html

```html
<!doctype html>
<html>
    <head>
        <title>WEB1 - CSS</title>
        <meta charset="utf-8">
        <!-- css 연결 -->
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1><a href="index.html">WEB</a></h1>
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
    <!-- css 파일 연결 -->
    <link rel="stylesheet" href="style.css">
    </head>

    <body>
    <h1><a href="index.html">WEB</a></h1>
    <!-- id로 설정해두면 css에서 다루기 쉬워짐
        id의 이름은 중복되면 안됨 -->
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

[]()

![CSS%20f38917f9ac5e44e4a34aa2c8f245b547.png](CSS%20f38917f9ac5e44e4a34aa2c8f245b547.png)

- 생성자 찾는 법

css text size property

- style.css

```css
a {
    color: skyblue;
    text-decoration: none;
  }
  h1 {
    font-size:45px;
    text-align: center;
    border-bottom:1px solid gray;
    margin:0;
    padding:20px;
  }
  ol{
    border-right: 1px solid gray;
    width: 100px;
    margin: 0;
    padding: 20px;
  }

  #grid{
    display: grid;
    /* ol, div */
    grid-template-columns: 150px 1fr;
  }
  /* gird 안에 있는 ol */
  #grid ol{
    padding-left: 33px;
  }
  #grid #article{
    padding-left: 25px;
  }
  /* screen width < 550px */
  @media(max-width:550px){
    /* css설명 부분을 밑으로 가게 */
    #grid{
        display: block;
    }
    /* 구분선 삭제 */
    ol{
    border-right: none;
    }
    h1{
        border-bottom:none;
    }
}
```

1. a{}

a로 시작하는 생성자를 꾸며줌

2. text-decoration

글씨의 장식(선) 색을 지정1) underline2) underline dotted3) underlind dotted red4) green wavy underline5) underline overline #FF3028

[https://tv.kakao.com/v/416390994](https://tv.kakao.com/v/416390994)

3.  font-size

폰트 크기 지정

4. text-align

텍스트 정렬

1) left: 왼쪽 정렬

2) right: 오른쪽 정렬

3) center: 중앙 정렬

4) justify: 양쪽 정렬(자동 줄바꿈시 오른쪽 경계선 부분 정리)

5. border 속성

1) border-width

2) border-style

(1) solid

(2) dotted

(3) dashed

(4) etc...

3) border-color

4) 방향

(1) border-top

(2) border-botton

(3) border-left

(4) border-right

5) border-bottom-color처럼 방향과 색 두께 스타일을 따로 설정할 수도 있음

```css
<style>
	#box{
		padding: 5px;
		border: 4px dotted green;
		border-bottom: 5px solid blue;
	}
</style>
```

![CSS%20f38917f9ac5e44e4a34aa2c8f245b547/img_(4).png](CSS%20f38917f9ac5e44e4a34aa2c8f245b547/img_(4).png)

6. margin, border, padding

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style> 
            h1{
                border: 5px dotted skyblue;
                /* 내용과 테두리 사이의 간격*/
                padding: 20px;
                /* 테두리와 테두리 사이의 간격 */
                margin: 20px;
                display: block;
                width: 100px;
            }
        </style>
    </head>
    <body>
        <h1>CSS</h1>
        <h1>CSS</h1>
    </body>
</html>
```

![CSS%20f38917f9ac5e44e4a34aa2c8f245b547/img_(5).png](CSS%20f38917f9ac5e44e4a34aa2c8f245b547/img_(5).png)

1) margin

요소의 주위에 빈 공간을 추가

(1) 한 개의 값: 모든 네면 의 여백을 설정

(2) 두 개의 값: 위아래, 좌우

(3) 세 개의 값: 위, 좌우, 아래

(4) 네 개의 값: 상, 우, 하, 좌

```html
margin: 1em;
margin: 5% 0;
margin: 10px 50px 20px;
margin: 10px 50px 20px 0;
margin: 0;
```

[https://tv.kakao.com/v/416390968](https://tv.kakao.com/v/416390968)

2) padding

요소의 내부에 빈 공간을 추가함

(1) padding-top

(2) padding-right

(3) padding-bottom

(4) padding-left

[https://tv.kakao.com/v/416391010](https://tv.kakao.com/v/416391010)

7. display

요소를 어떻게 보여줄지

1) none

2) block

(1) div, p, h, li 등이 해당됨

(2) 가로 영역을 모두 채움

(3) block 요소 다음에 등장하는 태그는 줄바꿈이 된 것처럼 보임

(4) width, height 속성 지정 가능

3) inline

(1) span, b, i, a

(2) block과 달리 줄 바꿈이 되지 않음(3) 글자나 문장에 효과를 주기 위해 존재

4) inline-block: block과 inline의 중간 형태

줄 바꿈이 되지 않지만 크기를 지정할 수 있음

![CSS%20f38917f9ac5e44e4a34aa2c8f245b547/img_(6).png](CSS%20f38917f9ac5e44e4a34aa2c8f245b547/img_(6).png)

5) grid

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style>
        #grid{
            border:5px solid pink;
            display: grid;
            /* 1fr: 나머지 공간을 다 쓴다 */
            grid-template-columns: 2fr 1fr;
        }
        div{
            border:5px solid blue;
        }
        </style>
    </head>
    <body>
        <!-- div: 아무런 용도가 없고 단지 디자인의 용도로만, 무색, block -->
        <!-- span: inline -->
        <!-- <div>NAVIGATION</div>
        <div>ARTICLE</div> -->
        <div id = "grid">
            <div>NAVIGATION</div>
            <div>ARTICLE</div>
        </div>
    </body>
</html>
```

(1) container

![CSS%20f38917f9ac5e44e4a34aa2c8f245b547/img_(7).png](CSS%20f38917f9ac5e44e4a34aa2c8f245b547/img_(7).png)

(2) item

![CSS%20f38917f9ac5e44e4a34aa2c8f245b547/img_(8).png](CSS%20f38917f9ac5e44e4a34aa2c8f245b547/img_(8).png)

(3) grid-template-columns/rows

명시적 행 크기를 정의라인의 이름도 정의 가능fr(공간 비율) 단위 사용 가능repeat() 함수 사용

```html
grid-template-columns: 150px 1fr;
```

8. 미디어 쿼리 mediaquery

다양한 기기 특성과 파라매터의 존재 여부에 따라 사이트, 앱 조정

반응형 디자인의 핵심 구성 요소

@media 스타일 시트의 일부를 조건부로 적용

@import 조건부로 전체 스타일시트를 적용가능

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style>
            div{
                border: 10px solid blue;
                font-size: 60px;
            }
            /* screen width > 800px */
            @media(min-width: 800px){
                div{
                    /* 공간을 차지하지 않는 것 */
                    display: none;
                }
            }

        </style>
    </head>
    <body>
        <div>
            Responsive
        </div>
    </body>
</html>
```

참고 동영상

[https://youtu.be/wcrgIwzerks](https://youtu.be/wcrgIwzerks)