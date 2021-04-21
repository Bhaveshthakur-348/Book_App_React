import React from "react";
import "./Card.css";
const styles = {
  root: {
    position: "fixed",
    zIndex: 101,
    top: "50%",
    left: "50%",
    width: "300px",
    height: "400px",
    margin: "-200px 0 0 -150px",
    background: "#fff",
    borderRadius: "4px",
    padding: "20px",
    border: "1px solid #E8E8E8"
  },
  blur: {
    height: "100%",
    width: "100%",
    background: "rgba(86, 86, 86, 0.4)",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "99"
  },
  closeButton: {
    float: "right",
    borderRadius: "50%",
    border: "1px solid #8c8c8c",
    padding: "0 4px",
    marginBottom: "10px",
    cursor: "pointer"
  }
};
function Modal({ title, Image, author, genre, closeModal }) {
  return (
    <div
      style={styles.blur}
      onClick={() => {
        closeModal();
      }}
    >
      <div style={styles.root}>
        <div style={styles.closeButton}>X</div>
        <div className="ColImg">
          <img
            className="Img"
            style={{ paddingLeft: "0", marginTop: "12px" }}
            src={Image}
            alt={title}
          />
        </div>
        <div>
          <div className="Header">
            <div className="BookTitle">{title}</div>
          </div>
          <div className="Author">{author}</div>
          <div className="Genre">{genre}</div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
