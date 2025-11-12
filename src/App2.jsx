import { useState, useEffect } from "react";
import axios from "axios";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    education: [],
    mobile_no: "",
    email_id: "",
    phone_number: "",
    photo: null,
    nationality: "",
    state: "",
    taluk: "",
    gp: "",
    aadharcard: null
  });

  const states = ["Karnataka", "Kerala"];

  const taluks = {
    Karnataka: ["Udupi", "Kundapura", "Karkala"],
    Kerala: ["Kasaragod", "Kannur", "Kozhikode"]
  };

  const gps = {
    Udupi: ["GP1", "GP2"],
    Kundapura: ["GP3", "GP4"],
    Karkala: ["GP5", "GP6"],
    Kasaragod: ["GP7", "GP8"],
    Kannur: ["GP9", "GP10"],
    Kozhikode: ["GP11", "GP12"]
  };

  const educationList = ["BCom", "BCA", "MCom", "MCA"];

  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(1);
  const recordsPerPage = 5;

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updated = checked
          ? [...prev.education, value]
          : prev.education.filter((item) => item !== value);
        return { ...prev, education: updated };
      });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    axios.post("http://localhost/noc/insert.php", form).then((res) => {
      fetchRecords();
    });
  };

  const fetchRecords = () => {
    axios.get("http://localhost/noc/fetch.php").then((res) => {
      setRecords(res.data);
    });
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const indexOfLast = page * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const   = records.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(records.length / recordsPerPage);

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" className="border p-2" />
        <input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" className="border p-2" />
        <input name="dob" type="date" value={formData.dob} onChange={handleChange} className="border p-2" />

        <div className="col-span-2">
          <label className="mr-2">Gender:</label>
          {['Male','Female','Transgender'].map((g)=>(
            <label key={g} className="mr-3">
              <input type="radio" name="gender" value={g} onChange={handleChange}/> {g}
            </label>
          ))}
        </div>

        <div className="col-span-2">
          <label className="mr-2">Education:</label>
          {educationList.map((ed) => (
            <label key={ed} className="mr-3">
              <input type="checkbox" value={ed} onChange={handleChange} /> {ed}
            </label>
          ))}
        </div>

        <input name="mobile_no" value={formData.mobile_no} onChange={handleChange} placeholder="Mobile No" className="border p-2" />
        <input name="email_id" value={formData.email_id} onChange={handleChange} placeholder="Email" className="border p-2" />
        <input name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone Number" className="border p-2" />
        <input type="file" name="photo" accept="image/*" onChange={handleChange} className="border p-2" />
        <input name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Nationality" className="border p-2" />

        <select name="state" value={formData.state} onChange={handleChange} className="border p-2">
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <select name="taluk" value={formData.taluk} onChange={handleChange} className="border p-2">
          <option value="">Select Taluk</option>
          {formData.state && taluks[formData.state]?.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select name="gp" value={formData.gp} onChange={handleChange} className="border p-2 col-span-2">
          <option value="">Select GP</option>
          {formData.taluk && gps[formData.taluk]?.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>

        <input type="file" name="aadharcard" accept="application/pdf" onChange={handleChange} className="border p-2 col-span-2" />

        <button className="bg-blue-600 text-white p-2 col-span-2 rounded">Submit</button>
      </form>

      <table className="w-full border mt-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">First Name</th>
            <th className="p-2 border">Last Name</th>
            <th className="p-2 border">Gender</th>
            <th className="p-2 border">Education</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((row, i) => (
            <tr key={i}>
              <td className="p-2 border">{row.firstname}</td>
              <td className="p-2 border">{row.lastname}</td>
              <td className="p-2 border">{row.gender}</td>
              <td className="p-2 border">{row.education}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex space-x-2 justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)} className="px-3 py-1 border">
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
