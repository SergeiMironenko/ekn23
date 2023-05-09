export default function Links(props) {
    return (
        <ul className={props.className}>
            {/* <li><a href="#/view1">view1</a></li> */}
            <li className="nav-item"><a href="#/view2" className="nav-link">view2(Единый контрольный норматив)</a></li>
            {/* <li><a href="#/view3">view3</a></li> */}
            {/* <li><a href="#/view4">view4</a></li> */}
            {/* <li><a href="#/view5">view5</a></li> */}
            <li className="nav-item"><a href="#/view6" className="nav-link">view6(Зачеты 2020)</a></li>
            <li className="nav-item"><a href="#/view7" className="nav-link">view7(Запись студентов)</a></li>
            {/* <li><a href="/#/view8">view8</a></li> */}
            <li className="nav-item"><a href="#/view9" className="nav-link">view9(Ведомости)</a></li>
            <li className="nav-item"><a href="#/test" className="nav-link">test</a></li>
        </ul>
    )
}