let data = [
    {
        "id": 1,
        "data": "root"
    },
    {
        "id": 2,
        "data": "door"
    }
]

function show() {
    console.log(data);
}

function getData() {
    return data;
}

function update(_data) {
    data = _data;
}

export { getData, update, show };
