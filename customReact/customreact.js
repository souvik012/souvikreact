function customrendor(reactEliment,container){
    // const domElement = document.createElement(reactEliment.type)
    // domElement.innerHTML = reactEliment.children
    // domElement.setAttribute('href',reactEliment.props.href)
    // domElement.setAttribute('target',reactEliment.props.target)
    // container.appendChild(domElement)

    const domelement = document.createElement(reactEliment.type)
    domelement.innerHTML = reactEliment.children
    for(const prop in reactEliment.props){
        if(prop == reactEliment.children) continue;
        domelement.setAttribute(prop,reactEliment.props[prop])
    } 

    container.appendChild(domelement)
}

const reactEliment = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank',
    },

    children:'Click me to go to google'
}

const maincontainer = document.querySelector('.root')

customrendor(reactEliment,maincontainer)