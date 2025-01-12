import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import {EmailContext} from "../component/Layout";
import {H1} from "../../assets/css/setting/admin/StylesOfCreate";

const inlineStyles = {
  body: {
    fontFamily: 'Arial, sans-serif',
  },
  div: {
    margin: '100px auto',
    width: '300px',
  },
  h2: {
    color: '#333',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

function SignUp() {
  const { email } = useContext(EmailContext);
  const location = useLocation();
  const initialEmail = location.state?.email || email;

  const [formData, setFormData] = useState({
    email: initialEmail,
    password: '',
    name: '',
    birthdate: '',
    phoneNumber: '',
  });

  useEffect(() => {
    console.log('Received email:', initialEmail);
    // 여기서 필요한 작업 수행
  }, [initialEmail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/members/join', formData); // 수정된 부분
      console.log(response.data);
      alert("회원가입 성공. 로그인 페이지로 이동합니다.")
      navigate('/login');
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  const navigate = useNavigate();

  return (
      <div style={inlineStyles.div}>
        <div style={{ border: '1px solid #000', borderRadius: '5px', padding: '10px', display: 'inline-block' }}>
          <H1>회원가입</H1>
          <form style={inlineStyles.form} onSubmit={handleSubmit}>
            <label style={inlineStyles.label}>
              이메일 주소:
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  style={inlineStyles.input}
              />
            </label>
            <br />
            <label style={inlineStyles.label}>
              비밀번호:
              <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={inlineStyles.input}
              />
            </label>
            <br />
            <label style={inlineStyles.label}>
              이름:
              <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inlineStyles.input}
              />
            </label>
            <br />
            <label style={inlineStyles.label}>
              생년월일:
              <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  placeholder="YYYY-MM-DD"
                  style={inlineStyles.input}
              />
            </label>
            <br />
            <label style={inlineStyles.label}>
              핸드폰 번호:
              <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  style={inlineStyles.input}
              />
            </label>
            <br />
            <button type="submit" style={inlineStyles.button}
                    onMouseOver={(e) => e.target.style.backgroundColor = inlineStyles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = inlineStyles.button.backgroundColor}>
              가입하기
            </button>
          </form>
        </div>
      </div>
  );
}

export default SignUp;