let current_choose_shape = null
let current_choose_color = null


// 定义页面中图形
const ghead1 = document.querySelector('#g_head1')
const ghead2 = document.querySelector('#g_head2')
const ghead3 = document.querySelector('#g_head3')

const gBody1 = document.querySelector('#g_body1')
const gBody2 = document.querySelector('#g_body2')
const gBody3 = document.querySelector('#g_body3')

const gUpperLeftWing1 = document.querySelector('#g_upper_left_wing1')
const gUpperLeftWing2 = document.querySelector('#g_upper_left_wing2')
const gUpperLeftWing3 = document.querySelector('#g_upper_left_wing3')
const gUpperrightWing1 = document.querySelector('#g_upper_right_wing1')
const gUpperrightWing2 = document.querySelector('#g_upper_right_wing2')
const gUpperrightWing3 = document.querySelector('#g_upper_right_wing3')

const gLowerLeftWing1 = document.querySelector('#g_lower_left_wing1')
const gLowerLeftWing2 = document.querySelector('#g_lower_left_wing2')
const gLowerLeftWing3 = document.querySelector('#g_lower_left_wing3')
const gLowerRightWing1 = document.querySelector('#g_lower_right_wing1')
const gLowerRightWing2 = document.querySelector('#g_lower_right_wing2')
const gLowerRightWing3 = document.querySelector('#g_lower_right_wing3')



// 点击图形的时候，设置选中的shape
ghead1.addEventListener('click', e => {
    setShapeColor(ghead1, current_choose_color)
})
ghead2.addEventListener('click', e => {
    setShapeColor(ghead2, current_choose_color)
})
ghead3.addEventListener('click', e => {
    setShapeColor(ghead3, current_choose_color)
})
gBody1.addEventListener('click', e => {
    setShapeColor(gBody1, current_choose_color)
})
gBody2.addEventListener('click', e => {
    setShapeColor(gBody2, current_choose_color)
})
gBody3.addEventListener('click', e => {
    setShapeColor(gBody3, current_choose_color)
})
gUpperLeftWing1.addEventListener('click', e => {
    setShapeColor(gUpperLeftWing1, current_choose_color)
})
gUpperLeftWing2.addEventListener('click', e => {
    setShapeColor(gUpperLeftWing2, current_choose_color)
})
gUpperLeftWing3.addEventListener('click', e => {
    setShapeColor(gUpperLeftWing3, current_choose_color)
})
gUpperrightWing1.addEventListener('click', e => {
    setShapeColor(gUpperrightWing1, current_choose_color)
})
gUpperrightWing2.addEventListener('click', e => {
    setShapeColor(gUpperrightWing2, current_choose_color)
})
gUpperrightWing3.addEventListener('click', e => {
    setShapeColor(gUpperrightWing3, current_choose_color)
})
gLowerLeftWing1.addEventListener('click', e => {
    setShapeColor(gLowerLeftWing1, current_choose_color)
})
gLowerLeftWing2.addEventListener('click', e => {
    setShapeColor(gLowerLeftWing2, current_choose_color)
})
gLowerLeftWing3.addEventListener('click', e => {
    setShapeColor(gLowerLeftWing3, current_choose_color)
})
gLowerRightWing1.addEventListener('click', e => {
    setShapeColor(gLowerRightWing1, current_choose_color)
})
gLowerRightWing2.addEventListener('click', e => {
    setShapeColor(gLowerRightWing2, current_choose_color)
})
gLowerRightWing3.addEventListener('click', e => {
    setShapeColor(gLowerRightWing3, current_choose_color)
})



// 点击取色的按钮
function onChangeColor(e) {
    current_choose_color = e.target.value
}

// 设置指定图形的颜色
function setShapeColor(shape, color) {
    if (!shape || !color) return

    let style = shape.getAttribute('style')
    let arr = style.split(';')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith('fill')) {
            arr[i] = 'fill:' + color
        }
    }
    shape.setAttribute('style', arr.join(';'))
}


// 定义head的类型 1圆形 2方形 3三角
let headType = 1, headSize = 1
document.querySelector("#headControlId").addEventListener('input', function (evt) {
    ghead1.style.display = 'none'
    ghead2.style.display = 'none'
    ghead3.style.display = 'none'

    headType = this.value
    if (headType == 1) {
        ghead1.style.display = 'block'
    } else if (headType == 2) {
        ghead2.style.display = 'block'
    } else if (headType == 3) {
        ghead3.style.display = 'block'
    }
})


