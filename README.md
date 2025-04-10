# 🌟 감정일기장 - 나의 하루, 감정으로 기록하기

> 감정일기장은 단순한 일기를 넘어서, 당신의 감정을 시각화하고 기록할 수 있는 감성적인 일기장입니다.
> 
> 
> 하루 동안의 감정을 정리하며 **나 자신을 더 잘 이해**해보세요. 😊
> 

## 🧠 무엇을 할 수 있나요?

### ✅ 오늘의 감정을 선택하세요

- "완전좋음"부터 "끔찍함"까지 5가지 감정 중 하나를 선택할 수 있어요.
- 감정에 따라 색상이 달라져서 더 직관적이에요.

### ✅ 감정의 이유를 자유롭게 작성하세요

- 짧게 또는 길게, 오늘 느낀 감정을 텍스트로 기록해보세요.

### ✅ 날짜별로 감정기록을 저장해요

- 기록은 자동으로 저장되고, 언제든지 다시 확인할 수 있어요.

### ✅ 이전 감정들을 되돌아보세요

- 월별로 나의 감정 흐름을 확인하고, 작성했던 내용을 다시 볼 수 있어요.

---

## 📸 어떤 모습인가요?

| 기능 | 예시 |
| --- | --- |
| 🗓️ 날짜 선택 | 오늘 날짜에 해당하는 감정을 기록해요 |
| 😄 감정 선택 | 직관적인 이미지와 컬러로 감정을 표현해요 |
| ✍️ 일기 작성 | 오늘 하루의 느낌을 짧게 기록할 수 있어요 |
| 📂 일기 리스트 | 내가 쓴 일기들을 한눈에 확인할 수 있어요 |

---

## 💡 이런 분들께 추천해요

- 하루를 되돌아보며 **감정을 기록하는 습관**을 만들고 싶은 분
- 자기 성찰을 위한 **마음 다이어리**를 만들고 싶은 분
- 리액트와 프론트엔드 기술을 배우며 **프로젝트 포트폴리오**를 만들고 싶은 분

---

## 🔧 기술적으로는?

| 사용 기술 | 설명 |
| --- | --- |
| React | 컴포넌트 기반 UI 구성 |
| React Router | 페이지 이동 처리 (`/`, `/new`, `/edit/:id`, `/diary/:id`) |
| Context API | 전역 상태 공유 및 관리 (일기 목록, 수정, 삭제 등) |
| localStorage | 데이터를 브라우저에 영구 저장 |

---

## ✨ 마무리 한 줄 소개

> 감정일기장은 당신의 하루를 감정으로 기록하고, 감정으로 돌아볼 수 있는 소중한 공간입니다.
> 
> 
> 지금, 당신의 감정을 써보세요. 🖋️
> 

---

## 🗂 전체 구성 요약

|  | 파일명 | 설명 |
| --- | --- | --- |
| 1 | `index.jsx` | 앱 시작점 설정 (ReactDOM + 라우터 연결) |
| 2 | `App.jsx` | 전체 상태 관리, 라우팅, Context 설정 |
| 3 | `Home.jsx` | 홈 화면: 월별 일기 리스트 보여주기 |
| 4 | `New.jsx` + `Editor.jsx` | 새 일기 작성 폼 구현 |
| 5 | `DiaryList.jsx` + `DiaryItem.jsx` | 일기 카드 구성, 정렬, 렌더링 |
| 6 | `Diary.jsx` + `Viewer.jsx` | 일기 상세 보기 구현 |
| 7 | `Edit.jsx` + `Editor.jsx` | 일기 수정 / 삭제 기능 |
| 8 | `EmotionItem.jsx` | 감정 선택 기능 구현 |
| 9 | `useDiary.js`, `usePageTitle.js` | 커스텀 훅으로 로직 분리 |
| 10 | `getStringedDate.js`, `getEmotionImage.js`, `constants.js` | 유틸 함수 및 상수 관리 |

---

## 📄 index.jsx - 감정일기장의 진입점

> 이 파일은 감정일기장 앱의 시작점이 되는 코드입니다.
> 
> 
> React 앱을 HTML에 연결하고, 전역 라우팅을 설정하는 역할을 합니다. 🛫
> 

## 🔍 어떤 역할을 하나요?

| 역할 | 설명 |
| --- | --- |
| 루트 DOM 연결 | `createRoot()`를 사용하여 `#root` 요소에 React 앱을 마운트합니다. |
| 라우팅 설정 | `HashRouter`로 SPA 방식의 주소 관리를 설정합니다. |
| `App.jsx` 호출 | 앱의 메인 로직이 있는 App 컴포넌트를 불러옵니다. |

