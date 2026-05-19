# ToDo List v2 📝
useReducer와 Context API를 활용하여 아키텍처를 최적화한 할 일 관리 앱입니다.

## 📌 프로젝트 소개
액션, 리듀서, 스토리지를 독립된 모듈로 분리하여 확장성 높은 구조로 설계했습니다. LocalStorage를 연동하여 브라우저를 새로고침해도 데이터가 안전하게 유지됩니다.

## ⚙️ 주요 기능
- 할 일 추가, 완료 토글, 삭제
- useMemo 기반의 실시간 검색 필터링
- useReducer + Context API 전역 상태 관리 및 커스텀 훅 지원
- LocalStorage 자동 동기화

## 📁 폴더 구조
```
src/
├── components/   # UI 컴포넌트 (Header, Editor, List, Item)
└── contexts/     # 상태 관리 모듈 (Context, Actions, Reducer, Storage)
```


## 🛠 사용 기술
- React
- Vite / CSS
- LocalStorage
