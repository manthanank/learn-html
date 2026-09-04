import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { validateHtmlDocument } from './validator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('HTML5 Semantic & Accessibility Validation Suite', () => {
  const htmlPath = path.join(__dirname, 'index.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  it('validates index.html passes standard checks with zero errors', () => {
    const report = validateHtmlDocument(htmlContent);
    expect(report.hasDoctype).toBe(true);
    expect(report.hasLang).toBe(true);
    expect(report.hasTitle).toBe(true);
    expect(report.hasViewport).toBe(true);
    expect(report.landmarks.hasMain).toBe(true);
    expect(report.landmarks.hasHeader).toBe(true);
    expect(report.landmarks.hasNav).toBe(true);
    expect(report.landmarks.hasFooter).toBe(true);
    expect(report.accessibility.missingAltImagesCount).toBe(0);
    expect(report.accessibility.unlabeledInputsCount).toBe(0);
    expect(report.isValid).toBe(true);
    expect(report.errors).toHaveLength(0);
  });

  it('detects missing doctype', () => {
    const report = validateHtmlDocument('<html><head><title>Test</title></head><body></body></html>');
    expect(report.hasDoctype).toBe(false);
    expect(report.isValid).toBe(false);
    expect(report.errors).toContain('Document must begin with <!DOCTYPE html>');
  });

  it('detects missing alt attributes on images', () => {
    const sample = '<!DOCTYPE html><html lang="en"><head><title>Test</title></head><body><img src="banner.jpg"></body></html>';
    const report = validateHtmlDocument(sample);
    expect(report.accessibility.missingAltImagesCount).toBe(1);
    expect(report.isValid).toBe(false);
  });

  it('detects unlabeled form inputs', () => {
    const sample = '<!DOCTYPE html><html lang="en"><head><title>Test</title></head><body><input type="text" name="query"></body></html>';
    const report = validateHtmlDocument(sample);
    expect(report.accessibility.unlabeledInputsCount).toBe(1);
    expect(report.isValid).toBe(false);
  });
});
