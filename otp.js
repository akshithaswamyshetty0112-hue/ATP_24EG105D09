/*2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/
        console.log("otp sent successfully")
 let seconds=10
 let intervalId=setInterval(() => {
    seconds--;
    console.log(`OTP can be resent after ${seconds} secs`)

 if(seconds===0){
    console.log("resend otp")
    clearInterval(intervalId)
 }
  }, 1000);