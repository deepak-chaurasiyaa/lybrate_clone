let hospitalDetails = [
    {
        logo: 'https://assets.lybrate.com/q_auto,f_auto,w_150,h_150,c_fill,g_auto/img/documents/clinic/logo/9ab43e114f32b00879d24ec77b5c6dcb/Chatterjee-Skin-Care-Center-Dermatologist-Cosmetologist-New-Delhi-c3810f.jpg',
        hospital: 'Chateerjee Skin Care Center',
        categoryOfHospital: 'Dermatologist',
        adress: '1/2054, Durga Mandir Marg, Mandoli Road, Shahdara',
        image1: 'https://assets.lybrate.com/q_auto:low,f_auto,h_35,w_35,g_auto,c_fill/imgs/ps/cl/9ab43e114f32b00879d24ec77b5c6dcb/3d9dccdff74fe473386fe44ae478bed0/50x50/Chatterjee-Skin-Care-Center-Delhi-2441a3.jpg',
        image2: 'https://assets.lybrate.com/q_auto:low,f_auto,h_35,w_35,g_auto,c_fill/imgs/ps/cl/9ab43e114f32b00879d24ec77b5c6dcb/3d9dccdff74fe473386fe44ae478bed0/50x50/Chatterjee-Skin-Care-Center-Delhi-2441a3.jpg',
        image3: 'https://assets.lybrate.com/q_auto:low,f_auto,h_35,w_35,g_auto,c_fill/imgs/ps/cl/9ab43e114f32b00879d24ec77b5c6dcb/3d9dccdff74fe473386fe44ae478bed0/50x50/Chatterjee-Skin-Care-Center-Delhi-2441a3.jpg',
        rating: '4.6 (187 rating)',
        feedback: '29 patients feedback(s)',
        experience: '45  Years experience',
        fees: '500 at clinic'
    },
    {
        logo: 'https://assets.lybrate.com/q_auto,f_auto,w_150,h_150,c_fill,g_auto/img/documents/clinic/logo/937f9fd687a2e32724563f1de897f6b9/Green-Park-Family-Medicine-Clinic-Dermatologist-Cosmetologist-New-Delhi-19546d.jpg',
        hospital: 'Green Park Family medicine Clinic',
        categoryOfHospital: 'Dermatologist',
        adress: 'S-34, Green Park Main Market',
        image1: 'https://assets.lybrate.com/q_auto:low,f_auto,h_35,w_35,g_auto,c_fill/imgs/ps/cl/937f9fd687a2e32724563f1de897f6b9/95b549edc58bab3073e2a383e62c14f1/50x50/Green-Park-Family-Medicine-Clinic-Delhi-1eab9a.png',
        image2: 'https://assets.lybrate.com/q_auto:low,f_auto,h_35,w_35,g_auto,c_fill/imgs/ps/cl/937f9fd687a2e32724563f1de897f6b9/95b549edc58bab3073e2a383e62c14f1/50x50/Green-Park-Family-Medicine-Clinic-Delhi-fe3cf7.png',
        image3: 'https://assets.lybrate.com/q_auto:low,f_auto,h_35,w_35,g_auto,c_fill/imgs/ps/cl/9ab43e114f32b00879d24ec77b5c6dcb/3d9dccdff74fe473386fe44ae478bed0/50x50/Chatterjee-Skin-Care-Center-Delhi-2441a3.jpg',
        rating: '4.4 (81 rating)',
        feedback: '49 patients feedback(s)',
        experience: '16  Years experience',
        fees: '700 at clinic'
    },
    {
        logo: 'https://assets.lybrate.com/q_auto,f_auto,w_150,h_150,c_fill,g_auto/img/documents/clinic/logo/d4aed8add0ea60675db3bf9fc36d3d0c/Valeda-Skin-Hair-Clinic-Dermatologist-Ghaziabad-46e91b',
        hospital: 'Valeda Skin & Hair Clinic',
        categoryOfHospital: 'Dermatologist',
        adress: 'Ground Floor, W-1 Greater Kailash Part-1,Near BSES Office',
        image1: 'https://assets.lybrate.com/q_auto:low,f_auto,h_35,w_35,g_auto,c_fill/imgs/ps/cl/d4aed8add0ea60675db3bf9fc36d3d0c/027f02d488776eb64f3577ca5c785268/50x50/Valeda-Skin-Hair-Clinic-Ghaziabad-1f2533.jpg',
        image2: 'https://assets.lybrate.com/q_auto:low,f_auto,h_35,w_35,g_auto,c_fill/imgs/ps/cl/d4aed8add0ea60675db3bf9fc36d3d0c/027f02d488776eb64f3577ca5c785268/50x50/Valeda-Skin-Hair-Clinic-Ghaziabad-59735d.jpg',
        image3: "https://assets.lybrate.com/q_auto:low,f_auto,h_35,w_35,g_auto,c_fill/imgs/ps/cl/d4aed8add0ea60675db3bf9fc36d3d0c/027f02d488776eb64f3577ca5c785268/50x50/Valeda-Skin-Hair-Clinic-Ghaziabad-4b4201.jpg",
        rating: '4.8 (321 ratings)',
        feedback: '11 patients feedback(s)',
        experience: '30  Years experience',
        fees: '1000 at clinic'
    }
]

