tday  =new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetNextFerry(){
	m = new Date();
		mday   = m.getDay();
		mmonth = m.getMonth();
		mdate  = m.getDate();
		myear = m.getYear();
	if(myear<1000) myear=myear+1900;
		mhour = m.getHours();
		mminute = m.getMinutes();
	if(mminute<10) mminute = "0"+mminute.toString();
		hourString = mhour.toString();
		militaryclock = hourString.concat(mminute.toString());
		militaryclockInt = parseInt(militaryclock);

	// MOVE THE CLOCK BACKWARDS 4 hours
	militaryclockInt = parseInt(militaryclock)-1000;

	console.log( "Time the website thinks it is: " + militaryclockInt );

	// USE IF STATEMENT TO CHANGE TIMETABLES

	if (mmonth < 4 && mmonth > 9) {
		// FERRY TIMES FOR MONTHS JANUARY, FEBRUARY, MARCH, APRIL, NOVEMBER AND DECEMBER
		weekDepartArranmoreInt = new Array(0745, 0915, 1015, 1315, 1500, 1700);
		weekDepartBurtonInt = new Array(0845, 0945, 1245, 1430, 1630, 1730);

		sundayDepartArranmoreInt = new Array (1015, 1200, 1315, 1500, 1700);
		sundayDepartBurtonInt = new Array (1130, 1245, 1430, 1630, 1730);
	} else {
		// TIMES FOR SUMMER MONTHS
		weekDepartArranmoreInt = new Array(0745, 0915, 1015, 1315, 1500, 1700, 1800);
		weekDepartBurtonInt = new Array(0845, 0945, 1245, 1430, 1630, 1730, 1830);

		sundayDepartArranmoreInt = new Array (1015, 1200, 1315, 1500, 1700, 1800);
		sundayDepartBurtonInt = new Array (1130, 1245, 1430, 1630, 1730, 1830);
	};


// CHECKS FOR DAY OF THE WEEK
	if (mday = 4 ) {
		// START SUNDAY CHECK
		if (militaryclockInt < sundayDepartArranmoreInt[0]) {
				nextFerryTimeDepartArranmore = sundayDepartArranmoreInt[0];
		} else if (militaryclockInt < sundayDepartArranmoreInt[1]) {
				nextFerryTimeDepartArranmore = sundayDepartArranmoreInt[1];
		} else if (militaryclockInt < sundayDepartArranmoreInt[2]) {
				nextFerryTimeDepartArranmore = sundayDepartArranmoreInt[2];
		} else if (militaryclockInt < sundayDepartArranmoreInt[3]) {
				nextFerryTimeDepartArranmore = sundayDepartArranmoreInt[3];
		} else if (militaryclockInt < sundayDepartArranmoreInt[4]) {
				nextFerryTimeDepartArranmore = sundayDepartArranmoreInt[4];
		} else if (militaryclockInt < sundayDepartArranmoreInt[5]) { 
				nextFerryTimeDepartArranmore = sundayDepartArranmoreInt[5];
		} else if (militaryclockInt < sundayDepartArranmoreInt[6]) {
				nextFerryTimeDepartArranmore = sundayDepartArranmoreInt[6];
		} else if (militaryclockInt < sundayDepartArranmoreInt[7]) {
				nextFerryTimeDepartArranmore = sundayDepartArranmoreInt[7];
		} else {
				nextFerryTimeDepartArranmore = "No More Ferries Today";
		};

		if (militaryclockInt < sundayDepartBurtonInt[0]) {
				nextFerryTimeDepartBurton = sundayDepartBurtonInt[0];
		} else if (militaryclockInt < sundayDepartBurtonInt[1]) {
				nextFerryTimeDepartBurton = sundayDepartBurtonInt[1];
		} else if (militaryclockInt < sundayDepartBurtonInt[2]) {
				nextFerryTimeDepartBurton = sundayDepartBurtonInt[2];
		} else if (militaryclockInt < sundayDepartBurtonInt[3]) {
				nextFerryTimeDepartBurton = sundayDepartBurtonInt[3];
		} else if (militaryclockInt < sundayDepartBurtonInt[4]) {
				nextFerryTimeDepartBurton = sundayDepartBurtonInt[4];
		} else if (militaryclockInt < sundayDepartBurtonInt[5]) { 
				nextFerryTimeDepartBurton = sundayDepartBurtonInt[5];
		} else if (militaryclockInt < sundayDepartBurtonInt[6]) {
				nextFerryTimeDepartBurton = sundayDepartBurtonInt[6];
		} else if (militaryclockInt < sundayDepartBurtonInt[7]) {
				nextFerryTimeDepartBurton = sundayDepartBurtonInt[7];
		} else {
				nextFerryTimeDepartBurton = "No More Ferries Today";
		};
		// END THE SUNDAY TIMES CHECKS
		// START WEEKDAY CHECKS
	} else {
		if (militaryclockInt < weekDepartArranmoreInt[0]) {
				nextFerryTimeDepartArranmore = weekDepartArranmoreInt[0];
		} else if (militaryclockInt < weekDepartArranmoreInt[1]) {
				nextFerryTimeDepartArranmore = weekDepartArranmoreInt[1];
		} else if (militaryclockInt < weekDepartArranmoreInt[2]) {
				nextFerryTimeDepartArranmore = weekDepartArranmoreInt[2];
		} else if (militaryclockInt < weekDepartArranmoreInt[3]) {
				nextFerryTimeDepartArranmore = weekDepartArranmoreInt[3];
		} else if (militaryclockInt < weekDepartArranmoreInt[4]) {
				nextFerryTimeDepartArranmore = weekDepartArranmoreInt[4];
		} else if (militaryclockInt < weekDepartArranmoreInt[5]) { 
				nextFerryTimeDepartArranmore = weekDepartArranmoreInt[5];
		} else if (militaryclockInt < weekDepartArranmoreInt[6]) {
				nextFerryTimeDepartArranmore = weekDepartArranmoreInt[6];
		} else {
				nextFerryTimeDepartArranmore = "No More Ferries Today";
		};

		if (militaryclockInt < weekDepartBurtonInt[0]) {
				nextFerryTimeDepartBurton = weekDepartBurtonInt[0];
		} else if (militaryclockInt < weekDepartBurtonInt[1]) {
				nextFerryTimeDepartBurton = weekDepartBurtonInt[1];
		} else if (militaryclockInt < weekDepartBurtonInt[2]) {
				nextFerryTimeDepartBurton = weekDepartBurtonInt[2];
		} else if (militaryclockInt < weekDepartBurtonInt[3]) {
				nextFerryTimeDepartBurton = weekDepartBurtonInt[3];
		} else if (militaryclockInt < weekDepartBurtonInt[4]) {
				nextFerryTimeDepartBurton = weekDepartBurtonInt[4];
		} else if (militaryclockInt < weekDepartBurtonInt[5]) { 
				nextFerryTimeDepartBurton = weekDepartBurtonInt[5];
		} else if (militaryclockInt < weekDepartBurtonInt[6]) {
				nextFerryTimeDepartBurton = weekDepartBurtonInt[6];
		} else {
				nextFerryTimeDepartBurton = "No More Ferries Today";
		};
		// END WEEKDAY CHECKS
	};


	// DAYS OF WEEKS WITH CONSOLE LOG

	// if (militaryclockInt < weekDepartArranmoreInt[0]) {
	// 		nextFerryTime = weekDepartArranmoreInt[0];
	// 		console.log( weekDepartArranmoreInt[0] );
	// } else if (militaryclockInt < weekDepartArranmoreInt[1]) {
	// 		nextFerryTime = weekDepartArranmoreInt[1];
	// 		console.log( weekDepartArranmoreInt[1] );
	// } else if (militaryclockInt < weekDepartArranmoreInt[2]) {
	// 		nextFerryTime = weekDepartArranmoreInt[2];
	// 		console.log( weekDepartArranmoreInt[2] );
	// } else if (militaryclockInt < weekDepartArranmoreInt[3]) {
	// 		nextFerryTime = weekDepartArranmoreInt[3];
	// 		console.log( weekDepartArranmoreInt[3] );
	// } else if (militaryclockInt < weekDepartArranmoreInt[4]) {
	// 		nextFerryTime = weekDepartArranmoreInt[4];
	// 		console.log( weekDepartArranmoreInt[4] );
	// } else if (militaryclockInt < weekDepartArranmoreInt[5]) { 
	// 		nextFerryTime = weekDepartArranmoreInt[5];
	// 		console.log( weekDepartArranmoreInt[5] );
	// } else if (militaryclockInt < weekDepartArranmoreInt[6]) {
	// 		nextFerryTime = weekDepartArranmoreInt[6];
	// 		console.log( weekDepartArranmoreInt[6] );
	// } else {
	// 		nextFerryTime = "No Ferries Running Today";
	// 		console.log( "No Ferries Running Today" );
	// };

	document.getElementById('nextFerryDepartArranmore').innerHTML=""+nextFerryTimeDepartArranmore+"";
	document.getElementById('nextFerryDepartBurton').innerHTML=""+nextFerryTimeDepartBurton+"";

	setTimeout("GetNextFerry()", 1000);

	// console.log( militaryclockInt );
	// console.log( "MATTHEW" );

}
