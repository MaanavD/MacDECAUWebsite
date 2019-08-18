import React from 'react';
function Events() {
  return (
    <div className="Events">
      <h1 className="text-center text-primary">Events Calendar</h1> 
      <iframe title="DesktopCal" className="desktop-only" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23dbdbdd&amp;ctz=America%2FToronto&amp;src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23009688&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showTz=0&amp;showCalendars=0" frameborder="0" scrolling="no"></iframe>
      <iframe title="MobileCal" className="mobile-only" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23dbdbdd&amp;ctz=America%2FToronto&amp;src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23009688&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showTz=0&amp;showCalendars=0&amp;mode=AGENDA" frameborder="0" scrolling="no"></iframe>
    </div>
  );
}
export default Events;