function slideshow() {
    let upperdiv = document.getElementById('slidingHospitalDetails'); //div to insert slideshow

    //logo of the hospital
    let logoDiv = document.createElement('div');
    logoDiv.setAttribute('class', 'hospitalLogo');
    let imageLogo = document.createElement('img');
    imageLogo.src = hospitalDetails[0].logo;
    logoDiv.append(imageLogo);

    //all details about hospital , name, address
    let hospitalDiv = document.createElement('div');
    hospitalDiv.setAttribute('class', 'hospitalDiv');

    let hospitalName = document.createElement('p');
    hospitalName.setAttribute('class', 'hospitalName');  //name
    hospitalName.innerHTML = hospitalDetails[0].hospital;

    let hospitalCatg = document.createElement('p');
    hospitalCatg.setAttribute('class', 'hospitalCatg');   //speciliztion category
    hospitalCatg.innerHTML = hospitalDetails[0].categoryOfHospital;

    let hospitalAdd = document.createElement('p');
    hospitalAdd.setAttribute('class', 'hospitalAdd');  //adress
    hospitalAdd.innerHTML = hospitalDetails[0].adress;

    let hospitalImages = document.createElement('div');
    hospitalImages.setAttribute('class', 'hospitalImages');
    let hospitalImg1 = document.createElement('img');  //hospital images
    let hospitalImg2 = document.createElement('img');
    let hospitalImg3 = document.createElement('img');
    hospitalImg1.src = hospitalDetails[0].image1;
    hospitalImg2.src = hospitalDetails[0].image2;
    hospitalImg3.src = hospitalDetails[0].image3;
    hospitalImages.append(hospitalImg1, hospitalImg2, hospitalImg3);

    hospitalDiv.append(hospitalName, hospitalCatg, hospitalAdd, hospitalImages);

    //feedback and experience of users about hospital
    let experienceDiv = document.createElement('div');
    experienceDiv.setAttribute('class', 'experienceDiv');
    let rating = document.createElement('p')
    rating.innerHTML = `<i class="fas fa-star"></i> ${hospitalDetails[0].rating}`; //rating
    let feedback = document.createElement('p'); //feedback
    feedback.innerHTML = `<i class="fas fa-comment-dots"></i> ${hospitalDetails[0].feedback}`;
    let experience = document.createElement('p') //experience
    experience.innerHTML = `<i class="fas fa-medkit"></i> ${hospitalDetails[0].experience}`;
    let fees = document.createElement('p') //fees
    fees.innerHTML = `<i class="fas fa-money-bill"></i> ${hospitalDetails[0].fees}`;
    experienceDiv.append(rating, feedback, experience, fees);

    // buttons div
    let buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('class', 'buttonsDiv')
    let consult = document.createElement('button');
    consult.innerHTML = `<i style='font-size:24px' class='far'>&#xf086;</i>consult Online`;

    let book = document.createElement('button');
    book.innerHTML = `<i style="font-size:24px" class="fa">&#xf073;</i>Book Apointment`

    let call = document.createElement('button');
    call.innerHTML = `<i style="font-size:24px" class="fa">&#xf095;</i>Call Doctor`

    buttonsDiv.append(call, consult, book)

    upperdiv.append(logoDiv, hospitalDiv, experienceDiv);
    document.getElementById('contactButton').append(buttonsDiv)

    let i = 0;

    setInterval(function () {           //to run slideshow for 3 sec each image
        if (i == 3)
            i = 0;
        hospitalName.innerHTML = hospitalDetails[i].hospital;
        hospitalCatg.innerHTML = hospitalDetails[i].categoryOfHospital;
        hospitalAdd.innerHTML = hospitalDetails[i].adress;
        hospitalImg1.src = hospitalDetails[i].image1;
        hospitalImg2.src = hospitalDetails[i].image2;
        hospitalImg3.src = hospitalDetails[i].image3;
        imageLogo.src = hospitalDetails[i].logo;
        rating.innerHTML = `<i class="fas fa-star"></i> ${hospitalDetails[i].rating}`;
        feedback.innerHTML = `<i class="fas fa-comment-dots"></i> ${hospitalDetails[i].feedback}`;
        experience.innerHTML = `<i class="fas fa-medkit"></i> ${hospitalDetails[i].experience}`;
        fees.innerHTML = `<i class="fas fa-money-bill"></i> ${hospitalDetails[i].fees}`;
        i++;
    }, 1200)
}

