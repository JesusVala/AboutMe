import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useRef } from "react";
import { TextEvolutionAnimator } from "../utils/TextGlitchAnimator.tsx";


function GlitchedComponnent(props: { children: ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) {
  const textRef = useRef(null);
      useEffect(() => {
          console.log('usseEffect')
          if (textRef.current) {
              console.log('in use effect in main')
              const animator = new TextEvolutionAnimator(textRef.current);
  
              animator.initialize();
              animator.start();
  
              return () => {
  
              }
          }
      }, [textRef])

  return (
    <div ref={textRef}>
        {props.children}
    </div>
  );
}

export default GlitchedComponnent;
