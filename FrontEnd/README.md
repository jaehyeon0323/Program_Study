# FrontEnd

# 세팅 방법

## 프로젝트 초기화
  1. TypeScript + React + Vite 설치
    npm create vite@latest my-app -- --template react-ts
    npm install

  2. 기본 폴더 구조
      my-app/
    ├─ src/
    │  ├─ components/    // 재사용 컴포넌트
    │  ├─ pages/         // 라우트 단위 페이지
    │  ├─ hooks/         // 커스텀 훅
    │  ├─ api/           // API 호출 모듈 (axios 등)
    │  ├─ store/         // 상태관리 (Recoil/Zustand 등)
    │  ├─ styles/        // 전역 스타일 및 MUI 테마
    │  ├─ utils/         // 유틸 함수
    │  └─ App.tsx
    ├─ public/
    ├─ vite.config.ts
    ├─ tsconfig.json
    └─ package.json

  3. 라이브러리
    1) mui
      npm install @mui/material @emotion/react @emotion/styled
    2) 상태관리_Zustand
      npm install zustand
    3) api 통신_Axios
      npm install axios
    4) 라우팅_React Router v6
      웹: npm install react-router-dom
      모바일: npm install react-router-native

    5) 날짜 라이브러리
      npm install dayjs
    6) 폼관리_react-hook-form + yup 
      npm install react-hook-form @hookform/resolvers yup

  4. 개발 효율을 높이는 설정
    ** 서버 설정
        server: {
        open: true, // 브라우저 자동 실행 설정
        proxy: {
          '/api': {
            target: 'https://localhost:7063', // .NET API 서버 주소
            changeOrigin: true,
            secure: false, // 인증서 사용 시 false (개발용)
          },
        },
      },
    
    1) 절대 경로 설정
      typescript는 path설정 필요: npm install -D @types/node
      import { defineConfig } from 'vite'
      import react from '@vitejs/plugin-react'
      import path from 'path'
      export default defineConfig({
        plugins: [react()],
        resolve: {
          alias: {
            '@': path.resolve(__dirname, 'src'), // "@/components/Button"
          },
        },
      })
    2) ESLint + Prettier 설정
    // 터미널 세팅
    - npm install -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import
    //설정파일 생성
    - npx eslint --init
      ❓ How would you like to use ESLint?
      → To check syntax, find problems, and enforce code style
      ❓ What type of modules does your project use?
      → JavaScript modules (import/export)
      ❓ Which framework does your project use?
      → React
      ❓ Does your project use TypeScript?
      → Yes
      ❓ Where does your code run?
      → Browser
      ❓ How would you like to define a style for your project?
      → Use a popular style guide
      ❓ Which style guide do you want to follow?
      → Airbnb
      ❓ What format do you want your config file to be in?
      → JavaScript
      완료 시 .eslintrc.js 생성성
    - .eslintrc.js 파일 수정
      module.exports = {
      env: {
        browser: true,
        es2021: true,
      },
      extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier' // prettier는 마지막에!
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      plugins: ['react', '@typescript-eslint'],
      rules: {
        'react/react-in-jsx-scope': 'off', // React 17 이후 필요 없음
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
            js: 'never',
            jsx: 'never',
          },
        ],
        'prettier/prettier': 'error', // Prettier 위반 시 오류 처리
      },
      settings: {
        react: {
          version: 'detect',
        },
        'import/resolver': {
          typescript: {}, // tsconfig.json 경로 기준으로 모듈 해석
        },
      },
    }  

## 개발 세팅
  1. Fonts 설정
    fonts.google.com