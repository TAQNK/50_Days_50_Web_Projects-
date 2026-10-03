const panels = document.querySelectorAll('.div');

//this provides you with a node list of all the selectors

// then traversing the nodelist

panels.forEach( (panel) => {
    panel.addEventListener('click' , () => {
        //removing the active on other ones
        removeActiveClasses()
        panel.classList.add('active');
    })
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}