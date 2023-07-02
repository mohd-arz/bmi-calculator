const heightValue=document.querySelector('#height');
const weightValue=document.querySelector('#weight');
const getButton=document.querySelector('.form-btn');
const statusHeading=document.querySelector('.status-heading')
const statusPara=document.querySelector('.status-para');
const underweightChart=document.querySelector('.underweight-chart');
const normaChart=document.querySelector('.normal-chart');
const overweightChart=document.querySelector('.overweight-chart');
const obeseChart=document.querySelector('.obese-chart');
const statusContainer=document.querySelector('.status-container');
let bgColor="background-color:rgba(81,116,155,0.8);"
let bmiValue,resultpara,result,cmToM;

heightValue.addEventListener('keydown',resetingFunction);
weightValue.addEventListener('keydown',resetingFunction)
getButton.addEventListener('click',()=>{
    if(heightValue.value==="" || weightValue.value===""){
        if(heightValue.value==="" )
        heightValue.style.cssText="border:solid 1.5px red";
        if(weightValue.value==="")
        weightValue.style.cssText="border:solid 1.5px red";
    }
  else if(heightValue.value!=="" && weightValue.value!==""){
   
    cmToM=heightValue.value/100;
    bmiValue=(weightValue.value/(cmToM*cmToM)).toFixed(1);
   if(bmiValue<18.5){
    result="Underweight"
    resultpara="This BMI is considered underweight. Being underweight may pose certain health risks, including nutrient deficiencies and hormonal changes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.";
    underweightChart.style.cssText=bgColor;
   }
   else if(bmiValue>=18.5 && bmiValue<=24.9){
    result="Normal";
    resultpara="This BMI is considered normal. Maintaining a healthy weight may lower the risk of developing certain health conditions, including cardiovascular disease and type 2 diabetes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks."
    normaChart.style.cssText=bgColor;
   }else if(bmiValue>=25 && bmiValue<=29.9){
    result="Overweight";
    resultpara="This BMI is considered overweight. Being overweight may increase the risk of certain health conditions, including cardiovascular disease, high blood pressure, and type 2 diabetes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators."
    overweightChart.style.cssText=bgColor;
   }else if(bmiValue >=30){
    result="Obese";
    resultpara="This BMI is considered obese. People with obesity have increased risk of cardiovascular disease, type 2 diabetes, high blood pressure, and other health conditions. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators."
    obeseChart.style.cssText=bgColor;
   }
    statusHeading.textContent=`BMI: ${bmiValue} (${result})`;
    statusPara.textContent=resultpara;
    statusContainer.style.cssText="display:block;"
  }
   
})

function resetingFunction(){
    underweightChart.style.cssText='background-color:#839cb8';
    normaChart.style.cssText='background-color:#839cb8';
    overweightChart.style.cssText='background-color:#839cb8';
    obeseChart.style.cssText='background-color:#839cb8';
    heightValue.style.cssText="border:solid 1px grey";
    weightValue.style.cssText="border:solid 1px grey";
}