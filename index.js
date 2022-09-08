const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabía que dirias que sí, te quiero mucho Ros <3')
    alert('Me haces la persona más felíz')
    alert('Esta foto la tomé el día que nos dimos nuestro primer beso 2 de Agosto uu')
    alert('No pensé que me enamoraría y mira, tratando de aprender a programar solo para verte sonreír :D')
    alert('En las pocas veces que hemos salido, sentí como crecía mi cariño hacia tí y no quiero que eso acabe')
    alert('Sé que a veces hago bromas que no te agradan o llegan a molestarte, perdón por eso, es parte de mi personalidad, no trato de hacerte enojar, solo que te rías junto a mí :D')
    alert('Como te dije un día "quiero llegar a tener una relación seria contigo" y pues si nos das una oportunidad prometo dar todo de mi parte, a pesar de ser renegón a veces xd, ¿qué dices :b?')
    alert('No sé si estás llorando o sonriendo, me llena de intriga tu reacción cuando te envíe esto u.u')
    alert('Ahora sí, puedes escribirme en el whatsapp jeje')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})