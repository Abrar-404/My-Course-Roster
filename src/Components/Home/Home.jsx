import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { FiBookOpen } from 'react-icons/fi';
import { FiDollarSign } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [courses, setCources] = useState([]);
  const [selectCourses, setSelectCourses] = useState([]);
  const [remainingCources, setRemainingCources] = useState(20);
  const [totalCreditCost, setTotalCreditCost] = useState(0);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCources(data));
  }, []);

  const handleCourses = course => {
    const ifAvailable = selectCourses.find(items => items.id === course.id);

    let credits = course.credit_hr;

    if (ifAvailable) {
      return toast.error('💀 Hey! Its Already Added!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      selectCourses.forEach(item => {
        credits = credits + item.credit_hr;
      });

      const totalCourcesRemaining = 20 - credits;
      if (credits > 20) {
        return toast('😥 Oops! Insufficient Credits!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } else {
        setTotalCreditCost(credits);
        setRemainingCources(totalCourcesRemaining);
        setSelectCourses([...selectCourses, course]);
      }
    }
  };

  return (
    <div className="">
      <div className="text-3xl font-bold">
        <h1>Course Registration</h1>
      </div>
      <div className="flex gap-5 mx-auto">
        <div className="mt-5 grid grid-cols-3 mx-auto gap-5">
          {courses.map(course => (
            <div key={course.id} class="card h-auto shadow-xl">
              <figure class="px-10 pt-10">
                <img src={course.course_img} alt="" class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title text-base font-bold">{course.title}</h2>
                <h1 className="text-[gray] text-base pb-2">
                  {course.description}
                </h1>
                <div className="flex gap-3 items-center">
                  <FiDollarSign></FiDollarSign>
                  <p className="text-base text-[gray] font-medium">
                    Price : {course.price}
                  </p>
                  <FiBookOpen></FiBookOpen>
                  <p className="items-center text-base text-[gray] font-medium">
                    Credit : {course.credit_hr}hr
                  </p>
                </div>
                <div class="card-actions">
                  <button
                    onClick={() => handleCourses(course)}
                    className="rounded-lg mt-5 bg-[#2F80ED] px-[100px] py-[5px] text-white font-semibold"
                  >
                    Select
                  </button>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </div>
              </div>
            </div>
          ))}{' '}
        </div>
        <Cart
          selectCourses={selectCourses}
          remainingCources={remainingCources}
          totalCreditCost={totalCreditCost}
        ></Cart>
      </div>
    </div>
  );
};

Home.prototypes = {
  home: PropTypes.isRequired,
};

export default Home;
