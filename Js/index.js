function sendMail(){
    var params={
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        phone:document.getElementById("phone").value ,
        message:document.getElementById("message").value ,
    };

    const serviceID = "service_co7u7mn";
    const templateID = "template_g95e11k";

    emailjs.send(serviceID,templateID,params)
        .then(
            res=>{
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message sent sucessfully");

            }
  )  

.catch((err) => console.log(err));
// .catch(err=>console.log(err))
        }


        function scrolltotop(){
            window.scrollTo(0,0);
        }