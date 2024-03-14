let navbarunderactive =document.querySelector(".navbarunderactive");
let growproduct_stockdetails= document.querySelector(".growproduct_stockdetails");
let growproduct_mutualfundsdetails=document.querySelector(".growproduct_mutualfundsdetails");
// let growproduct_usstocksdetails=document.querySelector(".growproduct_usstocksdetails");
// let growproduct_fds=document.querySelector(".growproduct_fds");

let changeimageaccordingnavigation=document.querySelector(".changeimageaccordingnavigation")
let zerotext=document.querySelector(".zerotext");
let insidecontent=document.querySelector(".insidecontent");
let stocksdetails_text=document.querySelector(".stocksdetails_text");

growproduct_stockdetails.addEventListener("click",()=>{
    navbarunderactive.style.width = "200px";
    navbarunderactive.style.transform="translate(-850px,60px)";
    document.querySelector(".StockActive").classList.add("Active1");


    document.querySelector(".MutualFundActive").classList.remove("Active2");
    // document.querySelector(".UsStockActive").classList.remove("Active3");
    // document.querySelector(".FDActive").classList.remove("Active4");

     /*********change content**********/
     changeimageaccordingnavigation.src="https://qph.cf2.quoracdn.net/main-qimg-dfd41c218c8467d6b193d1b19a9f6a81";
     zerotext.textContent="Zero";
     insidecontent.textContent="account change";
     stocksdetails_text.textContent="You don't have to pay a single rupee for opening a stocks account or account maintenance."
})
growproduct_mutualfundsdetails.addEventListener("click",()=>{
    navbarunderactive.style.width = "250px";
    navbarunderactive.style.transform="translate(-650px,60px)";
    document.querySelector(".MutualFundActive").classList.add("Active2");


    document.querySelector(".StockActive").classList.remove("Active1");
    // document.querySelector(".UsStockActive").classList.remove("Active3");
    // document.querySelector(".FDActive").classList.remove("Active4");

    /*********change content**********/
    changeimageaccordingnavigation.src=" https://wp-asset.groww.in/wp-content/uploads/2019/07/05070415/Groww-Feature-update-step-3.jpg";
    zerotext.textContent="0%";
    insidecontent.textContent="Commission";
    stocksdetails_text.textContent="select from 5000+ direct mutual funds and get higher return than regular funds."
})
// growproduct_usstocksdetails.addEventListener("click",()=>{
//     navbarunderactive.style.width = "200px";
//     navbarunderactive.style.transform="translate(-380px,60px)";
//     document.querySelector(".UsStockActive").classList.add("Active3");

//     document.querySelector(".MutualFundActive").classList.remove("Active2");
//     document.querySelector(".stockActive").classList.remove("Active1");
//     document.querySelector(".FDActive").classList.remove("Active4");


//     /*********change content**********/
//     changeimageaccordingnavigation.src="https://wp-asset.groww.in/wp-content/uploads/2021/04/13125801/Basic-stock-chart.jpg";
//     zerotext.textContent="Free";
//     insidecontent.textContent="account opening";
//     stocksdetails_text.textContent="invest in apple,google, netflix and many more us companies that you love without any brokerage fee."
// })
// growproduct_fds.addEventListener("click",()=>{
//     navbarunderactive.style.width = "200px";
//     navbarunderactive.style.transform="translate(-180px,60px)";
//     document.querySelector(".FDActive").classList.add("Active4");

//     document.querySelector(".MutualFundActive").classList.remove("Active2");
//     document.querySelector(".stockActive").classList.remove("Active1");
//     document.querySelector(".UsStockActive").classList.remove("Active3");

//     /*********change content**********/
//     changeimageaccordingnavigation.src="https://wp-asset.groww.in/wp-content/uploads/2021/04/13170654/clc.png";
//     zerotext.textContent="6.7%";
//     insidecontent.textContent="intrest rate";
//     stocksdetails_text.textContent="open fixed deposite in any bank with the higher intrest rates without opening a bank account."
// })


// let text =document.querySelector(".text");
// text.addEventListener("click",()=>{
//     text.style.location.assign= "https://groww.in/";
// })


function Login_pop(click)
{
    
        var popup=document.createElement('div');
        popup.className = 'popup';
        
        var leftContent=document.createElement('div');
        leftContent.className = 'left-content';
        leftContent.innerHTML = `<h2>Simple, Free Investing</h2>`;
        
        var rightContent=document.createElement('div');
        rightContent.className = 'right-content';
        rightContent.innerHTML = `
        <span class="close" onclick="closePopup()">&times;</span>
        <h1>Welcome to Groww</h1>
        <form class="popup-form">
        
        <button type="button" id="google_btn" onclick="continueWithGoogle()" class="continue-with-google-button"><img src="https://cdn-icons-png.flaticon.com/512/2875/2875331.png" alt="" class="google-img">Continue with Google</button>

         <br>
         <h2>Or</h2> 
         <label for="email"></label>
            <input type="email" id="email" name="email" required placeholder="Type your email here"><br>
        </form>
        `;
    
        popup.appendChild(leftContent);
        popup.appendChild(rightContent);
    
        document.body.appendChild(popup);
    }
    
    function closePopup() {
        var popup = document.querySelector('.popup');
        if (popup) {
            popup.remove();
        }
    }

    function continueWithGoogle(click) {
        // Redirect to your main screen page
        window.location.href = "main_screen.html";

    }
    

    document.getElementById("google_btn").addEventListener("click", function() {
    
        setTimeout(function() {
            continueWithGoogle();
        }, 11000);
    });
    
    
