import React from 'react';
import { Link } from 'react-router-dom';
import './../index.css';

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

    return (
        <nav className='fixed top-0 left-0 w-full bg-white text-black p-4 shadow-lg z-50'>
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-xl font-bold lg:ml-12 lg:mr-8'><a href='/'>Dev-Kim Study</a></h1>

                <div className='lg:flex flex-1 justify-center'>
                    <ul className='flex gap-8 text-lg'>

                        {menuItems.map((item) => (
                            <MenuItem key={item.path} {...item} />
                        ))}
                        
                    </ul>
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

export default NavBar;