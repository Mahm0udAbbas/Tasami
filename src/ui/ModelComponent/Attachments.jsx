import { useState, useRef } from "react";
import { Link } from "react-router";
import AttachmentsModal from "./AttachmentsModal";

const Attachments = () => {
  const [showModal, setShowModal] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [attachments, setAttachments] = useState([
    {
      id: 1,
      date: "2025-05-25",
      time: "14:45 PM",
      name: "سلطان م",
      account: "E-2202023-000125",
      title: "شهادة تدريب",
      filename: "FFNFCertificate.pdf",
    },
  ]);

  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const now = new Date();
    const newAttachment = {
      id: Date.now(),
      date: now.toISOString().split("T")[0],
      time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      name: "سلطان م",
      account: "E-2202023-000125",
      filename: file.name,
    };
    setAttachments((prev) => [...prev, newAttachment]);
    console.log(" added succussfully!");
  };

  const handleSave = () => {
    // if (!titleInput.trim()) return;
  };

  return (
    <>
      <div className="attachments-container ">
        <h4 className="attachments-title">المرفقات</h4>
        <div className="table-container table-responsive border">
          <table className="custom-table table table-bordered text-center align-middle mb-0  attachments-table">
            <thead className="table-light">
              <tr>
                <th>التاريخ</th>
                <th>الوقت</th>
                <th>الاسم</th>
                <th>رقم الحساب</th>
                {/* <th>العنوان</th> */}
                <th>الملف المرفق</th>
              </tr>
            </thead>
            <tbody>
              {attachments.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.name}</td>
                  <td>
                    <Link
                      to={`/dashboard/employee-details/${item.account}`}
                      className="link-styles"
                    >
                      {item.account}
                    </Link>
                  </td>
                  {/* <td>{item.title}</td> */}
                  <td>
                    {/* <Link to="/dashboard/emplo" className="file-link"> */}
                    {item.filename}
                    {/* </Link> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <div className="add-btn-container">
          <button
            className="add-attachment-btn"
            onClick={() => fileInputRef.current.click()}
          >
            <i className="fa-solid fa-circle-plus"></i> إضافة مرفق
          </button>
        </div>
      </div>

      <AttachmentsModal
        showModal={showModal}
        setShowModal={setShowModal}
        titleInput={titleInput}
        setTitleInput={setTitleInput}
        handleSave={handleSave}
      />
    </>
  );
};

export default Attachments;
