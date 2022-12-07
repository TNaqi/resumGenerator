const generateCVEl = document.getElementById("generateCV");
const showCVEl = document.getElementById("showCV");
const gpaEl = document.getElementById("gpa");
const gpaInputEl = document.getElementById("gbainput");

const hideGenerateCV = () => {
  //Personal information
  const fullNameEl = document.getElementById("fullName").value;
  const emailEl = document.getElementById("email").value;
  const phoneNumberEl = document.getElementById("phoneNumber").value;
  const birthday = document.getElementById("birthday").value;
  const linkedinEl = document.getElementById("linkedin").value;
  //Academic information
  const aboutmeEl = document.getElementById("aboutme").value;
  const experienceEl = document.getElementById("experience").value;
  const experDateEl = document.getElementById("experDate").value;
  const eduTypeEl = document.getElementById("eduType").value;
  const eduSpEl = document.getElementById("eduSp").value;
  const eduPlaceEl = document.getElementById("eduPlace").value;
  const eduDateEl = document.getElementById("eduDate").value;
  //General information
  const experiencesTextarea = document.querySelectorAll(".experiencesTextarea")
  const experiencesDate = document.querySelectorAll(".experiencesDate")
  const coursesInp = document.querySelectorAll(".coursesInp")
  const courseDate = document.querySelectorAll(".courseDate")
  const skills = document.querySelectorAll(".skills")

  const noneAndBlockResume = () => {
    const Resume1El = document.getElementById("Resume1");
    const Resume2El = document.getElementById("Resume2");

    Resume1El.style.display = "none";
    Resume2El.style.display = "block";
    showCVEl.style.display = "block";
    generateCVEl.style.display = "none";
  };
  const data = () => {
    //data in cv
    const myNameEl = document.getElementById("myName");
    const myEmailEl = document.getElementById("myEmail");
    const myPhoneNumerEl = document.getElementById("myPhoneNumer");
    const myLinkedInEl = document.getElementById("myLinkedIn");
    const myEduDateEl = document.getElementById("myEduDate");
    //innerHTML
    const theAboutEl = document.getElementById("theAbout");
    const theEduEl = document.getElementById("theEdu");
    const theExperienceEl = document.getElementById("theExperience");
    const theCourseEl = document.getElementById("theCourse");
    const theSkillEl = document.getElementById("theSkill");

    //insert data into
    const insertData = () => {
      myNameEl.innerText = fullNameEl;
      myEmailEl.innerText = emailEl;
      myPhoneNumerEl.innerText = phoneNumberEl;
      myLinkedInEl.innerText = linkedinEl;
      theAboutEl.innerHTML = `انا ${getFirstName(fullNameEl)} مواليد ${getFullYear(birthday)}, ${aboutmeEl}`;
      theEduEl.innerHTML = `${eduTypeEl} في ${eduSpEl}<span class="color-light">من ${eduPlaceEl} ${getGBAText(gpaEl.value,gpaInputEl.value)}</span>`;
      myEduDateEl.innerText = getFullYear(eduDateEl);

      experiencesTextarea.forEach((experience, index) => {
        theExperienceEl.innerHTML += `
        <li>
          <div class="row align-items-center">
            <div class="col-9">${experience.value}</div>
            <div class="col-2 text-center">${getFullYear(experiencesDate[index].value)}</div>
          </div>
        </li>`;
      })


      coursesInp.forEach((courseInp, index) => {
        theCourseEl.innerHTML += `
        <li>
          <div class="row align-items-center">
            <div class="col-9">${courseInp.value}</div>
            <div class="col-2 text-center">${getFullYear(courseDate[index].value)}</div>
          </div>
        </li>`
      })
      skills.forEach(skill => {
        theSkillEl.innerHTML += `<li>${skill.value}</li>`
      })
    };
    insertData();
  };
  if (
    true /*!(fullNameEl == "" || emailEl == "" || phoneNumberEl == "" || birthday == "" || linkedinEl == "")*/
  ) {
    noneAndBlockResume();
    data();
  } else {
    alert("يجب تعبئة كل المدخلات");
  }
};

