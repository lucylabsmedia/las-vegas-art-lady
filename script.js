/**
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