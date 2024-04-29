

let videos = ["UhZ6NacF43w?si=JMzEwj4zWjIPFQZo&amp;controls=0&autoplay=1&showinfo=0&mute=1", "eSga_SlWwBE?si=Apb7E0frEFvUiwwg&amp;start=58&controls=0&autoplay=1&showinfo=0&mute=1", "s9OW0mZ5frk?si=_hLbFgwb3u0z9JgL&amp;start=58&controls=0&autoplay=1&showinfo=0&mute=1", "u9kuF0Ttcys?si=oPwX5xPXsQ9L07zU&amp;start=58&controls=0&autoplay=1&showinfo=0&mute=1", "pdXmxgUhbuU?si=skI0sSXFrcNkMTQ9&amp;start=33&controls=0&autoplay=1&showinfo=0&mute=1", "vCtXUf4xUgg?si=BT-VghHka9fuB-BD&amp;&controls=0&autoplay=1&showinfo=0&mute=1", "FDIJDgLYGig?si=yF2N7x-E65FV_vSx&amp;controls=0&autoplay=1&showinfo=0&mute=1", "c9DuDnPApGs?si=mzgk8SRkcHbaY5Wx&amp;start=58&controls=0&autoplay=1&showinfo=0&mute=1", "uqSe1RarBLg?si=uUAgY5Z6KXIHPbNe&amp;controls=0&autoplay=1&showinfo=0&mute=1", "RuWkdGqV9w8?si=5TOfF_NwaketOfWs&amp;controls=0&autoplay=1&showinfo=0&mute=1","c-sPmMDFV78?si=bu7Swi_xS9WCicTa&amp;controls=0&autoplay=1&showinfo=0&mute=1"]

function changeVideo(video1) {
    document.getElementById('video1').src = 'https://www.youtube.com/embed/' + videos[Math.floor(Math.random() * 11)];
}

window.onload = function () {
    changeVideo(); // Replace with the desired video ID
};


