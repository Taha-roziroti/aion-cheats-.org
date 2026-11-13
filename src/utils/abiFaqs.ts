import type { SiteFaqItem } from '../data/faq';
import type { AbiPageFaq } from '../data/abi/types';
import { normalizeAbiParagraph } from './abiText';

let faqCounter = 0;

export function abiFaqsToSiteItems(faqs: AbiPageFaq[], topic: SiteFaqItem['topic'] = 'esp'): SiteFaqItem[] {
  return faqs.map((faq) => {
    faqCounter += 1;
    return {
      id: `abi-faq-${faqCounter}`,
      topic,
      icon: 'faqWhatIsEsp',
      q: faq.question.trim(),
      a: normalizeAbiParagraph(faq.answer),
    };
  });
}
