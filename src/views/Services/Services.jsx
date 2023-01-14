import React, { useState, useEffect } from 'react';
import CTA from '../../Components/CTA';
import Footer from '../../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Services = () => {
	const [expand1, setExpand1] = useState(false);
	const [expand2, setExpand2] = useState(false);
	const [expand3, setExpand3] = useState(false);
	const [expand4, setExpand4] = useState(false);
	const [service, setServices] = useState([]);

	const expandClass1 = expand1 ? 'display' : 'hidden';
	const ansClass1 = `${expandClass1} px-3 pb-3`;
	const expandClass2 = expand2 ? 'display' : 'hidden';
	const ansClass2 = `${expandClass2} px-3 pb-3`;
	const expandClass3 = expand3 ? 'display' : 'hidden';
	const ansClass3 = `${expandClass3} px-3 pb-3`;
	const expandClass4 = expand4 ? 'display' : 'hidden';
	const ansClass4 = `${expandClass4} px-3 pb-3`;

	useEffect(() => {}, []);

	return (
		<div>
			{/* Service Menu Section */}
			<div className="bg-[url('./assets/services-bg.png')]">
				<div className="p-[3rem] text-white">
					<div className="text-center">
						<h2 className="font-bold text-[42px] leading-none tracking-tight md:text-[50px]">
              Service Menu
						</h2>
					</div>

					<div className="text-center pt-[2rem]">
						<span className="text-[17px] tracking-tight md:text-[18px]">
              We enhance individual beauty with state-of-the-art technologies
              and <br /> personalized service. Our professional team is ready to
              provide the <br /> greatest service you've ever had.
						</span>
					</div>

					<div className="flex pt-[3rem] justify-center">
						<button className="btn-primary hover:bg-gray-dark">
              Book an Appointment
						</button>
					</div>
				</div>
			</div>

			{/* Service Selection Section */}
			<div className="">
				<div className="relative">
					<div className="hidden text-center w-[50px] sticky top-0 px-[20px] md:p-[4rem] md:block">
						<div className="h-[20px]"></div>
						<Link
							to="Hair"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							<div className="flex flex-col items-center justify-center cursor-pointer w-[35px] pt-4 pb-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
								<div className="h-[35px] w-[35px] m-auto mb-[5px] md:h-[50px] md:w-[50px]">
									<img
										src={require('../../assets/woman-hair.png')}
										alt="hair"
									/>
								</div>
								<div className="serviceName">
									<span className="">Hair</span>
								</div>
							</div>
						</Link>

						<Link
							to="Makeup"
							spy={true}
							smooth={true}
							offset={-20}
							duration={500}
						>
							<div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
								<div className="h-[35px] w-[35px] m-auto mb-[5px] md:h-[50px] md:w-[50px]">
									<img src={require('../../assets/makeup.png')} alt="makeup" />
								</div>
								<div className="serviceName">
									<span className="">MakeUp</span>
								</div>
							</div>
						</Link>

						<Link
							to="Brows"
							spy={true}
							smooth={true}
							offset={-20}
							duration={500}
						>
							<div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
								<div className="h-[35px] w-[35px] m-auto mb-[5px] md:h-[50px] md:w-[50px]">
									<img
										src={require('../../assets/mascara.png')}
										alt="mascara"
									/>
								</div>
								<div className="serviceName">
									<span className="">Brow</span>
								</div>
							</div>
						</Link>

						<Link
							to="Nails"
							spy={true}
							smooth={true}
							offset={-20}
							duration={500}
						>
							<div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
								<div className="h-[35px] w-[35px] m-auto mb-[5px] md:h-[50px] md:w-[50px]">
									<img
										src={require('../../assets/nail-polish.png')}
										alt="nail"
									/>
								</div>
								<div className="serviceName">
									<span className="">Nails</span>
								</div>
							</div>
						</Link>

						<Link
							to="Cosmetology"
							spy={true}
							smooth={true}
							offset={-20}
							duration={500}
						>
							<div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
								<div className="h-[35px] w-[35px] m-auto mb-[5px] md:h-[50px] md:w-[50px]">
									<img src={require('../../assets/hair-comb.png')} alt="comb" />
								</div>
								<div className="serviceName">
									<span className="">Cosmetology</span>
								</div>
							</div>
						</Link>

						<Link
							to="Massage"
							spy={true}
							smooth={true}
							offset={-20}
							duration={500}
						>
							<div className="flex flex-col items-center justify-center cursor-pointer w-[35px] py-2 drop-shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:w-[50px]">
								<div className="h-[35px] w-[35px] m-auto mb-[5px] md:h-[50px] md:w-[50px]">
									<img
										src={require('../../assets/massage.png')}
										alt="massage"
									/>
								</div>
								<div className="serviceName">
									<span className="">Massage</span>
								</div>
							</div>
						</Link>
					</div>

					{/* Hair Details Section */}
					<section
						id="Hair"
						className="text-center px-[1rem] mt-[3rem] md:mt-[-38rem]"
					>
						<div>
							<div className="mb-[18px]">
								<h2 className="font-bold text-[40px] leading-none tracking-tight">
                  Hair
								</h2>
							</div>

							<div className="pt-[1rem] md:px-[3rem]">
								<span className="text-[18px] tracking-tight">
                  Stylish hair cuts, gorgeous styling, incredible color services
                  and best hair <br /> treatments. Choose your dream service!
								</span>
							</div>

							<div className="pb-[5rem] md:px-[5rem]">
								<div className="pt-[3rem] px-[1rem] md:px-[10rem]">
									<div className="text-start mb-[18px] md:pl-[5rem]">
										<h2 className="font-bold text-[24px] leading-none tracking-tight">
                      Haircut
										</h2>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 md:px-[5rem] md:gap-20">
										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Clipper Cut
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $39
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          A haircut using clippers to achieve an ultra-short
                          design. (30 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            HairCut
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $39
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          A haircut, trim or shape on anyone over the age of 10.
                          (60 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Signature Haircut
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $49
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          A haircut, trim, shape on anyone over the age of 10
                          with a customized conditioning treatment. (1 hr 15
                          min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Barbered Cuts
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $19
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          A short barbered cuts that do not require blow-dry
                          styling. (15 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Kids Haircut
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $29
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          A haircut on a child age 10 & under. (30 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Bang Trim
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $19
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          A trim on the bang area. Shampoo, conditioner and
                          scalp massage not included. (15 min)
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="pt-[3rem] px-[1rem] md:px-[10rem]">
									<div className="text-start mb-[18px] md:pl-[5rem]">
										<h2 className="font-bold text-[24px] leading-none tracking-tight">
                      Color
										</h2>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 md:px-[5rem] md:gap-20">
										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            All-Over Color
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $30
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          An all-over application of a single hair color from
                          roots to ends. (1 hr 45 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Full Root Touch-up
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $55
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          An application of hair color to the root area only. (1
                          hr 45 min)
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* MakeUp Details Section */}
					<section id="Makeup" className="text-center bg-[#f7f9fc] px-[1rem]">
						<div className="pt-[5rem]">
							<div className="mb-[18px]">
								<h2 className="font-bold text-[40px] leading-none tracking-tight">
                  Makeup
								</h2>
							</div>

							<div className="pt-[1rem] md:px-[3rem]">
								<span className="text-[18px] tracking-tight">
                  Complete your service with beautiful makeup and simply be
                  amazing with <br /> complete look.
								</span>
							</div>

							<div className="pb-[5rem] md:px-[5rem]">
								<div className="pt-[3rem] px-[1rem] md:px-[10rem]">
									<div className="grid grid-cols-1 md:grid-cols-2 md:px-[5rem] md:gap-20">
										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Complimentary Touch-up
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $30
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          Complete your service with this quick touch up, or pop
                          in and meet with an available service professional or
                          retail beauty advisor. (15 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Formal Makeup Application
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $39
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          A make up application that includes enhanced make up
                          techniques for a more dramatic look. (60 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Everyday Makeup Application
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $29
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          Put your fresh face forward. This make up application
                          will have you looking your best. (45 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Cocktail Makeup
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $48
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          A make up application that includes enhanced make up
                          techniques for a more dramatic look. (60 min)
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Brows Details Section */}
					<section id="Brows" className="text-center px-[1rem]">
						<div className="pt-[5rem]">
							<div className="mb-[18px]">
								<h2 className="font-bold text-[40px] leading-none tracking-tight">
                  Brows
								</h2>
							</div>

							<div className="pt-[1rem] md:px-[3rem]">
								<span className="text-[18px] tracking-tight">
                  Brows can change it all. Try out styling and tinting your
                  brows and see <br /> the difference.
								</span>
							</div>

							<div className="pb-[5rem] md:px-[5rem]">
								<div className="pt-[3rem] px-[1rem] md:px-[10rem]">
									<div className="grid grid-cols-1 md:grid-cols-2 md:px-[5rem] md:gap-20">
										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Brow Wax & Style
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $30
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          Includes a brow consultation, wax & style. (20 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Brow Tweeze
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $19
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          Includes a brow consultation, tweeze & style. (20 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Brow Trim
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $20
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          Includes a brow consultation, trim & style. (20 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Bang Trim
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            148
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          A trim on the bang area. Shampoo, conditioner and
                          scalp massage not included. (15 min)
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Nails Details Section */}
					<section id="Nails" className="text-center bg-[#f7f9fc] px-[1rem]">
						<div className="pt-[5rem]">
							<div className="mb-[18px]">
								<h2 className="font-bold text-[40px] leading-none tracking-tight">
                  Nails
								</h2>
							</div>

							<div className="pt-[1rem] md:px-[3rem]">
								<span className="text-[18px] tracking-tight">
                  Get your nails done for great mood. Simple pleasures can make
                  your week, not <br /> just day.
								</span>
							</div>

							<div className="pb-[5rem] md:px-[5rem]">
								<div className="pt-[3rem] px-[1rem] md:px-[10rem]">
									<div className="grid grid-cols-1 md:grid-cols-2 md:px-[5rem] md:gap-20">
										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Cherie Manicure
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $50
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          Delicate cuticle work, buffing, and shaping. To
                          finish, a relaxing hand massage, topped off with a
                          perfect polish. (60 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Gel Manicure
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $59
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          All the features of our Cherie manicure, but finish
                          with nontoxic Gel Polish instead. (40 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Buff Manicure
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $39
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          Our natural look manicure - no polish, but all of the
                          pampering. (20 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Cherie Pedicure
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $39
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          Our natural look pedi - no polish, but all of the
                          pampering. Revitalize tired feet. (30 min)
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Cosmetology Details Section */}
					<section id="Cosmetology" className="text-center px-[1rem]">
						<div className="pt-[5rem]">
							<div className="mb-[18px]">
								<h2 className="font-bold text-[40px] leading-none tracking-tight">
                  Cosmetology
								</h2>
							</div>

							<div className="pt-[1rem] md:px-[3rem]">
								<span className="text-[18px] tracking-tight">
                  Indulge a little longer with a customized facial to help
                  achieve your skin goals in <br /> 60-90 minutes.
								</span>
							</div>

							<div className="pb-[5rem] md:px-[5rem]">
								<div className="pt-[3rem] px-[1rem] md:px-[10rem]">
									<div className="grid grid-cols-1 md:grid-cols-2 md:px-[5rem] md:gap-20">
										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            60 Minute Customized Facial
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $40
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          Customized Facial enhanced with your choice of
                          Microdermabrasion for Smoother Skin. (60 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Hydra facial
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $39
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          The HydraFacial is a much-loved rejuvenation
                          treatment, using patented Vortex technology to deliver
                          botanical nutrients directly to the skin. (90 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Moisturizing Facial
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $20
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          Revives stressed, dehydrated and overworked skin in
                          minutes. (60 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Anti-Aging Therapy
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $49
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          This anti-aging treatment stimulates collagen
                          production for a firmer complexion. (60 min)
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Massage Details Section */}
					<section id="Massage" className="text-center bg-[#f7f9fc] px-[1rem]">
						<div className="pt-[5rem]">
							<div className="mb-[18px]">
								<h2 className="font-bold text-[40px] leading-none tracking-tight">
                  Massage
								</h2>
							</div>

							<div className="pt-[1rem] md:px-[3rem]">
								<span className="text-[18px] tracking-tight">
                  A whole-body hands-on treatment that helps you relax.
								</span>
							</div>

							<div className="pb-[5rem] md:px-[5rem]">
								<div className="pt-[3rem] px-[1rem] md:px-[10rem]">
									<div className="grid grid-cols-1 md:grid-cols-2 md:px-[5rem] md:gap-20">
										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Deep Tissue Massage
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $50
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          Targets the deeper layers of muscle and connective
                          tissue. The massage therapist uses slower strokes or
                          friction techniques across the grain of the muscle.
                          (60 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Swedish Massage
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $59
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          As the best-known type of bodywork performed today,
                          one of the primary goals of the Swedish massage
                          technique is to relax the entire body. (60 min)
												</span>
											</div>
										</div>

										<div className="max-w-[300px]">
											<div className="flex">
												<div className="text-start pt-[2rem] w-full">
													<span className="text-[18px] tracking-tight">
                            Sports Massage
													</span>
												</div>
												<div className="pt-[2rem] w-full text-end">
													<span className="text-[18px] tracking-tight font-light">
                            $49
													</span>
												</div>
											</div>
											<div className="text-start pt-[10px]">
												<span className="text-[16px] tracking-tight text-gray">
                          A form of treatment is commonly performed on athletes
                          by certified sports massage is a popular technique of
                          applying different types of pressure on the body. (20
                          min)
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			{/* import CTA Section */}
			<CTA />

			{/* Frequently asked Section */}
			<div className="text-center bg-[#f7f9fc] pb-10">
				<div className="pt-[3rem]">
					<div className="mb-[18px]">
						<h2 className="font-bold text-[40px] leading-none tracking-tight">
              Frequently Asked Questions
						</h2>
					</div>

					<div className="pt-[1rem] px-[3rem] pb-[2rem]">
						<span className="text-[18px] tracking-tight">
              You have questions? We have answers.
						</span>
					</div>

					<div className="flex justify-center items-center px-[3rem] text-start pb-1">
						<div className="shadow rounded bg-white w-[500px] md:w-[800px]">
							<div className="flex text-md font-medium justify-between px-3 py-3">
								<div className="">Q: HOW DO I SCHEDULE AN APPOINTMENT?</div>
								<button
									className="text-xl focus:outline-none pl-5"
									onClick={() => {
										setExpand1(!expand1);
									}}
								>
									{expand1 ? (
										<FontAwesomeIcon icon={faXmark} />
									) : (
										<FontAwesomeIcon icon={faPlus} />
									)}
								</button>
							</div>
							<div className={ansClass1}>
                A: Schedule your appointment here online with our booking
                assistant, by phone at your desired salon location.
								<br />
                Reservations for your appointment are held with a credit card.
                Please review the Cancellation Policy.
							</div>
						</div>
					</div>

					<div className="flex justify-center items-center px-[3rem] text-start pb-1">
						<div className="shadow rounded bg-white w-[500px] md:w-[800px]">
							<div className="flex text-md font-medium justify-between px-3 py-3">
								<div className="">Q: HOW DOES YOUR PRICING WORK?</div>
								<button
									className="text-xl focus:outline-none pl-5"
									onClick={() => {
										setExpand2(!expand2);
									}}
								>
									{expand2 ? (
										<FontAwesomeIcon icon={faXmark} />
									) : (
										<FontAwesomeIcon icon={faPlus} />
									)}
								</button>
							</div>
							<div className={ansClass2}>
                A: Hair length or technique does not determine gender, and we
                believe that hair color and cuts should be individually curated
                for every guest. All of our services are based on the time
                needed to complete them. This allows us to customize your
                service based on your hair type and your desired result
							</div>
						</div>
					</div>

					<div className="flex justify-center items-center px-[3rem] text-start pb-1">
						<div className="shadow rounded bg-white w-[500px] md:w-[800px]">
							<div className="flex text-md font-medium justify-between px-3 py-3">
								<div className="">
                  Q: WHAT SERVICES OR PRODUCTS SHOULD I PICK?
								</div>
								<button
									className="text-xl focus:outline-none pl-5"
									onClick={() => {
										setExpand3(!expand3);
									}}
								>
									{expand3 ? (
										<FontAwesomeIcon icon={faXmark} />
									) : (
										<FontAwesomeIcon icon={faPlus} />
									)}
								</button>
							</div>
							<div className={ansClass3}>
                A: Just book an in-person or virtual consultation with one of
                our stylists to provide recommendations for your hair wants and
                needs. <br />
                We're here to answer any questions you might have about your
                current hair and how you want it to look and feel. Or, we're
                happy to provide recommendations if you're not sure what you
                want yet!
							</div>
						</div>
					</div>

					<div className="flex justify-center items-center px-[3rem] text-start pb-1">
						<div className="shadow rounded bg-white w-[500px] md:w-[800px]">
							<div className="flex text-md font-medium justify-between px-3 py-3">
								<div className="">Q: WHAT BRAND OF PRODUCTS DO YOU CARY?</div>
								<button
									className="text-xl focus:outline-none pl-5"
									onClick={() => {
										setExpand4(!expand4);
									}}
								>
									{expand4 ? (
										<FontAwesomeIcon icon={faXmark} />
									) : (
										<FontAwesomeIcon icon={faPlus} />
									)}
								</button>
							</div>
							<div className={ansClass4}>
                A: <br />
                VaHi: Oribe & Olaplex
								<br />
                Powder Springs: Aveda
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* import footer Section */}
			<Footer />
		</div>
	);
};

export default Services;
