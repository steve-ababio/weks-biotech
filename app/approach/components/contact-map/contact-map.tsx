import ContactForm from "../contact-form/contact-form";

export default function ContactMap(){
    return(
        <section className="py-6 lg:py-12 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div >
                    <h1 className="text-[#CE532F] font-bold text-3xl text-center md:text-left md:text-4xl lg:text-5xl leading-16 pb-3">Help us help you</h1>
                    <p className="text-[#34405E] text-base font-normal text-center md:text-left">Get in touch with us now and share your thoughts.</p>
                    <ContactForm />
                </div>
                {/* Map container */}
                <div className="h-100">
                {/* <iframe
                    src="https://www.google.com/maps/place/Kpev%C3%A9+agriculture+station/@6.6837445,0.3336701,17z/data=!3m1!4b1!4m6!3m5!1s0x10273fcaebef9857:0x35c76d56106d3af4!8m2!3d6.6837445!4d0.3336701!16s%2Fg%2F11k58nlv1l!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                    className="w-full h-full border-0"
                    // allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.857266155187!2d0.3310951!3d6.6837445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10273fcaebef9857:0x35c76d56106d3af4!2sKpevé%20Agriculture%20Station!5e0!3m2!1sen!2sgh!4v1708350000000"
                    width="100%"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    )
}