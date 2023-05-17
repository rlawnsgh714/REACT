import React, { useState } from "react";

function SignUpForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fontSize, setFontSize] = useState(20);

  const style = {
    fontSize: fontSize,
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // 아이디 유효성 검사
    if (!/^[a-zA-Z][a-zA-Z0-9]{4,9}$/.test(userId)) {
      setUserIdError("아이디는 5~10자 이내의 영문자로 시작해야 합니다.");
      return;
    } else {
      setUserIdError("");
    }

    // 비밀번호 유효성 검사
    if (!/^[a-zA-Z][a-zA-Z0-9]{3,15}$/.test(password)) {
      setPasswordError("비밀번호는 4~16자 이내의 영문자로 시작해야 합니다.");
      return;
    } else {
      setPasswordError("");
    }

    window.alert("회원가입 성공");
    window.location.reload();
  };

  const handleFontSizeChange = (event) => {
    const newFontSize = event.target.value;
    if (newFontSize === "big") {
      if (fontSize - 2 <= 40) {
        setFontSize(fontSize + 2);
      }
    } else if (newFontSize === "common") {
      setFontSize(20);
    } else if (newFontSize === "small") {
      if (fontSize - 2 >= 1) {
        setFontSize(fontSize - 2);
      }
    }
    event.preventDefault();
  };

  return (
    <div>
      <h1>1. 회원가입 폼 구현하기</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p style={style}>아이디</p>
          <input
            type="text"
            id="user-id"
            value={userId}
            onChange={handleUserIdChange}
            autoFocus
          />
          {userIdError && <p className="error">{userIdError}</p>}
        </div>
        <div>
          <p style={style}>비밀번호</p>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="error">{passwordError}</p>}
          <button type="submit">가입하기</button>
        </div>
      </form>
      <div>
        <button value="small" onClick={handleFontSizeChange}>
          작게
        </button>
        <button value="common" onClick={handleFontSizeChange}>
          원래대로
        </button>
        <button value="big" onClick={handleFontSizeChange}>
          크게
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
