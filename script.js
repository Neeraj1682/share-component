// Function to create shared input components
function createSharedInput(type, label, options = [], name) {
    const container = document.createElement('div');
    container.classList.add('input-container');

    if (type === 'text' || type === 'textarea') {
        const inputLabel = document.createElement('label');
        inputLabel.innerText = label;
        container.appendChild(inputLabel);

        if (type === 'text') {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = name;
            container.appendChild(input);
        } else {
            const textarea = document.createElement('textarea');
            textarea.name = name;
            container.appendChild(textarea);
        }
    } else if (type === 'checkbox') {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = name;
        const checkboxLabel = document.createElement('label');
        checkboxLabel.innerText = label;
        container.appendChild(checkbox);
        container.appendChild(checkboxLabel);
    } else if (type === 'radio') {
        options.forEach(option => {
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = name;
            radio.value = option.value;

            const radioLabel = document.createElement('label');
            radioLabel.innerText = option.label;

            container.appendChild(radio);
            container.appendChild(radioLabel);
        });
    }

    return container;
}

// Function to initialize the form
function initializeForm() {
    const form = document.getElementById('myForm');

    form.appendChild(createSharedInput('text', 'Text Input', [], 'textInput'));
    form.appendChild(createSharedInput('textarea', 'Textarea Input', [], 'textareaInput'));
    form.appendChild(createSharedInput('checkbox', 'Checkbox Input', [], 'checkboxInput'));
    form.appendChild(createSharedInput('radio', 'Radio Input', [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
    ], 'radioInput'));
}

// Event listener for form submission
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById('myForm'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data); // Replace with actual submission logic
});

// Initialize the form
initializeForm();
