// var saveElements = document.getElementsByClassName("save2");

// Array.from(saveElements).forEach((save) => {
//     save.addEventListener("click", () => {
//         let fulldata = document.querySelectorAll(".cs4 img");
//         let data = [];
//         Array.from(fulldata).forEach((element) => {
//             let obj = {};
//             obj.id = element.id;
//             obj.src = element.src;
//             data.push(obj);
//         });
//         let content = document.querySelector(".cs4")
//     });

// });
let imgArray = [
    "615c_2.png",
    "575d_2.png",
    "WhatsApp Image 2023-08-04 at 6.18.19 PM.jpeg",
    "630_11.png",
    "630.png",
    "615_0.png",
    "575_0.png",
    "575_6.png ",
    "615.png",
    "630_2.png",
    "630_28.png",
    "630_29.png",
    "630_4.png",
    "630_8.png",
    "675_2.png",
    "675_2.png",
    "675_3.png",
    "675_7.png",
    "760_16.png",
    "760.png",
    "760_15.png",
    "760_22.png",
    "840 2.png",
    "880 1.png",
    "575_0.png",
    "575_6.png ",
    "615.png",
    "WhatsApp Image 2023-08-04 at 6.18.19 PM.jpeg",
    "WhatsApp Image 2023-07-27 at 11.08.57 AM.jpeg",
    "l1.png",
    "l2.png",
    "l3.png",
    "l6.png",
    "l4.png",
    "l5.png",
    "l7.png",
    "l8.png",
    "l9.png",
    "l10.png",
    "l1.png",
    "l2.png",
    "l14.png",
    "l15.png",
    "l16.png",
    "l17.png"
];

let buttons = document.querySelectorAll(".save2");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let img_no = Number(button.value);
        let fetch_img = "clothes/" + imgArray[img_no];
        
        const col = document.createElement('div');
        const img = document.createElement('img');

        img.src = fetch_img; 
        img.alt = `Image ${img_no}`; 
        col.appendChild(img);
        let storedArray = localStorage.getItem('imgsrc');
        let d = storedArray ? JSON.parse(storedArray) : [];
        d.push(img.src);
        localStorage.setItem('imgsrc',JSON.stringify(d));
        console.log(d);
        // window.location.href="saved.html";
    });
});
let buttonnext=document.querySelectorAll(".btnesx");
buttonnext.forEach(function(button){
    button.addEventListener("click",function(){
        let img=Number(button.value);
        let getimg="clothes/" + imgArray[img];
        sessionStorage.setItem("esrc",getimg);

        let newm=document.querySelector(".cc")
        newm.style.display="flex";
    });
})


