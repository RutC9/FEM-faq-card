let doc = document.body;

let active_list = []; //will contain all elements having article_active class

function expand_answer(elem) {
  for (let i = 0; i < active_list.length; i++) {
    if (elem == active_list[i]) {
      active_list[i].classList.remove('article_active');
      active_list.splice(i, 1);
      return;
    } else if (active_list[i].classList.contains('article_active')) {
      active_list[i].classList.remove('article_active'); //will remove class from classlist of element in active_list

      active_list.splice(i, 1); //removes element from active_list
    }
  }

  //   parent_node = document.getElementsByClassName('article_active');

  //   if (doc.classList.contains('article_active')) {
  //     parent_node.classList.remove('article_active');
  //   }
  elem.classList.add('article_active');

  active_list.push(elem);
  console.log(active_list);
}
