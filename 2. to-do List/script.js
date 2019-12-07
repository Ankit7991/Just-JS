window.onload = function () {
  document.querySelector('.inputTodo').focus();

  let todoInput = document.querySelector('.inputTodo');
  let addBtn = document.querySelector('.addTodo');

  let todosParent = document.querySelector('.todos');
  let check = document.querySelector('.checkbox');
  let toDo = document.querySelector('.todo');
  var checkBeforeDelete = false;



  todoInput.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
      event.preventDefault();
      addBtn.click();
    }
  });


  addBtn.addEventListener('click', function (e) {

    if (todoInput.value) {

      let toDo_parent = document.createElement('div');
      toDo_parent.className = 'todo_parent';


      let toDo_el = document.createElement('div');
      toDo_el.className = 'todo';
      let toDo_el_checkbox = document.createElement('input');
      toDo_el_checkbox.type = 'checkbox';
      toDo_el_checkbox.className = 'checkbox';

      toDo_el.addEventListener('click', function () {
        this.querySelector('.checkbox').click();
      })

      $(toDo_el_checkbox).on('click', function () {
        let span = this.parentNode.querySelector('span');
        if (this.checked) {
          $(span).css({
            'text-decoration': 'line-through',
            'color': '#aaaaaa'
          });

        } else {
          $(span).css({
            'text-decoration': 'none',
            'color': 'black'
          });

        }
      });
      let toDo_el_span = document.createElement('span');
      toDo_el_span.innerHTML = todoInput.value;
      let toDo_el_button = document.createElement('button');


      $(toDo_el_button).on('click', function () {
        if (!checkBeforeDelete) {
          this.parentNode.parentNode.removeChild(this.parentNode);
        } else {
          if (this.parentNode.querySelector('.checkbox').checked) {
            this.parentNode.parentNode.removeChild(this.parentNode);

          }
        }
      });

      toDo_el_button.innerHTML = 'x';
      toDo_el_button.className = 'button';

      toDo_el.appendChild(toDo_el_checkbox);
      toDo_el.appendChild(toDo_el_span);
      toDo_el.appendChild(toDo_el_button);
      toDo_parent.appendChild(toDo_el);
      todosParent.appendChild(toDo_parent);
    }
    todoInput.value = '';
    document.querySelector('.inputTodo').focus();
  });



  //setting pannel
  let settingVisible = false;
  this.document.querySelector('#setting').addEventListener('click', function () {
    if (!settingVisible) {
      $(document.querySelector('.settings')).css({
        'height': '200px'
      })
      if(window.innerWidth <= 500){
        $(this).css({'z-index' : '10000000', 'position' : 'fixed', 'bottom' : '0', 'padding' : '20px'})
      }
      settingVisible = !settingVisible;
    } else {
      $(document.querySelector('.settings')).css({
        'height': '0px'
      })
      if(window.innerWidth <= 500){
        $(this).css({'z-index' : 'auto', 'position' : 'relative', 'bottom' : 'auto', 'padding' : '0'})
      }
      settingVisible = !settingVisible;
    }
  })


  //settings
  document.querySelector('.checkBeforeDelete').addEventListener('click', function () {
    this.querySelector('#checkBeforeDelete_checkbox').click();
  })
  document.querySelector('#checkBeforeDelete_checkbox').addEventListener('click', function () {
    if (this.checked) {
      
      $(document.querySelector('.settings')).css({
        'height': '0px'
      })
      if(window.innerWidth <= 500){
        $(document.querySelector('#setting')).css({'z-index' : 'auto', 'position' : 'relative', 'bottom' : 'auto', 'padding' : '0'})
      }
      settingVisible = !settingVisible;
    
      checkBeforeDelete = true;
    } else {
      checkBeforeDelete = false;
    }
    
  })


}