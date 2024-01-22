'use strict';
{
    const quizObj = {
        title: '三択クイズ',
        quizzes: [
            ['Q.01', '','選択肢 A', '選択肢 B', '選択肢 C', 0],
            ['Q.02', '','選択肢 A', '選択肢 B', '選択肢 C', 1],
            ['Q.03', '','選択肢 A', '選択肢 B', '選択肢 C', 2],
            ['Q.04', '','選択肢 A', '選択肢 B', '選択肢 C', 2],
            ['Q.05', '','選択肢 A', '選択肢 B', '選択肢 C', 3],
            ['Q.06', '','選択肢 A', '選択肢 B', '選択肢 C', 2],
            ['Q.07', '','選択肢 A', '選択肢 B', '選択肢 C', 1],
            ['Q.08', '','選択肢 A', '選択肢 B', '選択肢 C', 3],
            ['Q.09', '','選択肢 A', '選択肢 B', '選択肢 C', 1],
            ['Q.10', '','選択肢 A', '選択肢 B', '選択肢 C',2],
        ],
        render: function(quiz) {
            const main = document.querySelector('main');
            const section = document.createElement('section');
            const h2 = document.createElement('h2');
            const p =document.createElement('p');
            h2.textContent = quiz[0];
            p.textContent = quiz[1];
            const ul = document.createElement('ul');
            for( let i = 2; i <= 4; i++ ) {
                const li0 = document.createElement('li');
                li0.textContent = quiz[i];
                li0.addEventListener('click',()=> {
                    if ( quiz[4] === i-1 ) {
                        li0.classList.add('correct');
                    } else {
                        li0.classList.add('wrong');
                    }
                });
                ul.appendChild(li0);
                section.appendChild(h2);
                section.appendChild(p);
                section.appendChild(ul);
                main.appendChild(section);
                }        
        }
        }
    
    quizObj.quizzes.forEach((value)=> {
        quizObj.render(value);
    });

}