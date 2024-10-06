import React from 'react';
import type { SVGProps } from 'react';

export function Menu(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 6h18M3 12h18M3 18h18"></path></svg>);
}