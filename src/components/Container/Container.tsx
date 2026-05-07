import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			className='		
			mx-auto w-full max-w-7xl px-4 
			md:px-10 xl:px-12'
		>
			{children}
		</div>
	);
};

export default Container;
