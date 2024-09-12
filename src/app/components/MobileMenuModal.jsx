import Link from "next/link";
import React from "react";

const MobileMenuModal = (props) => {
    const {clickMenuModal} = props

    return (
        <div className="fn-modal-bg" onClick={clickMenuModal}>
            <div className="fn-modal-menu">
                <Link href={"#introduction"} className="fn-menu">INTRODUCTION</Link>
                <Link href={"#portfolio"} className="fn-menu">PORTFOLIO</Link>
                <Link href={"/#design"} className="fn-menu">DESIGN PORTFOLIO</Link>
                <Link href={"/#study"} className="fn-menu">STUDY</Link>
            </div>
        </div>
    )
}

export default MobileMenuModal