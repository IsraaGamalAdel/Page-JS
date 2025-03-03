import { courseData, dataEvents, dataStudents, discountData } from "./data.js";

let signupName = document.getElementById('signupName');
let signupEmail = document.getElementById('signupEmail');
let signupPhone = document.getElementById('signupPhone');
let signupQualification = document.getElementById('signupQualification');
let signupAttendance = document.getElementById('signupAttendanceType');
let signupTime = document.getElementById('signupTimeType');
let viewDate = document.getElementById('dateSection');
// let visitorCount = document.getElementById("visitorCount");



document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch('https://myserverhost-001-site2.dtempurl.com/api/Camps/increment-code-visitors', {
        method: 'GET',
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Total Visitors:', data);
    }
    
});

// send date Home
function sendDate() {
    viewDate.scrollIntoView({ behavior: 'smooth' });
}

async function signUp() {

    if (validationName() && validationEmail() && validationQualification() && validationPhone() &&
        validationAttendance() && validationTime()) {

        let Data = {
            name: signupName.value,
            Email: signupEmail.value,
            phon: signupPhone.value,
            qualification: signupQualification.value,
            attendance: signupAttendance.value,
            time: signupTime.value
        };
        
        try {
            const senDate = await fetch('https://myserverhost-001-site2.dtempurl.com/api/Camps/register-code-camp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Data)
            });
        
            if (senDate.ok) { 
                const data = await senDate.json(); 
                console.log('Success:', data);
        
                let myModal = new bootstrap.Modal(document.getElementById('successModal'));
                myModal.show();
        
                if (data.redirectUrl) {
                    console.log("Redirecting to:", data.redirectUrl);
                    setTimeout(() => {
                        window.location.replace(data.redirectUrl);
                    }, 5000);
                }
        
                clearForm();
            } else {
                const errorData = await senDate.json();
                document.getElementById("signupMessage").innerHTML = errorData.title ;
            }
        } catch (error) {
            document.getElementById("signupMessage").innerHTML = "حدث خطأ في الاتصال بالخادم.";
        }
        
    } else {
        console.log("Validation failed");
    }
}


function clearForm() {
    signupName.value = "";
    signupEmail.value = "";
    signupQualification.value = "";
    signupPhone.value = "";
    signupAttendance.value = "";
    signupTime.value = "";
}

// validation
function validationName() {
    let incorrect = document.getElementById("incorrectName");
    let test = signupName.value;
    if (test) {
        signupName.classList.add("is-valid");
        signupName.classList.remove("is-invalid");
        incorrect.classList.add("d-none");
        return true;
    } else {
        signupName.classList.add("is-invalid");
        signupName.classList.remove("is-valid");
        incorrect.classList.remove("d-none");
        incorrect.innerHTML = " يرجى إدخال اسم صحيح";
        return false;
    }
}

function validationEmail() {
    let incorrect = document.getElementById("incorrectEmail");
    let test = signupEmail.value;
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(test)) {
        signupEmail.classList.add("is-valid");
        signupEmail.classList.remove("is-invalid");
        incorrect.classList.add("d-none");
        return true;
    } else {
        signupEmail.classList.add("is-invalid");
        signupEmail.classList.remove("is-valid");
        incorrect.classList.remove("d-none");
        incorrect.innerHTML = " يرجى إدخال بريد إلكتروني صحيح";
        return false;
    }
}

function validationPhone() {
    let incorrect = document.getElementById("incorrectPhone");
    let test = signupPhone.value;
    if (test) {
        signupPhone.classList.add("is-valid");
        signupPhone.classList.remove("is-invalid");
        incorrect.classList.add("d-none");
        return true;
    } else {
        signupPhone.classList.add("is-invalid");
        signupPhone.classList.remove("is-valid");
        incorrect.classList.remove("d-none");
        incorrect.innerHTML = " يرجى إدخال رقم هاتف صحيح";
        return false;
    }
}

function validationQualification() {
    let incorrect = document.getElementById("incorrectQualification");
    let test = signupQualification.value;
    if (test) {
        signupQualification.classList.add("is-valid");
        signupQualification.classList.remove("is-invalid");
        incorrect.classList.add("d-none");
        return true;
    } else {
        signupQualification.classList.add("is-invalid");
        signupQualification.classList.remove("is-valid");
        incorrect.classList.remove("d-none");
        incorrect.innerHTML = "يرجى اختيار مؤهل علمي";
        return false;
    }
}