---

## 🧠 사용하는 주요 코드 구성

```
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);
```

### ✅ 각 줄의 의미를 설명드리자면...

| 코드 | 설명 |
| --- | --- |
| `StrictMode` | 개발 중 실수나 비효율적인 코드를 알려주는 React의 개발 모드입니다. (선택 사항) |
| `createRoot()` | React 18 이상에서 사용하는 새로운 렌더링 방식입니다. |
| `HashRouter` | 라우팅 처리를 위해 URL에 `#/`을 붙여 경로를 구분합니다. (Github Pages 배포 시 주로 사용됩니다) |
| `<App />` | 실제 앱의 메인 컴포넌트를 화면에 표시합니다. |

---

## ❓ 왜 HashRouter를 썼나요?

- `HashRouter`는 URL에 `#`이 포함된 형태로 동작합니다.
- 브라우저가 직접 서버에 요청하지 않고, React 내부에서 경로를 처리할 수 있게 도와줍니다.

👉 특히 **Github Pages 같은 정적 서버 환경**에서는 `BrowserRouter` 대신 `HashRouter`를 사용하는 것이 더 안정적입니다.

---

## ✅ 마무리 요약

| 기능 | 설명 |
| --- | --- |
| 🏁 앱 시작 | HTML과 React를 연결합니다. |
| 🔁 라우팅 시작 | 페이지 전환 기능을 가능하게 합니다. |
| 🔗 App 연결 | 전체 앱(App.jsx)을 이곳에서 부릅니다. |

> 즉, 이 파일은 감정일기장 앱의 출발점이며,
> 
> 
> 실제로 사용자에게 보여지는 모든 페이지가 여기서부터 시작된다고 보시면 됩니다. 😊
> 

---

## 📄 App.jsx - 감정일기장의 중심 역할을 하는 파일

> 이 파일은 감정일기장 프로젝트에서 가장 중요한 역할을 합니다.
> 
> 
> 전체 데이터를 관리하고, 페이지를 나누며, 모든 컴포넌트가 데이터를 공유할 수 있도록 연결해주는 핵심 파일입니다. 🧠❤️
> 

## 🔍 어떤 역할을 하나요?

| 역할 | 설명 |
| --- | --- |
| 상태 관리 | `useReducer`를 사용하여 일기 데이터를 관리합니다. (생성/수정/삭제 등) |
| 전역 공유 | `createContext`로 상태와 함수를 전역으로 전달합니다. |
| 초기화 | 앱이 처음 실행될 때 localStorage에서 데이터를 불러옵니다. |
| 라우팅 | `react-router-dom`으로 페이지 간 이동을 처리합니다. |

---

## 🔧 사용하는 주요 기능들

| Hook/기능 | 설명 |
| --- | --- |
| `useReducer` | 복잡한 상태 처리를 위한 훅입니다. (리듀서 패턴) |
| `createContext` | 데이터를 여러 컴포넌트에 전달하는 통로입니다. |
| `useRef` | 다음 일기의 ID를 추적하는 데 사용합니다. |
| `useEffect` | 앱 시작 시 초기화 로직을 실행합니다. |
| `localStorage` | 데이터를 브라우저에 저장하고 불러옵니다. |
| `react-router-dom` | `Route`, `Routes`로 화면을 나눕니다. |

---

## 📦 상태 관리 로직 (reducer)

```
function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      nextState = [action.data, ...state];
      break;
    case "UPDATE":
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    case "DELETE":
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}
```

- `nextState`는 변경된 새로운 상태를 의미합니다.
- 모든 동작 이후에는 `localStorage`에 상태를 저장합니다.

---

## 🌐 Context 만들기 (데이터 공유용 통로)

```
export const DiaryStateContext = createContext(); // 일기 데이터 상태 공유
export const DiaryDispatchContext = createContext(); // 생성/수정/삭제 함수 공유
```

---

## 🧠 App 컴포넌트 구성

```
function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      localStorage.setItem("diary", JSON.stringify([]));
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = item.id;
      }
    });
    idRef.current = maxId + 1;

    dispatch({ type: "INIT", data: parsedData });
    setIsLoading(false);
  }, []);
```

- localStorage에서 저장된 데이터를 불러옵니다.
- 일기 중 가장 큰 ID를 찾아서 다음 ID를 설정해 줍니다.

---

## 🛠️ 일기 관련 함수들 (작성/수정/삭제)

