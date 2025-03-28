import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './../index.css';

import { HiMenu, HiX } from "react-icons/hi";

const menuItems = [
    { path: "/", label: "홈" },
    { path: "/about", label: "회사 정보" },
    { path: "/leadership", label: "임원 소개" },
    { path: "/board", label: "업무 게시판" },
    { path: "/our-services", label: "제공 기술" },
    { path: "/contact", label: "문의하기" }
];
  
const MenuItem = ({ path, label, onClick }) => (
    <li>
      <Link to={path} className="hover:text-blue-600 transition duration-300" onClick={onClick}>
        {label}
      </Link>
    </li>
);

// MenuItem 정의하는거임
// 리액트 라우트에서 지원하는 Link 태그를 이용한거고 기존에 설정한 path값, label값을 가져와서 입력시킴
// 현재 상황에서는 onClick을 사용하지 않음

const NavBar = () => {

    console.log('랜더링 성공');

    const [isOpen, setIsOpen ] = useState(false); // isOpen은 단순한 변수이고, setIsOpen은 isOpen의 상태 설정 함수임
    const [ language, setLanguage ] = useState('ko'); // 위와 마찬가지

    const toggleMenu = () => setIsOpen(!isOpen); // toggleMenu 함수가 호출되면 setIsOpen을 통해 isOpen의 boolean 상태를 반대로 바꿈

    return (
        <nav className='fixed top-0 left-0 w-full bg-white text-black p-4 shadow-lg z-50'>
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-xl font-bold lg:ml-12 lg:mr-8'><a href='/'>Dev-Kim Study</a></h1>

                <div className='hidden lg:flex flex-1 justify-center'>
                    <ul className='flex gap-8 text-lg'>

                        {menuItems.map((item) => (
                            <MenuItem key={item.path} {...item} />
                        ))}
                        
                    </ul>
                </div>

                <select value={language} onChange={(e) => setLanguage(e.target.value)} className='hidden lg:block px-3 ml-8 border rounded-md bg-white hover:border-blue-500 transition duration-300'>
                    <option value='ko'>한국어</option>
                    <option value='en'>English</option>
                </select>


                <button className='lg:hidden text-2xl' onClick={toggleMenu} aria-label='메뉴'>
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>
            <div className={`fixed top-0 right-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}>
                
                <div className='p-4'>
                    <button className='text-2xl mb-8 float-right' onClick={toggleMenu} aria-label='닫기'>
                        <HiX />
                    </button>
                    <ul className='clear-both space-y-4 pt-8 txet-lg'>
                        {menuItems.map((item) => (
                            <MenuItem key={item.path} {...item} onClick={() => {
                                setIsOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth'})
                            }} />
                        ))}
                    </ul>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)} className='mt-6 w-full px-3 py-1 border rounded-mg bg-white hover:border-blue-500 transition duration-300'>
                        <option value='ko'>한국어</option>
                        <option value='en'>English</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}

// menuItems.map()은 menuItems 배열을 순회하면서 각각의 항목(item)을 기반으로 JSX 요소를 생성하는 코드임
// map()은 배열을 순회하면서 각각의 항목으로 요소를 생성하는 함수임. JSX 요소 역시 반환함
// path, label 이런것들을 가져와서 하나하나씩 꽂은 다음 반환한다는거임
// <MenuItem key={item.path} {...item} />을 설명하자면
// React에서 리스트를 랜더링 할 때 key값을 의무적으로 부여해줘어야 함. 고로 key={item.path}는 그 역할을 수행하는거임
// item.path를 key값으로 사용하고 있는거
// {...item}은 그냥 객체의 속성을 한번에 가져오는 역할을 수행함
// 그냥 path={item.path} label={item.label} 같이 써도 무방하다는 말임

// 진짜 큰 틀로 설명하자면 menuItems에서 값을 정의해 준 다음에 MenuItem에 집어넣는 코드인거임

// (e) => setLanguage(e.target.value)는 그냥 (e)로 이벤트를 감지하고 실행시키는 간단한 함수

// {menuItems.map((item) => (
    // <MenuItem key={item.path} {...item} onClick={() => {
        // setIsOpen(false);
        // window.scrollTo({ top: 0, behavior: 'smooth'})
    // }} />
// ))} 이건 그냥 단순하게 생각해서 onClick이 감지되면 isOpen을 false로 정하고 우측 메뉴창을 화면 밖으로 빼는거임



export default NavBar;