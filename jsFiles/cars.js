var cars = JSON.parse(localStorage.getItem("carDataBase"));

console.log(cars);

function displayCar(cars)
{
      document.getElementById("container").innerHTML="";
    cars.map(function (ele) {
       
        var mainDiv = document.createElement("div");

        var name=document.createElement("h4");
        name.innerText=ele.name;

        var img = document.createElement("img");
         img.setAttribute("src",ele.Image);
         img.setAttribute("id","carImage");

        
  

       var typeMainDiv = document.createElement("div");

       typeMainDiv.setAttribute("id","typeMain");


       var typeSubDiv1 = document.createElement("div");       //  subdiv1

       var logo1 = document.createElement("img");
       logo1.setAttribute("src","https://www.revv.co.in/imgs/car-card/automatic.svg");

       var type = document.createElement("p");
       type.innerText=ele.function;

       typeSubDiv1.append(logo1,type);

       var typeSubDiv2 = document.createElement("div");           // subdiv2

       var logo2 = document.createElement("img");
       logo2.setAttribute("src","https://www.revv.co.in/imgs/car-card/petrol.svg");
       var fuel_type = document.createElement("p");
       fuel_type.innerText=ele.fuel_type;

       typeSubDiv2.append(logo2,fuel_type);

       var typeSubDiv3 = document.createElement("div");                 //subdiv3

       var logo3 = document.createElement("img");
       logo3.setAttribute("src","https://www.revv.co.in/imgs/car-card/seat.svg");
       var seat = document.createElement("p");
       seat.innerText=ele.seat+" "+"Seats";

       typeSubDiv3.append(logo3,seat);

       typeMainDiv.append(typeSubDiv1,typeSubDiv2,typeSubDiv3);

     

       priceTypeMainDiv = document.createElement("div");
       priceTypeMainDiv.setAttribute("id","PriceMain");


        var priceSubDiv1 = document.createElement("div");
        priceSubDiv1.setAttribute("class","priceRange");

      
        var price_270_Kms = document.createElement("p");
        price_270_Kms.innerText="₹"+" "+ele.kms_270;

        

         var Kms_range1 = document.createElement("p")
         Kms_range1.setAttribute("id","kmsPTag");
         Kms_range1.innerText="270Kms";
         
         priceSubDiv1.append(price_270_Kms,Kms_range1);

         
         var priceSubDiv2 = document.createElement("div");
         priceSubDiv2.setAttribute("class","priceRange");
         

      
         var price_450_Kms = document.createElement("p");
         price_450_Kms.innerText="₹"+" "+ele.kms_450;
 
       
 
          var Kms_range2 = document.createElement("p")
          Kms_range2.setAttribute("id","kmsPTag");
          Kms_range2.innerText="450Kms";
          
          priceSubDiv2.append(price_450_Kms,Kms_range2);


          var priceSubDiv3 = document.createElement("div");
          priceSubDiv3.setAttribute("class","priceRange");

        
          var price_675_Kms = document.createElement("p");
          price_675_Kms.innerText="₹"+" "+ele.kms_675;
  
        
  
           var Kms_range3 = document.createElement("p")
           Kms_range3.setAttribute("id","kmsPTag");
           Kms_range3.innerText="675Kms";
           
           priceSubDiv3.append(price_675_Kms,Kms_range3);

           // appending all different range in mainprice div

           priceTypeMainDiv.append(priceSubDiv1,priceSubDiv2,priceSubDiv3);

          var extraChargeDiv = document.createElement("div");
          extraChargeDiv.setAttribute("class","charge");

          var extraCharge = document.createElement("p");
          extraCharge.innerText="Extra km charge @ ₹"+ele.exChargePerKms +"/km";

          var availButton = document.createElement("button");
          availButton.setAttribute("id","bookButton");
          availButton.textContent=ele.available;
   
          extraChargeDiv.append(extraCharge,availButton);
          



        mainDiv.append(name,img,typeMainDiv,priceTypeMainDiv,extraChargeDiv);


        document.getElementById("container").append(mainDiv);
           
    });
 
}

displayCar(cars);
