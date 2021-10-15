import React from "react";
function Events() {
	return (
		<div className="Events">
			<h1 className="text-center text-primary">Events Calendar</h1>
			<iframe
				title="DesktopCal"
				className="desktop-only"
				src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&showTitle=0&src=bWNtYXN0ZXJkZWNhQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23AD1457&color=%2333B679&color=%230B8043"
				frameborder="0"
				scrolling="no"
			></iframe>
			<iframe
				title="MobileCal"
				className="mobile-only"
				src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&showTitle=0&src=bWNtYXN0ZXJkZWNhQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23AD1457&color=%2333B679&color=%230B8043&amp;mode=AGENDA"
				frameborder="0"
				scrolling="no"
			></iframe>
		</div>
	);
}
export default Events;
