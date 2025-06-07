// Utility functions
const utils = {
    // Show alert messages
    showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        document.body.appendChild(alertDiv);
        setTimeout(() => alertDiv.remove(), 3000);
    },

    // Format price
    formatPrice(price) {
        return `$${parseFloat(price).toFixed(2)}`;
    },

    // Handle image upload
    handleImageUpload(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = () => reject(new Error('Image upload failed'));
            reader.readAsDataURL(file);
        });
    }
}; 