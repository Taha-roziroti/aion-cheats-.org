export interface MarkdownFaqItem {
  q: string;
  a: string;
}

/** Parse `## Questions` blocks with `**Question?**` + answer lines from raw MD bodies. */
export function faqItemsFromMarkdown(body: string): MarkdownFaqItem[] {
  const lines = body.split(/\r?\n/);
  let inSection = false;
  const items: MarkdownFaqItem[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? '';
    const trimmed = line.trim();

    if (/^##\s+Questions\b/i.test(trimmed)) {
      inSection = true;
      continue;
    }
    if (inSection && /^##\s+/.test(trimmed)) break;
    if (!inSection) continue;

    const match = trimmed.match(/^\*\*(.+?)\*\*\s*$/);
    if (!match) continue;

    const q = match[1].trim();
    const answerParts: string[] = [];

    for (let j = i + 1; j < lines.length; j++) {
      const next = (lines[j] ?? '').trim();
      if (!next) {
        if (answerParts.length) {
          i = j;
          break;
        }
        continue;
      }
      if (/^\*\*.+\*\*/.test(next) || /^##\s+/.test(next)) {
        i = j - 1;
        break;
      }
      answerParts.push(next.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'));
      i = j;
    }

    if (q && answerParts.length) {
      items.push({ q, a: answerParts.join(' ').replace(/\s+/g, ' ').trim() });
    }
  }

  return items;
}
