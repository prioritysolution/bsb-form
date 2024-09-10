import { useRef, useState } from "react";
import * as XLSX from "xlsx";
import "jspdf-autotable";
import "./App.css";
import { MdDone } from "react-icons/md";
import { IoPrintSharp } from "react-icons/io5";
import { useReactToPrint } from "react-to-print";
import Content from "./components/Content";

const App = () => {
  const [data, setData] = useState([]);
  const printRef = useRef();

  const handleFileUpload = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsBinaryString(e.target.files[0]);
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);
        setData(parsedData);
      };
    }
  };

  const generatePDF = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className="w-screen h-full flex flex-col items-center py-10 gap-10 font-bengali">
      <div className="w-[210mm] flex justify-between items-center font-roboto">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="placeholder:font-roboto"
        />
        <button
          disabled={!data.length > 0}
          className="px-8 py-2 bg-blue-500 text-white text-xl flex items-center gap-3 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={generatePDF}
        >
          Print <IoPrintSharp className="text-2xl" />
        </button>
      </div>

      <div className="w-[210mm]" ref={printRef}>
        {data.map((info, index) => (
          <Content key={index} info={info} />
        ))}
      </div>
    </div>
  );
};

export default App;
