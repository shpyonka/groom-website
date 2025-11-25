// utils/whatsapp.js
export const openWhatsApp = (message = '') => {
  const phoneNumber = '79292432000'; // Ваш номер без +7
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

export const openPhone = () => {
  window.open('tel:+79292432000');
};
