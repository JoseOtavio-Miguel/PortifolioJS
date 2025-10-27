
async function  fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/JoseOtavio-Miguel/PortifolioJS/refs/heads/main/assets/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}


