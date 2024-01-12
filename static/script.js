document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.querySelector('textarea');
    const charCountDisplay = document.createElement('div');
    charCountDisplay.style.marginTop = '10px';
    textArea.parentNode.insertBefore(charCountDisplay, textArea.nextSibling);

    // Update character count
    function updateCharCount() {
        const charCount = textArea.value.length;
        charCountDisplay.textContent = `Character Count: ${charCount}`;
    }

    // Initial character count update
    updateCharCount();

    // Event listener for text area input
    textArea.addEventListener('input', updateCharCount);

    // Toggle entity type checkboxes
    const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedTypes = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
            if (checkedTypes.length > 0) {
                document.querySelectorAll('table tr').forEach(row => {
                    const typeCell = row.cells[1];
                    if (typeCell && !checkedTypes.includes(typeCell.textContent)) {
                        row.style.display = 'none';
                    } else {
                        row.style.display = '';
                    }
                });
            } else {
                document.querySelectorAll('table tr').forEach(row => row.style.display = '');
            }
        });
    });
});
