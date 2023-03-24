const paragraphs: (readonly string[])[] = [];

{
    // 원본 코드
    function parseTaggedText(lines: string[]): string[][] {
        const paragraphs: string[][] = [];
        const currPara: string[] = [];
      
        const addParagraph = () => {
          if (currPara.length) {
            paragraphs.push(currPara); // 배열 참조값이 들어감
            currPara.length = 0;  // 해당 배열을 변경하여 paragraphs.push([]) 이 됨
          }
        };
      
        for (const line of lines) {
          if (!line) {
            addParagraph();
          } else {
            currPara.push(line);
          }
        }
        addParagraph();
        return paragraphs; // [[], [], [], ...] 이 되어버림
    }

    // readonly 사용하기 
    function parseTaggedTextNew(lines: string[]): (readonly string[])[] {
        let currPara: readonly string[] = []; // let + readonly string[]으로 변경
        const paragraphs: (readonly string[])[] = []; // (readonly string[])[]으로 변경
      
        const addParagraph = () => {
          if (currPara.length) {
            paragraphs.push([...currPara]); // currPara의 복사본을 추가하여 currPara 참조하지 않도록
            currPara = []; // length 속성을 바로 변경하지 않고, 빈 배열로 재할당
          }
        };
      
        for (const line of lines) {
          if (!line) {
            addParagraph();
          } else {
            currPara = currPara.concat([line]); // 새로운 배열을 만드는 concat을 사용하여 새 배열을 재할당함
          }
        }
        addParagraph();
        return paragraphs;
      }
}