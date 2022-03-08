function login() {
    // dom js
    const nik = document.getElementById("nik").value
    const username = document.getElementById("username").value
    // Baca Data dari file config
    fetch("../data/config.txt")
    .then(response => {
    // Convert response menjadi text
    return response.text()
    })
    .then((text) => {
    // mengubah text(string) menjadi array dan memisahkan regex new_lines dan cariage return
    let break_lines = text.split("\r\n")
    // Looping data
    break_lines.forEach(element => {
        // Memisahkan element [|] di dalam string dan covert menjadi array
        var pecah_element = element.split("|")
        // Validasi Login input value user
        if (pecah_element[0] == nik && pecah_element[1] == username) {
            window.location.assign("menu.html")
            alert(`Anda Berhasil login Sebagai ${pecah_element[1]}`)
            }
        })
        alert("Mohon masukkan data dengan benar!")
    })
}