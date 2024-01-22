'use strict';
{
    const quizObj = {
        title: '三択クイズ',
        quizzes: [
            ['第一問', 'せんべいやスナック菓子の「サラダ味」とは、何味のこと？','サラダ油味', 'グリーンサラダ味', 'さらっとした味', 2],
            ['第二問', 'ハイヒールが生まれた当初の目的は？','ステップを踏んで音を出すこと', '足を細く見せること', '汚物に触れないようにする事', 4],
            ['第三問', '次のうち腐らないものは？','ねぎ', 'はちみつ', 'コンソメスープ', 3],
            ['第四問', 'カルパッチョという料理の名前の由来となったのは？','国王', '画家', '川の名前', 3],
            ['第五問', '海上自衛隊で金曜日に必ず食べるものは？','カレー', '肉じゃが', '焼き魚', 2],
            ['第六問', 'アンデスメロンが生まれた国は？','スペイン', '日本', 'ペルー', 3],
            ['第七問', 'カルボナーラとはどういう意味？','炭火焼のパスタ', 'クリーミーなパスタ', 'ベーコンのパスタ', 2],
            ['第八問', 'ラーメンの丼にある渦巻き模様は、何を意味している？','雲', '雷', '渦潮', 3],
            ['第九問', '大根は白に見えるが本来異なる色である。その本来の色とは？','透明', '緑', '灰色', 2],
            ['第十問', '寿司を食べる際の「ガリ」の名の由来は？','食べるとがりがり音がすることから', 'がりがりな体の人が良く食べたことから', '学者のガリレオから',2],
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
                    if ( quiz[5] === i ) {
                        
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