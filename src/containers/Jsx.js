function rendorchar(char){
    switch( char){
      case'a':
      case'e':
      case'i':
      case'o':
      case 'u':
      return <div>vowel</div>
      default:
        return <div> its not vowel</div>
    }
  }
  function Jsx() {
    return( 
      <div>
        <h3> Switch statement</h3>{
          rendorchar('f')
        }
      </div>
    );
  }

  export function Greet(){
    return <h1> Hello world </h1>
  } 
  export default Jsx;
