const CONFIG={whatsappChannelUrl:"https://whatsapp.com/channel/0029Vb9EC959WtCBohr0e30z"};
document.addEventListener("DOMContentLoaded",()=>{
	document.querySelectorAll("#join1,#join2").forEach(b=>{
		b.href=CONFIG.whatsappChannelUrl;
		b.addEventListener("click",(e)=>{
			e.preventDefault();
			window.dataLayer=window.dataLayer||[];
			window.dataLayer.push({event:"whatsapp_channel_join_clicked",cta_location:b.id==="join2"?"bottom_cta":"main_cta",destination:"whatsapp_channel"});
			try{
				// Attempt to call gtag conversion and let its callback redirect
				if(typeof gtag_report_conversion === 'function'){
					gtag_report_conversion(b.href);
				} else if(typeof gtag === 'function'){
					// If the helper isn't present but gtag exists, call conversion directly
					gtag('event','conversion',{'send_to':'AW-18403969021/vB45CP6L3oEdEP2P2cdE'});
					window.location = b.href;
				} else {
					// Fallback: redirect immediately
					window.location = b.href;
				}
			}catch(err){
				window.location = b.href;
			}
		});
	});
});
