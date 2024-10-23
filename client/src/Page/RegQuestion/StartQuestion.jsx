import React, {useEffect, useRef, useState} from 'react';
import './regQuestion.scss'

const StartQuestion = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    const containerRef = useRef(null);
    const buttonRef = useRef(null);
    const targetRef = useRef(null);

    const checkOverlap = (buttonRect, targetRect) => {
        return !(
            buttonRect.right < targetRect.left ||
            buttonRect.left > targetRect.right ||
            buttonRect.bottom < targetRect.top ||
            buttonRect.top > targetRect.bottom
        );
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartPos({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        setIsDragging(true);
        setStartPos({
            x: touch.clientX - position.x,
            y: touch.clientY - position.y
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const containerWidth = containerRef.current?.offsetWidth || 0;
        const buttonWidth = buttonRef.current?.offsetWidth || 0;
        const maxX = containerWidth - buttonWidth;

        const newX = Math.max(0, Math.min(e.clientX - startPos.x, maxX));
        setPosition({ x: newX, y: 0 });

        const buttonRect = buttonRef.current?.getBoundingClientRect();
        const targetRect = targetRef.current?.getBoundingClientRect();

        if (buttonRect && targetRect && checkOverlap(buttonRect, targetRect)) {
            buttonRef.current.classList.add('in-range');
            if (newX >= maxX * 0.9) {
                buttonRef.current.classList.add('in-target');
                setIsUnlocked(true);
                setIsDragging(false);
            }
        } else {
            buttonRef.current.classList.remove('in-range');
        }
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const touch = e.touches[0];
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const buttonWidth = buttonRef.current?.offsetWidth || 0;
        const maxX = containerWidth - buttonWidth;

        const newX = Math.max(0, Math.min(touch.clientX - startPos.x, maxX));
        setPosition({ x: newX, y: 0 });

        const buttonRect = buttonRef.current?.getBoundingClientRect();
        const targetRect = targetRef.current?.getBoundingClientRect();

        if (buttonRect && targetRect && checkOverlap(buttonRect, targetRect)) {
            buttonRef.current.classList.add('in-range');
            if (newX >= maxX * 0.9) {
                buttonRef.current.classList.add('in-target');
                setIsUnlocked(true);
                setIsDragging(false);
            }
        } else {
            buttonRef.current.classList.remove('in-range');
        }
    };

    const handleEnd = () => {
        if (isDragging && !isUnlocked) {
            setPosition({ x: 0, y: 0 });
            buttonRef.current.classList.remove('in-range');
        }
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleTouchMove, { passive: false });
            window.addEventListener('touchend', handleEnd);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging]);

    return (
        <div className='start_question'>
            <div className="top_title">
                <h2>Розпочніть свою фітнес-подорож</h2>
                <p>Розпочніть свою фітнес-подорож з нашими порадами та підтримкою у додатку.</p>
            </div>

            <div className={`drag ${isUnlocked ? 'drag-success' : ''}`}>
                <div ref={containerRef} className="drag-container">
                    <div
                        ref={buttonRef}
                        className="drag-button"
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                        style={{
                            transform: `translate3d(${position.x}px, 0, 0)`,
                            transition: isDragging ? 'none' : 'transform 0.2s ease-out'
                        }}
                    />
                    <p>Розпочати</p>
                    <div ref={targetRef} className="drag-target"/>
                </div>
            </div>

        </div>
    );
};

export default StartQuestion;