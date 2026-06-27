function sendOrder(productName, price, category) {
    // ⚠️ Apna real WhatsApp number yahan type karein (country code ke sath)
    const whatsappNumber = "03087684397"; 
    
    // Message Text Formatting
    const message = `Assalam-o-Alaikum Hafiz Watches, I want to order this watch:%0A%0A` +
                    `*Category:* ${category}%0A` +
                    `*Product:* ${productName}%0A` +
                    `*Price:* ${price}%0A%0A` +
                    `Please share the details for delivery. Thanks!`;
    
    // WhatsApp URL generation
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    
    // Open in new window/tab
    window.open(whatsappUrl, '_blank');
}