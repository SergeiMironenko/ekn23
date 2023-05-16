// Тест
export default function Test({ testData, setTestData }) {
    const init = [10, 20, 30, 40, 50];
    const count = Math.floor(Math.random() * (init.length + 1));
    const elem = [...init].sort(() => Math.random() - 0.5).slice(count);
    console.log(elem, count);
    return (
        <>
            {elem}
        </>
    )
}
