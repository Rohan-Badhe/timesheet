import { useEffect, useState } from "react";

export default function EmpInfo() {
  const [Empdata, setEmpdata] = useState([]);
  useEffect(() => {
    fetch("http://192.168.0.118:8080/api/task").then((res) => res.json())
      .then((res) => res.json())
            .then((json) => {
                Empdata(json);
                setEmpdata(true);
            });
    }, []); 

  return
  (
    <h2>Emp data </h2>
  
  );
}