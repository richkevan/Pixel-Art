    const generate = document.getElementById('generatorButton')
    const widthInput = document.getElementById('width')
    const heightInput = document.getElementById('height')
    const canvas = document.getElementById('canvas')
    const colorpicker = document.getElementById('palette')
    const clear = document.getElementById('clear')
    var height;
    var width;
    var mouseDown = false
    var chosenColor = 'aliceblue';
    
    document.body.addEventListener('mousedown', () => {
        mouseDown = true
    })
    document.body.addEventListener('mouseup', () => {
        mouseDown = false
    })
    clear.addEventListener('click', () => {
        let pixels = document.getElementsByClassName('pixel')
        for (y=0;y<pixels.length;y++) {
            pixels[y].style.backgroundColor = '#fff'
        }
    })

    generate.addEventListener('click', () => {
        height = widthInput.value 
        width = heightInput.value
        
        for (height;height>0;height --) {
            var row = document.createElement('div')
            row.className ='row'
            for (i = width;i>0;i --) {
                let pixel = document.createElement("div");
                pixel.className = 'pixel'
                pixel.id = `${height}-${i}`
                pixel.addEventListener('click', () => {
                    pixel.style.backgroundColor = chosenColor
                })
                pixel.addEventListener('mousemove', () => {
                    if (mouseDown == true) {
                        pixel.style.backgroundColor = chosenColor
                    }  
                })
                row.appendChild(pixel)
            }
            canvas.appendChild(row)  
        }})

    colorpicker.addEventListener('input', (e) => {
        chosenColor = e.target.value
    })