import React from 'react';
import { getData } from '../functions/data';
import SelectPanel from '../components/selectpanel';
import Checkbox from '../components/checkbox';
import Th from '../components/th';
import Td from '../components/td';
import SwapDivInput from '../components/swapdivinput';
import SwapDivSelect from '../components/swapdivselect';


class View2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onlyNormatives: false,
            onlySections: false,
            year: '',
            semester: '',
            faculty: '',
            course: '',
            group: '',
            mySection: getData().sections[0],
            data: getData(),
        };
        this.onlyNormativesChange = this.onlyNormativesChange.bind(this);
        this.onlySectionsChange = this.onlySectionsChange.bind(this);

        this.yearChange = this.yearChange.bind(this);
        this.semesterChange = this.semesterChange.bind(this);
        this.facultyChange = this.facultyChange.bind(this);
        this.courseChange = this.courseChange.bind(this);
        this.groupChange = this.groupChange.bind(this);

        this.studentsChange = this.studentsChange.bind(this);
    }

    // Изменение чекбокса "только нормативы"
    onlyNormativesChange() {
        this.setState(prevState => ({
            onlyNormatives: !prevState.onlyNormatives,
        }))
    }

    // Изменение чекбокса "Только мое отделение"
    onlySectionsChange() {
        this.setState(prevState => ({
            onlySections: !prevState.onlySections,
        }))
    }

    // Изменение года
    yearChange(event) {
        this.setState({ year: event.target.value });
    }

    // Изменение семестра
    semesterChange(event) {
        this.setState({ semester: event.target.value });
    }

    // Изменение факультета
    facultyChange(event) {
        this.setState({ faculty: event.target.value });
    }

    // Изменение курса
    courseChange(event) {
        this.setState({ course: event.target.value });
    }

    // Изменение группы
    groupChange(event) {
        this.setState({ group: event.target.value });
    }

    studentsChange(H) {
        // let newData = this.state.data; // JSON.parse(JSON.stringify(this.state.data));
        // newData.students[0].H = H;
    }

    componentDidMount() {
        // setInterval((() => {
        //     console.log(this.state.data);
        // }), 5000);
    }

    render() {
        // Объявление массива студентов
        let trList = Array(0);
        const sections = this.state.data.sections.map((section, i) => {
            return <option key={i}>{section}</option>
        })

        // Заполнение массива студентов
        this.state.data.students.forEach((student, idx) => {
            if (!this.state.onlySections || student.SECTION === this.state.mySection) {
                trList.push(
                    // ng-context-menu="menuStudents"
                    <tr key={idx}>
                        <Td show={true} className="col-md-2" value={student.FIO} />
                        <Td show={!this.state.onlyNormatives} className="col-md-1" value={student.SEX} />
                        <Td
                            show={!this.state.onlyNormatives}
                            className="col-md-1"
                            value={<SwapDivSelect list={sections} studentsChange={this.studentsChange} />}
                        />
                        <Td
                            show={!this.state.onlyNormatives}
                            className="col-md-2"
                            value={<SwapDivSelect list={this.state.data.teachers} studentsChange={this.studentsChange} />}
                        />
                        <Td
                            show={true}
                            className="col-md-1"
                            // ng-if="!(x.SHOW_PRESS == 0 && n.PK == 2) && ! (x.SHOW_PODT == 0 && n.PK == 3)" 
                            value={<SwapDivInput value={0} studentsChange={this.studentsChange} />}
                        />
                        <Td
                            show={true}
                            value={<SwapDivInput value={0} studentsChange={this.studentsChange} />}
                        />
                        <Td
                            show={true}
                            value={<SwapDivInput value={0} studentsChange={this.studentsChange} />}
                        />
                        <Td
                            show={true}
                            value={<SwapDivInput value={0} studentsChange={this.studentsChange} />}
                        />
                        <Td
                            show={true}
                            value={<SwapDivInput value={0} studentsChange={this.studentsChange} />}
                        />
                        <Td
                            show={true}
                            className="col-md-1"
                            value={<SwapDivInput value={student.H} studentsChange={this.studentsChange} />}
                        />
                        <Td
                            show={true}
                            className="col-md-1"
                            value={<SwapDivInput value={student.W} studentsChange={this.studentsChange} />}
                        />
                        <Td
                            show={true}
                            className="col-md-1"
                            value={(student.W / (student.H * student.H)).toFixed(2)}
                        />
                    </tr>
                );
            }
        })

        return (
            <div>
                {/* <!-- Панель выбора студентов --> */}
                <div className="panel panel-default" >
                    <div className="row">

                        {/* Выбор года */}
                        <SelectPanel
                            outerDivClassName="col-sm-1"
                            value={this.state.year}
                            change={this.yearChange}
                            options={this.state.data.years}
                            label="Год"
                        />

                        {/* Выбор семестра */}
                        <SelectPanel
                            outerDivClassName="col-sm-2"
                            value={this.state.semester}
                            change={this.semesterChange}
                            options={this.state.data.semesters}
                            label="Семестр"
                        />

                        {/* Выбор факультета */}
                        <SelectPanel
                            outerDivClassName="col-sm-1"
                            value={this.state.faculty}
                            change={this.facultyChange}
                            options={this.state.data.faculties}
                            label="Факультет"
                        />

                        {/* Выбор курса */}
                        <SelectPanel
                            outerDivClassName="col-sm-1"
                            value={this.state.course}
                            change={this.courseChange}
                            options={this.state.data.courses}
                            label="Курс"
                        />

                        {/* Выбор группы */}
                        <SelectPanel
                            outerDivClassName="col-sm-1"
                            value={this.state.group}
                            change={this.groupChange}
                            options={this.state.data.groups}
                            label="Группа"
                        />

                        {/* Чекбокс "Только мое отделение" */}
                        <Checkbox
                            outerDivClassName="col-sm-2"
                            value={this.state.onlySections}
                            onChange={this.onlySectionsChange}
                            label="Только мое отделение"
                        />

                        {/* Чекбокс "Показывать только нормативы" */}
                        <Checkbox
                            outerDivClassName="col-sm-2"
                            value={this.state.onlyNormatives}
                            onChange={this.onlyNormativesChange}
                            label="Показывать только нормативы"
                        />
                    </div>
                </div>

                {/* <!-- Список студентов --> */}
                <table className="table table-sm table-striped table-hover">
                    <thead className="table-light">
                        <tr>
                            <Th show={true} rowSpan={2} value="Студент" className="align-top" />
                            <Th show={!this.state.onlyNormatives} rowSpan={2} value="Пол" className="align-top" />
                            <Th show={!this.state.onlyNormatives} rowSpan={2} value="Отделение" className="align-top" />
                            <Th show={!this.state.onlyNormatives} rowSpan={2} value="Преподаватель" className="align-top" />
                            <Th show={true} colSpan={5} value="Нормативы" className="align-top" />
                            <Th show={true} colSpan={3} value="Измерения" className="align-top" />
                        </tr>
                        <tr>
                            <Th show={true} value="Прыжок в длину (сантиметров)" className="align-top" />
                            <Th show={true} value="Подъем туловища (раз)" className="align-top" />
                            <Th show={true} value="Подтягивание (раз)" className="align-top" />
                            <Th show={true} value="Гибкость (сантиметров)" className="align-top" />
                            <Th show={true} value="Бег 1000м (секунд)" className="align-top" />
                            <Th show={true} value="Р." className="align-top" />
                            <Th show={true} value="В." className="align-top" />
                            <Th show={true} value="И" className="align-top" />
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {trList}
                        {/* <TrList
                            students={this.state.data.students}
                            studentsChange={this.studentsChange}
                            onlyNormatives={this.state.onlyNormatives}
                            onlySections={this.state.onlySections}
                            mySection={this.state.mySection}
                        /> */}
                    </tbody>
                    <tfoot>
                        <tr><td>footer</td></tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default View2;