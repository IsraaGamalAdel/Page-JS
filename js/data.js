// Date Courses
const courseData = [
    {
        title: "SQL",
        concepts: "المفاهيم المغطاة",
        description: "مقدمة عن قواعد البيانات وأنظمة إدارة قواعد البيانات",
        details: [
            " أنواع قواعد البيانات: العلائقية (Relational)  مقابل غير  العلائقية (NoSQL)",
            " إنشاء وتعديل الجداول (CREATE, ALTER, DROP)",
            " لغة معالجة البيانات (DML):",
            "  إدخال البيانات (INSERT) ",
            " تحديث البيانات (UPDATE)",
            "  حذف البيانات (DELETE)",
            "  الاستعلامات الأساسية واسترجاع البيانات (SELECT, WHERE, ORDER BY, GROUP BY, HAVING)",
            " ربط الجداول (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN)",
            " التعامل مع القيود (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL)",
            " تحسين الأداء باستخدام الفهارس",
        ],
        image: "Assets/Numder(2)/Asset1.svg",
        duration: "المدة أسبوعان",
        iconTime: "Assets/icon/Asset 1@4x.png"
    },
    {
        title: "لغة #C ",
        concepts: "المفاهيم المغطاة",
        description: " التعرف على بنية البرنامج" ,
        details: [
            "كتابة أول برنامج بلغة #C",
            "  أنواع البيانات (int, double, string, char, bool, وغيرها)",
            "المتغيرات والثوابت",
            "الجمل الشرطية (If-Else, Switch Case)",
            " الحلقات (For, While, Do-While)",
            " المصفوفات والقوائم (مصفوفات أحادية ومتعددة الأبعاد، والقوائم) ",
            "المفاهيم المتقدمة:",
            " الدوال (تعريف واستدعاء الدوال، المعاملات وقيم الإرجاع)",
            "  معالجة الأخطاء باستخدام (Try-Catch-Finally) وإنشاء استثناءات مخصصة",

        ],
        duration: "المدة أسبوعان",
        image: "Assets/Numder(2)/Asset2.svg",
        iconTime: "Assets/icon/Asset 1@4x.png"
    },
    {
        title: "#C باستخدام  (OOP) ",
        concepts: "المفاهيم المغطاة",
        description: " الفئات (Classes) والكائنات (Objects)",
        details: [
            " الوراثة، التعددية الشكلية (Polymorphism)، التغليف والتجريد",
            "المفاهيم المتقدمة:",
            "الواجهات والفئات المجردة",
            "التحميل الزائد (Overloading) والتجاوز (Overriding)",
            "معدلات الوصول (public, private, protected)",
            " الأعضاء والدوال الثابتة",
        ],
        duration: "المدة أسبوع",
        image: "Assets/Numder(2)/Asset3.svg",
        iconTime: "Assets/icon/Asset 1@4x.png"
    },
    {
        title: "HTML - CSS JAVASCRIPT BOOTSTRAP",
        concepts: "المفاهيم المغطاة",
        description: "",
        details: [
            "HTML5: بناء الصفحات، العناصر الأساسية، الوسائط المتعددة، القوائم، الجداول، النماذج، والعناصر الدلالية",
            "CSS3: النماذج الصندوقية (Box Model)، التصميم المتجاوب، Flexbox، وGrid",
            "JavaScript: أساسيات اللغة، الدوال، التفاعل مع DOM، معالجة الأحداث، واستخدام AJAX وFetch API",
            "Bootstrap: نظام الشبكة (Grid System)، المكونات الجاهزة، والتخصيص",
        ],
        duration: "المدة 4أسابيع",
        image: "Assets/Numder(2)/Asset4.svg" ,
        iconTime: "Assets/icon/Asset 1@4x.png"
    },
    {
        title: "ENTITY FRAMEWORK CORE",
        concepts: "المفاهيم المغطاة",
        description: "",
        details: [
            "مقدمة في ORM، إنشاء وتكوين DbContext، التعامل مع العلاقات (واحد-واحد، واحد-متعدد، متعدد-متعدد)",
            " تنفيذ العمليات CRUD باستخدام EF Core",
            "استخدام LINQ للاستعلام",
            "إدارة الترحيلات (Migrations)",
        ],
        duration: "المدة أسبوعان",
        image: "Assets/Numder(2)/Asset5.svg",
        iconTime: "Assets/icon/Asset 1@4x.png"
    },
    {
        title: "APS.NET CORE MVC",
        concepts: "المفاهيم المغطاة",
        description: "",
        details: [
            "مقدمة في بنية MVC",
            "إنشاء أول تطبيق MVC",
            " تنفيذ العمليات CRUD باستخدام EF Core",
            "التعامل مع النماذج والتحقق من صحة المدخلات",
            "المصادقة وإدارة الصلاحيات",
        ],
        duration: "المدة 4أسابيع",
        image: "Assets/Numder(2)/Asset6.svg",
        iconTime: "Assets/icon/Asset 1@4x.png"
    },
    {
        title: "ASP.NET Core",
        concepts: "المفاهيم المغطاة",
        description: "",
        details: [
            "مقدمة في Web API",
            "التحكم في البيانات والتوجيه (Controllers & Routing)",
            "التعامل مع البيانات باستخدام Entity Framework Core",
            "التحقق من صحة البيانات وإدارة الطلبات",
            "توثيق الـ API والاختبار"
        ],
        duration: "المدة أسبوعان",
        image: "Assets/Numder(2)/Asset7.svg",
        iconTime: "Assets/icon/Asset 1@4x.png"
    },
    {
        title: "CLEAN ARCHITECTURE",
        concepts: "المفاهيم المغطاة",
        description: "",
        details: [
            "مبادئ الهيكلية النظيفة وفصل المسؤوليات",
            "استخدام أنماط الخدمة والمستودع (Service & Repository Patterns)",
            "تكوين AutoMapper لنقل البيانات بين الطبقات",
        ],
        duration: "المدة 4أسابيع",
        image: "Assets/Numder(2)/Asset8.svg",
        iconTime: "Assets/icon/Asset 1@4x.png"
    },
    {
        title: "FLUTTER",
        concepts: "المفاهيم المغطاة",
        description: "",
        details: [
            "مقدمة في بنية MVC",
            "إنشاء أول تطبيق MVC",
            " تنفيذ العمليات CRUD باستخدام EF Core",
            "التعامل مع النماذج والتحقق من صحة المدخلات",
            "المصادقة وإدارة الصلاحيات",
        ],
        duration: "المدة أسبوعان",
        image: "Assets/number/Asset9@4x.png",
        iconTime: "Assets/icon/Asset 1@4x.png"
    },
    
]

