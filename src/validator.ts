import { JSDOM } from 'jsdom';

export interface ValidationReport {
  hasDoctype: boolean;
  hasLang: boolean;
  hasTitle: boolean;
  hasViewport: boolean;
  landmarks: {
    hasHeader: boolean;
    hasNav: boolean;
    hasMain: boolean;
    hasFooter: boolean;
  };
  accessibility: {
    missingAltImagesCount: number;
    unlabeledInputsCount: number;
  };
  isValid: boolean;
  errors: string[];
}

export function validateHtmlDocument(htmlString: string): ValidationReport {
  const errors: string[] = [];
  const hasDoctype = /<!doctype\s+html>/i.test(htmlString);
  if (!hasDoctype) {
    errors.push('Document must begin with <!DOCTYPE html>');
  }

  const dom = new JSDOM(htmlString);
  const doc = dom.window.document;

  const htmlElem = doc.querySelector('html');
  const hasLang = Boolean(htmlElem && htmlElem.getAttribute('lang'));
  if (!hasLang) {
    errors.push('<html> root element must define a "lang" attribute (e.g. lang="en")');
  }

  const title = doc.querySelector('title');
  const hasTitle = Boolean(title && title.textContent?.trim());
  if (!hasTitle) {
    errors.push('Document must define a non-empty <title> inside <head>');
  }

  const viewport = doc.querySelector('meta[name="viewport"]');
  const hasViewport = Boolean(viewport && viewport.getAttribute('content'));
  if (!hasViewport) {
    errors.push('Document should define responsive <meta name="viewport" content="...">');
  }

  const hasHeader = Boolean(doc.querySelector('header'));
  const hasNav = Boolean(doc.querySelector('nav'));
  const hasMain = Boolean(doc.querySelector('main'));
  const hasFooter = Boolean(doc.querySelector('footer'));

  if (!hasMain) {
    errors.push('Document should include a primary <main> content landmark');
  }

  // Accessibility: Alt attributes on images
  const images = Array.from(doc.querySelectorAll('img'));
  const missingAltImages = images.filter((img) => !img.hasAttribute('alt'));
  if (missingAltImages.length > 0) {
    errors.push(`Found ${missingAltImages.length} <img> elements missing an "alt" attribute`);
  }

  // Accessibility: Labels on form inputs
  const inputs = Array.from(doc.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"])'));
  let unlabeledInputsCount = 0;
  for (const input of inputs) {
    const id = input.id;
    const hasLabel = id ? Boolean(doc.querySelector(`label[for="${id}"]`)) : false;
    const hasParentLabel = Boolean(input.closest('label'));
    const hasAriaLabel = input.hasAttribute('aria-label') || input.hasAttribute('aria-labelledby');
    if (!hasLabel && !hasParentLabel && !hasAriaLabel) {
      unlabeledInputsCount++;
    }
  }

  if (unlabeledInputsCount > 0) {
    errors.push(`Found ${unlabeledInputsCount} form inputs missing accessible labels`);
  }

  return {
    hasDoctype,
    hasLang,
    hasTitle,
    hasViewport,
    landmarks: {
      hasHeader,
      hasNav,
      hasMain,
      hasFooter
    },
    accessibility: {
      missingAltImagesCount: missingAltImages.length,
      unlabeledInputsCount
    },
    isValid: errors.length === 0,
    errors
  };
}
