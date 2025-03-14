import { Tooltip } from "react-tooltip";
import Navbar from "../components/Navbar/Navbar";
import "./css/notes.css";
import ClassicDiv from "../components/ClassicDiv/ClassicDiv";
import { useRef, useEffect, useState } from "react";
export default function Notes() {
  const [isempty, setIsEmpty] = useState(true);
  const [value, setValue] = useState("");
  const [showToolTip, setShowToolTip] = useState(false);
  const FirstFocusInput = useRef(null);
  const TextAreaFocus = useRef(null);
  const InputTitle = useRef(null);

  useEffect(() => {
    if (isempty) {
      FirstFocusInput.current.focus();
    }
  }, [isempty]);

  useEffect(() => {
    if (!isempty && value.length == 1) {
      const length = value.length;
      TextAreaFocus.current.focus();
      TextAreaFocus.current.setSelectionRange(length, length);
    }
  }, [isempty, value]);

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="create-notes-section">
          {isempty && (
            <input
              type="text"
              ref={FirstFocusInput}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setIsEmpty(false);
                  setValue(e.target.value);
                }
              }}
              className="first-focused-notes-input"
              placeholder="Write a note"
              value={value}
            />
          )}
          {!isempty && (
            <ClassicDiv>
              {showToolTip && (
                <Tooltip
                  anchorSelect=".notes-input"
                  place="top"
                  content="Title is Required!"
                  style={{ fontSize: "1rem" }}
                  isOpen={true}
                />
              )}
              <input
                type="text"
                className="notes-input"
                placeholder="Title"
                ref={InputTitle}
              />
              <textarea
                className="notes-textarea"
                ref={TextAreaFocus}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setIsEmpty(true);
                    setValue("");
                  } else {
                    setValue(e.target.value);
                  }
                }}
                value={value}
              ></textarea>
              <div className="notes-btn-holder">
                <button
                  className="notes-btn"
                  onClick={() => {
                    if (InputTitle.current.value === "") {
                      setShowToolTip(true);
                    } else {
                      setShowToolTip(false);
                      localStorage.setItem(InputTitle.current.value, value);
                      setIsEmpty(true);
                      setValue("");
                    }
                  }}
                >
                  Save
                </button>
                <button
                  className="notes-btn"
                  onClick={() => {
                    setIsEmpty(true);
                    setValue("");
                    setShowToolTip(false);
                  }}
                >
                  Delete
                </button>
              </div>
            </ClassicDiv>
          )}
        </div>
        <div className="show-notes-section">
          {Object.keys(localStorage).map((key) => {
            return (
              key !== "loglevel" && (
                <div className="notes-card" key={key}>
                  <h3 style={{ marginBottom: "10px" }}>{key}</h3>
                  <p>{localStorage.getItem(key)}</p>
                  <button
                    className="notes-btn"
                    onClick={() => {
                      localStorage.removeItem(key);
                      setValue(""); // Ensure textarea resets if deleted
                      setIsEmpty(true);
                      setShowToolTip(false);

                      // Force component to re-render
                      window.location.reload();
                    }}
                  >
                    Delete
                  </button>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}
