import React from 'react';

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
	return (
		<div
			className={`
			mx-auto w-full max-w-7xl px-4 
			md:px-10 xl:px-12 ${className ?? ''}`}
		>
			{children}
		</div>
	);
};

export default Container;
