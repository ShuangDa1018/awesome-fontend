import { CSSProperties } from 'react'
import './NumberScroll.scss'
interface NumberScrollProps {
    value: string | number
    fontSize?: string
    loading?: boolean
}
export default function NumberScroll(props: NumberScrollProps) {
    const { value, fontSize = '16px', loading } = props
    const tempNumberArray = String(value).split('')
    const calcStyle = (number: number) => {
        let style: CSSProperties = {}
        if (number === 0) {
            const random = 1 + randomNumber(0, 5) * 0.1
            style = {
                transform: `translateY(calc(-10 * var(--fontSize)))`,
                animation: `scrollNumber ${random}s cubic-bezier(0.25, 1, 0.5, 1) 1 normal`,
            }
        } else {
            style = {
                transform: `translateY(calc(-${number} * var(--fontSize)))`,
                animation: 'scrollNumber 1.2s cubic-bezier(0.25, 1, 0.5, 1) 1 normal',
            }
        }
        if (loading) {
            if (Number(number) === 0) {
                number = 10
            }
            ;(style as any)['--number'] = -Number(number) - 10
            style.animation = `scrollLoading 1.6s linear  infinite both`
        }
        return style
    }
    return (
        <div className="numbers-container-ignore" style={{ '--fontSize': fontSize } as CSSProperties}>
            {tempNumberArray.map((number, index) => {
                return (
                    <div className="numbers-box-ignore" key={index}>
                        {isNaN(Number(number)) ? (
                            number
                        ) : (
                            <span style={calcStyle(Number(number))}>
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
                                {loading && (
                                    <>
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
                                    </>
                                )}
                            </span>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

function randomNumber(n: number, m: number) {
    const random = Math.floor(Math.random() * (m - n + 1) + n)
    return random
}