```
const onCreate = (createdDate, emotionId, content) => {
  dispatch({
    type: "CREATE",
    data: {
      id: idRef.current++,
      createdDate,
      emotionId,
      content,
    },
  });
};

const onUpdate = (id, createdDate, emotionId, content) => {
  dispatch({
    type: "UPDATE",
    data: { id, createdDate, emotionId, content },
  });
};

const onDelete = (id) => {
  dispatch({ type: "DELETE", id });
};
```

---

## 🖼️ 화면 렌더링 구조

```
if (isLoading) return <div>데이터를 불러오는 중입니다.</div>;

return (
  <DiaryStateContext.Provider value={data}>
    <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </DiaryDispatchContext.Provider>
  </DiaryStateContext.Provider>
);
```

- 상태(`data`)와 동작 함수들(`onCreate`, `onUpdate`, `onDelete`)을 Context로 하위 컴포넌트에 전달합니다.
- 라우터를 통해 각 페이지로 연결됩니다.

---

## ✅ 마무리 요약

| 기능 | 설명 |
| --- | --- |
| 📦 상태관리 | useReducer + localStorage를 이용하여 데이터 유지 |
| 📤 데이터 공유 | Context를 통해 어디서든 접근 가능하게 만듦 |
| 🗂️ 라우팅 처리 | Routes로 페이지 전환 구현 |
| 🧹 초기화 처리 | useEffect로 첫 실행 시 데이터 정리 |

> App.jsx는 감정일기장 프로젝트의 중추적인 컨트롤러입니다.
> 
> 
> 작성된 모든 일기는 여기에서 관리되고, 다른 페이지에서도 이 데이터를 사용할 수 있도록 연결해주는 역할을 합니다. 😊
> 

---

## **🏠 Home.jsx - 감정일기장의 메인 페이지**

> 이 파일은 감정일기장의 홈 화면을 구성합니다.
> 
> 
> 사용자가 작성한 일기들을 월별로 확인할 수 있으며,
> 
> 정렬 방식도 바꿔가며 볼 수 있도록 구현되어 있습니다. 📅
> 

---

## 🔍 어떤 역할을 하나요?

| 역할 | 설명 |
| --- | --- |
| 월 단위 필터링 | 선택된 달에 작성된 일기만 보여줍니다. |
| 정렬 기능 | 최신순 / 오래된순 정렬을 제공합니다. |
| 상단 헤더 | 날짜와 이전/다음 달 이동 버튼 표시 |
| 일기 리스트 렌더링 | DiaryList 컴포넌트를 사용하여 목록을 출력합니다. |

---

## 🧩 사용하는 주요 기능들

| Hook / 컴포넌트 | 설명 |
| --- | --- |
| `useState` | 현재 선택된 기준 날짜(월)를 관리합니다. |
| `useContext` | 전역 일기 데이터를 받아옵니다. |
| `DiaryList` | 정렬된 일기 목록을 렌더링하는 컴포넌트입니다. |
| `usePageTitle` | 문서 탭 제목을 "장성욱 의 감정일기장"으로 변경합니다. |

---

## 📆 월 기준 데이터 계산 로직

```
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1, 0, 0, 0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0, 23, 59, 59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};
```

- 이 함수는 현재 보고 있는 `pivotDate` 기준으로 그 달의 시작일~마지막일 사이에 작성된 일기를 필터링합니다.

---

## 🔁 월 이동 버튼 구현

```
const onIncreaseMonth = () => {
  setPivotDate(
    new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
  );
};

const onDecreaseMonth = () => {
  setPivotDate(
    new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
  );
};
```

- 버튼을 눌러 현재 기준 날짜(pivotDate)를 한 달 전/후로 변경할 수 있습니다.

---

## 📌 컴포넌트 렌더링 구조

```
return (
  <div>
    <Header
      title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
      leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
      rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
    />
    <DiaryList data={monthlyData} />
  </div>
);
```

- 헤더는 현재 연/월을 보여주며, 좌우 버튼으로 월을 바꿀 수 있습니다.
- 그 아래에 월별로 필터링된 일기 리스트를 보여줍니다.

---

## ✅ 마무리 요약

| 기능 | 설명 |
| --- | --- |
| 📅 월 기준 정렬 | 현재 보고 있는 달의 일기만 보여줍니다. |
| 🔁 월 이동 기능 | 버튼으로 이전/다음 달 전환이 가능합니다. |
| 🧾 일기 목록 표시 | DiaryList를 통해 정렬된 일기를 나열합니다. |

> Home.jsx는 사용자가 앱에 접속했을 때 가장 먼저 보게 되는 메인 페이지입니다.
> 
> 
> 월 단위로 일기를 살펴볼 수 있도록 구성된 핵심 화면 중 하나입니다. 😊
> 

