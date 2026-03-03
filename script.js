let interviewList = [];
let rejectedList = []
let currentStatus = 'all'

let total = document.getElementById('total');
let jobCount = document.getElementById('jobCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')


function calculateCount() {
    total.innerText = allCardSection.children.length;
    jobCount.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount()


function toggleStyle(id) {
    
    allFilterBtn.classList.add('bg-white', 'text-[#64748B]')
    interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]')
    rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]')

    
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    
    const selected = document.getElementById(id)

    currentStatus = id
    console.log(currentStatus);
    

    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-[#3B82F6]', 'text-white')
    

    
    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected()
    }
}



mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const jobTitle = parenNode.querySelector('.jobTitle').innerText
        const jobDescription = parenNode.querySelector('.jobDescription').innerText
        const salary = parenNode.querySelector('.salary').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'INTERVIEW'

        const cardInfo = {
            jobTitle,
            jobDescription,
            salary,
            status: 'INTERVIEW',
            notes
        }

        const jobExist = interviewList.find(item => item.jobTitle == cardInfo.jobTitle)

        if (!jobExist) {
            interviewList.push(cardInfo)
        }

        
        rejectedList = rejectedList.filter(item => item.jobTitle != cardInfo.jobTitle)

        
        if (currentStatus == 'rejected-filter-btn') {
            renderRejected()
        }

         calculateCount()


    } else if (event.target.classList.contains('rejected-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const jobTitle = parenNode.querySelector('.jobTitle').innerText
        const jobDescription = parenNode.querySelector('.jobDescription').innerText
        const salary = parenNode.querySelector('.salary').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'REJECTED'

        const cardInfo = {
            jobTitle,
            jobDescription,
            salary,
            status: 'REJECTED',
            notes
        }

        const jobExist = rejectedList.find(item => item.jobTitle == cardInfo.jobTitle)

        if (!jobExist) {
            rejectedList.push(cardInfo)
        }

        
        interviewList = interviewList.filter(item => item.jobTitle != cardInfo.jobTitle)

        
        if (currentStatus == "interview-filter-btn") {
            renderInterview();
        }
        calculateCount()

    }

})


function renderInterview() {
    
    filterSection.innerHTML = '';

    
    for (let interview of interviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'card flex justify-between bg-white border border-white p-6 rounded-lg'
        div.innerHTML = `
         <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="jobTitle text-lg text-[#002C5C] font-semibold">${interview.jobTitle}</p>
                        <p class="jobDescription text-md text-[#64748B]"> ${interview.jobDescription}</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2">
                        <p class="salary text-md text-[#64748B]">${interview.salary}</p>
                    </div>
                    <!-- part 3 -->
                     <p class="status px-3 py-2 text-[#002C5C] bg-[#EEF4FF] rounded-lg inline-block">${interview.status}</p>
                     <p class="notes text-[#323B49]">${interview.notes}</p>

                     <div class="flex gap-2">
                        <button class="interview-btn text-[#10B981] font-semibold border-2 border-[#10B981] rounded-lg px-3 py-2 cursor-pointer hover:text-white hover:bg-[#10B981]">INTERVIEW</button>
                        <button class="struggling-btn rejected-btn text-[#EF4444] font-semibold border-2 border-[#EF4444] rounded-lg px-3 py-2 cursor-pointer hover:text-white hover:bg-[#EF4444]">REJECTED</button>
                    </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <button class="btn-delete border border-[#64748B] hover:border-[#EF4444] px-2 py-2 rounded-full cursor-pointer"><span class="text-[#64748B] hover:text-[#EF4444]"><i class="fa-regular fa-trash-can"></i></span></button>
                </div>
        `
        filterSection.appendChild(div);
    }
}

function renderRejected() {
    
    filterSection.innerHTML = '';

    for (let rejected of rejectedList) {

        let div = document.createElement('div');
        div.className = 'card flex justify-between bg-white border border-white p-6 rounded-lg'
        div.innerHTML = `
         <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="jobTitle text-lg text-[#002C5C] font-semibold">${rejected.jobTitle}</p>
                        <p class="jobDescription text-md text-[#64748B]">${rejected.jobDescription}</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2">
                        <p class="salary text-md text-[#64748B]">${rejected.salary}</p>
                    </div>
                    <!-- part 3 -->
                     <p class="status px-3 py-2 text-[#002C5C] bg-[#EEF4FF] rounded-lg inline-block">${rejected.status}</p>
                     <p class="notes text-[#323B49]">${rejected.notes}</p>

                     <div class="flex gap-2">
                        <button class="interview-btn text-[#10B981] font-semibold border-2 border-[#10B981] rounded-lg px-3 py-2 cursor-pointer hover:text-white hover:bg-[#10B981]">INTERVIEW</button>
                        <button class="struggling-btn rejected-btn text-[#EF4444] font-semibold border-2 border-[#EF4444] rounded-lg px-3 py-2 cursor-pointer hover:text-white hover:bg-[#EF4444]">REJECTED</button>
                    </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <button class="btn-delete border border-[#64748B] hover:border-[#EF4444] px-2 py-2 rounded-full cursor-pointer"><span class="text-[#64748B] hover:text-[#EF4444]"><i class="fa-regular fa-trash-can"></i></span></button>
                </div>
        `
        filterSection.appendChild(div);
    }
}

