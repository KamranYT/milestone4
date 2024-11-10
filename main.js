var generateResumeButton = document.getElementById("generate-resume");
var displayName = document.getElementById("display-name");
var displayEmail = document.getElementById("display-email");
var displayPhone = document.getElementById("display-phone");
var displayEducation = document.getElementById("display-education");
var displayExperience = document.getElementById("display-experience");
var displaySkills = document.getElementById("display-skills");
var profilePicInput = document.getElementById("profile-pic");
var displayPic = document.getElementById("display-pic");
var resumeContainer = document.querySelector('.resume-container');
resumeContainer.style.display = 'none';
generateResumeButton.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    displayName.textContent = name;
    displayEmail.textContent = email;
    displayPhone.textContent = phone;
    displayEducation.textContent = education;
    displayExperience.textContent = experience;
    displaySkills.textContent = skills;
    var profilePicFile = profilePicInput.files ? profilePicInput.files[0] : null;
    if (profilePicFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            displayPic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            displayPic.style.display = "block";
        };
        reader.readAsDataURL(profilePicFile);
    }
    else {
        displayPic.style.display = "none";
    }
    resumeContainer.style.display = 'block';
});