---

## ✍️ New.jsx + Editor.jsx - 새 일기 작성 기능

> 이 두 파일은 감정일기장에서 새로운 일기를 작성할 수 있게 해주는 화면입니다.
> 
> 
> 사용자는 날짜, 감정, 내용을 입력하고 “작성 완료” 버튼을 눌러 저장할 수 있습니다. 📝
> 

## 🔍 어떤 역할을 하나요?

| 파일명 | 역할 설명 |
| --- | --- |
| `New.jsx` | 페이지 전환 시 보여질 새 일기 작성 페이지입니다. 작성 완료 시 홈으로 이동합니다. |
| `Editor.jsx` | 실제 일기 입력 폼을 담당하는 컴포넌트입니다. 날짜, 감정, 내용을 입력할 수 있습니다. |

---

## 🔧 사용하는 주요 기능들

| Hook/기능 | 설명 |
| --- | --- |
| `useState` | 입력값을 객체 형태로 관리합니다. |
| `useContext` | `onCreate()` 함수를 받아서 새 일기를 저장합니다. |
| `useNavigate` | 작성 완료 후 홈(`/`)으로 리다이렉트합니다. |
| `useEffect` | 수정 시 초기 데이터를 불러올 때 사용됩니다. |

---

## 🧾 Editor 내부 입력 상태 구성

```
const [input, setInput] = useState({
  createdDate: new Date(),
  emotionId: 2,
  content: ""
});
```

- `createdDate`: 날짜 선택 input과 연결되어 있습니다.
- `emotionId`: 감정 선택 컴포넌트(`EmotionItem`)로 선택합니다.
- `content`: textarea에 입력된 일기 내용입니다.

---

## 📅 날짜 입력 필드

```
<input
  type="date"
  name="createdDate"
  value={getStringedDate(input.createdDate)}
  onChange={onChangeInput}
/>
```

- 사용자가 선택한 날짜를 상태와 연결합니다.
- `getStringedDate()`를 통해 `YYYY-MM-DD` 형태로 변환합니다.

---

## 😊 감정 선택 구현

```
{emotionList.map((item) => (
  <EmotionItem
    key={item.emotionId}
    {...item}
    isSelected={item.emotionId === input.emotionId}
    onClick={() =>
      onChangeInput({
        target: {
          name: 'emotionId',
          value: item.emotionId
        }
      })
    }
  />
))}
```

- 감정 리스트를 `map()`으로 순회하여 렌더링합니다.
- 클릭 시 `emotionId`가 업데이트되고 스타일도 함께 변경됩니다.

---

## ✏️ 일기 내용 입력 필드

```
<textarea
  name="content"
  value={input.content}
  onChange={onChangeInput}
  placeholder="오늘은 어땠나요?"
/>
```

- `content`는 textarea에 입력되는 값입니다.
- 상태 업데이트를 통해 실시간으로 변경 사항이 반영됩니다.

---

## ✅ 작성 완료 버튼 동작

```
const onSubmitButtonClick = () => {
  onSubmit(input); // New.jsx 에서 전달된 onSubmit 함수 실행
};
```

- 최종적으로 “작성 완료” 버튼을 클릭하면 `onCreate()`가 실행되고 홈으로 이동합니다.

---

## 📦 New.jsx의 핵심 동작

```
const onSubmit = (input) => {
  onCreate(
    input.createdDate.getTime(),
    input.emotionId,
    input.content
  );
  nav('/', { replace: true });
};
```

- 입력한 데이터를 `App.jsx`의 전역 상태로 저장한 뒤, 홈으로 돌아갑니다.

---

## ✅ 마무리 요약

| 기능 | 설명 |
| --- | --- |
| 🗓 날짜 입력 | `<input type="date">`로 날짜 선택 |
| 😀 감정 선택 | `EmotionItem` 컴포넌트를 통한 감정 표현 선택 |
| 📝 일기 내용 입력 | `textarea`를 통한 글 작성 |
| 💾 작성 완료 처리 | 상태 저장 후 홈으로 이동 |

> New.jsx + Editor.jsx는 사용자가 손쉽게 감정을 기록할 수 있도록 돕는 일기 입력의 핵심 화면입니다. 😊
> 

---

## 📋 DiaryList.jsx + DiaryItem.jsx - 일기 목록 구성

> 이 두 파일은 감정일기장의 **리스트 뷰(목록 보기)**를 담당합니다.
> 
> 
> 사용자가 작성한 여러 개의 일기를 카드 형태로 보여주고,
> 
> 정렬 방식(최신순 / 오래된순)을 선택할 수 있도록 구성되어 있습니다. 🗂️
> 

