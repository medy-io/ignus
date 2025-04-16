import React from "react";
import Header from "@/app/components/header/header"
import Footer from "@/app/components/footer/footer"

const DashboardLayout = ({children}: { children: React.ReactNode}) => {
    return (
        <>
        <Header />
        {children}
        <Footer/>
        </>
    )
}

export default DashboardLayout;