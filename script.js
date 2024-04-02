var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const firstDate = new Date(date1);
	const secondDate = new Date(date2);
	const diffMilliseconds = secondDate - firstDate;
	const diffDays = diffMilliseconds / (1000 * 60 * 60 * 24);
    return Math.round(diffDays);
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