function validationAttendance() {
    let incorrect = document.getElementById("incorrectAttendance");
    let test = signupAttendance.value;
    if (test) {
        signupAttendance.classList.add("is-valid");
        signupAttendance.classList.remove("is-invalid");
        incorrect.classList.add("d-none");
        return true;
    } else {
        signupAttendance.classList.add("is-invalid");
        signupAttendance.classList.remove("is-valid");
        incorrect.classList.remove("d-none");
        incorrect.innerHTML = "يرجى اختيار نوع الحضور";
        return false;
    }
}

function validationTime() {
    let incorrect = document.getElementById("incorrectTime");
    let test = signupTime.value;
    if (test) {
        signupTime.classList.add("is-valid");
        signupTime.classList.remove("is-invalid");
        incorrect.classList.add("d-none");
        return true;
    } else {
        signupTime.classList.add("is-invalid");
        signupTime.classList.remove("is-valid");
        incorrect.classList.remove("d-none");
        incorrect.innerHTML = "يرجى اختيار وقت صحيح";
        return false;
    }
}

// Even Icon
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    document.addEventListener("mousemove", (event) => {
        let xEventMouse = (event.clientX / window.innerWidth - 0.5) * 100; 
        let yEventMouse = (event.clientY / window.innerHeight - 0.5) * 100; 

        xEventMouse = Math.min(Math.max(xEventMouse, -50), 50);
        yEventMouse = Math.min(Math.max(yEventMouse, -50), 50);

        gsap.to(".icons img", {
            x: xEventMouse,
            y: yEventMouse,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    const image = document.querySelector(".icons img");
    if (image) {
        gsap.fromTo(image,
            { y: 10, opacity: 0 },
            {
                y: 0, opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: image,
                    start: "top 90%",
                    end: "top 50%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }
});



let coursesContainer = document.getElementById('coursesContainer');
let container = document.getElementById("contentContainer");
let eventsContainer = document.getElementById('eventsContainer');


// courses
function displayCourses() {
    const rowContainer = coursesContainer.querySelector('.row'); 
    rowContainer.innerHTML = '';

    courseData.forEach((course, index) => {
        const courseSection = document.createElement('section');
        courseSection.classList.add('col-md-12', 'my-5' ); 

        if (index % 2 === 0) {
            courseSection.classList.add('odd');
            courseSection.style.backgroundImage = 'var(--gradient_odd)';
        } else {
            courseSection.classList.add('even');
            courseSection.style.backgroundImage = 'var(--gradient_even)';
        }

        courseSection.innerHTML = `
            <div class="row px-4 py-0 ">
                <div class="col-md-2 col-sm-12 col-12 d-flex align-items-center justify-content-center">
                    <div class="text pe-0 pt-4">
                        <h3 class=" text-center">${course.title}</h3>
                    </div>
                </div>

                <div class="col-md-9 col-sm-12 col-12 pt-3  my-0 text-end  paddingList">
                    <h4 class="text-white fs-2 fw-bolder">${course.concepts}</h4>
                    <p class="text-white">${course.description}</p>
                    
                    <ul>
                        ${course.details.map((detail) => {
                            if (detail.trim() === "المفاهيم المتقدمة:") {
                                return `</ul><h3 class=" fw-bolder text-white mt-3">${detail}</h3><ul>`; 
                            }
                            return `<li class="mb-2">${detail}</li>`;
                        }).join('')}
                    </ul>
                </div>

                <div class="col-md-1 col-sm-12 col-12">
                    <div class=" heightImg">
                        <div class="ps-0 text-start"> 
                            ${course.image.trim() === "Assets/number/Asset9@4x.png" ?
                                `<img class="img-fluid imgNumber ps-0 pt-0 " src="${course.image}" alt="number"/>` :
                                `<img class="img-fluid imgNumber ms-0" src="${course.image}" alt="number"/>`
                            }
                        </div>

                        <div class="d-flex justify-content-end gap-3">
                            <img class="img-fluid imgNumberIcon mb-0 mt-0" src="${course.iconTime}" alt="number"/>
                            <p class="marginP fw-bold mt-0 align-content-center">${course.duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        
        rowContainer.appendChild(courseSection);
    });
};

function createContent (){
    dataStudents.forEach((student) => {
        const section = document.createElement("div");
        section.classList.add("col-md-6" , "d-flex" , "justify-content-center" );
        section.innerHTML = `
            <div class="box py-3 ">
                <div class="row align-items-center">
                    <div class="col-md-3 col-sm-3 col-3 d-flex justify-content-center">
                        <img class="img-fluid imgBox" src="${student.icon}" alt="number"/>
                    </div>
                    <div class="col-md-9 col-sm-9 col-9">
                        <span class="">${student.title}</span>
                    </div>
                </div>
                <div class="pt-3 bodyText">
                    <ul>
                        ${student.items.map((item) => `<li class="fs-5 fw-light">${item}</li>`).join("")}
                    </ul>
                </div>
            </div>
        `;
        container.appendChild(section);
    }); 
};

//dataEvents
function eventsDate() {
    // Date Events
    const eventsRow = document.createElement('div');
    eventsRow.classList.add( 'col-md-8', 'col-sm-12');
    const eventsAddRow = document.createElement('div');
    eventsAddRow.classList.add('row');

    //one row (col-md-8)
    dataEvents.forEach((event) => {
        const eventCol = document.createElement('div');
        eventCol.classList.add('col-lg-4' , 'col-sm-6' , 'col-6', 'mb-4');

        const eventContent = `
            <div class="d-flex align-items-center mx-4">
                <img class=" imgNumberEven" src="${event.icon}" alt="number"/>
                <div class="marginRightH6">
                    <h6 class=" mb-2">${event.title}</h6>
                    <h6 class= "">${event.date}</h6>
                </div>
            </div>
        `;
        eventCol.innerHTML = eventContent;
        eventsAddRow.appendChild(eventCol);
    }); 
    
    // Booking Section
    const bookingCol = document.createElement('div');
    bookingCol.classList.add('row', 'col-lg-12', 'mb-4' ,'mt-3');

    const bookingContent = `
        <div class="col-md-7">
            <div class="d-flex align-items-center mx-3">
                <img class=" imgIcon" src="Assets/icon/Asset 8@4x.png" alt="number"/>
                <div class="pe-3">
                    <h5 class=" text mb-0"> 
                        (يتم استكمال باقى مبلغ المعسكر بعد حضور اول محاضرة)
                    </h5>
                </div>
            </div>
        </div>

        <div class="col-md-5 text-center pe-0">
            <p class="text-white fw-light fs-4">المعسكر لا يتضمن اختبارات دولية</p>
        </div>
        
    `;
    bookingCol.innerHTML = bookingContent;
    eventsAddRow.appendChild(bookingCol);

    eventsRow.appendChild(eventsAddRow);

    // Many Section 
    // tow row (col-md-4)

    const discountCol = document.createElement('div');
    discountCol.classList.add( 'col-md-4', 'col-sm-12', 'd-flex', 'justify-content-center' , 'align-items-top');

    discountData.forEach((discount) => {
        const discountContent = document.createElement('div');
        discountContent.classList.add('d-flex', 'flex-column', 'align-items-center' );

        // numbers Div
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('bgIcon', 'px-4', 'py-2', 'd-flex', 'flex-column', 'align-items-center');
        const sortedNumbers = [...discount.numbers].sort((number1, number2) => number2 - number1);

        // numbers container
        sortedNumbers.forEach((num, index) => {
            const numSpan = document.createElement('div');
            numSpan.classList.add('d-flex', 'align-items-center', 'position-relative' , 'justify-content-center');
        
            // Add number
            numSpan.innerHTML = `
                <h4 class=" fw-bolder fs-3">${num}</h4>
                ${index === 0 ? '<i class="fa-solid fa-xmark d-flex position-absolute top-2 end-0 pe-3 fs-1 text-dark"></i>' : ''}
            `;
        
            // Append the number span to the container
            numberDiv.appendChild(numSpan);
        
            // Add <hr> after each number except the last one
            if (index < sortedNumbers.length - 1) {
                const hr = document.createElement('hr');
                hr.classList.add('border'); // Adjust margin as needed
                numberDiv.appendChild(hr);
            }
        });

        // discount container
        discountContent.innerHTML = `
            <h4 class="fs-1 fw-bolder text">${discount.title}</h4>
            <p class= "fs-2 fw-light" >${discount.description}</p>
        `;
        discountContent.appendChild(numberDiv);
        discountCol.appendChild(discountContent);
    });

    // Main Container
    const mainRow = document.createElement('div');
    mainRow.classList.add('row', 'justify-content-center');
    mainRow.appendChild(eventsRow);
    mainRow.appendChild(discountCol);

    eventsContainer.appendChild(mainRow);
};


window.onload = function() {
    createContent();
    displayCourses();
    eventsDate();
};