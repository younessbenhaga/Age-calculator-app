let DAY1 = document.getElementById('DAY');
let MONTH1 = document.getElementById('MONTH');
let year1 = document.getElementById('YEAR');

let btn = document.getElementById('btn');

let prday = document.getElementById('prday');
let prmonth = document.getElementById('prmonth');
let pryear = document.getElementById('pryear');

let dayss = document.getElementById('dayss');
let monthss = document.getElementById('monthss');
let yearss = document.getElementById('yearss');


btn.onclick = function () {
    function setErrorClass(element) {
      element.classList.remove('border');
      element.classList.remove('border-slate-200');
      element.classList.add('border-2');
      element.classList.add('border-red-600');
      element.classList.add('shadow-lg');
    }
  
    function clearErrorMessages() {
      prday.innerHTML = '';
      prmonth.innerHTML = '';
      pryear.innerHTML = '';
    }
  
    function validateNumber(input, min, max) {
      const value = Number(input.value);
      return !isNaN(value) && value >= min && value <= max;
    }
  
    clearErrorMessages();
  
    const day = Number(DAY1.value);
    const month = Number(MONTH1.value);
    const year = Number(year1.value);
  
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();
  
    if (DAY1.value.trim() === '' || MONTH1.value.trim() === '' || year1.value.trim() === '') {
      if (DAY1.value.trim() === '') {
        setErrorClass(DAY1);
        prday.innerHTML = 'This field is required';
      }
      if (MONTH1.value.trim() === '') {
        setErrorClass(MONTH1);
        prmonth.innerHTML = 'This field is required';
      }
      if (year1.value.trim() === '') {
        setErrorClass(year1);
        pryear.innerHTML = 'This field is required';
      }
    } else if (!validateNumber(DAY1, 1, 31) || !validateNumber(MONTH1, 1, 12) || !validateNumber(year1, 1, Infinity)) {
      if (!validateNumber(DAY1, 1, 31)) {
        setErrorClass(DAY1);
        prday.innerHTML = 'Must be a valid day';
      }
      if (!validateNumber(MONTH1, 1, 12)) {
        setErrorClass(MONTH1);
        prmonth.innerHTML = 'Must be a valid month';
      }
      if (!validateNumber(year1, 1, Infinity)) {
        setErrorClass(year1);
        pryear.innerHTML = 'Must be a valid year';
      }
    } else {
      if (year > currentYear || (year === currentYear && month > currentMonth) || (year === currentYear && month === currentMonth && day > currentDate)) {
        setErrorClass(DAY1);
        setErrorClass(MONTH1);
        setErrorClass(year1);
        prday.innerHTML = 'Date cannot be in the future';
        prmonth.innerHTML = 'Date cannot be in the future';
        pryear.innerHTML = 'Date cannot be in the future';
      } else {
        // Your date difference calculations
        let daysDifference = currentDate - day;
        let monthsDifference = currentMonth - month;
        let yearsDifference = currentYear - year;
  
        if (daysDifference < 0) {
          daysDifference += 30;
          monthsDifference--;
        }
  
        if (monthsDifference < 0) {
          monthsDifference += 12;
          yearsDifference--;
        }
  
        dayss.innerHTML = daysDifference + ' ';
        monthss.innerHTML = monthsDifference + ' ';
        yearss.innerHTML = yearsDifference + ' ';
      }
    }
  };
  

  