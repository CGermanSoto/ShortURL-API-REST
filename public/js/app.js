console.log('hola')
document.addEventListener('click', (e) =>{
    if (e.target.dataset.short){
        const url = `http://localhost:1200/${e.target.dataset.short}`;

        navigator.clipboard
            .writeText(url)
            .then(()=>{
                console.log('Copiado ')
            })
            .catch((err)=>{
                console.log('Algo falló', err)
            });
    };   
});