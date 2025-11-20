import { useState, useEffect } from "react";

interface TypewriterHeadingProps {
  text: string;
  highlightText: string;
  speed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypewriterHeading = ({
  text,
  highlightText,
  speed = 80,
  pauseDuration = 2500,
  className = "",
}: TypewriterHeadingProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeNextChar, speed);
      } else {
        // Finished typing, pause then reset
        setIsTyping(false);
        timeoutId = setTimeout(() => {
          setDisplayedText("");
          currentIndex = 0;
          setIsTyping(true);
          typeNextChar();
        }, pauseDuration);
      }
    };

    typeNextChar();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, pauseDuration]);

  // Split the displayed text to find where to insert the highlight
  const highlightIndex = text.indexOf(highlightText);
  
  // If highlight text is found and we've typed up to or past it
  if (highlightIndex !== -1 && displayedText.length > highlightIndex) {
    const beforeHighlight = displayedText.slice(0, highlightIndex);
    const highlightPart = displayedText.slice(
      highlightIndex,
      Math.min(highlightIndex + highlightText.length, displayedText.length)
    );
    const afterHighlight = displayedText.slice(highlightIndex + highlightText.length);

    return (
      <h1 className={className}>
        <span className="bg-gradient-to-r from-[#E6D4FF] to-[#FAD8FF] bg-clip-text text-transparent">
          {beforeHighlight}
        </span>
        {highlightPart && (
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
            {highlightPart}
          </span>
        )}
        <span className="bg-gradient-to-r from-[#E6D4FF] to-[#FAD8FF] bg-clip-text text-transparent">
          {afterHighlight}
        </span>
        {isTyping && (
          <span className="inline-block w-0.5 h-[0.9em] bg-gradient-to-r from-pink-500 to-purple-500 ml-1 animate-pulse" />
        )}
      </h1>
    );
  }

  // Fallback: just show the text normally if highlight hasn't been reached yet
  return (
    <h1 className={className}>
      <span className="bg-gradient-to-r from-[#E6D4FF] to-[#FAD8FF] bg-clip-text text-transparent">
        {displayedText}
      </span>
      {isTyping && (
        <span className="inline-block w-0.5 h-[0.9em] bg-gradient-to-r from-pink-500 to-purple-500 ml-1 animate-pulse" />
      )}
    </h1>
  );
};

export default TypewriterHeading;

