let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

// console.log(totalCount, interviewCount, rejectedCount);

const allCardSection = document.getElementById('all-cards');
console.log();


function calculateCount (){
    totalCount.innerText = allCardSection.children.length;
}

calculateCount();


