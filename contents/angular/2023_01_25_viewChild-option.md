## Decorator @ViewChild

오늘 코드리뷰를 하다가 `@ViewChild`의 새로운 옵션에 대해서 알게 되었다. 내가 발견한 코드는 아래의 코드였는데, `@ViewChild`를 사용할 때, 한번도 사용하지 않아봤던 옵션이라, 옵션을 사용하면 어떤 다른점이 있는지 궁금하여 찾아보게 되었다.

```
@ViewChild('newPwdElement', {read: ViewContainerRef}) newPwdInput: ViewContainerRef;
```

```
<input #newPwdElement
	   id="password"
	   type="password"
	   [formControl]="passwordForm"/>
```

찾은 내용을 한마디로 정리하자면, 보통 위의 예시처럼 HTML 요소에서 사용하는 것이 아니라 Angular Component에서 사용하는 것이다. Angular Component를 ViewChild로 사용했을 때, 내부의 HTML 요소에 접근이 불가능한데, 이를 가능하게 해주는 옵션이다.

| read 옵션 |           HTML 요소            |       Angular Component        |
| --------- | :----------------------------: | :----------------------------: |
| 사용 O    | ViewContainerRef or ElementRef | ViewContainerRef or ElementRef |
| 사용 X    |           ElementRef           |  Angular Component (instant)   |

read 옵션을 사용하면, 그 옵션값과 동일한 타입을 가진 엘리먼츠가 리턴되어 DOM에 직접적으로 접근하여 사용할 수 있게 된다.

---

그런데 글을 읽어보니 Angular Component 내부의 Directive 또한 ViewChild로 가져와서 Directive 내부에 선언된 메서드도 사용할 수 있다고 한다.

음.. 그런데 1년 전에 부모 컴포넌트에서 자식 컴포넌트의 메서드를 사용하는 방법이 회사 컨벤션에서 빠지게 되었는데, 부모 컴포넌트가 destroy 되기 전까지 메모리 참조가 끊기지 않아 성능적으로 이슈가 있었던 문제가 있었다. 이 방식도 동일한 이슈가 있지 않을까 싶은데, 이 부분은 한 번 확인해봐야겠다
