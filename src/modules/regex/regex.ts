const processRegex1 = () => {
  const content = `
  <a href="hehe">ahaha</a>
  `

  const regex = /<a href="[^"]+">([^<]+)<\/a>/gi;

  const res = content.replaceAll(regex, '##### $1')  
  console.log('res =>\n', res);
}

const processRegex2 = () => {
  const content = `
  <a href="hehe">ahaha</a>
  
  - [ ]  **1.2a - Disable pingbacks for current content via WordPress settings**
  
  - 
  `
  const regex = /- \[ ] \s\*+([^*<]+)\*+/gi;
  const res = content.replaceAll(regex, '##### $1')  
  console.log('res =>\n', res);
}

const processRegex3 = () => {
  const content = `
:bulb: **Note**
<a href="hehe">ahaha</a>

- [ ]  **1.2a - Disable pingbacks for current content via WordPress settings**

- 
  `

  const regex = /:bulb:\s\*+([^*<]+)\*+/gi;
  const res = content.replaceAll(regex, '<div class="bulb">$1</div>')  
  console.log('res =>\n', res);
}

export const runRegex = () => {
  processRegex1();
  processRegex2();
  processRegex3();
}
