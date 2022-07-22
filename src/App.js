import Sub from "./components/Sub.js";
function App(){
    //let user = "I am Working With Props";
    let users = [
      {
        fname:'Asad',
        em:'info@codewithasad.com',
        phone:'1564654'
      },
      {
        fname:'Khizar Khan',
        em:'info@codewithkhizar.com',
        phone:'1564655544'
      },
      {
        fname:'Sufyan Shahid',
        em:'info@codewithkhizar.com',
        phone:'1564655544'
      },
      {
        fname:'Waqas',
        em:'info@codewithkhizar.com',
        phone:'1564655544'
      },
      {
        fname:'Zeeshan',
        em:'info@codewithkhizar.com',
        phone:'1564655544'
      },
    ];
    return (
       <div>
          <Sub Users={users}></Sub>
       </div> 
    );
}
export default App;