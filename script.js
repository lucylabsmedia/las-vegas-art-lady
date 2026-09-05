/**
 * Prefills contact form upon choosing an artwork and smoothly transfers 
 * focus directly to the interactive form control for screen readers & keyboards.
 */
function prefillInquiry(pieceTitle) {
  const typeSelect = document.getElementById('inquiryType');
  const messageBox = document.getElementById('message');
  
  if (typeSelect && messageBox) {
    typeSelect.value = 'Available Original Piece';
    messageBox.value = `Hi Lindsey, I am interested in acquiring "${pieceTitle}". Please let me know current availability and shipping details.`;
    
    // Smooth scroll and focus accessible handoff
    messageBox.focus({ preventScroll: false });
  }
}