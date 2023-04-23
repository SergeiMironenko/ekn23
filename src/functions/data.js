// Года
const years = [
    { "PK": 2015, "NAME": "2015" },
    { "PK": 2016, "NAME": "2016" },
    { "PK": 2017, "NAME": "2017" },
    { "PK": 2018, "NAME": "2018" },
    { "PK": 2019, "NAME": "2019" },
    { "PK": 2020, "NAME": "2020" },
    { "PK": 2021, "NAME": "2021" },
    { "PK": 2022, "NAME": "2022" },
    { "PK": 2023, "NAME": "2023" }];
const yearsOptions = years.map((year, idx) => {
    return <option key={idx}>{year.NAME}</option>
})

// Семестры
const semesters = [{ "NSEM": 0, "NAME": "Весенний" }, { "NSEM": 1, "NAME": "Осенний" }];
const semestersOptions = semesters.map((semester, idx) => {
    return <option key={idx}>{semester.NAME}</option>
})

// Факультеты
const faculties = [
    { "id": "ФМА", "type": "step" },
    { "id": "ФБ", "type": "step" },
    { "id": "АВТФ", "type": "step" },
    { "id": "РЭФ", "type": "step" },
    { "id": "МТФ", "type": "step" },
    { "id": "ФЛА", "type": "step" },
    { "id": "ФПМИ", "type": "step" },
    { "id": "ФТФ", "type": "step" },
    { "id": "ФЭН", "type": "step" },
    { "id": "ФГО", "type": "step" },
    { "id": "ЮФ", "type": "step" }
];
const facultiesOptions = faculties.map((faculty, idx) => {
    return <option key={idx}>{faculty.id}</option>
})

// Курсы
const courses = [{ "PK": 1, "NAME": "1" }, { "PK": 2, "NAME": "2" }, { "PK": 3, "NAME": "3" }, { "PK": 4, "NAME": "4" }];
const coursesOptions = courses.map((course, idx) => {
    return <option key={idx}>{course.NAME}</option>
})

// Группы
const groups = ["ПМ-72", "ПМ-91"];
const groupsOptions = groups.map((group, idx) => {
    return <option key={idx}>{group}</option>
})

// Отделения
const sections = ["Легкая атлетика", "Баскетбол"];
const sectionsOptions = sections.map((section, i) => {
    return <option key={i}>{section}</option>
})

// Преподаватели
const teachers = ["teacher1", "teacher2"];
const teachersOptions = teachers.map((teacher, idx) => {
    return <option key={idx}>{teacher}</option>
})

// Студенты
const students = [{
    "FIO": "fio1aSdad dasdasdasdasd dasfweewwgw",
    "SEX": "м",
    "SECTION": sections[0],
    "PERSON": "teacher1",
    "H": "180",
    "W": "80",
}, {
    "FIO": "fio2",
    "SEX": "ж",
    "SECTION": sections[1],
    "PERSON": "teacher2",
    "H": "170",
    "W": "70",
}, {
    "FIO": "fio3",
    "SEX": "ж",
    "SECTION": sections[1],
    "PERSON": "teacher3",
    "H": "170",
    "W": "70",
}, {
    "FIO": "fio4",
    "SEX": "ж",
    "SECTION": sections[0],
    "PERSON": "teacher4",
    "H": "170",
    "W": "70",
}, {
    "FIO": "fio5",
    "SEX": "ж",
    "SECTION": sections[1],
    "PERSON": "teacher5",
    "H": "170",
    "W": "70",
}, {
    "FIO": "fio6",
    "SEX": "ж",
    "SECTION": sections[0],
    "PERSON": "teacher6",
    "H": "170",
    "W": "70",
}, {
    "FIO": "fio2",
    "SEX": "ж",
    "SECTION": sections[1],
    "PERSON": "teacher 2",
    "H": "170",
    "W": "70",
}, {
    "FIO": "fio2",
    "SEX": "ж",
    "SECTION": sections[1],
    "PERSON": "teacher 2",
    "H": "170",
    "W": "70",
}, {
    "FIO": "fio2",
    "SEX": "ж",
    "SECTION": sections[1],
    "PERSON": "teacher 2",
    "H": "170",
    "W": "70",
}, {
    "FIO": "fio2",
    "SEX": "ж",
    "SECTION": sections[1],
    "PERSON": "teacher 2",
    "H": "170",
    "W": "70",
}, {
    "FIO": "fio2",
    "SEX": "ж",
    "SECTION": sections[1],
    "PERSON": "teacher 2",
    "H": "170",
    "W": "70",
}];
const studentsOptions = students.map((student, i) => {
    return <option key={i}>{student}</option>
})

function getData() {
    return {
        "years": years,
        "semesters": semesters,
        "faculties": faculties,
        "courses": courses,
        "groups": groups,
        "sections": sections,
        "students": students,
        "teachers": teachers,

        "yearsOptions": yearsOptions,
        "semestersOptions": semestersOptions,
        "facultiesOptions": facultiesOptions,
        "coursesOptions": coursesOptions,
        "groupsOptions": groupsOptions,
        "sectionsOptions": sectionsOptions,
        "studentsOptions": studentsOptions,
        "teachersOptions": teachersOptions,
    };
}

export { getData };
