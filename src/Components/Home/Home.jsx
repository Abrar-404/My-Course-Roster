import PropTypes from 'prop-types';
import {useEffect, useState} from "react";
import Cart from '../Cart/Cart';
import {FaBookOpen} from 'react-icons/fa';


const Home = () => {
  const [courses, setCources] = useState([]);
  const [selectCourses, setSelectCourses] = useState([]);


  useEffect(() => {
    fetch('data.json').then(res => res.json()).then(data => setCources(data))
  }, [])


  const handleCourses = (allCourse) => {
    const ifAvailable = selectCourses.find(item => item.id === allCourse.id)

    // let count1 = allCourse.price;
    let count2 = allCourse.credit_hr;

    if (ifAvailable) {
      return alert('The limit is over');
    } else {
      selectCourses.forEach(item => {
        count2 = count2 + item.credit_hr;
      })
      // const totalRemaining = 20000 - count2;

      if (count2 > 20) {
        return alert("Can't Add More")
      } else {
        // setTotalCost(count);
        // setRemaining(totalRemaining)
      setSelectCourses([...selectCourses, allCourse])
      }  
    }
  }


  return (
    <div className="">
      <div className='text-3xl font-bold'>
        <h1>Course Registration</h1>
      </div>
      <div className='flex gap-5 mx-auto'>
        <div className="mt-5 grid grid-cols-3 mx-auto gap-5">

          {
          courses.map(course => (
            <div key={
                course.id
              }
              class="card h-auto shadow-xl">
              <figure class="px-10 pt-10">
                <img src={
                    course.course_img
                  }
                  alt=""
                  class="rounded-xl"/>
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title text-base font-bold">
                  {
                  course.title
                }</h2>
                <h1 className='text-[gray]'>
                  {
                  course.description
                  }</h1>
                <div className='flex gap-3 items-center'>
                  <p className='text-base text-[gray] font-medium'>$ Price : {course.price}</p>
                  <FaBookOpen></FaBookOpen>
                  <p className='items-center text-base text-[gray] font-medium'>Credit : {course.credit_hr}hr</p>
                </div>
                <div class="card-actions">
                  <button onClick={()=>handleCourses(course)} className='rounded-lg mt-5 bg-[#2F80ED] px-[100px] py-[5px] text-white font-semibold'>Select</button>
                </div>
              </div>
            </div>
          ))
        } </div>
        <Cart handleCourses={handleCourses}></Cart>
      </div>
    </div>


  );
};

Home.prototypes = {
  home: PropTypes.isRequired

}

export default Home;
