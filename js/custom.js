
const counterUp = (element)=>{
    const target = +element.getAttribute('data-target')
    const increment = target / 200 // Adjust the increment for speed
    let count = 0

    const updateCounter = ()=>{
        count += increment
        if(count < target){
            element.innerText = Math.ceil(count)
            requestAnimationFrame(updateCounter)
        }else{
            element.innerText = target
        }
        console.log('updateCounter');
    }
    

    updateCounter();
    
}

// Intersection Observer to trigger the counter up when in view
const observer = new IntersectionObserver((entries, observer) =>{

    entries.forEach(entry => {
        if(entry.isIntersecting){
            const counters = document.querySelectorAll('.count')
            counters.forEach(counter => counterUp(counter))
            observer.disconnect() //stop observing once the counters start
        }
    })

    

}, {threshold: 0.5})

observer.observe(document.querySelector('.clients_counter'))