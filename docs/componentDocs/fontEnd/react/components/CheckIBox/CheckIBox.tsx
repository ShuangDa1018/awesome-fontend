import React from 'react'
import './index.scss'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    isCheck: boolean
    onCheckClose: () => void
    text?: string
    className?: string
}

export default React.memo<Props>((props) => {
    const { isCheck, onCheckClose, className, text = '本次不再显示弹框', ...otherProps } = props
    const cls = ['custom-close-action-box', className].filter(Boolean).join(' ')

    return (
        <div className={`${cls} ${isCheck ? 'btnChecked' : ''}`} onClick={onCheckClose} {...otherProps}>
            <span className="check-icon">
                <svg viewBox="0 0 12 10" height="10px" width="12px">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
            </span>
            <span className="check-text">{text}</span>
        </div>
    )
})