slideshow()


let doctors = [
    {
        logo: 'https://assets.lybrate.com/q_auto,f_auto,w_150,h_150,c_fill,g_auto/img/documents/doctor/dp/b6cf88abe105c390d938d4e8f06f0d19/Dermatology-GauravGarg-Delhi-610d87.jpg',
        name: 'Dr. Gaurav Garg',
        degree: 'Fellow In Dermato - Surgery, Fellow In Hair Transplant Surgery, MD - Dermatology, MBBS',
        categoryOfHospital: 'Dermatologist',
        hospital: 'Dermalife Clinic  ',
        adress: 'Janakpuri',
        recent: '<p class="recentConsult">Recently consulted for: </p><p>Hair Loss, Baldness, Hair Growth</p>',
        rating: '4.8 (321 ratings)',
        feedback: '11 patients feedback(s)',
        experience: '30  Years experience',
        fees: '1000 at clinic',
        availability: " Available today<p id='timing'> 04:00 PM - 07:30 Pm</p>"
    },
    {
        logo: 'https://assets.lybrate.com/q_auto,f_auto,w_150,h_150,c_fill,g_auto/img/documents/doctor/dp/47f84d26a69558d2128813e2ab1b52cd/Dermatology-PankajChaturvediMd-Delhi-642565.jpg',
        name: 'Dr. Pankaj Chaturvedi',
        degree: 'MD, MBBS',
        categoryOfHospital: 'Dermatologist',
        hospital: 'MedLinks',
        adress: 'Janakpuri',
        recent: '<p class="recentConsult">Recently consulted for: </p><p>Hair Loss, Hair Treatment, Allergy</p>',
        rating: '3.4 (32 ratings)',
        feedback: '18 patients feedback(s)',
        experience: '16  Years experience',
        fees: '1500 at clinic',
        availability: "Available today<p id='timing'> 10:00 AM - 08:00 pm</p>"
    },
    {
        logo: 'https://assets.lybrate.com/q_auto,f_auto,w_150,h_150,c_fill,g_auto/img/documents/doctor/dp/d230b9d140db58c2494fb286f114de90/Dermatology-LipyGupta-New-Delhi-19cca9.jpg',
        name: 'Dr.Dr. Lipy Gupta',
        degree: 'MD - Dermatology , Venereology & Leprosy, MBBS',
        categoryOfHospital: 'Dermatologist',
        hospital: 'Green Park Family Medicine Clinic ',
        adress: 'Green Park',
        recent: '<p class="recentConsult">Recently consulted for: </p><p>Pimples, Hair Fall, Acne/Pimples</p>',
        rating: '3.8 (35 ratings)',
        feedback: '21 patients feedback(s)',
        experience: '16  Years experience',
        fees: '700 at clinic',
        availability: "Available today<p id='timing'> 10:00 AM - 08:00 pm</p>"
    },
    {
        logo: 'https://assets.lybrate.com/q_auto,f_auto,w_150,h_150,c_fill,g_auto/img/documents/doctor/dp/1b1b404b79e00f5c2ebb70212365a3b9/Dermatology-SandeshGupta-Delhi-81fe25.jpg',
        name: 'Dr. Sandesh Gupta',
        degree: 'Diploma in Venerology & Dermatology (DVD)',
        categoryOfHospital: 'Dermatologist',
        hospital: 'Skin N Laser Centre  &  1 more clinic ',
        adress: 'Green Park',
        recent: '<p class="recentConsult">Recently consulted for: </p><p>Pimples, Acne/Pimples, Hair Fall</p>',
        rating: '3.8 (35 ratings)',
        feedback: '177 patients feedback(s)',
        experience: '26  Years experience',
        fees: '400 at clinic',
        availability: "Available today<p id='timing'> 10:00 AM - 06:00 pm</p>"
    },
    {
        logo: 'https://assets.lybrate.com/q_auto,f_auto,w_150,h_150,c_fill,g_auto/img/documents/doctor/dp/0da42e6b34a151aaee1714e401bb03a5/Dermatology-AmitSeth-New-Delhi-9763ce.jpg',
        name: 'Dr. Amit Seth',
        degree: 'MD, MBBS',
        categoryOfHospital: 'Dermatologist',
        hospital: 'Dermato Surgery Center  &  1 more clinic',
        adress: 'Green Park',
        recent: '<p class="recentConsult">Recently consulted for: </p><p>Advanced Skin Care, Skin Care, Acne Scars Treatment</p>',
        rating: '3.8 (35 ratings)',
        feedback: '35 patients feedback(s)',
        experience: '26  Years experience',
        fees: '800 at clinic',
        availability: " Available today <p id='timing'> 09:00 AM - 05:00 pm</p>"
    },
    {
        logo: 'https://assets.lybrate.com/q_auto,f_auto,w_150,h_150,c_fill,g_auto/img/documents/doctor/dp/6e76e93c74061a97e47bde8814ba7bb0/Dermatology-GeetikaMittalGupta-Delhi-2fe3b4.JPG',
        name: 'Dr. Geetika Mittal Gupta',
        degree: 'Post Graduate Diploma Practical Dermatology,',
        categoryOfHospital: 'Dermatologist',
        hospital: 'Isaac - International Skin & Anti A ...  ',
        adress: 'Green Park',
        recent: '<p class="recentConsult">Recently consulted for: </p><p> Laser Hair Removal, Growing beard</p>',
        rating: '2.9 (21 ratings)',
        feedback: '31 patients feedback(s)',
        experience: '12  Years experience',
        fees: '600 at clinic',
        availability: " Available today <p id='timing'> 11:00 AM - 05:00 pm</p>"
    },
    {
        logo: 'https://assets.lybrate.com/q_auto,f_auto,w_150,h_150,c_fill,g_auto/img/documents/doctor/dp/6e76e93c74061a97e47bde8814ba7bb0/Dermatology-GeetikaMittalGupta-Delhi-2fe3b4.JPG',
        name: 'Dr. Mittal Gupta',
        degree: ' Diploma Practical Dermatology,',
        categoryOfHospital: 'Dermatologist',
        hospital: 'International Skin & Anti A ...  ',
        adress: 'Janakpuri',
        recent: '<p class="recentConsult">Recently consulted for: </p><p> Laser Hair Removal, Growing beard</p>',
        rating: '2.3 (21 ratings)',
        feedback: '31 patients feedback(s)',
        experience: '4  Years experience',
        fees: '800 at clinic',
        availability: " Available today <p id='timing'> 09:00 AM - 05:00 pm</p>"
    }
]


