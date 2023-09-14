import { useEffect, useState } from "react";

interface TogglebuttonI {
    toggle:string
        onMonthly: () => void
        onYearly: () => void
    }
    function ToggleButton({onMonthly,onYearly,toggle}:TogglebuttonI) {
        return (
            <div className="togglebutton_container">
                <div className="toggle-switch">
                    <span
                  
                        className={`inte-toggles ${toggle === "Monthly" ? "inte-toggles__monthly" : "inte-toggles__yearly"
                            }`}
                    ></span>
                    <div className="inte-monthly" onClick={onMonthly}>Pay Monthly</div>
                    <div className="inte-yearly" onClick={onYearly}>Pay Yearly</div>
                </div>
            </div>
        )
    }
    export default ToggleButton