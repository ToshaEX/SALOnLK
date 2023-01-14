import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const AddServices = () => {
	const schema = yup.object().shape({
		name: yup.string().required('Name is required'),
		description: yup.string().required('Description is required!'),
		price: yup
			.number()
			.typeError('Price is not a number')
			.positive('Price is not a positive number')
			.integer('Price should be a number')
			.required('Price is required'),
		time: yup
			.number()
			.positive('Time is not a positive number')
			.typeError('Time is not a number')
			.integer('Time should be a number')
			.required('Time is required!'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const [select, setSelect] = useState('Hair');
	const [selectSub, setSelectSub] = useState('Hair cut');
	const [show, setShow] = useState('display');

	const formSubmit = async (data) => {
    
		data.category = select;
		data.sub_category = select === 'Hair' ? selectSub : '';
		return await newService(data);
	};

	async function newService(payload) {
		const { data } = await axios({
			method: 'post',
			url: 'http://localhost:3000/service',
			responseType: 'json',
			data: payload,
		});
		console.log(JSON.stringify(data));
	}

	return (
		<>
			<div className="min-h-[90vh] bg-[#f7f9fc] py-[4.5rem]">
				<div className="container mx-auto">
					<div className="bg-white w-10/12 rounded-xl mx-auto shadow-lg overflow-hidden flex flex-col md:flex-row">
						<div className="md:bg-[url('./assets/add-service.jpg')] md:bg-cover md:py-20 md:w-1/2">
							<div>
								<p className="text-gray-500 mb-4"></p>
							</div>
						</div>

						<div className="w-full py-14 px-9 md:px-12 md:w-1/2">
							<h2 className="text-3xl mb-4">Add New Services</h2>

							<div>
								<form onSubmit={handleSubmit(formSubmit)}>
									<div className="mb-3 mt-5">
										<select
											className="w-full rounded-lg text-sm"
											id="category"
											value={select}
											onChange={(e) => {
												setSelect(e.target.value);
												if (e.target.value === 'Hair') {
													setShow('display');
												} else {
													setShow('hidden');
												}
											}}
										>
											<option value="Hair">Hair</option>
											<option value="Makeup">Makeup</option>
											<option value="Brows">Brows</option>
											<option value="Nails">Nails</option>
											<option value="Cosmetology">Cosmetology</option>
											<option value="Massage">Massage</option>
										</select>
									</div>

									<div className={show}>
										<div className="mb-3">
											<select
												className="w-full rounded-lg text-sm"
												id="sub_category"
												value={selectSub}
												onChange={(e) => {
													setSelectSub(e.target.value);
												}}
											>
												<option value="Hair cut">Hair cut</option>
												<option value="Color">Color</option>
											</select>
										</div>
									</div>

									<div className="mb-3">
										<input
											type="text"
											id="name"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
											placeholder="Name"
											{...register('name')}
										/>
										<p className="text-[#ff6347] text-[12px]">
											{errors.name?.message}
										</p>
									</div>

									<div className="mb-[0.3rem]">
										<textarea
											id="description"
											rows="2"
											className="w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
											placeholder="Description..."
											{...register('description')}
										/>

										<p className="text-[#ff6347] text-[12px]">
											{errors.description?.message}
										</p>
									</div>

									<div className="mb-3">
										<input
											type="number"
											id="price"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
											placeholder="Price"
											{...register('price')}
										/>
										<p className="text-[#ff6347] text-[12px]">
											{errors.price?.message}
										</p>
									</div>

									<div className="mb-3">
										<input
											type="number"
											id="time"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
											placeholder="Time"
											{...register('time')}
										/>
										<p className="text-[#ff6347] text-[12px]">
											{errors.time?.message}
										</p>
									</div>

									<div className="pt-[1rem]">
										<button
											type="submit"
											className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>
                      add Service
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddServices;
