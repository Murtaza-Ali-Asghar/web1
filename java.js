document.addEventListener('DOMContentLoaded', function() {
    const countDisplay = document.getElementById('count');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');

    let count = 0;

    function updateCount() {
        countDisplay.textContent = count;
    }

    incrementButton.addEventListener('click', function() {
        count++;
        updateCount();
    });

    decrementButton.addEventListener('click', function() {
        if (count > 0) {
            count--;
            updateCount();
        }
    });

    resetButton.addEventListener('click', function() {
        count = 0;
        updateCount();
    });
});
