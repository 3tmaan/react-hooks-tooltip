// Externals
import React from 'react';
// Internals
import Tooltip, {TooltipTrigger, TooltipContent} from './Tooltip';
// Styling
import "./styles.css";

export default function App() {

    const onDisplay = () => {
        console.log('onDisplay event')
    }

    return (
        <section>
            <h1>Tooltips using React Hooks</h1>
            <Tooltip id="shippingInfo">
				<TooltipTrigger>
					Hover me
				</TooltipTrigger>
				<TooltipContent>
					<h2 className="heading">Heading text</h2>
					<p>Lorem ipsum dolor sit amet feli elit.</p>
				</TooltipContent>
			</Tooltip>
            <Tooltip id="shippingInfo2">
				<TooltipTrigger as="div">
                    Hover me
				</TooltipTrigger>
				<TooltipContent placement="top" onDisplay={onDisplay}>
					<h2 className="heading">Heading text</h2>
					<p>Lorem ipsum dolor sit amet feli elit.</p>
				</TooltipContent>
			</Tooltip>
        </section>
    );
}