const accordion = () => {
    const btnAcc = document.querySelectorAll('.faq__asq'),
          lists = document.querySelectorAll('.faq__answer');

          console.log(btnAcc)

          btnAcc.forEach((item , i) => {
            item.addEventListener('click', () => {
                btnAcc.forEach((item) => {
                    item.classList.remove('faq__asq_active');
                });
        
                item.classList.add('faq__asq_active');
                
                lists.forEach((listItem) => {
                    listItem.classList.remove('faq__answer_active');
                });
        
                lists[i].classList.add('faq__answer_active');
            });
        });
}

export default accordion;