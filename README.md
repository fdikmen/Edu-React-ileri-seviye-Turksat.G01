# Edu-React-İleri-Seviye-Turksat.G01

## Day01 - 07.08.2024

### Part01 - Konular

- React Temelleri ve Prensipleri
- Higher Order Component (HOC)
- Props, State ve useRef Kavramları

#### Sorular

```bash
1. Array'leri dolaşmak için `map` yerine `forEach` kullanabilir miyiz? Bu iki yöntem arasında performans açısından fark var mı?
2. React'te `props` ve `state` kavramları nelerdir? Aralarındaki farklar nelerdir?
3. `useEffect` hook'unun çalışma mantığını açıklayabilir misiniz?
4. React'te veri akışı genellikle tek yönlüdür ve `props` ile parent (ebeveyn) bileşenden child (çocuk) bileşene doğru veri gönderilir. Peki, child bileşenden parent bileşene veri göndermek için hangi yöntemleri kullanabiliriz?
5. `ref` nedir ve React'te nasıl kullanılır?
```

### Part02 - Konular

- Özet
- useState

  ```node
  const name = "Teddy"
  const [name,setName] =useState()
  setName("new new new data")
  ```

- useEffect
- useContext
- useRef
- useReducer
- useCallback | React.memo - useMemo
- Uygulama içi state yönetimi için en iyi pratikler
- Custom Hooks

## Day02 - 08.08.2024

### Part01 - Konular

- Custom Hooks
- Clean Code Prensipleri
- Hata Yakalama
  - `getDerivedStateFromError` Metodu
- Performans Optimizasyonu
  - Gereksiz Rerenderların Önlenmesi

### Part02 - Konular

- React-Lazy ve Suspense
- Redux ile State Yönetimi

[Redux Toolkit Proje Klasör Yapısı](https://medium.com/@fdikmen/a-redux-toolkit-project-structure-guide-58093baa88a5)

```bash
src/
|-- app/
|   |-- store.js
|-- features/
|   |-- posts/
|       |-- postsSlice.js
|       |-- PostsList.jsx
|       |-- AddPostForm.jsx
|       |-- EditPostForm.jsx
|       |-- PostItem.jsx
|       |-- PostDetail.jsx
|-- App.js
|-- index.js
```

- Vite projesine redux kurulumu

```bash
  npm i @reduxjs/toolkit redux react-redux
```


## Day03 - 09.08.2024

### Part01 - Konular

- Redux CRUD
- React Router ile Gelişmiş Yönlendirme Teknikleri
  - Kurulum (npm i react-router-dom)
  - Route, BrowserRoute Kodlanmasi
  - Static Route
  - Link
  - All Catch Opr. *
  - Dinamik Route
  - Nested Route
- UI Test
- Gelismis API kullanimi
- ...