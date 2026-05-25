"use client";
import React, { useState, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Accordion({ title, children, className = '' }: AccordionProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className={cn('border-b border-gray-200', className)}>
      <button
        type="button"
        onClick={toggle}
        className="w-full flex justify-between items-center py-4 text-left text-primary hover:text-primary-dark transition-colors"
        aria-expanded={open}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="font-medium text-lg">{title}</span>
        <svg
          className={cn('w-5 h-5 transform transition-transform', open && 'rotate-180')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="pb-4 text-gray-700"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
