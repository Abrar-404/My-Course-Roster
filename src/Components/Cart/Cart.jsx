import PropTypes from 'prop-types';

const Cart = ({selectCourses}) => {
  return (
    <div className='mx-auto w-[60%]'>
      <h1 className='text-[#2F80ED] pb-3 text-start text-lg border-b-2 font-semibold'>Credit hour remaining </h1>

      <div className='border-b-2'>
        <h1 className='text-start font-bold text-lg pt-5 pb-8 '>Course Name</h1>
      </div>

      <div>
        <h1 className='text-base text-[gray] text-start pt-5 border-b-2 pb-5'>Total Credit Hour : {selectCourses?.length}</h1>
        {
          selectCourses?.map(course => (
            <li>{course.title}</li> 
          ))
        }
      </div>
    </div>
  );
};

Cart.prototypes = {
  cart: PropTypes.isRequired
}
export default Cart;