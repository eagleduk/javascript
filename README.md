 ** 참조 사이트 https://github.com/2woongjae/fc-js-project
 
1. Expression(표현식)
    - 값을 만들어내는 간단한 코드
    - 값을 만들어 내기 때문에 함수의 인자로 사용할 수 있다.

2. Statement(문장)
    - 하나 혹은 여러 개의 표현식의 모임
    - 모든 표현식은 문장이 될 수 있다.
    - 보통 문장의 끝에는 세미 콜론을 붙인다.
    - 한 줄에 문장이 하나인 경우에는 세미 콜론을 붙이지 않아도 문제가 없지만, 관례적으로 붙인다.
    - 한 줄에 여러 문장을 적을 경우, 세미 콜론으로 문장을 구분해야 한다.
    - 마지막 문장은 세미 콜론을 붙이지 않아도 문제가 없다.
    - 마지막 문장의 결과가 반환된다.
    - 조건문(if), 반복문(for) 도 문장. 이 경우에 마지막 } 뒤에 세미 콜론을 붙이지 않는다.
    - 문장들이 모여 프로그램이 된다.

3. Keywords(키워드)
    - 자바스크립트에서 특정한 목적을 위해 사용하는 단어 => 이러한 키워드들은 예약어로 지정되어 있다.
    - var

4. Reserved words(예약어)
    - 프로그램을 작성할 때, 변수명, 함수명 등 이름으로 사용할 수 없는 단어
    - 특정한 목적을 위해 사용하는 단어

5. Identifier(식별자)
    - 코드 내의 변수, 함수, 혹은 속성을 식별하는 문자열
    - 변수, 함수 속성명
    - 대소문자 구분
    - 유니코드문자(한글), $, _, 숫자 를 시작할 수는 있지만, 숫자로 시작할 수 없다
    - 예약어, 공백도 사용할 수 없다
    - https://mothereff.in/js-variables 변수명 가능 확인 사이트

6. Comments(주석)
    - 프로그램에 영향을 주지않고 무시되는 부분
    - 소스코드를 설명할 때 사용

7. variable(변수)
    - let
    - 값을 여러번 할당할 수 있다.

8. constant(상수)
    - const
    - 상수는 한번 값을 할당하면 변할 수 없다.
    
9. scope of variable(변수의 유효 범위)
    - 블록 스코프
        1. {} 내에서만 유효
        2. let, const
    - 함수 스코프
        1. function 내에서만 유효
        2. var

10. hoisting(호이스팅)
    - 호출을 먼저하고 아래에서 선언을 하는 동작
    - 선언부만 먼저 올라온다.
    - var, function 을 사용할시 가능

11. Data Type(자료형)
    - 동적 타이핑 => 값을 선언하는 대로 자료형이 바뀐다.
    - Symbol => 교유한 값을 만들고 싶을때

12. Conditional Statement(조건문)
    - Falsy = false, 0, '', null, undefined, NaN
    - Truethy = true, 37(0이 아닌값), 'Mark'(비어있지 않은 문자열), {}(null/undefined가 아닌값), [](null/undefined가 아닌값)

13. 표현식
    - &&(and) 연산일때는 앞에 표현식이 참이면 다음 표현식이 실행됨으로
        => (true) && (console.log("앞에 표현식이 참이다.")) 이런 표현도 가능
    - ||(if) 연산일때는 앞에 표현식이 거짓이면 다음 표현식이 실행됨으로
        => (false) || (console.log("앞에 표현식이 거짓이다.")) 이런 표현도 가능

14. Iteration Statement(반복문)
    - for(of) => 배열에서 사용
    - for(in) => 객체및 전반적으로 사용

15. Function(함수)
    - 선언적함수 => function [함수명]() {}
    - 익명적함수 => const [변수명] = function() {}
    - 선언적 함수는 호출을 먼저하고 함수를 만들어도 실행 가능, 익명적 함수는 불가능
    - arrow 함수(es6)
    - new 를 통해 동일 객체를 여러가지 만들 수 있다(생성자). 하지만 arrow 함수에서는 만들 수 없다.
    - 함수를 호출하여 함수를 만들어서 리턴
    - 함수를 인자로 함수를 호출

16. Object(객체)
    - 함수를 객체로 만들 수 있다.
    - 프로토타입 체인 프로토타입은 기본으로 제공되는 것.
    - 모든 객체는 Object 객체의 자손
    - 객체 리터럴
    - 표준 내장 객체(기초객체 - mdn)
    - Array.prototype.slice 는 존재하지만 Object.prototype.slice는 존재하지 않는다.
        => Object 를 상속받은 Array 에서 slice 가 구현되어 있기 때문.

17. Class(클래스)
    - 객체를 만들 수 있는 새로운 방법(es6 추가)
    - 클래스는 Hoisting(호이스팅)이 일어나지 않는다.
    - constructor(생성자)
    - get, set
    - class 안의 static 변수, 함수 => static으로 만든 변수, 함수는 객체로 만든 클래스에서는 호출할 수 없다.
    - extends(상속)
    - override => 자식의 함수명와 부모의 함수명이 같으면 오버라이드(덮어씌우는) 현상
    - super => 클래스의 부모 생성자 함수 변경
    - static 상속

18. Promise(비동기)
    - ES6 부터 표준 내장 객체로 추가
    - excutor 함수는 resolve 와 reject 를 인자로 가진다.
    - 생성자를 통해서 프로미스 객체를 만드는 순간 pending(대기) 상태
    - excutor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행) 상태
    - excutor 함수 인자 중 하나인 reject 함수를 실행하면, rejected(거부) 상태
    - resolve 가 실행 되었으면 then 함수(callback) 으로 fulfilled 시 실행할 함수 작성
    - rejecte 가 실행 되었으면 catch 함수(callback) 으로 rejected 시 실행할 함수 작성
    - resolve 함수를 실행할때 인자를 넣어 then 의 callback 함수에 전달 가능
    - rejecte 함수를 실행할때 인자를 넣어 catch 의 callback 함수에 전달 가능
        => 보통 에러를 전달할때에는 Error 객체를 사용
    - fulfilled 되거나 rejected 된 후에 최종적으로 실행할 함수는 finally 함수를 이용할 수 있다. 인자도 가능
    - callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출
    - then 함수에서 다시 Promise 객체를 리턴하는 방법을 통해 체이닝 하면, 비동기 작업을 순차적으로 아래로 표현 가능
    - Promise.all, Promise.race

19. Async-Await(비동기)
    - async function [함수이름]() {}
        -> const [함수이름] = async () => {}
20. Project