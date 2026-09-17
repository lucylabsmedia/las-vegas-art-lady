// Check and manage Cookie Consent banner
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('btn-accept-cookies');
  const declineBtn = document.getElementById('btn-decline-cookies');

  const consentStatus = localStorage.getItem('consent_status');

  // Display banner only if choice has not been made yet
  if (!consentStatus && banner) {
    banner.classList.remove('hidden');
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('consent_status', 'granted');
      if (typeof gtag === 'function') {
        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });
      }
      banner.classList.add('hidden');
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('consent_status', 'denied');
      if (typeof gtag === 'function') {
        gtag('consent', 'update', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied'
        });
      }
      banner.classList.add('hidden');
    });
  }
});/**
 * Handles prefilling for both available sales and commission requests on archived works.
 */
function prefillInquiry(pieceTitle, inquiryType = 'Available Original Piece') {
  const typeSelect = document.getElementById('inquiryType');
  const messageBox = document.getElementById('message');
  
  if (typeSelect && messageBox) {
    typeSelect.value = inquiryType;

    if (inquiryType === 'Available Original Piece') {
      messageBox.value = `Hi Lindsey, I am interested in acquiring "${pieceTitle}". Please let me know current availability and shipping details.`;
    } else {
      messageBox.value = `Hi Lindsey, I saw your archived work "${pieceTitle}" and would love to discuss commissioning a similar custom piece.`;
    }
    
    // Maintain accessible keyboard & screen reader focus
    messageBox.focus({ preventScroll: false });
  }
}
