const accordians=document.querySelectorAll('.accordian')
accordians.forEach(accordian =>{
    const icon=accordian.querySelector('.icon');
    const details=accordian.querySelector('.details');

    accordian.addEventListener('click',()=>{
        icon.classList.toggle('active');
        details.classList.toggle('active');
    })
})