const messageInput = document.querySelector('.message-input');
const radioButtons = document.querySelectorAll('.message-type-input');
const textButton = document.querySelector('.text-button');
const messageContainer = document.querySelector('.message-container');

// 

function displayMessage(messageType) {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageContainer.appendChild(messageBox);

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = messageInput.value;
    messageBox.appendChild(paragraph);

    const messageTypeText = document.createElement('h5');
    messageTypeText.classList.add('message-type-text');
    messageTypeText.textContent = 'Message type: Warning';
    messageBox.appendChild(messageTypeText);
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    messageBox.appendChild(deleteButton);
    
    deleteButton.addEventListener('click', () => {
        messageBox.parentNode.removeChild(messageBox);
    });

    if (messageType === 'warning') {
        console.log('Warning');
    } else if (messageType === 'alert') {
        console.log('Alert');
    } else {
        console.log('Something');
    };
};


//

textButton.addEventListener('click', e => {
    e.preventDefault();

    displayMessage('warning');
});