'use strict';
{
    function render(quiz) {
        const main = document.querySelector('main');
        const section = document.createElement('section');
        const h2 = document.createElement('h2');
        h2.textContent = quiz[0];

        const ul = document.createElement('ul');
        for( let i = 1; i <= 3; i++ ) {
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
            section.appendChild(ul);
            main.appendChild(section);
            }

        
    }
    const quizzes = [
        ['1の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 0],
        ['2の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 1],
        ['3の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 2],
        ['4の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 2],
        ['5の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 3],
        ['6の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 2],
        ['7の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 1],
        ['8の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 3],
        ['9の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 1],
        ['10の正解は？', '選択肢 A', '選択肢 B', '選択肢 C',2],
    ]

    quizzes.forEach((value)=> {
        render(value);
    });
}