# Tic-Tac-Toe!

틱택토 게임 만들기

## 시작 전에

- 어떤 방식으로 만들까 고민이 된다.

  - 돔을 html 파일에 직접 생성할지, js로 동적 생성할까
  - 동적 생성한다면 기존에 사용하던 컴포넌트 프레임워크 구조를 사용할까 / 필요한 함수만 만들어서 조합하는 식으로 해볼까

- 컴포넌트 구조로 만드는건 좀 과한가? 싶기도 하고, 그래도 제이쿼리식으로 돔을 하나씩 선택해가면서 만드는건 좀 구식이지 않을까 생각도 든다.

- 일단 조금 단순하게 작성해보려한다.

- 틱택토 게임 뿐이지만, 이후 다른 게임을 추가한다는 가정으로 전체 구조를 작성해보자 

## 진행하면서

- 일단 상태를 관리하면서 상태 기반 렌더링을 하는 방식으로 방향을 잡았다.

- 하던대로 class를 만들어서 각 컴포넌트별 상태 관리 / 렌더 트리거 등을 구현하려다가, 함수형으로 해보고 싶었다.

- react의 hooks 같은 동작까지 구현하는건 시간이 너무 오래 걸릴 거 같았고, 순수함수로만 구성하기에도 상태 관리가 좀 어려울거 같아서 일단 class를 쓰지 않고 해보자는 목표만 이루기로 했다.

## 데모 페이지

[링크](https://jjunyjjuny.github.io/woowa-tech-camp-pre-learning/tic-tac-toe/index.html)