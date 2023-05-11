// Года
const years = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"];

// Семестры
const semesters = ["Весенний", "Осенний"];

// Факультеты
const faculties = ["ФМА", "ФБ", "АВТФ", "РЭФ", "МТФ", "ФЛА", "ФПМИ", "ФТФ", "ФЭН", "ФГО", "ЮФ",];

// Курсы
const courses = ["1", "2", "3", "4"];

// Группы
const groups = ["ПМ-72", "ПМ-91"];

// Отделения
const sections = ["Легкая атлетика", "Баскетбол"];

// Преподаватели
const teachers = ["teacher1", "teacher2"];

// EKN_STATUS
const eknStatuses = ["Осн", "Спец", "Подг", "СМГА"];

// ADMIT
// const admits = ["да", "перезачет"];

// ZACHET_NAME
// const zachetNames = ['зачет', 'незачет'];

// Пары
const pairs = ["8:30", "12:00", "14:00"];

// Зачет
const zachets = ["да", "нет", "не определено"];

// Случайное целое число
function getRandomInt(i) {
    return Math.floor(Math.random() * i);
}

// Студенты
let studentsList = [];
for (let i = 0; i < 10635; i++) {
    studentsList.push({
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
        "REFERAT": 0,
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
        "ZACHET_DATE": "date",  // НАСТРОИТЬ ФОРМАТ ДАТЫ и ВРЕМЕНИ
    })
}

const students = studentsList;

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
