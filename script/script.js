let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

let numberOfJobe = document.getElementById('numbe-of-job');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

// console.log(totalCount, interviewCount, rejectedCount);

const allCardSection = document.getElementById('all-cards');

// main tare dhorsi
const mainContainer = document.querySelector('main');
// console.log(mainContainer);


function calculateCount (){
    totalCount.innerText = allCardSection.children.length;
    numberOfJobe.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;


}
calculateCount();

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    
    allFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');
    interviewFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');
    rejectedFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');

    const selected = document.getElementById(id);

    selected.classList.remove('bg-[#FFFFFF]', 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]', 'text-white');
}

mainContainer.addEventListener('click', function(event){
    // console.log();
    const parentNode = event.target.parentNode.parentNode;
    const jobTitle = parentNode.querySelector('.job-title').innerText;
    const jobDesignation = parentNode.querySelector('.job-designation').innerText;
    const selary = parentNode.querySelector('.selary').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const jobDescription = parentNode.querySelector('.job-description').innerText;
    
    const cardInfo = {
        jobTitle, 
        jobDesignation, 
        selary, 
        status, 
        jobDescription,
    };

    // console.log(cardInfo);

    const jobExist = interviewList.find(item => item.jobTitlen == cardInfo.jobTitle);

    if(!jobExist){
        interviewList.push(cardInfo);
    }
    // console.log(interviewList);





    

})


