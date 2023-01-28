document.getElementById("kgsInputtype").addEventListener("input", e =>{
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerText = kgs * 2.205;
})

document.getElementById("feetInput").addEventListener("input", e =>{
    let feet = e.target.value;
    document.getElementById("cmsOutput").innerText = feet * 30.48;
})

document.getElementById("dollarInput").addEventListener("input", e =>{
    let dollar = e.target.value;
    document.getElementById("cmaOutput").innerText = dollar * 82;
})