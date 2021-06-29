const elements = [
    {
      id: '1',
      type: 'input', // input node
      data: { label: 'Web Development'} ,
      position: { x: 200, y: 100 },
      
    },
    // default node
    {
      id: '2',
      // you can also pass a React component as a label
      data: { label: 'Front End' },
      position: { x: 100, y: 200 },
      sourcePosition: 'bottom',
      targetPosition: 'top',
    },
    {
      id : '3',
      data : {label : 'Back End'},
      position : {x : 300, y : 200},
      targetPosition : 'top',
      sourcePosition : 'bottom'
    },
    {
      id : '4',
      data : {label : 'HTML'},
      position : {x : 0, y : 250},
      targetPosition : 'right',
      sourcePosition : 'left',
      style : {padding : '6px'},

    },
    {
      id : '4a',
      data : {label : 'Bootstrap'},
      position : {x : -200, y : 220},
      targetPosition : 'right',
      sourcePosition : 'left',
      style : {padding : '2px'},
      type : 'output'

    },
    {
      id : '4b',
      data : {label : 'TailwindCss'},
      position : {x : -200, y : 250},
      targetPosition : 'right',
      sourcePosition : 'left',
      style : {padding : '2px'},
      type : 'output'

    },
    {
      id : '5',
      data : {label : 'Css'},
      position : {x : 0, y : 290},
      targetPosition : 'right',
      sourcePosition : 'left',
      style : {padding : '6px'},

    },
    {
      id : '5a',
      data : {label : 'Scss'},
      position : {x : -200, y : 290},
      targetPosition : 'right',
      sourcePosition : 'left',
      style : {padding : '2px'},
      type : 'output'
    },
    {
      id : '5b',
      data : {label : 'Styled Component'},
      position : {x : -200, y : 320},
      targetPosition : 'right',
      sourcePosition : 'left',
      style : {padding : '2px'},
      type : 'output'
    },
    {
      id : '6',
      data : {label : 'JavaScript'},
      position : {x : 0, y : 330},
      targetPosition : 'right',
      sourcePosition : 'bottom',
      style : {padding : '6px'},
    },
    {
      id : '6a',
      data : {label : 'React.js'},
      position : {x : 100, y : 400},
      targetPosition : 'left',
      sourcePosition : 'bottom'
    },
    {
      id : '6a1',
      data : {label : 'React Flow'},
      position : {x : 0, y : 450},
      targetPosition : 'right',
      style : {padding : '1px'},
      type : 'output'
    },
    {
      id : '6a2',
      data : {label : 'Redux.js'},
      position : {x : 0, y : 480},
      targetPosition : 'right',
      style : {padding : '1px'},
      type : 'output'
    },
    {
      id : '6a3',
      data : {label : 'React-router-dom'},
      position : {x : 0, y : 510},
      targetPosition : 'right',
      style : {padding : '2px'},
      type : 'output'
    },
    {
      id : '6a4',
      data : {label : 'Quill.js'},
      position : {x : 200, y : 450},
      targetPosition : 'left',
      sourcePosition : 'bottom',
      style : {padding : '2px'},
      type : 'output'
    },
    {
      id : '6a5',
      data : {label : 'Ant Design'},
      position : {x : 200, y : 480},
      targetPosition : 'left',
      sourcePosition : 'bottom',
      style : {padding : '2px'},
      type : 'output'
    },
    {
      id : '6a6',
      data : {label : 'Formik'},
      position : {x : 200, y : 510},
      targetPosition : 'left',
      sourcePosition : 'bottom',
      style : {padding : '2px'},
      type : 'output'
    },
    {
      // next js
      id : '6b',
      data : {label : 'Next.js'},
      position : {x : -100, y : 400},
      targetPosition : 'right',
      type : 'output'
    },
    {
    // node js
      id : '7',
      data : {label : 'NODE.js'},
      position : {x : 400, y : 250},
      targetPosition : 'left',
      sourcePosition : 'right',
      style : {padding : '6px'}
    },
    {
    // node js
      id : '7a',
      data : {label : 'jsonwebtoken'},
      position : {x : 600, y : 250},
      targetPosition : 'left',
      sourcePosition : 'left',
      style : {padding : '2px'},
      type : 'output'
    },
    {
    // node js
      id : '7b',
      data : {label : 'passport.js'},
      position : {x : 600, y : 280},
      targetPosition : 'left',
      sourcePosition : 'left',
      style : {padding : '2px'},
      type : 'output'
    },
    {
    // node js
      id : '7c',
      data : {label : 'Cors'},
      position : {x : 600, y : 310},
      targetPosition : 'left',
      sourcePosition : 'left',
      style : {padding : '2px'},
      type : 'output'
    },
    {
    // node js
      id : '7d',
      data : {label : 'Ejs'},
      position : {x : 600, y : 340},
      targetPosition : 'left',
      sourcePosition : 'left',
      style : {padding : '2px'},
      type : 'output'
    },
    {
    // node js
      id : '7e',
      data : {label : 'Socket.io'},
      position : {x : 600, y : 370},
      targetPosition : 'left',
      sourcePosition : 'left',
      style : {padding : '2px'},
      type : 'output'
    },
    {
    // node js
      id : '7f',
      data : {label : 'nodemailer'},
      position : {x : 600, y : 400},
      targetPosition : 'left',
      sourcePosition : 'left',
      style : {padding : '2px'},
      type : 'output'
    },
    {
    // node js
      id : '7g',
      data : {label : 'Multer'},
      position : {x : 600, y : 430},
      targetPosition : 'left',
      sourcePosition : 'left',
      style : {padding : '2px'},
      type : 'output'
    },
    {
      id : '8',
      data : {label : 'Express.js'},
      position : {x : 400, y : 290},
      targetPosition : 'left',
      sourcePosition : 'left',
      style : {padding : '6px'}
    },
    {
      id : '9',
      data : {label : 'MONGODB'},
      position : {x : 400, y : 330},
      targetPosition : 'left',
      sourcePosition : 'left',
      style : {padding : '6px'}
    },
    // animated edge
    { id: 'e1-2', source: '1', target: '2'},
    { id: 'e1-3', source: '1', target: '3' },
    { id: 'e2-4', source: '2', target: '4' },
    { id: 'e2-5', source: '2', target: '5' },
    { id: 'e2-6', source: '2', target: '6', animated : true },
    // try for react html
    {id: 'e4-4a', source : '4', target: '4a'},
    {id: 'e4-4b', source : '4', target: '4b'},
    // try for react css
    {id: 'e5-5a', source : '5', target: '5a'},
    {id: 'e5-5b', source : '5', target: '5b'},
    // try for react js
    {id: 'e6-6a', source : '6', target: '6a', animated : true},
    {id: 'e6-6b', source : '6', target: '6b', animated : true},
    // backend
    { id: 'e3-7', source: '3', target: '7' },
    { id: 'e3-8', source: '3', target: '8' },
    { id: 'e3-9', source: '3', target: '9' },
    // node js
    {id: 'e7-7a', source: '7', target : '7a'},
    {id: 'e7-7b', source: '7', target : '7b'},
    {id: 'e7-7c', source: '7', target : '7c'},
    {id: 'e7-7d', source: '7', target : '7d'},
    {id: 'e7-7e', source: '7', target : '7e'},
    {id: 'e7-7f', source: '7', target : '7f'},
    {id: 'e7-7g', source: '7', target : '7g'},
    // react js to all of it's library
    {id : 'e6a-6a1', source: '6a', target : '6a1', animated : true},
    {id : 'e6a-6a2', source: '6a', target : '6a2', animated : true},
    {id : 'e6a-6a3', source: '6a', target : '6a3', animated : true},
    {id : 'e6a-6a4', source: '6a', target : '6a4', animated : true},
    {id : 'e6a-6a5', source: '6a', target : '6a5', animated : true},
    {id : 'e6a-6a6', source: '6a', target : '6a6', animated : true},
  ];
  

export default elements;