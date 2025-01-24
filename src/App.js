import React from 'react';
import './App.css'; // CSS 파일 추가
import profile1 from './an.png';
import profile2 from './um.png';

const ProfileCard = ({ name, image, details }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name} 사진`} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <ul className="profile-details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const profiles = [
    {
      name: '안희주 센터장',
      image: profile1, 
      details: [
        '한양대학교 융합대학원 미술교육 전공 박사수료',
        '한양대학교 심리상담학 석사',
        '\n',
        '임상심리사 2급(한국산업인력공단)',
        '청소년상담사 2급(여성가족부)',
        '게슈탈트 상담심리사 2급(한국게슈탈트상담심리학회)',
        '현) 허그하트 심리상담센터 하남미사본점 원장',
        '...'
        // 나머지 내용...
      ],
    },
    {
      name: '엄혜주 원장',
      image: profile2,
      details: [
        '용인대학교 예술치료학 예술치료 전공 박사과정',
        '건국대학교 미술치료학 석사',
        '임상미술심리상담사 2급(한국미술치료학회)',
        '청소년상담사 3급(여성가족부)',
        '스트레스 관리사 1급(한국종합교육원)',
        '감정노동관리사 1급(한국종합교육원)',
        '현) 허그하트 심리상담센터 하남미사본점 원장',
        '...'
        // 나머지 내용...
      ],
    },
  ];

  return (
    <div className="profiles-container">
      <header className="header">AGA Hugheart</header>
      <p className="description">강사 프로필 안내</p>
      <div className="profile-cards-wrapper">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            details={profile.details}
          />
        ))}
      </div>
      <a
          className="App-link"
          href="https://sion0107.cafe24.com/skin-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          돌아가기
        </a>
    </div>
  );
};

export default App;