// 改变head大小
document.querySelector("#headSizeId").addEventListener('input', function (evt) {
    headSize = parseInt(this.value)
    if (headType == 1) {
        ghead1.setAttribute("r", 9 + headSize);
    } else if (headType == 2) {
        ghead2.setAttribute("width", 18 + headSize);
        ghead2.setAttribute("height", 18 + headSize);
        ghead2.setAttribute("x", 95 - headSize / 2);
        ghead2.setAttribute("y", 28 - headSize / 2);
    } else if (headType == 3) {
        let x1 = 105
        let y1 = 27 - headSize
        let x2 = 115 + headSize
        let y2 = 45 + headSize
        let x3 = 94 - headSize
        let y3 = y2
        ghead3.setAttribute('d', `M ${x1},${y1} L ${x2},${y2} L ${x3},${y3} Z`)
    }
})



// 定义upper wing
let upperWingType = 1, upperWingSize = 1

// 改变upper wing形状
document.querySelector("#upperWingControlId").addEventListener('input', function (evt) {
    gUpperLeftWing1.style.display = 'none'
    gUpperLeftWing2.style.display = 'none'
    gUpperLeftWing3.style.display = 'none'

    gUpperrightWing1.style.display = 'none'
    gUpperrightWing2.style.display = 'none'
    gUpperrightWing3.style.display = 'none'

    upperWingType = this.value
    if (upperWingType == 1) {
        gUpperLeftWing1.style.display = 'block'
        gUpperrightWing1.style.display = 'block'
    } else if (upperWingType == 2) {
        gUpperLeftWing2.style.display = 'block'
        gUpperrightWing2.style.display = 'block'
    } else if (upperWingType == 3) {
        gUpperLeftWing3.style.display = 'block'
        gUpperrightWing3.style.display = 'block'
    }
})
// 改变upper wing 大小
document.querySelector("#upperWingSizeId").addEventListener('input', function (evt) {
    upperWingSize = parseInt(this.value)
    if (upperWingType == 1) {
        gUpperLeftWing1.setAttribute("r", 35 + upperWingSize);
        gUpperrightWing1.setAttribute("r", 35 + upperWingSize);
    } else if (upperWingType == 2) {
        gUpperLeftWing2.setAttribute("width", 65 + upperWingSize);
        gUpperLeftWing2.setAttribute("height", 65 + upperWingSize);
        gUpperLeftWing2.setAttribute("x", 21 - upperWingSize / 2);
        gUpperLeftWing2.setAttribute("y", 36 - upperWingSize / 2);

        gUpperrightWing2.setAttribute("width", 65 + upperWingSize);
        gUpperrightWing2.setAttribute("height", 65 + upperWingSize);
        gUpperrightWing2.setAttribute("x", 123 - upperWingSize / 2);
        gUpperrightWing2.setAttribute("y", 34 - upperWingSize / 2);
    } else if (upperWingType == 3) {
        let x1 = 56
        let y1 = 32 - upperWingSize
        let x2 = 21 - upperWingSize
        let y2 = 81 + upperWingSize
        let x3 = 87 + upperWingSize
        let y3 = y2
        gUpperLeftWing3.setAttribute('d', `M ${x1},${y1} ${x2},${y2} ${x3},${y3} Z`)

        x1 = 158
        y1 = 34 - upperWingSize
        x2 = 123 - upperWingSize
        y2 = 83 + upperWingSize
        x3 = 192 + upperWingSize
        y3 = y2
        gUpperrightWing3.setAttribute('d', `M ${x1},${y1} ${x2},${y2} ${x3},${y3} Z`)
    }
})


// 改变body形状
let bodyType = 1, bodySize = 1

document.querySelector("#bodyControlId").addEventListener('input', function (evt) {
    gBody1.style.display = 'none'
    gBody2.style.display = 'none'
    gBody3.style.display = 'none'

    bodyType = this.value
    if (bodyType == 1) {
        gBody1.style.display = 'block'
    } else if (bodyType == 2) {
        gBody2.style.display = 'block'
    } else if (bodyType == 3) {
        gBody3.style.display = 'block'
    }
})
document.querySelector("#bodySizeId").addEventListener('input', function (evt) {
    bodySize = parseInt(this.value)
    if (bodyType == 1) {
        gBody1.setAttribute("width", 12 + bodySize);
        gBody1.setAttribute("height", 82 + bodySize);
        gBody1.setAttribute("x", 98 - bodySize / 2);
        gBody1.setAttribute("y", 58 - bodySize / 2);
    } else if (bodyType == 2) {
        gBody2.setAttribute("rx", 6 + bodySize);
        gBody2.setAttribute("ry", 41 + bodySize);
    } else if (bodyType == 3) {
        let x1 = 104
        let y1 = 58 - bodySize
        let x2 = 110 + bodySize
        let y2 = 140 + bodySize
        let x3 = 98 - bodySize
        let y3 = y2
        gBody3.setAttribute('d', `M ${x1},${y1} L ${x2},${y2} L ${x3},${y3} Z`)
    }
})


