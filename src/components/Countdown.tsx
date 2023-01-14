import { FC, useEffect, useRef, useState } from "react";


const CustomCountDown:FC = (props) => {
    var countDownDate = new Date(props.eventDate).getTime();
    const [day, setDay] = useState('')
    const [hours, setHours] = useState('')
    const [minute, setMinute] = useState('')
    const [second, setSecond] = useState('')

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        
        setDay(days.toString())
        setHours(hours.toString())
        setMinute(minutes.toString())
        setSecond(seconds.toString())
        

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            setDay(0);
            setHours(0);
            setMinute(0);
            setSecond(0);
        }

        

    

    }, 1000);

    // semnas
    if(props.eventDate==='Dec 25, 2023'){
        return(
    <div>
        <p className='text-center text-white font-louisgeorgecafe' style={{fontSize: '1.5rem'}}>Nantikan informasi dari kami ya!</p>
        

        

    </div>
    )

    }else{
        return(
    <div>
        <p className='text-center text-white font-louisgeorgecafe' style={{fontSize: '1.5rem'}}>{props.eventDate}</p>
        <div style={{color: 'white', display: 'flex'}}>
            <div style={{margin: '.5rem', padding: '.8em', background: '#ffffff26'}} className="text-center">
                <p style={{fontSize: '2rem', marginTop: '2rem', marginBottom: '.5rem'}}>{day}</p>
                <p className="font-louisgeorgecafe">Days</p>
            </div>
            <div style={{margin: '.5rem', padding: '.8em', background: '#ffffff26'}} className="text-center">
                <p style={{fontSize: '2rem', marginTop: '2rem', marginBottom: '.5rem'}}>{hours}</p>
                <p className="font-louisgeorgecafe">Hours</p>
            </div>
            <div style={{margin: '.5rem', padding: '.8em', background: '#ffffff26'}} className="text-center">
                <p style={{fontSize: '2rem', marginTop: '2rem', marginBottom: '.5rem'}}>{minute}</p>
                <p className="font-louisgeorgecafe">Minutes</p>
            </div>
            <div style={{margin: '.5rem', padding: '.8em', background: '#ffffff26'}} className="text-center">
                <p style={{fontSize: '2rem', marginTop: '2rem', marginBottom: '.5rem'}}>{second}</p>
                <p className="font-louisgeorgecafe">Second</p>
            </div>
        </div>

        

    </div>
    )
    }
 
}



export default CustomCountDown