## 🔍 어떤 역할을 하나요?

| 파일명 | 역할 설명 |
| --- | --- |
| `DiaryList.jsx` | 전체 일기를 정렬하고 리스트 형태로 출력합니다. |
| `DiaryItem.jsx` | 개별 일기 카드(하나의 아이템) 형식을 구성합니다. |

---

## 📌 DiaryList.jsx 구조 이해하기

### ✅ 정렬 방식 관리

```
const [sortType, setSortType] = useState("latest");
```

- 정렬 기준을 "최신순(latest)" 또는 "오래된순(oldest)"으로 설정할 수 있습니다.

### ✅ 정렬 기준 변경

```
const onChangeSortType = (e) => {
  setSortType(e.target.value);
};
```

- 드롭다운 `<select>`를 통해 정렬 기준을 바꿀 수 있습니다.

### ✅ 정렬된 데이터 생성

```
const getSortedData = () => {
  return data.toSorted((a, b) => {
    return sortType === "oldest"
      ? Number(a.createdDate) - Number(b.createdDate)
      : Number(b.createdDate) - Number(a.createdDate);
  });
};
```

- `toSorted()`를 사용하여 원본 배열을 변경하지 않고 정렬합니다.

---

## 🧱 DiaryItem.jsx 구성

### ✅ 이미지 영역

```
<div className={`img_section img_section_${emotionId}`}>
  <img src={getEmotionImage(emotionId)} alt="emotion id" />
</div>
```

- 감정에 따라 배경 색상이 달라지며, 해당 감정의 이미지를 표시합니다.
- 클릭 시 상세 페이지(`/diary/:id`)로 이동합니다.

### ✅ 정보 영역

```
<div className="info_section">
  <div className="created_date">
    {new Date(createdDate).toLocaleDateString()}
  </div>
  <div className="content">{content}</div>
</div>
```

- 작성된 날짜와 간단한 내용을 요약하여 보여줍니다.

### ✅ 버튼 영역

```
<Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
```

- 수정하기 버튼을 누르면 해당 일기의 편집 화면(`/edit/:id`)으로 이동합니다.

---

## 🖼️ DiaryList 컴포넌트 렌더링 구조

```
return (
  <div className='DiaryList'>
    <div className="menu_bar">
      <select value={sortType} onChange={onChangeSortType}>
        <option value="latest">최신순</option>
        <option value="oldest">오래된순</option>
      </select>
      <Button onClick={() => nav('/new')} text="새 일기 쓰기" type="POSITIVE" />
    </div>
    <div className="list_wrapper">
      {sortData.map((item) => (
        <DiaryItem key={item.id} {...item} />
      ))}
    </div>
  </div>
);
```

---

## ✅ 마무리 요약

| 기능 | 설명 |
| --- | --- |
| 🗂️ 리스트 구성 | 여러 일기를 카드 형식으로 정렬하여 보여줍니다. |
| 🔢 정렬 기능 | 최신순, 오래된순으로 정렬 기준 선택 가능 |
| 🖼️ 개별 카드 | 감정 이미지, 날짜, 내용, 수정 버튼 포함 |
| 🔗 페이지 연결 | 클릭 시 상세 페이지 또는 수정 페이지로 이동 가능 |

> DiaryList.jsx와 DiaryItem.jsx는 감정일기장의 리스트 뷰 핵심 구성요소입니다.
> 
> 
> 사용자가 직관적으로 본인의 일기를 관리하고 확인할 수 있도록 도와주는 화면입니다. 😊
> 

---

## 📖 Diary.jsx + Viewer.jsx - 일기 상세 보기 화면

> 이 두 파일은 감정일기장에서 특정 일기를 클릭했을 때 보여지는 상세 보기 페이지를 담당합니다.
> 
> 
> 감정 이미지와 함께 일기 내용을 **보기 전용(ReadOnly)**으로 표시합니다. 🔍
> 

## 🔍 어떤 역할을 하나요?

| 파일명 | 역할 설명 |
| --- | --- |
| `Diary.jsx` | 일기 ID를 받아서 해당 일기를 찾고, 보기 화면을 구성합니다. |
| `Viewer.jsx` | 감정 이미지와 일기 내용을 시각적으로 예쁘게 보여주는 UI 컴포넌트입니다. |

---

## 🧭 Diary.jsx 구성 흐름

### ✅ URL 파라미터로 ID 받기

```
const params = useParams();
```

- 현재 페이지의 경로(`/diary/:id`)에서 ID 값을 가져옵니다.

### ✅ 해당 ID의 일기 찾기

