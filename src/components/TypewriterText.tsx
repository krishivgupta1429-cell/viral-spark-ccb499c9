import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  loop?: boolean;
  typingSpeed?: number;
  deleteSpeed?: number;
  startDelay?: number;
  backDelay?: number;
  fadeOut?: boolean;
  fadeOutDelay?: number;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
}

const TypewriterText = ({
  text,
  loop = true,
  typingSpeed = 55,
  deleteSpeed = 30,
  startDelay = 400,
  backDelay = 2200,
  fadeOut = true,
  fadeOutDelay = 600,
  showCursor = true,
  cursorChar = "|",
  className = "",
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;
    let isMounted = true;

    const startTyping = () => {
      if (!isMounted) return;
      
      // Start delay before typing begins
      timeoutId = setTimeout(() => {
        if (!isMounted) return;
        setIsTyping(true);
        setOpacity(1);
        typeNextChar();
      }, startDelay);
    };

    const typeNextChar = () => {
      if (!isMounted) return;
      
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeNextChar, typingSpeed);
      } else {
        // Finished typing
        setIsTyping(false);
        if (loop) {
          // Back delay before deleting
          timeoutId = setTimeout(() => {
            if (!isMounted) return;
            setIsDeleting(true);
            
            if (fadeOut) {
              // Fade out before deleting
              setOpacity(0);
              timeoutId = setTimeout(() => {
                if (!isMounted) return;
                deleteChar();
              }, fadeOutDelay);
            } else {
              deleteChar();
            }
          }, backDelay);
        }
      }
    };

    const deleteChar = () => {
      if (!isMounted) return;
      
      if (currentIndex > 0) {
        currentIndex--;
        setDisplayedText(text.slice(0, currentIndex));
        timeoutId = setTimeout(deleteChar, deleteSpeed);
      } else {
        // Finished deleting, restart
        setIsDeleting(false);
        setOpacity(0);
        timeoutId = setTimeout(() => {
          if (!isMounted) return;
          setOpacity(1);
          setIsTyping(true);
          currentIndex = 0;
          typeNextChar();
        }, fadeOutDelay);
      }
    };

    startTyping();

    return () => {
      isMounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, loop, typingSpeed, deleteSpeed, startDelay, backDelay, fadeOut, fadeOutDelay]);

  return (
    <span 
      className={`inline-block transition-all duration-500 ease-out ${className}`}
      style={{ opacity }}
    >
      {displayedText}
      {showCursor && (isTyping || isDeleting) && (
        <span className="inline-block w-0.5 h-[0.9em] ml-1 animate-pulse text-[#FF4FD8]">
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default TypewriterText;

