<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# Course Registration

- Hosted in Vercel ->
  [Course-registration](https://course-registration-xi.vercel.app/)

## Questions

### 1. What Are The Project Features?

<li>Added popup Toast Message</li>

<br>

<li>Credit hours sum by selecting courses</li>

<br>

<li>If selected course, it will be shown on the right sidebar with name and serial no.</li>

<br>
<br>

### 2. How the states in this projects has been managed?

<br>

<li>Took 4 state hook. 
<br>
<br> 
- First one was taken for adding the API data (courses, selectCourses)
<br>

-Second one was taken for adding the courses names in the cart section in the
right side (selectCourses, setSelectCourses)

<br>
- Third one was taken for calculating the remaining credit hours. Took initial value "20" and used it to calculate the credits remaining after selecting each courses. (remainingCources, setRemainingCources)

<br>
<br>
- Fourth one was taken for calculating the total credit hour. The sum of the courses which has been selected and the amount of the credits in total (totalCreditCost, setTotalCreditCost)
</li>