```
const curDiaryItem = useDiary(params.id);
```

- 커스텀 훅 `useDiary()`를 통해 ID에 해당하는 일기 데이터를 찾습니다.

### ✅ 데이터 로딩 처리

```
if (!curDiaryItem) return <div>데이터 로딩중!</div>;
```

- 일기 데이터가 아직 로딩되지 않은 경우, 로딩 중 메시지를 보여줍니다.

### ✅ 날짜 포맷 지정

```
const title = getStringedDate(new Date(createdDate));
```

- 보기 제목을 `YYYY-MM-DD` 형식으로 가공합니다.

---

## 🖼️ Viewer.jsx 시각화 구성

### ✅ 감정 이미지 표시 영역

```
<div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
  <img src={getEmotionImage(emotionId)} alt="img" />
  <div>{emotionItem.emotionName}</div>
</div>
```

- 선택된 감정 ID에 맞는 이미지와 이름을 보여줍니다.
- 감정별로 배경 색상도 달라집니다.

### ✅ 일기 내용 표시 영역

```
<div className="content_wrapper">
  <p>{content}</p>
</div>
```

- 일기 내용은 `<p>` 태그로 감싸서 읽기 전용으로 보여줍니다.

---

## 🔗 Header 버튼 구성

```
<Header
  title={`${title}의 기록`}
  leftChild={<Button text="< 뒤로가기" onClick={() => nav(-1)} />}
  rightChild={<Button text="수정하기" onClick={() => nav(`/edit/${params.id}`)} />}
/>
```

- 뒤로가기 버튼으로 홈 화면으로 이동 가능
- 수정하기 버튼으로 편집 화면으로 전환

---

## ✅ 마무리 요약

| 기능 | 설명 |
| --- | --- |
| 🆔 ID 기반 조회 | URL 파라미터로 전달된 ID를 이용하여 일기 조회 |
| 👀 감정 표현 보기 | 이미지 + 텍스트로 감정 시각화 |
| 📃 일기 내용 표시 | 보기 전용으로 텍스트만 출력 |
| 🧭 버튼 이동 | 홈으로 돌아가거나 수정 화면으로 전환 가능 |

> Diary.jsx와 Viewer.jsx는 감정일기장의 일기 상세 조회 페이지입니다.
> 
> 
> 사용자가 직접 작성한 감정을 예쁘게 시각화해주는 중요한 역할을 합니다. 😊
> 

---

## ✏️ Edit.jsx + Editor.jsx - 일기 수정 기능

> 이 두 파일은 기존에 작성한 일기를 수정하거나 삭제할 수 있도록 해주는 기능을 담당합니다.
> 
> 
> Editor는 일기 작성에도 사용되며, 수정 시에는 기존 데이터를 불러와 초기값으로 세팅합니다. 🛠️
> 

## 🔍 어떤 역할을 하나요?

| 파일명 | 역할 설명 |
| --- | --- |
| `Edit.jsx` | 현재 일기의 ID를 가져와서 데이터를 불러오고, 수정 또는 삭제 기능을 실행합니다. |
| `Editor.jsx` | `New.jsx`와 공유되는 컴포넌트로, 입력 폼 역할을 하며 수정 시에는 초기값을 세팅합니다. |

---

## 🔁 Edit.jsx의 흐름

### ✅ 일기 데이터 불러오기

```
const curDiaryItem = useDiary(params.id);
```

- URL 파라미터에서 ID를 가져와 해당 일기 데이터를 찾습니다.

### ✅ 초기값 설정

```
<Editor initData={curDiaryItem} onSubmit={onSubmit} />
```

- `Editor.jsx`에 `initData`를 전달하여 초기값을 설정합니다.

### ✅ 수정 동작 처리

```
const onSubmit = (input) => {
  onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
  nav('/', { replace: true });
};
```

- 전역 상태를 업데이트한 뒤 홈으로 이동합니다.

### ✅ 삭제 동작 처리

```
const onClickDelete = () => {
  onDelete(params.id);
  nav('/', { replace: true });
};
```

- 삭제 확인 후 해당 일기를 삭제하고 홈으로 돌아갑니다.

---

## ⚙️ Editor.jsx의 초기화 처리

### ✅ `initData`로 상태 초기화

```
useEffect(() => {
  if (initData) {
    setInput({
      ...initData,
      createdDate: new Date(Number(initData.createdDate))
    });
  }
}, [initData]);
```

- 전달된 데이터를 기반으로 입력창을 초기값으로 세팅합니다.

### ✅ 작성 화면과 공통 구조 사용

