let lastModified = new Date(document.lastModifed)
let today = new Date()


    document.getElementById("year").innerText = today.getFullYear()
    document.getElementById("date").innerText = lastModified.toLocaleDateString()
    document.getElementById("time").innerText = lastModified.toLocaleString()