// 改变lower wing形状
let lowerWingType = 1, lowerWingSize = 1
document.querySelector("#lowerWingControlId").addEventListener('input', function (evt) {
    gLowerLeftWing1.style.display = 'none'
    gLowerLeftWing2.style.display = 'none'
    gLowerLeftWing3.style.display = 'none'

    gLowerRightWing1.style.display = 'none'
    gLowerRightWing2.style.display = 'none'
    gLowerRightWing3.style.display = 'none'

    lowerWingType = this.value
    if (lowerWingType == 1) {
        gLowerLeftWing1.style.display = 'block'
        gLowerRightWing1.style.display = 'block'
    } else if (lowerWingType == 2) {
        gLowerLeftWing2.style.display = 'block'
        gLowerRightWing2.style.display = 'block'
    } else if (lowerWingType == 3) {
        gLowerLeftWing3.style.display = 'block'
        gLowerRightWing3.style.display = 'block'
    }
})
document.querySelector("#lowerWingSizeId").addEventListener('input', function (evt) {
    lowerWingSize = parseInt(this.value)
    if (lowerWingType == 1) {
        gLowerLeftWing1.setAttribute("r", 20 + lowerWingSize);
        gLowerRightWing1.setAttribute("r", 20 + lowerWingSize);
    } else if (lowerWingType == 2) {
        gLowerLeftWing2.setAttribute("width", 28 + lowerWingSize);
        gLowerLeftWing2.setAttribute("height", 28 + lowerWingSize);
        gLowerLeftWing2.setAttribute("x", 57 - lowerWingSize / 2);
        gLowerLeftWing2.setAttribute("y", 93 - lowerWingSize / 2);

        gLowerRightWing2.setAttribute("width", 28 + lowerWingSize);
        gLowerRightWing2.setAttribute("height", 28 + lowerWingSize);
        gLowerRightWing2.setAttribute("x", 125 - lowerWingSize / 2);
        gLowerRightWing2.setAttribute("y", 93 - lowerWingSize / 2);
    } else if (lowerWingType == 3) {
        let x1 = 71
        let y1 = 87 - lowerWingSize
        let x2 = 88 + lowerWingSize
        let y2 = 118 + lowerWingSize
        let x3 = 54 - lowerWingSize
        let y3 = y2
        gLowerLeftWing3.setAttribute('d', `M ${x1},${y1} ${x2},${y2} ${x3},${y3} Z`)

        x1 = 139
        y1 = 87 - lowerWingSize
        x2 = 156 + lowerWingSize
        y2 = 118 + lowerWingSize
        x3 = 122 - lowerWingSize
        y3 = y2
        gLowerRightWing3.setAttribute('d', `M ${x1},${y1} ${x2},${y2} ${x3},${y3} Z`)
    }
})


// 改变pattern形状
let patternType = 1, patternSize = 0
const layer2 = document.getElementById('layer2')
document.querySelector("#patternControlId").addEventListener('input', function (evt) {
    patternType = this.value
    updatePattern()
})
document.querySelector("#patternSizeId").addEventListener('input', function (evt) {
    patternSize = parseInt(this.value) * 0.4
    updatePattern()
})



function updatePattern() {
    layer2.innerHTML = ''
    drawPatternShape()

    if (patternType == 1) {
        for (let i = 1; i <= 10; i++) {
            document.querySelector('#g_pattern_tri_' + i).style.display = 'block'
        }
    } else if (patternType == 2) {
        for (let i = 1; i <= 10; i++) {
            document.querySelector('#g_pattern_circle_' + i).style.display = 'block'
        }
    } else if (patternType == 3) {
        for (let i = 1; i <= 10; i++) {
            document.querySelector('#g_pattern_rect_' + i).style.display = 'block'
        }
    }

    bindPatternClick()
}


function createTriangle(id, cx, cy, r, color) {
    let x1 = cx
    let y1 = cy - r
    let x2 = cx + r * 0.86
    let y2 = cy + r * 0.5
    let x3 = cx - r * 0.86
    let y3 = y2

    const ns = 'http://www.w3.org/2000/svg';
    let style = `fill:${color};display:none;stroke-width:0.5px;stroke:black;`
    let path = document.createElementNS(ns, 'path');
    path.setAttribute('id', id);
    path.setAttribute('style', style)
    path.setAttribute('d', `M ${x1},${y1} ${x2},${y2} ${x3},${y3} Z`)

    document.getElementById('layer2').appendChild(path);
}

