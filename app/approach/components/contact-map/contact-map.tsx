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
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31516.628974291635!2d-0.18696485!3d5.60371655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b1aa4a9d229%3A0xf87e3c7b6d9d4c39!2sAccra!5e0!3m2!1sen!2sgh!4v0000000000000"
                    className="w-full h-full border-0"
                    // allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </div>
        </section>
    )
}