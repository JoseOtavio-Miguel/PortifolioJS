

function updateProfileInfo(profileData) {

    /* Profile Data  */
    const photo = document.getElementById('profile-photo');
    photo.src = profileData.photo;
    photo.alt = `Foto de ${profileData.name}`;

    const name = document.getElementById('profile-name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile-job');
    job.innerText = profileData.job;

    const location = document.getElementById('profile-location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile-phone');
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;

    const email = document.getElementById('profile-email');
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;

    /* SoftSkills Data */

    const softSkill1 = document.getElementById('soft-skill-1');
    softSkill1.innerText = profileData.skills.softSkills[0];

    const softSkill2 = document.getElementById('soft-skill-2');
    softSkill2.innerText = profileData.skills.softSkills[1];

    const softSkill3 = document.getElementById('soft-skill-3');
    softSkill3.innerText = profileData.skills.softSkills[2];

    const softSkill4 = document.getElementById('soft-skill-4');
    softSkill4.innerText = profileData.skills.softSkills[3];

    const softSkill5 = document.getElementById('soft-skill-5');
    softSkill5.innerText = profileData.skills.softSkills[4];

    /* HardSkills Data */


    /* Portfolio Projects */

    const portfolioSection = document.querySelector('.portfolio')
    portfolioSection.innerHTML = '';


    profileData.portfolio.forEach((project, index) =>{
        const githubIcon = project.github
        ? '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="github-icon">'
        : '';


        const li = document.createElement('li');
        li.innerHTML = `
            <h3 class="title github"><span data-project-id=${index}>${project.name}</span></h3>
                <a href="${project.url}"target="_blank">Acessar</a>
        `;

        portfolioSection.appendChild(li);
    });
}


(async function() {

    const profileData = await fetchProfileData()
    console.log(profileData);
    updateProfileInfo(profileData);
})()

