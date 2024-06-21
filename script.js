var timer,hour,minute,second,my_int; 
var getsec=0 , getmin=0, gethour=0;


function stopwatch(){
    this.start=function(){
        hour=document.getElementById('hour');
        minute=document.getElementById('minute');
        second=document.getElementById('second');

        if(getsec >=0){
            getsec++;
            second.innerHTML=getsec;
        }
        if(getsec<10){
            second.innerHTML = "0"+getsec;
        }
        if(getsec>=60){
            getsec=0;
            getmin++;
            minute.innerHTML =getmin;
        }
        if(getsec<10){
            minute.innerHTML = "0"+getmin+".";
        }
        if(getmin>=60){
            getmin=0;
            gethour++;
            hour.innerHTML=gethour;
        }
        if(gethour<10){
            hour.innerHTML= "0"+gethour+".";
        }
        my_int=setTimeout(my_ob.start,1000);
    }
    // start end

    this.stop=function(){
        clearTimeout(my_int);
    }
    // stop end

    this.reset = function() {
        if(getsec>=0) {
            getsec = 0;
            getmin = 0;
            gethour = 0;

            second.innerHTML = "0"+getsec;
            minute.innerHTML = "0"+getmin+"0";
            hour.innerHTML = "0"+gethour+"0";
            clearTimeout(my_int);
        }
    }
}
var my_ob=new stopwatch();