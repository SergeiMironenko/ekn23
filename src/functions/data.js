// Года
const years = [
    { id: 0, value: "2015" },
    { id: 1, value: "2016" },
    { id: 2, value: "2017" },
    { id: 3, value: "2018" },
    { id: 4, value: "2019" },
    { id: 5, value: "2020" },
    { id: 6, value: "2021" },
    { id: 7, value: "2022" },
    { id: 8, value: "2023" },
];

// Семестры
const semesters = [
    { id: 0, value: "Весенний" },
    { id: 1, value: "Осенний" },
];

// Факультеты
const faculties = [
    { id: 0, value: "ФМА" },
    { id: 1, value: "ФБ" },
    { id: 2, value: "АВТФ" },
    { id: 3, value: "РЭФ" },
    { id: 4, value: "МТФ" },
    { id: 5, value: "ФЛА" },
    { id: 6, value: "ФПМИ" },
    { id: 7, value: "ФТФ" },
    { id: 8, value: "ФЭН" },
    { id: 9, value: "ФГО" },
    { id: 10, value: "ЮФ" },
];

// Курсы
const courses = [
    { id: 0, value: "1" },
    { id: 1, value: "2" },
    { id: 2, value: "3" },
    { id: 3, value: "4" },
];

// Группы
const groups = [
    { id: 0, value: "ПМ-72" },
    { id: 1, value: "ПМ-91" },
];

// Отделения
const sections = [
    { id: 0, value: "Легкая атлетика" },
    { id: 1, value: "Баскетбол" },
];

// EKN_STATUS
const eknStatuses = [
    { id: 0, value: "Осн" },
    { id: 1, value: "Спец" },
    { id: 2, value: "Подг" },
    { id: 3, value: "СМГА" },
];

// Пары
const pairs = [
    { id: 0, value: "8:30" },
    { id: 1, value: "10:15" },
    { id: 2, value: "12:00" },
    { id: 3, value: "14:00" },
    { id: 4, value: "15:45" },
    { id: 5, value: "17:30" },
];

// Зачет
const zachets = [
    { id: 0, value: "да" },
    { id: 1, value: "нет" },
    { id: 2, value: "не определено" },
];

// Дни недели
const days = [
    { id: 0, value: "пн" },
    { id: 1, value: "вт" },
    { id: 2, value: "ср" },
    { id: 3, value: "чт" },
    { id: 4, value: "пт" },
    { id: 5, value: "сб" },
    { id: 6, value: "вс" },
];

// Случайное целое число
function getRandomInt(i) {
    return Math.floor(Math.random() * i);
}


// Преподаватели
let teachersList = [];
for (let i = 0; i < 2; i++) {
    teachersList.push({
        "ID": i,
        "FIO": "teacher " + i,
        "DAYS": [...days].sort(() => Math.random() - 0.5).slice(getRandomInt(days.length + 1)),
        "PAIRS": [...pairs].sort(() => Math.random() - 0.5).slice(getRandomInt(pairs.length + 1)),
    })
}
const teachers = teachersList;

// Студенты
let studentsList = [];
for (let i = 0; i < 10635; i++) {
    studentsList.push({
        "ID": i,
        "FIO": "fio " + i + " aSdad dasdasdasdasd dasfweewwgw",
        "SEX": getRandomInt(2) ? "М" : "Ж",
        "SECTION": sections[getRandomInt(sections.length)],
        "PERSON": teachers[getRandomInt(teachers.length)],
        "Norm1": "",
        "Norm2": "",
        "Norm3": "0",
        "Norm4": "0",
        "Norm5": "0",
        "H": "180",
        "W": "80",
        "FK_EKN_STATUS": eknStatuses[getRandomInt(eknStatuses.length)],
        "DATE_STATUS": "01.05.2023",
        "IS_SPORT": getRandomInt(3) ? true : false,
        "IS_DIST": getRandomInt(2) ? false : true,
        "PAY_SUMM": 299,
        "PAY_DATE": "01.05.2023",
        "ATTEND": 0,
        "REFERAT": 33,
        "NORMATIVE1": 1,
        "NORMATIVE2": 2,
        "EKN_BALL": 0,
        "GTO_BALL": 0,
        "THEORY": 0,
        "TEST": 0,
        "COMPLEX": 0,
        "ALL_BALLS": 0,
        "FINAL_ZACHET_NAME": "FINAL_ZACHET_NAME",
        "DECANAT_ZACHET": "DECANAT_ZACHET",
        "EMAIL": "EMAIL",
        "PAIR1": [...pairs, ""][getRandomInt(pairs.length + 1)],
        "HAVE_PAIR1": getRandomInt(2) ? true : false,
        "PAIR2": [...pairs, ""][getRandomInt(pairs.length + 1)],
        "HAVE_PAIR2": getRandomInt(2) ? true : false,
        "FACULTET": faculties[getRandomInt(faculties.length)],
        "COURSE": courses[getRandomInt(courses.length)],
        "STUDY_GROUP": groups[getRandomInt(groups.length)],
        "WEEK_MARK_7": 2,
        "WEEK_MARK_12": 2,
        "YEAR": years[getRandomInt(years.length)],
        "SEMESTER": semesters[i % semesters.length],
        "ZACHET": zachets[getRandomInt(zachets.length)],
    })
}
const students = studentsList;

const zach = "2023-12-23";

const data = {
    years: years,
    semesters: semesters,
    faculties: faculties,
    courses: courses,
    groups: groups,
    sections: sections,
    students: students,
    teachers: teachers,
    eknStatuses: eknStatuses,
    pairs: pairs,
    zachets: zachets,
    days: days,
    zach: zach,
};

function getData() {
    return data;
}

function updateData(_data) {
    console.log('update');
    // data = _data;
}

export {
    getData,
    updateData,
};
