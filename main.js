// Global variables ftw

const listArray = [];
let isStack = true;

// Set init to run when the window loads.
window.onload = init;

function init() {

    // Set event handlers.
    document.querySelector('#submit')
        .addEventListener('click', addNewItem)

    document.querySelector('#remove')
        .addEventListener('click', removeItem);

    document.querySelector('#toggle')
            .addEventListener('click', toggleQueueAndStack);
}

function addNewItem(event) {
    // Prevent page reload.
    event.preventDefault()
    
    // Get the value from the input field.
    const newItem = document.querySelector('#new-item').value;

    // Set the input field back to blank.
    resetInput();

    // Add the item to the <ul>.
    displayItem(newItem);

    // Now comes your part: add the item to the list.
    if(isStack === true){
        listArray.unshift(newItem);
    } else{
        listArray.push(newItem);
    }

    // Display it in next-item if it's the first item:
    if(listArray.length === 1) {
        document.querySelector('#next-item').innerText = newItem;
    } else{
        document.querySelector('#next-item').innerText = listArray[0]
    }
    if(isStack != true){
        document.querySelector('#newest-item').innerText = listArray[listArray.length - 1];
        document.querySelector('#next-item').innerText = listArray[0];
    } else{
        document.querySelector('#newest-item').innerText = listArray[0];
    }
    document.querySelector('#number-of-items').innerText = listArray.length; 
}

function removeItem(event) {
    // Prevent page reload.
    let newestItemOut = listArray.length
    event.preventDefault()
    if(isStack === true){
    removeLastFromPage();
    } else{
        removeFirstFromPage();
    }
    listArray.shift();

    if(newestItemOut === 1){
        newestItemOut = 'Your bucket list is empty!'
    }
    document.querySelector('#newest-item').innerText = newestItemOut;
    document.querySelector('#number-of-items').innerText = listArray.length;
}

function toggleQueueAndStack(event) {
    // Prevent page reload.
    event.preventDefault()

    // How can we toggle whether it's a stack or a queue?
    // Your code below!
    if(isStack === true){
        isStack = false;
        document.querySelector('#toggle').innerText = 'Toggle to Stack'
        document.querySelector('#items').removeAttribute('class', 'stacked');
    } else{
        isStack = true;
        document.querySelector('#toggle').innerText = 'Toggle to Queue'
        document.querySelector('#items').setAttribute('class', 'stacked');
    }
}

/*

No need to touch anything below!
Feel free to check it out though.

*/

function removeLastFromPage() {
    const items = document.querySelectorAll('li');
    const lastItem = items[items.length - 1];
    lastItem.parentNode.removeChild(lastItem); 
}

function removeFirstFromPage() {
    const items = document.querySelectorAll('li');
    const firstItem = items[0];
    console.log(firstItem)
    firstItem.parentNode.removeChild(firstItem); 
}

function resetInput() {
    // Resets input field to blank. No need to add anything here!
    document.querySelector('#new-item').value = '';
}

function displayItem(itemText) {
    // Displays item on list. No need to add anything here!
    const newItem = document.createElement('li');
    newItem.innerText = itemText;
    document.querySelector('#items').appendChild(newItem);
}
