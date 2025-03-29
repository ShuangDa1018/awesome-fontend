import './NumberScroll.scss'
function randomNumber(n: number, m: number) {
    const random = Math.floor(Math.random() * (m - n + 1) + n)
    return random
}
// 来自 github numbers-scroll
export default function NumbersCount(props: any) {
    const { value, numberStyle = {} } = props
    const { fontSize = 16 } = numberStyle
    const numberStyleObj = {
        width: '0',
    }

    if (fontSize) {
        numberStyleObj.width = (fontSize * 0.6) / 100 + 'rem'
    }
    const tempNumberArray = (value + '').split('')

    return (
        <div className="numbers-container">
            {tempNumberArray.map((number, index) => {
                let scrollClass = ''
                if (number === '0') {
                    scrollClass = 'numbers-scroll0' + randomNumber(0, 5)
                } else {
                    scrollClass = 'numbers-scroll' + number
                }
                if (isNaN(Number(number))) {
                    return (
                        <div className="numbers-box" key={index}>
                            {number}
                        </div>
                    )
                }
                return (
                    <div className="numbers-box" key={index} style={numberStyleObj}>
                        <span className={scrollClass}>
                            <label>0</label>
                            <label>1</label>
                            <label>2</label>
                            <label>3</label>
                            <label>4</label>
                            <label>5</label>
                            <label>6</label>
                            <label>7</label>
                            <label>8</label>
                            <label>9</label>
                            <label>0</label>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}
