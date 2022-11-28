import React, { useState } from "react";
import "../style/header.css";

export default function Header() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleOnCloseLogIn = () => setShowLogIn(false);
  const handleOnCloseSignUp = () => setShowSignUp(false);
  const userId = sessionStorage.getItem("userId");

  return (
    <>
      <div className="header mt-10"></div>
      <div className="about text-right container pr-5 md:pr-10 pt-10">
        <h3>? COOKIT אז מה זה בעצם</h3>
        <p>
          בלוג מתכונים משותף בו תוכלו למצוא את המתכונים שתמיד חיפשתם או <br />{" "}
          להירשם ולחלוק איתנו את המתכונים המנצחים שלכם
        </p>
        <div className="about-me text-center mt-10 md:mt-32 mb-20 w-full md:w-3/4 m-auto px-4 md:px-0">
          <h2>...קצת על עצמי</h2>
          <p>,מאז ומתמיד אהבתי לבשל ובעיקר לאפות ואת רוב הזמן הפנוי שלי אני מבלה בחיפוש מתכונים באינטרנט</p>
          <p>לפעמים המתכונים לא היו בהכרח מוצלחים ורציתי ליצור לעצמי דרך לשמור את המתכונים המוצלחים</p>
          <p>לכן החלטתי לפתוח בלוג בו אוכל לשתף מתכונים שאהבתי וגם אתם תוכלו לשתף מתכונים שלכם </p>
          <p>וביחד ניצור סוג של ספר מתכונים אינטרנטי</p>
        </div>
      </div>
    </>
  );
}
