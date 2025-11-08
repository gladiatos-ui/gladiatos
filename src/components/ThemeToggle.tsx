"use client";

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [uniqueId] = useState(() => `moon-mask-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return <div style={{ width: '2em', height: '2em' }} />;
  }

  const isDark = theme === 'dark';

  return (
    <StyledWrapper $isDark={isDark}>
      <label htmlFor={`themeToggle-${uniqueId}`} className="themeToggle st-sunMoonThemeToggleBtn">
        <input
          type="checkbox"
          id={`themeToggle-${uniqueId}`}
          className="themeToggleInput"
          checked={isDark}
          onChange={handleToggle}
        />
        <svg width={18} height={18} viewBox="0 0 20 20" fill="currentColor" stroke="none">
          <mask id={uniqueId}>
            <rect x={0} y={0} width={20} height={20} fill="white" />
            <circle cx={11} cy={3} r={8} fill="black" />
          </mask>
          <circle className="sunMoon" cx={10} cy={10} r={8} mask={`url(#${uniqueId})`} />
          <g>
            <circle className="sunRay sunRay1" cx={18} cy={10} r="1.5" />
            <circle className="sunRay sunRay2" cx={14} cy="16.928" r="1.5" />
            <circle className="sunRay sunRay3" cx={6} cy="16.928" r="1.5" />
            <circle className="sunRay sunRay4" cx={2} cy={10} r="1.5" />
            <circle className="sunRay sunRay5" cx={6} cy="3.1718" r="1.5" />
            <circle className="sunRay sunRay6" cx={14} cy="3.1718" r="1.5" />
          </g>
        </svg>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ $isDark: boolean }>`
  .themeToggle {
    color: #ed1c24;
    width: 2em;
    display: inline-block;
  }

  .st-sunMoonThemeToggleBtn {
    position: relative;
    cursor: pointer;
    display: block;
    width: 2em;
    height: 2em;
  }

  .st-sunMoonThemeToggleBtn .themeToggleInput {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    margin: 0;
    z-index: 10;
  }

  .st-sunMoonThemeToggleBtn svg {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.4s ease;
    transform: ${props => props.$isDark ? 'rotate(90deg)' : 'rotate(40deg)'};
  }

  .st-sunMoonThemeToggleBtn svg .sunMoon {
    transform-origin: center center;
    transition: transform 0.4s ease;
    transform: ${props => props.$isDark ? 'scale(0.55)' : 'scale(1)'};
  }

  .st-sunMoonThemeToggleBtn svg .sunRay {
    transform-origin: center center;
    transform: ${props => props.$isDark ? 'scale(1)' : 'scale(0)'};
    transition: transform 0.4s ease;
  }

  .st-sunMoonThemeToggleBtn svg mask > circle {
    transition: transform 0.64s cubic-bezier(0.41, 0.64, 0.32, 1.575);
    transform: ${props => props.$isDark ? 'translate(16px, -3px)' : 'translate(0px, 0px)'};
  }

  .st-sunMoonThemeToggleBtn svg .sunRay2 {
    transition-delay: 0.05s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay3 {
    transition-delay: 0.1s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay4 {
    transition-delay: 0.17s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay5 {
    transition-delay: 0.25s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay6 {
    transition-delay: 0.29s !important;
  }
`;

export default ThemeToggle;