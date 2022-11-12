
const ContactUS = ()=>{
    return(
        <section
        id="contact-us"
        >
            <div className="flex flex-col items-center justify-between px-6 py-24 space-y-12 md:py-12 md:flex-row md:space-y-0">
                <div className="flex flex-col" >
                    <h2 className="max-w-md text-5xl font-bold text-center md:text-left">
                        Get in touch
                    </h2>
                    <p className="max-w-md text-gray pt-5 text-center md:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start md:mr-16">
                    <a><b>Send us a message</b></a>
                    <form 
                    id="contact" 
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}>

                        <div className="-space-y-px w-72 md:w-[400px] rounded-md shadow-sm">
                            <div>
                                <input 
                                type="email" 
                                id="email-address"
                                required
                                className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                placeholder="Email address"
                                onChange={(e) => {}}
                                />
                            </div>
                            <div className="py-3">
                                <input 
                                type="text" 
                                id="subject"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                placeholder="Let us know how we can help you"
                                onChange={(e) => {}}
                                />
                            </div>
                            <div>
                                <textarea 
                                id="message" 
                                rows="4" 
                                required
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " 
                                placeholder="Your message..."
                                onChange={(e) => {}}
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            form="contact"
                            onClick={()=> {}}
                            className="flex mt-5 w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                            Send message
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
}

export default ContactUS;