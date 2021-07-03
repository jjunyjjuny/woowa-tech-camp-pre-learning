# learnyounode

## 1. hello-world

- 그냥 console.log

## 2. baby-steps

### process.argv

- 노드 경로, 명령을 실행한 위치 경로, 커맨드 라인에 입력한 arguments를 배열로 받는다

- ['node', '/path/to/your/baby-steps.js', '1', '2', '3']

## 3. my-first-io

- fs모듈은 node.js에서 파일 처리와 관련된 작업을 한다.
- readFileSync 메소드는 지정 경로의 파일을 동기적으로 읽는다. (즉 파일을 다 읽을 때 까지 다른 동작을 할 수 없다.)
- readFileSync는 buffer를 반환한다.
- node.js의 공식문서에서 buffer를 아래와 같이 설명하고 있다.

> 바이너리 데이터들의 스트림을 읽거나, 조작하는 캐머니즘.
> 이 Buffer 클래스는 Node.js의 일부로 도입되어 TCP 스트림이나 파일시스템같은 작업에서의 OCTET 스트림과의 상호작용을 가능하기 위해 만들어졌습니다.

- ... 뭔소린지 모르겠다. 쉽게 풀이된 얘기로는 Buffer 클래스는 **바이너리 데이터들의 스트림을 직접 다루기 위해** Node.js API에 추가되었다고 한다.

- 바이너리 데이터는 0과 1로 이루어진 데이터이다.

- readFileSync가 반환한 buffer는 toString메소드를 통해 string으로 변환 가능하다.

## 4. my-first-async-io

- readFile은 비동기로 파일을 읽는다. 따라서 callback 함수를 받아서 파일 읽기와 병행해서 원하는 동작을 할 수 있다.

- readFile은 첫 번째 인자로 읽을 파일의 경로, 두 번째 인자는 옵션(utf8같은, buffer를 바로 toString하는 효과를 준다), 옵션을 생략한다면 다음 인자로 callback 함수를 받는다.

- callback 함수는 첫 번째로 err, 두번째로 data(읽은 값)을 받는 함수가 된다.

## 5. filtered-ls

- readdir은 지정 경로의 디렉토리에 있는 파일 목록을 배열로 반환한다. (비동기!)

- 비동기 동작 이기에 callback을 받아 병행 동작을 수행할 수 있다.

- readFile과 마찬가지로 인코딩을 설정하는 옵션을 넣을 수 있다.

## 6. make-it-modulear

- 5번 내용과 같지만 모듈화를 시켜야하는 차이점이 있다.

- 다만 부족한 영어실력으로.. 정확하게 무엇을 모듈화 해야하는지 (과연 영어 실력 탓일까? 개발 실력 탓일지도) 햇갈렸다.

## 7. http-client

- http get 요청으로 데이터를 받아오고, 처리하는 미션같다.

- http 모듈은 첫 번째 인자로 url, 두 번째로 callback을 받는다

- callback은 다시 http 요청의 response를 받는다.

- response는 setEncoding() 메소드를 가지고 있으며 'utf8'와 함께 실행하면 data 이벤트는 buffer가 아닌 string을 반환한다.

- 이후 response의 on 메소드는(on은 response만의 메소드는 아니다.) 해당 객체와 listener를 지정 이벤트로 연결한다.

## 8. http-collect

- 요청을 collect에 모으는 미션인가부다
- 앞과 비슷하긴한데, end 이벤트도 사용해야 했다.
- data 이벤트를 쌓다가 끝나면 end가 실행되는거 같다
- 습관적으로 모으는거니까 배열에 담아야지 했는데 하다보니 문자열로 합치는게 더 효율적이다.

## 9. juggling-async

- 8번 문제에서 복수의 url이 주어지는 차이만 있는 문제였다.

- 단 각 url의 순서에 맞게 collect를 console.log해야하며, 그러기 위해서 비동기 처리를 해야했기에 async await promise등을 사용했다.

- 문제를 해결한 후 주어진 official solution에서는 반복을 3회라고 딱 지정했고, results 배열에 collect를 집어넣되 요청 순서에 따라 index를 부여하는 방식으로 results 배열의 내에서 순서를 지정했다.

- 이렇게하면 순서야 정해지겠지만 좀 깔끔하진 않은거 같다.

## 10. time-server

- net 모듈을 사용해서 TCP 서버를 만든다.

- net 모듈의 createSever 메소드로 서버 객체를 만든다. 이 때 socket을 파라미터로 갖는 함수를 전달한다.

- 서버를 만들고, Date 객체로 현재 시각을 얻어서 socket.end 메소드를 통해 서버를 닫으며 메세지를 보내도록 한다.

server.listen 메소드에 port번호를 전달해서 서버를 킨다.

## 11. http-file-server

- http server를 생성해서 요청한 텍스트 파일과 동일한 파일을 serve하도록 한다.

- stream이라는 개념이 계속 나오는데, 노드에는 4가지 기초 스트림 타입이 있다고 한다. Readable, Writable, Duplex, Transform.

- 이 중 fs.createReadStream으로 Readable 스트림을 만들고, pipe를 통해 response와 연결한다.

- pipe는 마법 같은 기능을 한다. 모든 스트림은 EventEmitter의 인스턴스로, 데이터를 읽거나 쓸 때 사용할 이벤트를 방출(emit)할 수 있다. 하지만 pipe를 쓰면 더 간단히 스트림 데이터를 사용할 수 있다.

- pipe를 쓸 때는 이벤트를 쓰지 않는 것을 권한다고 한다.



## 12. http-uppercaserer

- req.method 값으로 요청의 method를 알 수 있다. 이 문제의 경우 POST 요청만 처리한다.

- through2-map이라는 설치해서 사용했다. transform stream 데이터를 처리하는데 사용한다.

- througt2-map은 array의 map 메소드와 같은 동작을 stream에서도 할 수 있도록 한다. 스트림은 chunk로 구성되어 있다. 

## 13. time-server

- 마지막 문제.. 진짜 너무 어렵다.. 검색해서 결국 답을 보고 해도 .. 백엔드쪽 지식 부족이 이렇게 까지 클 줄이야! 

- 그래도 server를 만들면서 전달하는 함수의 req, res가 언제 실행되는건지 감은 오는거 같다. 예전에 만들었던 라이브러리가 떠오른다..

- writeHead로 응답 객체에 헤더를 수정하고

- url 모듈로 url을 파싱해서 나누고 필요한 부분만 사용한다. url.pathname처럼. 이전에 한 번 사용했던 모듈이라 여기는 이해가 갔다

- query.iso 값을 사용한다. url 모듈로 parse 했을 때 생성되는 객체를 더 잘 파악해보아야 할듯 하다.


## 후기

초반에는 당연히 엄청 쉬웠고, 후반 문제도 로직이 너무 어렵다거나 하진 않았다. 백엔드를 안 해봐서 그렇지 좀만 공부해보면 이 정도는 할 수 있지 않을까?하는 근거 없는 자신감을 .. 가져본다 (희망 사항)

![image](https://user-images.githubusercontent.com/41738385/124166258-8e99be00-dadd-11eb-9c78-b7cec1d464cd.png)

