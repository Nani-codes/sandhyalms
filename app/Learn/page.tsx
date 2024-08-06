// app/external/page.js
import React from 'react';
import CourseCard from '../../components/Course/CourseCard'
const ExternalPage = () => {
  return (
    <div style={{    margin: "auto",
      width: "50%",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",}}>
      <CourseCard></CourseCard>
    </div>
  );
};

export default ExternalPage;
