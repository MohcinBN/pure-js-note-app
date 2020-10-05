// take the form references using object 

const fromFields = {}
fromFields.textNote = document.querySelector('#textNote');
fromFields.priority = document.querySelector('#priority');
fromFields.addBtn = document.querySelector('#addBtn');

// notes div to push it all

const allNotes = document.querySelector('#allNotes');


// receive keyboard event by default to textarea

fromFields.textNote.focus();


// add note function

function addNote() {
    let text = fromFields.textNote.value;
    let priority = fromFields.priority.value;
    let note = document.createElement('div');
    let deleteBtn = document.createElement('span');
 
  
    note.classList.add('col-md-4');
    note.classList.add('single-note');
    note.innerHTML = `
                    
                    <div class='note-text'>
                        <p>${text}</p>
                        <br>
                        <span>Priority: ${priority}</span>
                    </div>
                  
                    
                    `;
    deleteBtn.classList.add('remove');
    deleteBtn.innerHTML = 'X';

  
    note.appendChild(deleteBtn);
    allNotes.appendChild(note);
  
    fromFields.textNote.value = '';
    fromFields.textNote.focus();

    // listner remove
    addListenerRemoveNote(deleteBtn);
}

// remove note
function removeNote(e) {
    let eventNote = e.target.parentNode;
    eventNote.parentNode.removeChild(eventNote);
  }

function addListenerRemoveNote(deleteBtn) {
    deleteBtn.addEventListener('click', function (e) {
      e.stopPropagation();      
      removeNote(e);
    });
}


// all event listner
// "Create Note" Event Listener
fromFields.addBtn.addEventListener('click', function (e) {
    e.preventDefault();  
    if (fromFields.textNote.value != '') {
      // call create function
      addNote();
    }
    else {
        alert('Please add your note before click add button');
    }
  })
