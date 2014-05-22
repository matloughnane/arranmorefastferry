
function GetClock(){
	d = new Date();
		nday   = d.getDay();
		nmonth = d.getMonth();
		ndate  = d.getDate();
		nyear = d.getYear();
	if(nyear<1000) nyear=nyear+1900;
		nhour = d.getHours();
		nminute = d.getMinutes();
	if(nminute<10) nminute = "0"+nminute.toString();

		document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+", "+nhour+":"+nminute+"";
		setTimeout("GetClock()", 1000);
}