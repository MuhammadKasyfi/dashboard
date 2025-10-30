import React, { useState } from 'react'
import * as XLSX from 'xlsx'
import FileUpload from '../components/FileUpload'

export default function Dashboard() {
  const [data, setData] = useState([])

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    console.log("Uploaded file:", file)

    const reader = new FileReader()
    reader.readAsBinaryString(file) // Added this line to read the file
    reader.onload = (e) => {
      const data = e.target.result
      console.log("File content:", data)

      const workbook = XLSX.read(data, { type: 'binary' })
      const sheetName = workbook.SheetNames[0] // Assuming we want the first sheet
      const sheet = workbook.Sheets[sheetName]
      const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 1 })
      console.log("Parsed data:", parsedData)

      setData(parsedData)
    }

    
  }
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <FileUpload handleFileUpload={handleFileUpload} />

      {data.length > 0 && (
        <table className="table-auto border-collapse border border-gray-400 mt-4">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key} className="border border-gray-400 px-4 py-2 bg-gray-200">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index} className="border border-gray-400 px-4 py-2">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}