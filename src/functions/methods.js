import { data, setData } from './data2'

// Обновление значений
// Получение списка для select
function opt(list) {
    return list.map((elem, i) => {
        return <option key={i}>{elem}</option>
    })
}

// Обновление значений
function upd(updKey, i) {
    return (updValue) => {
        setData({
            ...data, students: data.students.map((item, idx) => {
                if (idx === i) return { ...item, [updKey]: updValue };
                else return item;
            })
        })
    }
}

export { opt, upd }