function appendDoctors(doctorDetails) {

    let upperdiv = document.getElementById('doctorsDetails'); //div to insert slideshow

    let mainDiv = document.createElement('div');
    let eachdiv = document.createElement('div');
    eachdiv.setAttribute('class', 'eachdiv');

    //logo of the hospital
    let logoDiv = document.createElement('div');
    logoDiv.setAttribute('class', 'doctorLogo');
    let imageLogo = document.createElement('img');
    imageLogo.src = doctorDetails.logo;
    logoDiv.append(imageLogo);

    //all details about hospital , name, address
    let doctorDiv = document.createElement('div');
    doctorDiv.setAttribute('class', 'doctorDiv');

    let doctorName = document.createElement('p');
    doctorName.setAttribute('class', 'doctorName');  //name
    doctorName.innerHTML = doctorDetails.name;

    let degree = document.createElement('p'); //degre
    degree.setAttribute('class', 'degree');
    degree.innerHTML = doctorDetails.degree;

    let hospitalCatg = document.createElement('p');
    hospitalCatg.setAttribute('class', 'Catg');   //speciliztion category
    hospitalCatg.innerHTML = doctorDetails.categoryOfHospital;

    let hospitalWorking = document.createElement('p'); //working
    hospitalWorking.setAttribute('class', 'working');
    hospitalWorking.innerHTML = doctorDetails.hospital;

    let hospitalAdd = document.createElement('p');
    hospitalAdd.setAttribute('class', 'Add');  //adress
    hospitalAdd.innerHTML = doctorDetails.adress;

    let recent = document.createElement('p');//recent
    recent.setAttribute('class', 'recentConsult');
    recent.innerHTML = doctorDetails.recent;

    doctorDiv.append(doctorName, degree, hospitalCatg, hospitalWorking, hospitalAdd, recent);

    //feedback and experience of users about hospital
    let experienceDiv = document.createElement('div');
    experienceDiv.setAttribute('class', 'experienceDiv2');
    let rating = document.createElement('p')
    rating.innerHTML = `<i class="fas fa-star"></i> ${doctorDetails.rating}`; //rating
    let feedback = document.createElement('p'); //feedback
    feedback.innerHTML = `<i class="fas fa-comment-dots"></i> ${doctorDetails.feedback}`;
    let experience = document.createElement('p') //experience
    experience.innerHTML = `<i class="fas fa-medkit"></i> ${doctorDetails.experience}`;
    let fees = document.createElement('p') //fees
    fees.innerHTML = `<i class="fas fa-money-bill"></i> ${doctorDetails.fees}`;
    let availability = document.createElement('p');
    availability.innerHTML = `<i style="font-size:24px" class="fa">&#xf017;</i> ${doctorDetails.availability}`
    experienceDiv.append(rating, feedback, experience, fees, availability);

    // buttons div
    let buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('class', 'buttonsDiv')
    let consult = document.createElement('button');
    consult.innerHTML = `<i style='font-size:24px' class='far'>&#xf086;</i>consult Online`;

    let book = document.createElement('button');
    book.innerHTML = `<i style="font-size:24px" class="fa">&#xf073;</i>Book Apointment`

    let call = document.createElement('button');
    call.innerHTML = `<i style="font-size:24px" class="fa">&#xf095;</i>Call Doctor`

    buttonsDiv.append(call, consult, book)
    eachdiv.append(logoDiv, doctorDiv, experienceDiv);
    mainDiv.append(eachdiv, buttonsDiv)
    // eachdiv.append(logoDiv, doctorDiv, experienceDiv,);
    upperdiv.append(mainDiv);

}

document.body.addEventListener('click', function (event) {
    if (event.target.id == '2') {
        if (document.getElementById("2").checked == true) {
            document.getElementById('doctorsDetails').innerHTML = null;
            for (var j = 0; j < doctors.length; j++) {
                if (doctors[j].adress == 'Janakpuri')
                    appendDoctors(doctors[j])
            }
        }

    }
    else if (event.target.id == '3') {
        if (document.getElementById("3").checked == true) {
            document.getElementById('doctorsDetails').innerHTML = null;
            for (var j = 0; j < doctors.length; j++) {
                if (doctors[j].adress == 'Green Park')
                    appendDoctors(doctors[j])
            }
        }
    }
    else if (document.getElementById("3").checked == false && document.getElementById("2").checked == false) {
        for (var j = 0; j < doctors.length; j++) {
            appendDoctors(doctors[j])
        }
    }

})