function onMobile(){return window.innerWidth<=768}document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".hamburger-menu"),n=document.querySelector(".nav-menu"),e=document.querySelector(".close-menu"),o=document.querySelector(".gray-out");function d(){n.style.right="-100%",o.style.display="none",o.style.opacity=0,n.classList.remove("menu-visible")}d(),t.addEventListener("click",function(){"-100%"!=n.style.right?d():(n.style.right="0px",o.style.display="block",setTimeout(function(){o.style.opacity=1},10),n.classList.add("menu-visible"))}),e.addEventListener("click",function(){d()}),document.addEventListener("click",function(e){n.contains(e.target)||t.contains(e.target)||d()});let s=0,i=document.getElementById("hamburger-container"),l=document.getElementById("site-icon-wrapper");window.innerWidth<768&&window.addEventListener("scroll",function(){var e=window.scrollY;console.log({scrollTop:e}),10<Math.abs(e-s)&&(e>s?(i.style.top="-100px",l.style.top="-100px",console.log("Down scroll.")):(i.style.top="0",l.style.top="0",console.log("Up scroll.")),s=e)})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".article-wrapper").forEach(e=>{var d=e.querySelector(".image-wrapper"),e=e.querySelector(".description-wrapper");if(window.innerWidth<=768&&d&&e){e.style.width="260px";let t=document.createElement("img"),n=(t.classList.add("arrow-button"),t.src="./assets/images/DTGA_Arrow.png",d.appendChild(t),e),o=!1;t.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),o?(n.style.left="450px",t.style.transform=""):(n.style.left=0,t.style.transform="rotate(180deg)"),o=!o})}})}),document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("content");window.addEventListener("load",function(){window.innerWidth<=768?(document.body.classList.add("show"),document.body.classList.add("show-content"),setTimeout(()=>{document.body.classList.add("show-content")},1e3)):e&&(e.style.display="block")})});
//# sourceMappingURL=casper.js.map