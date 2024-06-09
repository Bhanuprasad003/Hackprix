// drag and drop 

const dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header"),
    button = dropArea.querySelector("button"),
    input = dropArea.querySelector("input");

button.onclick = () => {
    input.click(); 
}

input.addEventListener("change", function () {
    file = this.files[0];
    dropArea.classList.add("active");
    showFile(); 
});

dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); 
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showFile(); 
});

function showFile() {
    let fileType = file.name.split('.').pop();
    if (fileType === 'exe') { 
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let exeTag = `<p>${file.name}</p>`; 
            dropArea.innerHTML = exeTag;
        }
        fileReader.readAsDataURL(file);
    } else {
        alert("Please select a .exe file!");
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    }
}

// glowing
document.addEventListener('DOMContentLoaded', function () {
    var homeSection = document.getElementById('first');
    var aboutSection = document.getElementById('second');
    var productSection = document.getElementById('third');
    var aboutusSection = document.getElementById('fourth');
    var homeButton = document.getElementById('homeButton');
    var aboutButton = document.getElementById('aboutButton');
    var productButton = document.getElementById('productButton');
    var aboutusButton = document.getElementById('aboutusButton');
    var activeButton = null;

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom >= 0
        );
    }

    function toggleGlowing(button, section) {
        if (isElementInViewport(section)) {
            if (activeButton && activeButton !== button) {
                activeButton.classList.remove('glowing');
            }
            button.classList.add('glowing');
            activeButton = button;
        }
    }

    homeButton.addEventListener('click', function () {
        if (activeButton !== homeButton) {
            if (activeButton) {
                activeButton.classList.remove('glowing');
            }
            homeButton.classList.add('glowing');
            activeButton = homeButton;
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    aboutButton.addEventListener('click', function () {
        if (activeButton !== aboutButton) {
            if (activeButton) {
                activeButton.classList.remove('glowing');
            }
            aboutButton.classList.add('glowing');
            activeButton = aboutButton;
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    productButton.addEventListener('click', function () {
        if (activeButton !== productButton) {
            if (activeButton) {
                activeButton.classList.remove('glowing');
            }
            productButton.classList.add('glowing');
            activeButton = productButton;
            productSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    aboutusButton.addEventListener('click', function () {
        if (activeButton !== aboutusButton) {
            if (activeButton) {
                activeButton.classList.remove('glowing');
            }
            aboutusButton.classList.add('glowing');
            activeButton = aboutusButton;
            aboutusSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    window.addEventListener('scroll', function () {
        if (isElementInViewport(homeSection)) {
            toggleGlowing(homeButton, homeSection);
        } else if (isElementInViewport(aboutSection)) {
            toggleGlowing(aboutButton, aboutSection);
        } else if (isElementInViewport(productSection)) {
            toggleGlowing(productButton, productSection);
        } else if (isElementInViewport(aboutusSection)) {
            toggleGlowing(aboutusButton, aboutusSection);
        } else if (activeButton) {
            activeButton.classList.remove('glowing');
            activeButton = null;
        }
    });
});
