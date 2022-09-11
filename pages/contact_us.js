import React from "react";

import Navbar from "components/Navbars/AuthNavbar";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
    return (
        <>
            <Navbar transparent textColorDark/>
            <main className="profile-page">
                <section className="relative pt-24 pb-4 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                            <div className="px-6">
                                <div className="border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <iframe src={`https://us8.list-manage.com/contact-form?u=f4f0aff6e23d3ee34433c8877&form_id=a8b495b8549e163f50d5a037a25440cd`} name="iframe_a" height="1350" width="100%" title="MIC-PA Contact Us"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