const printCV = () => {
  showCVEl.style.display = "none";
  window.print();
  showCVEl.style.display = "block";
};
function CheckGPA(gpaType) {
  if (gpaType.value == "100") {
    document.getElementById("gbainput").max = 100;
  }
  if (gpaType.value == "5") {
    document.getElementById("gbainput").max = 5;
  }
  if (gpaType.value == "4") {
    document.getElementById("gbainput").max = 4;
  }
}
const getFullYear = (dateString) => {
  return new Date(dateString).getFullYear();
};
const getFirstName = (fullName) => {
  const splitName = fullName.split(" ");
  return splitName[0];
};
const getGBAText = (gpaType, gpaDegree) => {
  let message;
  switch (parseInt(gpaType)) {
    case 100:
      message = `بنسبة ${gpaDegree}`;
      break;

    case 5:
      message = `بمعدل ${gpaDegree} من 5`;
      break;

    case 4:
      message = `بمعدل ${gpaDegree} من 4`;
      break;
  }
  return message;
};

if (generateCVEl) {
  generateCVEl.addEventListener("click", hideGenerateCV);
}
showCVEl.addEventListener("click", printCV);


// for Skills
const skillGroupEl = document.getElementById("skillGroup")
const addSkill = (e) => {
  e.preventDefault()
  const input = document.createElement("input")
  const button = document.createElement("button")

  input.classList.add("form-control", "skills")
  input.setAttribute("type", "text")

  button.classList.add("btn", "btn-danger")
  button.innerText = "حذف"

  button.onclick = removeSkill

  skillGroupEl.appendChild(input)
  skillGroupEl.appendChild(button)
}
const removeSkill = (e) => {
  e.preventDefault()
  skillGroupEl.removeChild(e.target.previousElementSibling)
  skillGroupEl.removeChild(e.target)
}
document.getElementById("btn-add-skill").addEventListener("click", addSkill)
document.getElementById("btn-del-skill").addEventListener("click", removeSkill)

// for Courses
const courseGroupEl = document.getElementById("courseGroup")
const addCourse = (e) => {
  e.preventDefault()
  const div = document.createElement("div")
  const label = document.createElement("label")
  const input = document.createElement("input")
  const div2 = document.createElement("div")
  const label2 = document.createElement("label")
  const input2 = document.createElement("input")
  const button = document.createElement("button")

  label.innerText = "الدورة"

  input.classList.add("form-control", "coursesInp")
  input.setAttribute("type", "text")

  label2.innerText = "تاريخ الدورة"

  input2.classList.add("form-control", "courseDate")
  input2.setAttribute("type", "date")

  button.classList.add("btn", "btn-danger")
  button.innerText = "حذف"

  button.onclick = removeCourse

  courseGroupEl.appendChild(div)
  courseGroupEl.appendChild(div2)
  div.appendChild(label)
  div.appendChild(input)
  div2.appendChild(label2)
  div2.appendChild(input2)
  courseGroupEl.appendChild(button)
}
const removeCourse = (e) => {
  e.preventDefault()
  courseGroupEl.removeChild(e.target.previousElementSibling)
  courseGroupEl.removeChild(e.target.previousElementSibling)
  courseGroupEl.removeChild(e.target)
}
document.getElementById("btn-add-course").addEventListener("click", addCourse)
document.getElementById("btn-del-course").addEventListener("click", removeCourse)


// for Experiance
const expGroupEl = document.getElementById("expGroup")
const addExp = (e) => {
  e.preventDefault()
  const div = document.createElement("div")
  const label = document.createElement("label")
  const textarea = document.createElement("textarea")
  const div2 = document.createElement("div")
  const label2 = document.createElement("label")
  const input2 = document.createElement("input")
  const button = document.createElement("button")

  label.innerText = "خبرات العمل"

  textarea.classList.add("form-control", "experiencesTextarea")
  textarea.setAttribute("cols", "30")
  textarea.setAttribute("rows", "4")

  label2.innerText = "تاريخ الخبرة"

  input2.classList.add("form-control", "experiencesDate")
  input2.setAttribute("type", "date")

  button.classList.add("btn", "btn-danger")
  button.innerText = "حذف"

  button.onclick = removeExp

  expGroupEl.appendChild(div)
  expGroupEl.appendChild(div2)
  div.appendChild(label)
  div.appendChild(textarea)
  div2.appendChild(label2)
  div2.appendChild(input2)
  expGroupEl.appendChild(button)
}
const removeExp = (e) => {
  e.preventDefault()
  expGroupEl.removeChild(e.target.previousElementSibling)
  expGroupEl.removeChild(e.target.previousElementSibling)
  expGroupEl.removeChild(e.target)
}
document.getElementById("btn-add-exp").addEventListener("click", addExp)
document.getElementById("btn-del-exp").addEventListener("click", removeExp)