import { CSSProperties } from 'react'
import './NumberScroll.scss'
interface NumberScrollProps {
    value: string | number
    fontSize?: string
}
// 来自 github numbers-scroll-ignore
export default function NumberScroll(props: NumberScrollProps) {
    const { value, fontSize = '16px' } = props
    const tempNumberArray = (value + '').split('')

    return (
        <div className="numbers-container-ignore" style={{ '--fontSize': fontSize } as CSSProperties}>
            {tempNumberArray.map((number, index) => {
                let scrollClass = ''
                if (number === '0') {
                    scrollClass = 'numbers-scroll0' + randomNumber(0, 5)
                } else {
                    scrollClass = 'numbers-scroll' + number
                }
                if (isNaN(Number(number))) {
                    return (
                        <span className="numbers-box-ignore" key={index}>
                            {number}
                        </span>
                    )
                }
                return (
                    <span className="numbers-box-ignore" key={index}>
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
                    </span>
                )
            })}
        </div>
    )
}

function randomNumber(n: number, m: number) {
    const random = Math.floor(Math.random() * (m - n + 1) + n)
    return random
}
