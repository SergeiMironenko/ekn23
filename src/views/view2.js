import React from 'react';
import { getData } from '../functions/data';
import SelectPanel from '../components/SelectPanel';
import Checkbox from '../components/Checkbox';
import Th from '../components/Th';
import Td from '../components/Td';
import SwapDivInput from '../components/swapdivinput';
import SelectDiv from '../components/SelectDiv';
import Table from '../components/Table';
import Panel from '../components/Panel';


class View2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: '',
            semester: '',
            faculty: '',
            course: '',
            group: '',
            onlyNormatives: false,
            onlySections: false,
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
        // Заглавная часть таблицы
        const tableHead = [
            <tr key={1}>
                <Th rowSpan={2} className="align-top">Студент</Th>
                <Th hide={this.state.onlyNormatives} rowSpan={2} className="align-top">Пол</Th>
                <Th hide={this.state.onlyNormatives} rowSpan={2} className="align-top">Отделение</Th>
                <Th hide={this.state.onlyNormatives} rowSpan={2} className="align-top">Преподаватель</Th>
                <Th colSpan={5} className="align-top">Нормативы</Th>
                <Th colSpan={3} className="align-top">Измерения</Th>
            </tr>,
            <tr key={2}>
                <Th className="align-top">Прыжок в длину (сантиметров)</Th>
                <Th className="align-top">Подъем туловища (раз)</Th>
                <Th className="align-top">Подтягивание (раз)</Th>
                <Th className="align-top">Гибкость (сантиметров)</Th>
                <Th className="align-top">Бег 1000м (секунд)</Th>
                <Th className="align-top">Р.</Th>
                <Th className="align-top">В.</Th>
                <Th className="align-top">И</Th>
            </tr>
        ];

        // Объявление массива студентов, тело таблицы
        let tableBody = Array(0);

        // Заполнение массива студентов
        this.state.data.students.forEach((student, idx) => {
            if (!this.state.onlySections || student.SECTION === this.state.mySection) {
                tableBody.push(
                    // ng-context-menu="menuStudents"
                    <tr key={idx}>
                        <Td
                            className="col-md-2"
                        >
                            {student.FIO}
                        </Td>
                        <Td
                            hide={this.state.onlyNormatives}
                            className="col-md-1"
                        >
                            {student.SEX}
                        </Td>
                        <Td
                            hide={this.state.onlyNormatives}
                            className="col-md-1"
                        >
                            {<SelectDiv list={this.state.data.sectionsOptions} studentsChange={this.studentsChange} />}
                        </Td>
                        <Td
                            hide={this.state.onlyNormatives}
                            className="col-md-2"
                        >
                            {<SelectDiv list={this.state.data.teachersOptions} studentsChange={this.studentsChange} />}
                        </Td>
                        <Td
                            className="col-md-1"
                        // ng-if="!(x.SHOW_PRESS == 0 && n.PK == 2) && ! (x.SHOW_PODT == 0 && n.PK == 3)"
                        >
                            {<SwapDivInput value={0} studentsChange={this.studentsChange} />}
                        </Td>
                        <Td>{<SwapDivInput value={0} studentsChange={this.studentsChange} />}</Td>
                        <Td>{<SwapDivInput value={0} studentsChange={this.studentsChange} />}</Td>
                        <Td>{<SwapDivInput value={0} studentsChange={this.studentsChange} />}</Td>
                        <Td>{<SwapDivInput value={0} studentsChange={this.studentsChange} />}</Td>
                        <Td
                            className="col-md-1"
                        >
                            {<SwapDivInput value={student.H} studentsChange={this.studentsChange} />}
                        </Td>
                        <Td
                            className="col-md-1"
                        >
                            {<SwapDivInput value={student.W} studentsChange={this.studentsChange} />}
                        </Td>
                        <Td
                            className="col-md-1"
                        >
                            {(student.W / (student.H * student.H)).toFixed(2)}
                        </Td>
                    </tr>
                );
            }
        });

        return (
            <div>
                {/* <!-- Панель выбора студентов --> */}
                {/* <div className="panel panel-default" > */}
                {/* <div className="row"> */}
                <Panel>

                    {/* Выбор года */}
                    <SelectPanel
                        outerDivClassName="col-sm-1"
                        value={this.state.year}
                        change={this.yearChange}
                        options={this.state.data.yearsOptions}
                        label="Год"
                    />

                    {/* Выбор семестра */}
                    <SelectPanel
                        outerDivClassName="col-sm-2"
                        value={this.state.semester}
                        change={this.semesterChange}
                        options={this.state.data.semestersOptions}
                        label="Семестр"
                    />

                    {/* Выбор факультета */}
                    <SelectPanel
                        outerDivClassName="col-sm-1"
                        value={this.state.faculty}
                        change={this.facultyChange}
                        options={this.state.data.facultiesOptions}
                        label="Факультет"
                    />

                    {/* Выбор курса */}
                    <SelectPanel
                        outerDivClassName="col-sm-1"
                        value={this.state.course}
                        change={this.courseChange}
                        options={this.state.data.coursesOptions}
                        label="Курс"
                    />

                    {/* Выбор группы */}
                    <SelectPanel
                        outerDivClassName="col-sm-1"
                        value={this.state.group}
                        change={this.groupChange}
                        options={this.state.data.groupsOptions}
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
                </Panel>
                {/* </div> */}
                {/* </div> */}

                {/* <!-- Список студентов --> */}
                <Table thead={tableHead} tbody={tableBody} />
            </div>
        )
    }
}

export default View2;