- 날짜, 감정, 내용 입력창 구조는 새 일기 작성과 동일합니다.
- 단, 수정 시에는 초기값이 있고 버튼명이 '작성 완료'가 아닌 경우도 있습니다.

---

## ✅ 마무리 요약

| 기능 | 설명 |
| --- | --- |
| 🛠️ 수정 초기화 | 기존 데이터를 기반으로 폼을 초기화합니다. |
| 📝 수정 완료 처리 | `onUpdate`를 통해 기존 일기를 덮어씁니다. |
| ❌ 삭제 처리 | `onDelete`를 통해 해당 일기를 제거합니다. |
| 📤 공통 폼 사용 | `Editor`는 작성/수정 공통 컴포넌트로 재사용됩니다. |

> Edit.jsx는 감정일기장에서 수정/삭제를 위한 핵심 페이지입니다.
> 
> 
> `Editor.jsx`와 함께 활용되어 사용자 경험을 통일성 있게 유지해줍니다. 😊
> 

---

## 😊 EmotionItem.jsx - 감정 선택 UI 컴포넌트

> 이 파일은 감정일기장에서 사용자의 감정 상태를 선택할 수 있는 UI 요소입니다.
> 
> 
> 감정마다 고유한 이미지와 색상이 있으며, 클릭을 통해 감정을 선택하게 됩니다.
> 

## 🔍 어떤 역할을 하나요?

| 역할 | 설명 |
| --- | --- |
| 감정 시각화 | 이미지 + 텍스트 조합으로 감정을 표현합니다. |
| 선택 기능 | 클릭 시 해당 감정을 선택하도록 처리됩니다. |
| 선택 여부 표시 | 선택된 감정은 배경색이 바뀌어 강조됩니다. |

---

## 🧩 컴포넌트 구조

```
const EmotionItem = ({
  emotionId,
  emotionName,
  isSelected,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
    >
      <img src={getEmotionImage(emotionId)} alt={emotionName} className='emotion_img' />
      <div>{emotionName}</div>
    </div>
  );
};
```

### ✅ 주요 props 설명

| prop 이름 | 설명 |
| --- | --- |
| `emotionId` | 감정 번호 (1~5)로 이미지 및 색상 분기 처리에 사용됩니다. |
| `emotionName` | 감정 텍스트 이름입니다. (예: "좋음") |
| `isSelected` | 현재 선택된 감정인지 여부를 판단합니다. |
| `onClick` | 감정을 선택했을 때 실행되는 이벤트 핸들러입니다. |

---

## 🎨 감정별 스타일 지정 (EmotionItem_on_N)

```
.EmotionItem_on_1 {
  background-color: rgb(100, 201, 100);
  color: white;
}
.EmotionItem_on_2 {
  background-color: rgb(157, 215, 114);
  color: white;
}
... (3~5까지 동일한 형식)
```

- 감정 ID에 따라 배경색이 달라집니다.
- 선택된 감정은 강조되어 시각적으로 표시됩니다.

---

## 📌 사용 예시 (Editor에서 활용)

```
{emotionList.map((item) => (
  <EmotionItem
    key={item.emotionId}
    {...item}
    onClick={() =>
      onChangeInput({
        target: {
          name: 'emotionId',
          value: item.emotionId
        }
      })
    }
    isSelected={item.emotionId === input.emotionId}
  />
))}
```

- `Editor.jsx`에서 반복문을 돌며 감정 리스트를 렌더링할 때 사용됩니다.
- 클릭 시 감정이 선택되고, 해당 상태가 상위로 전달됩니다.

---

## ✅ 마무리 요약

| 기능 | 설명 |
| --- | --- |
| 😀 감정 표현 | 이미지 + 텍스트로 감정을 시각화합니다. |
| 🖱️ 선택 기능 | 클릭하면 해당 감정이 선택 상태로 바뀝니다. |
| 🎨 스타일 적용 | 선택된 감정은 배경색이 변경되어 강조됩니다. |

> EmotionItem.jsx는 감정일기장의 감정 선택 UI 컴포넌트입니다.
> 
> 
> 직관적이고 감성적인 UI를 통해 사용자가 편리하게 감정을 선택할 수 있도록 도와줍니다. 😊
> 

---

## 🧩 useDiary.js & usePageTitle.js - 커스텀 훅 정리

> 이 두 파일은 로직 재사용성과 가독성 향상을 위한 커스텀 훅입니다.
> 
> 
> 화면마다 공통으로 반복되는 기능을 별도 훅으로 분리해 깔끔하게 관리합니다. 🛠️
> 

## 📁 useDiary.js - ID로 일기 찾기 훅

### ✅ 어떤 기능을 하나요?

