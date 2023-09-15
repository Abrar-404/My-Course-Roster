import PropTypes from 'prop-types';

const Cart = ({ selectCourses, remainingCources, totalCreditCost }) => {
  return (
    <div className="mx-auto w-[60%]">
      <h1 className="text-[#2F80ED] pb-3 text-start text-base border-b-2 font-semibold">
        Credit hour remaining {remainingCources} hr
      </h1>

      <div className="border-b-2">
        <h1 className="text-start font-bold text-lg pt-5 pb-8 ">Course Name</h1>
        <ul>
          {selectCourses?.map((course, i) => (
            <tr className="flex items-center gap-1">
              <td>{i + 1}</td>
              <td className="text-sm items-center">{course.title}</td>
            </tr>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="text-base text-[gray] text-start pt-5 border-b-2 pb-5">
          Total Credit Hour : {totalCreditCost}
        </h1>
        {selectCourses?.map(creditCource => (
          <h2>{creditCource.totalCreditCost}</h2>
        ))}
      </div>
    </div>
  );
};

Cart.prototypes = {
  cart: PropTypes.isRequired,
};
export default Cart;
