// import logo from './logo.svg';
// import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Links from './views/links';
import Test from './views/test';
import View1 from './views/view1';
import View2 from './views/view2';
import View3 from './views/view3';
import View4 from './views/view4';
import View5 from './views/view5';
import View6 from './views/view6';
import View7 from './views/view7';
import View8 from './views/view8';
import View9 from './views/view9';
import View10 from './views/view10';
import View11 from './views/view11';
import { useEffect, useRef, useState } from 'react';
import { getData, updateData } from './functions/data';
const logo = require('./NSTU_Logo_grey.png');

export default function App() {
    const [data, setData] = useState(getData());
    const [testData, setTestData] = useState({ main: [{ id: 1, dt: "root" }, { id: 2, dt: "door" }], other: 45 });

    const header = (
        <header style={{ position: "sticky", top: 0 }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/"><img src={logo} alt="logo" style={{ "maxHeight": 50 }} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Links className="navbar-nav me-auto mb-2 mb-lg-0" />
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <a href="#/" className="nav-link">
                                    <span style={{ marginRight: 10 }}>Выход</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                    </div>
                </div>
            </nav>
        </header>
    )

    let firstRender = useRef(true);
    useEffect(() => {
        // updateData(data);
        if (!firstRender.current) updateData(data);
        else firstRender.current = false;
    }, [data])

    // Получение списка для select
    function opt(list, prop = null) {
        // console.log(list, prop);
        return list.map((elem, i) => {
            // console.log(elem, elem[prop]);
            return <option key={i}>{prop ? elem[prop] : elem}</option>
        })
    }

    // Обновление значений
    function upd(updKey, i, prop = "students") {
        return (updValue) => {
            setData({
                ...data, [prop]: data[prop].map((item, idx) => {
                    if (idx === i) return { ...item, [updKey]: updValue };
                    else return item;
                })
            })
        }
    }

    return (
        <div>
            {header}
            <div className="content">
                <HashRouter>
                    <Routes>
                        <Route path='/' element={<></>} />
                        <Route path='/test' element={<Test testData={testData} setTestData={setTestData} />} />
                        <Route path='/view1' element={<View1 />} />
                        <Route path='/view2' element={<View2 data={data} setData={setData} opt={opt} upd={upd} />} />
                        <Route path='/view3' element={<View3 />} />
                        <Route path='/view4' element={<View4 />} />
                        <Route path='/view5' element={<View5 />} />
                        {/* <Route path='/view6' element={<View6 data={data} setData={setData} opt={opt} upd={upd} />} /> */}
                        <Route path='/view7' element={<View7 data={data} setData={setData} opt={opt} upd={upd} />} />
                        <Route path='/view8' element={<View8 />} />
                        <Route path='/view9' element={<View9 data={data} setData={setData} opt={opt} upd={upd} />} />
                        <Route path='/view10' element={<View10 data={data} setData={setData} opt={opt} upd={upd} />} />
                        <Route path='/view11' element={<View11 />} />
                    </Routes>
                </HashRouter>
            </div>
        </div>
    );
}