| 기능 | 설명 |
| --- | --- |
| ID 검색 | 전달받은 ID에 해당하는 일기를 찾아 반환합니다. |
| 없는 경우 처리 | 일기가 없으면 알림 후 홈으로 이동합니다. |
| 자동 리렌더링 | 상태가 바뀌면 자동으로 다시 탐색합니다. |

### ✅ 주요 코드

```
const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(item => String(item.id) === String(id));

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다');
      nav('/', { replace: true });
    } else {
      setCurDiaryItem(currentDiaryItem);
    }
  }, [id, data, nav]);

  return curDiaryItem;
};
```

- `useContext`로 일기 목록 접근
- `useEffect`로 아이디 기반 탐색 + 리디렉션 처리

---

## 📁 usePageTitle.js - 문서 제목 설정 훅

### ✅ 어떤 기능을 하나요?

| 기능 | 설명 |
| --- | --- |
| 문서 제목 설정 | `<title>` 태그의 값을 페이지마다 동적으로 변경합니다. |
| 페이지 진입 시 실행 | useEffect를 통해 한 번만 실행됩니다. |

### ✅ 주요 코드

```
const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName('title')[0];
    $title.innerHTML = title;
  }, [title]);
};
```

- 간단하지만 사용자 경험 향상에 큰 역할을 합니다.

---

## ✅ 마무리 요약

| 훅 이름 | 기능 요약 |
| --- | --- |
| `useDiary` | 전달받은 ID에 맞는 일기를 찾고, 없으면 홈으로 이동 |
| `usePageTitle` | 페이지마다 다른 제목을 동적으로 설정 |

> 커스텀 훅은 반복되는 로직을 재사용성 높게 추출하여 코드 품질을 향상시켜줍니다.
> 
> 
> 이 두 훅은 감정일기장의 사용자 흐름과 가독성을 모두 높여주는 좋은 예시입니다. 😊
> 

---

## 🧰 getStringedDate.js, getEmotionImage.js, constants.js - 유틸 함수 & 상수 정리

> 이 세 파일은 자주 사용되는 로직 또는 값들을 따로 분리해 관리합니다.
> 
> 
> 유지보수와 코드 가독성을 높이기 위한 구성입니다. 🛠️
> 

## 📁 getStringedDate.js - 날짜 포맷 변환 함수

### ✅ 어떤 기능인가요?

| 기능 | 설명 |
| --- | --- |
| 날짜 포맷 변환 | `Date` 객체를 문자열 `YYYY-MM-DD` 형태로 바꿔줍니다. |
| input과 연동 | `<input type="date">`에서 사용할 수 있는 형식으로 변환됩니다. |

### ✅ 주요 코드

```
export const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};
```

- 날짜를 항상 두 자리 수로 맞춰주는 방식입니다 (예: 2025-04-01).

## 📁 getEmotionImage.js - 감정 이미지 매칭 함수

### ✅ 어떤 기능인가요?

| 기능 | 설명 |
| --- | --- |
| 감정 이미지 반환 | 감정 ID(1~5)에 맞는 이미지 파일을 반환합니다. |
| 오류 대비 | 정의되지 않은 감정 ID일 경우 null 반환 |

### ✅ 주요 코드

```
import emotion1 from "../assets/emotion1.png";
import emotion2 from "../assets/emotion2.png";
...

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1: return emotion1;
    case 2: return emotion2;
    ...
    default: return null;
  }
}
```

- 숫자 ID를 통해 해당 이미지 경로를 리턴하는 구조입니다.

---

## 📁 constants.js - 감정 상수 배열

### ✅ 어떤 기능인가요?

| 기능 | 설명 |
| --- | --- |
| 감정 리스트 제공 | 감정 ID와 이름을 가진 배열을 통해 리스트를 렌더링할 수 있습니다. |

### ✅ 주요 코드

```
export const emotionList = [
  { emotionId: 1, emotionName: "완전좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];
```

- `map()`을 통해 감정 선택 UI에 반복적으로 활용됩니다.

---

## ✅ 마무리 요약

| 파일명 | 기능 |
| --- | --- |
| `getStringedDate.js` | 날짜 포맷을 문자열로 변환 (`YYYY-MM-DD`) |
| `getEmotionImage.js` | 감정 ID → 이미지 경로 변환 |
| `constants.js` | 감정 ID + 텍스트 리스트 제공 |

> 이 유틸 파일들은 UI와 로직 사이를 연결해주는 중간다리 역할을 합니다.
> 
> 
> 코드의 일관성과 재사용성을 높이기 위해 필수적인 구성입니다. 😊
>
