// Отчеты
import { CSVLink, CSVDownload } from "react-csv";
import Spreadsheet from "react-spreadsheet";
import { useState } from "react";
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';

export default function View11() {
    const csvData = [
        { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
        { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
        { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
    ];

    const [data, setData] = useState([
        [{ value: "Vanilla" }, { value: "Chocolate" }],
        [{ value: "Strawberry" }, { value: "Cookies" }],
    ]);

    const ExportExcel = ({ excelData, fileName }) => {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';

        const exportToExcel = async () => {
            const ws0 = XLSX.utils.json_to_sheet(excelData[0]);
            const ws1 = XLSX.utils.json_to_sheet(excelData[1]);
            const wb = { Sheets: { 'data': [ws0, ws1] }, SheetNames: ['data', 'second'] };
            const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            const data = new Blob([excelBuffer], { type: fileType });
            FileSaver.saveAs(data, fileName + fileExtension);
        }

        return (
            <>
                <button
                    onClick={(e) => exportToExcel(fileName)}
                >
                    Excel Export
                </button>
            </>
        )
    }

    const eed = [
        {
            "name": "123",
            "door": "345",
        },
        {
            "name": "dodic",
            "door": "doorka",
        }
    ];

    const ded = [
        {
            "name777": "123777",
            "door777": "345777",
        },
        {
            "name777": "dodic777",
            "door777": "doorka777",
        }
    ];

    return (
        <>
            <CSVLink data={csvData} separator=";">Download me</CSVLink>
            {/* <CSVDownload data={csvData} target="_blank" /> */}
            {/* <Spreadsheet data={data} onChange={setData} /> */}
            <ExportExcel excelData={eed} fileName={"Excel Export"} />
        </>
    )
}
