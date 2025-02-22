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
// document.addEventListener("DOMContentLoaded", function () {
//     gsap.registerPlugin(ScrollTrigger);

//     document.addEventListener("mousemove", (event) => {
//         let xEventMouse = (event.clientX / window.innerWidth - 0.5) * 100; 
//         let yEventMouse = (event.clientY / window.innerHeight - 0.5) * 100; 

//         xEventMouse = Math.min(Math.max(xEventMouse, -50), 50);
//         yEventMouse = Math.min(Math.max(yEventMouse, -50), 50);

//         gsap.to(".icons", {
//             x: xEventMouse,
//             y: yEventMouse,
//             duration: 0.5,
//             ease: "power2.out"
//         });
//     });

//     icons.forEach((icon) => {
//         gsap.fromTo(icon,
//             { y: -30, opacity: 0 },
//             {
//                 y: 0, opacity: 1,
//                 duration: 0.5,
//                 scrollTrigger: {
//                     trigger: icon,
//                     start: "top 90%",
//                     end: "top 50%",
//                     toggleActions: "play none none reverse"
//                 }
//             }
//         );
//     });
// });


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




// document.addEventListener("mousemove", (event) => {
//     let xEventMouse = (event.clientX / window.innerWidth - 0.5) * 100;
//     let yEventMouse = (event.clientY / window.innerHeight - 0.5) * 100;

//     // تحديد الحدود
//     xEventMouse = Math.min(Math.max(xEventMouse, -50), 50);
//     yEventMouse = Math.min(Math.max(yEventMouse, -50), 50);

//     gsap.to(".icons", {
//         x: xEventMouse,
//         y: yEventMouse,
//         duration: 0.5,
//         ease: "power2.out"
//     });
// });

// window.addEventListener("resize", () => {
//     gsap.to(".icons", {
//         x: 0,
//         y: 0,
//         duration: 0.5,
//         ease: "power2.out"
//     });
// });
