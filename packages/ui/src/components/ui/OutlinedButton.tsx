import { FC, PropsWithChildren } from "react"
import classnames from "classnames"
interface OutlinedButtonProps {
    onClick?: (e: any) => void
    className?: string
    disabled?: boolean
}
const OutlinedButton: FC<PropsWithChildren<OutlinedButtonProps>> = ({
    onClick,
    className = "",
    children,
    disabled = false,
}) => {
    return (
        <button
            className={classnames(
                "flex flex-row items-center bg-white border border-[#D7D9D7] hover:border-primary-black-default justify-between",
                "h-12 space-x-2 p-4 rounded-lg text-sm font-semibold text-black w-full",
                onClick && "cursor-pointer",
                className
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
export default OutlinedButton
