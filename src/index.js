
/* append inbox and this week
    if date is within 24 hours append on "Today"  
*/

import {defaultFirst, getDetails} from './modules/defaultFirst';
// import {getDetails} from './modules/toDos';

//defaultFirst();

const inbox = document.getElementById("inbox")
inbox.addEventListener('click', defaultFirst);

const submitBtn = document.getElementById("submit-btn")
submitBtn.addEventListener('click', getDetails);