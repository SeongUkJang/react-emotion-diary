import './App.css';
import { Routes, Route } from 'react-router-dom';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Splash from './components/Splash';

import {
  useReducer,
  useRef,
  useEffect,
  useState,
  createContext,
} from 'react';

function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      nextState = [action.data, ...state];
      break;
    case 'UPDATE':
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    case 'DELETE':
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    default:
      return state;
  }

  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const [isSplash, setIsSplash] = useState(true);
  const [splashOpacity, setSplashOpacity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Splash 효과
  useEffect(() => {
    localStorage.removeItem('visited');
    const isVisited = localStorage.getItem('visited');

    if (!isVisited) {
      localStorage.setItem('visited', 'true');

      const fadeOut = setTimeout(() => setSplashOpacity(0), 4500);
      const endSplash = setTimeout(() => setIsSplash(false), 5000);

      return () => {
        clearTimeout(fadeOut);
        clearTimeout(endSplash);
      };
    } else {
      setIsSplash(false);
    }
  }, []);

  // 데이터 로딩
  useEffect(() => {
    const storedData = localStorage.getItem('diary');

    if (!storedData) {
      localStorage.setItem('diary', JSON.stringify([]));
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
      if (Number(item.id) > maxId) maxId = item.id;
    });
    idRef.current = maxId + 1;

    dispatch({ type: 'INIT', data: parsedData });
    setIsLoading(false);
  }, []);

  // 로딩 화면 렌더링
  if (isSplash) return <Splash splashOpacity={splashOpacity} />;
  if (isLoading) return <div>데이터를 불러오는 중입니다.</div>;

  // 메인 앱 렌더링
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );

  // 일기 조작 함수들
  function onCreate(createdDate, emotionId, content) {
    dispatch({
      type: 'CREATE',
      data: { id: idRef.current++, createdDate, emotionId, content },
    });
  }

  function onUpdate(id, createdDate, emotionId, content) {
    dispatch({
      type: 'UPDATE',
      data: { id, createdDate, emotionId, content },
    });
  }

  function onDelete(id) {
    dispatch({ type: 'DELETE', id });
  }
}

export default App;