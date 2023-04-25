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
const yearsOptions = years.map((year, i) => {
    return <option key={i}>{year.NAME}</option>
})

// Семестры
const semesters = [{ "NSEM": 0, "NAME": "Весенний" }, { "NSEM": 1, "NAME": "Осенний" }];
const semestersOptions = semesters.map((semester, i) => {
    return <option key={i}>{semester.NAME}</option>
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
const facultiesOptions = faculties.map((faculty, i) => {
    return <option key={i}>{faculty.id}</option>
})

// Курсы
const courses = [{ "PK": 1, "NAME": "1" }, { "PK": 2, "NAME": "2" }, { "PK": 3, "NAME": "3" }, { "PK": 4, "NAME": "4" }];
const coursesOptions = courses.map((course, i) => {
    return <option key={i}>{course.NAME}</option>
})

// Группы
const groups = ["ПМ-72", "ПМ-91"];
const groupsOptions = groups.map((group, i) => {
    return <option key={i}>{group}</option>
})

// Отделения
const sections = ["Легкая атлетика", "Баскетбол"];
const sectionsOptions = sections.map((section, i) => {
    return <option key={i}>{section}</option>
})

// Преподаватели
const teachers = ["teacher1", "teacher2"];
const teachersOptions = teachers.map((teacher, i) => {
    return <option key={i}>{teacher}</option>
})

// EKN_STATUS
const eknStatuses = ["Осн", "Спец", "Подг", "СМГА"];
const eknStatusesOptions = eknStatuses.map((eknStatus, i) => {
    return <option key={i}>{eknStatus}</option>
})

// ADMIT
const admits = ["да", "перезачет"];
const admitsOptions = admits.map((admit, i) => {
    return <option key={i}>{admit}</option>
})

// ZACHET_NAME
const zachetNames = ['зачет', 'незачет'];
const zachetNamesOptions = zachetNames.map((zachetName, i) => {
    return <option key={i}>{zachetName}</option>
})

// PAIR1
const pair1 = ["пара11", "пара12"];
const pair1Options = pair1.map((pair1, i) => {
    return <option key={i}>{pair1}</option>
})

// PAIR2
const pair2 = ["пара21", "пара22"];
const pair2Options = pair2.map((pair2, i) => {
    return <option key={i}>{pair2}</option>
})

// Пары
const pairs = ["пара 8 00", "пара 12 00"];
const pairsOptions = pairs.map((pair, i) => {
    return <option key={i}>{pair}</option>
})

// Студенты
let studentsList = [];
for (let i = 0; i < 213; i++) {
    studentsList.push({
        "FIO": "fio " + i + " aSdad dasdasdasdasd dasfweewwgw",
        "SEX": i % 2 === 0 ? "М" : "Ж",
        "SECTION": sections[i % sections.length],
        "PERSON": teachers[i % teachers.length],
        "Norm1": "0",
        "Norm2": "0",
        "Norm3": "0",
        "Norm4": "0",
        "Norm5": "0",
        "H": "180",
        "W": "80",
        "FK_EKN_STATUS": eknStatuses[i % eknStatuses.length],
        "DATE_STATUS": "data format",
        "IS_SPORT": i % 2 === 0 ? true : false,
        "IS_DIST": i % 2 === 0 ? false : true,
        "PAYM": "paym",
        "ATTEND": 0,
        "REFERAT": 0,
        "NORMATIVE1": 1,
        "NORMATIVE2": 2,
        "EKN_BALL": 0,
        "GTO_BALL": 0,
        "THEORY": 0,
        "TEST": 0,
        "COMPLEX": 0,
        "ADMIT": admits[i % admits.length],
        "ALL_BALLS": 0,
        "ZACHET_NAME": zachetNames[i % zachetNames.length],
        "FINAL_ZACHET_NAME": "FINAL_ZACHET_NAME",
        "DECANAT_ZACHET": "DECANAT_ZACHET",
        "EMAIL": "EMAIL",
        "PAIR1": pair1[i % pair1.length],
        "PAIR2": pair2[i % pair2.length],
        "FACULTET": faculties[i % faculties.length].id,
        "COURSE": courses[i % courses.length].NAME,
        "STUDY_GROUP": groups[i % groups.length],
        "WEEK_MARK_7": 2,
        "WEEK_MARK_12": 2,
    })
}

const students = studentsList;
let studentsOptions = students.map((student, i) => {
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
        "eknStatuses": eknStatuses,
        "admits": admits,
        "zachetNames": zachetNames,
        "pair1": pair1,
        "pair2": pair2,
        "pairs": pairs,

        "yearsOptions": yearsOptions,
        "semestersOptions": semestersOptions,
        "facultiesOptions": facultiesOptions,
        "coursesOptions": coursesOptions,
        "groupsOptions": groupsOptions,
        "sectionsOptions": sectionsOptions,
        "studentsOptions": studentsOptions,
        "teachersOptions": teachersOptions,
        "eknStatusesOptions": eknStatusesOptions,
        "admitsOptions": admitsOptions,
        "zachetNamesOptions": zachetNamesOptions,
        "pair1Options": pair1Options,
        "pair2Options": pair2Options,
        "pairsOptions": pairsOptions,
    };
}

function updateStudentSection(i, SECTION) {
    students[i].SECTION = SECTION;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentCourse(i, COURSE) {
    students[i].COURSE = COURSE;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentTeacher(i, PERSON) {
    students[i].PERSON = PERSON;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentNorm1(i, Norm1) {
    students[i].Norm1 = Norm1;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentNorm2(i, Norm2) {
    students[i].Norm2 = Norm2;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentNorm3(i, Norm3) {
    students[i].Norm3 = Norm3;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentNorm4(i, Norm4) {
    students[i].Norm4 = Norm4;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentNorm5(i, Norm5) {
    students[i].Norm5 = Norm5;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentH(i, H) {
    students[i].H = H;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentW(i, W) {
    students[i].W = W;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentEknStatus(i, FK_EKN_STATUS) {
    students[i].FK_EKN_STATUS = FK_EKN_STATUS;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentDataStatus(i, DATE_STATUS) {
    students[i].DATE_STATUS = DATE_STATUS;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentIsSport(i, IS_SPORT) {
    students[i].IS_SPORT = IS_SPORT;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentIsDist(i, IS_DIST) {
    students[i].IS_DIST = IS_DIST;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentPaym(i, PAYM) {
    students[i].PAYM = PAYM;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentAttend(i, ATTEND) {
    students[i].ATTEND = ATTEND;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentReferat(i, REFERAT) {
    students[i].REFERAT = REFERAT;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentNormative1(i, NORMATIVE1) {
    students[i].NORMATIVE1 = NORMATIVE1;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentNormative2(i, NORMATIVE2) {
    students[i].NORMATIVE2 = NORMATIVE2;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentEknBall(i, EKN_BALL) {
    students[i].EKN_BALL = EKN_BALL;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentGTOBall(i, GTO_BALL) {
    students[i].GTO_BALL = GTO_BALL;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentTheory(i, THEORY) {
    students[i].THEORY = THEORY;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentTest(i, TEST) {
    students[i].TEST = TEST;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentComplex(i, COMPLEX) {
    students[i].COMPLEX = COMPLEX;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentAdmit(i, ADMIT) {
    students[i].ADMIT = ADMIT;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentAllBalls(i, ALL_BALLS) {
    students[i].ALL_BALLS = ALL_BALLS;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentZachet(i, ZACHET_NAME) {
    students[i].ZACHET_NAME = ZACHET_NAME;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentPair1(i, PAIR1) {
    students[i].PAIR1 = PAIR1;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

function updateStudentPair2(i, PAIR2) {
    students[i].PAIR2 = PAIR2;
    studentsOptions = students.map((student, i) => {
        return <option key={i}>{student}</option>
    })
}

export {
    getData,
    updateStudentH,
    updateStudentW,
    updateStudentSection,
    updateStudentCourse,
    updateStudentTeacher,
    updateStudentNorm1,
    updateStudentNorm2,
    updateStudentNorm3,
    updateStudentNorm4,
    updateStudentNorm5,
    updateStudentEknStatus,
    updateStudentEknBall,
    updateStudentGTOBall,
    updateStudentTheory,
    updateStudentTest,
    updateStudentComplex,
    updateStudentAdmit,
    updateStudentDataStatus,
    updateStudentIsSport,
    updateStudentIsDist,
    updateStudentPaym,
    updateStudentAttend,
    updateStudentReferat,
    updateStudentNormative1,
    updateStudentNormative2,
    updateStudentAllBalls,
    updateStudentZachet,
    updateStudentPair1,
    updateStudentPair2,
};