function createCircle(id, cx, cy, r, color) {
    const ns = 'http://www.w3.org/2000/svg';
    let style = `fill:${color};display:none;stroke-width:0.5px;stroke:black;`
    let ele = document.createElementNS(ns, 'circle');
    ele.setAttribute('id', id);
    ele.setAttribute('style', style)
    ele.setAttribute('cx', cx)
    ele.setAttribute('cy', cy)
    ele.setAttribute('r', r)

    document.getElementById('layer2').appendChild(ele);
}

function createRect(id, x, y, w, h, color) {
    const ns = 'http://www.w3.org/2000/svg';
    let style = `fill:${color};display:none;stroke-width:0.5px;stroke:black;`
    let ele = document.createElementNS(ns, 'rect');
    ele.setAttribute('id', id);
    ele.setAttribute('style', style)
    ele.setAttribute('x', x - w / 2)
    ele.setAttribute('y', y - h / 2)
    ele.setAttribute('width', w)
    ele.setAttribute('height', h)

    document.getElementById('layer2').appendChild(ele);
}


function drawPatternShape() {
    createTriangle('g_pattern_tri_1', 45, 50, 10 + patternSize, '#fff')
    createCircle('g_pattern_circle_1', 40, 50, 8 + patternSize, '#fff')
    createRect('g_pattern_rect_1', 40, 50, 10 + patternSize, 10 + patternSize, '#fff')

    createTriangle('g_pattern_tri_2', 40, 76, 10 + patternSize, '#fff')
    createCircle('g_pattern_circle_2', 45, 76, 8 + patternSize, '#fff')
    createRect('g_pattern_rect_2', 45, 76, 10 + patternSize, 10 + patternSize, '#fff')

    createTriangle('g_pattern_tri_3', 65, 67, 10 + patternSize, '#fff')
    createCircle('g_pattern_circle_3', 70, 67, 8 + patternSize, '#fff')
    createRect('g_pattern_rect_3', 70, 67, 10 + patternSize, 10 + patternSize, '#fff')

    createTriangle('g_pattern_tri_4', 152, 50, 10 + patternSize, '#fff')
    createCircle('g_pattern_circle_4', 142, 50, 8 + patternSize, '#fff')
    createRect('g_pattern_rect_4', 142, 50, 10 + patternSize, 10 + patternSize, '#fff')

    createTriangle('g_pattern_tri_5', 147, 76, 10 + patternSize, '#fff')
    createCircle('g_pattern_circle_5', 147, 76, 8 + patternSize, '#fff')
    createRect('g_pattern_rect_5', 147, 76, 10 + patternSize, 10 + patternSize, '#fff')

    createTriangle('g_pattern_tri_6', 172, 67, 10 + patternSize, '#fff')
    createCircle('g_pattern_circle_6', 172, 67, 8 + patternSize, '#fff')
    createRect('g_pattern_rect_6', 172, 67, 10 + patternSize, 10 + patternSize, '#fff')

    createTriangle('g_pattern_tri_7', 67, 102, 6 + patternSize, '#fff')
    createCircle('g_pattern_circle_7', 61, 102, 5 + patternSize, '#fff')
    createRect('g_pattern_rect_7', 61, 102, 7 + patternSize, 7 + patternSize, '#fff')

    createTriangle('g_pattern_tri_8', 75, 112, 6 + patternSize, '#fff')
    createCircle('g_pattern_circle_8', 78, 112, 5 + patternSize, '#fff')
    createRect('g_pattern_rect_8', 72, 108, 7 + patternSize, 7 + patternSize, '#fff')

    createTriangle('g_pattern_tri_9', 135, 102, 6 + patternSize, '#fff')
    createCircle('g_pattern_circle_9', 129, 102, 5 + patternSize, '#fff')
    createRect('g_pattern_rect_9', 129, 102, 7 + patternSize, 7 + patternSize, '#fff')

    createTriangle('g_pattern_tri_10', 146, 112, 6 + patternSize, '#fff')
    createCircle('g_pattern_circle_10', 146, 112, 5 + patternSize, '#fff')
    createRect('g_pattern_rect_10', 140, 108, 7 + patternSize, 7 + patternSize, '#fff')
}

// 点击pattern shape换颜色
function bindPatternClick() {
    for (let i = 1; i <= 10; i++) {
        let shape1 = document.querySelector('#g_pattern_tri_' + i)
        let shape2 = document.querySelector('#g_pattern_circle_' + i)
        let shape3 = document.querySelector('#g_pattern_rect_' + i)

        shape1.addEventListener('click', e => {
            setShapeColor(shape1, current_choose_color)
        })
        shape2.addEventListener('click', e => {
            setShapeColor(shape2, current_choose_color)
        })
        shape3.addEventListener('click', e => {
            setShapeColor(shape3, current_choose_color)
        })
    }
}

updatePattern()