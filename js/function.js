
// Function to handle "Donate Now" button click
function handleDonateClick(amountInputId, totalAmountId, donationTitle) {
    const inputField = document.getElementById(amountInputId);
    const totalAmountField = document.getElementById(totalAmountId);
    const donationAmount = parseFloat(inputField.value);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        showModal('Invalid Donation', 'Please enter a valid donation amount.');
        return;
    }

    // Update the specific donation total
    const currentTotal = parseFloat(totalAmountField.textContent);
    const newTotal = currentTotal + donationAmount;
    totalAmountField.textContent = newTotal.toFixed(2);

    // Update the overall target amount
    const targetAmountElem = document.getElementById('target-amount');
    const targetAmount = parseFloat(targetAmountElem.textContent);
    const newTargetAmount = targetAmount - donationAmount;
    targetAmountElem.textContent = newTargetAmount.toFixed(2);

    // Log the donation in history
    const donationHistory = document.getElementById('table-body');
    const newRow = donationHistory.insertRow();
    const amountCell = newRow.insertCell(0);
    const titleCell = newRow.insertCell(1);
    const timeCell = newRow.insertCell(2);

    amountCell.textContent = `${donationAmount.toFixed(2)} BDT`;
    titleCell.textContent = donationTitle;
    timeCell.textContent = new Date().toLocaleString();

    // Show success modal
    showModal('Donation Successful', `Thank you for your donation of ${donationAmount.toFixed(2)} BDT towards ${donationTitle}.`);

    // Clear input field
    inputField.value = '';
}

// Function to show modal
function showModal(title, message) {
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    document.getElementById('my-modal').checked = true;
}

// Function to handle navigation button click
function handleNavButtonClick(activeButtonId, inactiveButtonId, showSectionId, hideSectionId) {
    const activeButton = document.getElementById(activeButtonId);
    const inactiveButton = document.getElementById(inactiveButtonId);
    const showSection = document.getElementById(showSectionId);
    const hideSection = document.getElementById(hideSectionId);

    // Toggle the active class
    activeButton.classList.add('button-active');
    inactiveButton.classList.remove('button-active');

    // Show and hide sections
    showSection.classList.remove('hidden');
    hideSection.classList.add('hidden');
}

// Event listeners for "Donate Now" buttons
document.getElementById('btn-flood-add').addEventListener('click', function(event) {
    handleDonateClick('flood-input', 'total-flood', 'Flood Relief in Noakhali');
});

document.getElementById('btn-releif-add').addEventListener('click', function() {
    handleDonateClick('relief-input', 'total-relief', 'Flood Relief in Feni');
});

document.getElementById('btn-quota-add').addEventListener('click', function() {
    handleDonateClick('quota-input', 'total-quota', 'Aid for Quota Movement Injured');
});

// Event listeners for Donation and History buttons
document.getElementById('btn-donation').addEventListener('click', function() {
    handleNavButtonClick('btn-donation', 'btn-history', 'donation-section', 'history-section');
});

document.getElementById('btn-history').addEventListener('click', function() {
    handleNavButtonClick('btn-history', 'btn-donation', 'history-section', 'donation-section');
});
