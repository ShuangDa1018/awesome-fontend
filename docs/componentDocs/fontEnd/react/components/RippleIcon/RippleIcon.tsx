import { ReactNode } from 'react'
import './RippleIcon.scss'
interface RippleIconProps {
    children: ReactNode
}
export default function RippleIcon(props: RippleIconProps) {
    return (
        <div className="ripple-icon">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className='icon-box'>{props.children}</div>
        </div>
    )
}
