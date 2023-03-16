const body=document.getElementById("body");
const factorialCard=`<div class="container">
                        <div class="card mt-3">
                            <div class="card-header bg-success"><h4 class="text-white">Factorial</h4></div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-6">
                                        <input id="numberInput" type="text" class="form-control" placeholder="Enter a number to find factorial"/>
                                    </div>
                                    <div class="col-6 bg-dark">
                                        <h4 id="factorialResults" class="text-white text-center"></h4>
                                    </div> 
                                </div>                        
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-3">
                                        <button id="computeFactorialBtn" class="form-control text-white bg-success">Factorial</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>`
body.innerHTML=factorialCard;

function factorial(num){
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num-1);
        
    }
}

document.getElementById("computeFactorialBtn").addEventListener("click",()=>{
    const number=parseInt(document.getElementById("numberInput").value) ;
    const factorialResults= factorial(number);
    document.getElementById("factorialResults").innerHTML=factorialResults;
})