const dataStudents = [
    {
        icon: "Assets/icon/Asset 13@4x.png",
        title: "مشاريع عملية نهائية",
        items: [
            "بناء تطبيق ويب باستخدام ASP.NET Core MVC وEntity Framework.",
            "بناء تطبيق موبايل باستخدام Flutter متصل بقاعدة بيانات عبر API.",
            "تطوير حل متكامل للتجارة الإلكترونية يشمل تطبيق ويب وموبايل."
        ]
    },
    {
        icon: "Assets/icon/Asset 12@4x.png",
        title: "اكتساب المهارات التالية",
        items: [
            "إتقان البرمجة باستخدام SQLو #C وJavaScript.",
            "فهم بنية MVC وتطبيقها في مشاريع حقيقية.",
            "تطوير تطبيقات متجاوبة ومتصلة بقاعدة بيانات باستخدام أحدث التقنيات.",
            "نشر التطبيقات على الويب ومتاجر التطبيقات."
        ]
    },
    {
        icon: "Assets/icon/Asset 15@4x.png",
        title: "زيادة فرص العمل",
        items: [
            "التمكن من تطوير حلول برمجية شاملة للشركات والأفراد.",
            "الحصول على المهارات اللازمة للعمل كـ Full Stack Developer.",
            "تطوير حل متكامل للتجارة الالكترونية يشمل تطبيق ويب وموبيل."
        ]
    },
    {
        icon: "Assets/icon/Asset 14@4x.png",
        title: "تجربة تعلم شاملة ومتكاملة",
        items: [
            "فهم التقنيات الأساسية والمتقدمة في تطوير التطبيقات.",
            "التعلم من خلال العمل على مشاريع حقيقية تُحاكي احتياجات السوق.",
        ]
    }
];

const dataEvents = [
    {
        icon: 'Assets/icon/Asset 6@4x.png',
        title: 'بداية من',
        date: '27/5/2025'
    },
    {
        icon: 'Assets/icon/Asset 5@4x.png',
        title: ' مدة المعسكر ',
        date: '  16 اسبوع '
    },
    {
        icon: 'Assets/icon/Asset 4@4x.png',
        title: ' تقديم الدورة  ',
        date: ' حضوري - عن بعد '
    },
    {
        icon: 'Assets/icon/Asset 6@4x.png',
        title: 'بداية من',
        date: '27/5/2025'
    },
    {
        icon: 'Assets/icon/Asset 5@4x.png',
        title: ' مدة المعسكر ',
        date: '  16 اسبوع '
    },
    {
        icon: 'Assets/icon/Asset 4@4x.png',
        title: ' تقديم الدورة  ',
        date: ' حضوري - عن بعد '
    }
];

const discountData = [
    {
        title: "خصم %40" ,
        description: "على سعر المعسكر",
        numbers: [ " 8,350 ريال"  , "5,000 ريال"]
    }
];


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
            <div class="d-flex align-items-center pe-5">
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
            <div class="d-flex align-items-center pe-5">
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


