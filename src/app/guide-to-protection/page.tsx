import React from 'react';
import PageHero from '@/components/sections/PageHero';
// SectionHeader import removed (not used)
// cn import removed (unused)

// The guide content extracted from the live site.
const guideHtml = `
<h2 id="your-guide-to-protection">Your guide to protection</h2>
<p>Most of us are aware that there are policies available that provide life insurance, protect us in the event of a critical illness, payout if we had an accident and were unable to work, and can protect our home and possessions. However, with so many different types of policy available in the market place it can be hard to know which one is right for your circumstances and offers the best value for money.</p>
<h2 id="financial-peace-of-mind-for-you-and-your-family">Financial peace of mind for you and your family</h2>
<p>We all want to do the best for our families, and keep them properly protected on every occasion. Overlooking the need for life cover could mean that you’d leave your family with money worries at the worst possible time.</p>
<h2 id="life-insurance-and-life-assurance">Life Insurance and Life Assurance</h2>
<p>The terms life insurance and life assurance are often interchangeable and both often known simply as ‘life cover ’. People often ask what the difference is, so here’s how it works:</p>
<p><strong>Life insurance</strong> is cover you take out for a set number of years. You agree the term of the policy at the outset, usually between 10 and 25 years. That’s why you’ll often find this type of policy referred to as term insurance.</p>
<p><strong>Life assurance</strong>, by contrast, is designed to provide cover until you pass away. It can be more expensive than life insurance as it covers you for a longer term and pays a lump sum in the event of death, whenever that occurs.</p>
<h2 id="one-policy-or-two">One policy or two?</h2>
<p>Couples have a lot of things in common, and that can include financial commitments like bank accounts and mortgages. However, when it comes to life insurance it can make sense for each partner to have their own separate policy.</p>
<h2 id="joint-policies-and-divorce">Joint policies and divorce</h2>
<p>It’s also important to consider what might happen if there was a joint policy and the relationship breaks down. As the policy cannot be split, each would need to take out a new policy, which could be more expensive.</p>
<h2 id="the-right-cover-for-both-of-you">The right cover for both of you</h2>
<p>Whilst one joint policy could be more affordable than two single policies, depending on personal circumstances, it makes sense to think about each partner’s life cover needs separately.</p>
<h2 id="the-importance-of-disclosing-all-the-facts">The importance of disclosing all the facts</h2>
<p>When you take out any form of insurance, you will be required to complete an application form and answer various questions. It is vital that you disclose all relevant information; otherwise the insurer could void the contract.</p>
<h2 id="assessing-your-needs">Assessing your needs</h2>
<p>Your adviser will be on hand to help you, explaining everything you need to know in plain English.</p>
<h2 id="other-types-of-cover-that-provide-valuable-protection">Other types of cover that provide valuable protection</h2>
<p>When people think about protection insurance, they typically think about a traditional life policy. But there are many other types, such as Mortgage Payment Protection, Income Protection, Critical Illness, Family Income Benefit, Accident, Sickness and Unemployment, and Private Medical Insurance.</p>
<h2 id="how-we-can-help">How we can help</h2>
<p>Choosing the right policy, or combination of policies, can be a daunting task. Your adviser will be able to review your personal circumstances and recommend the right level of protection.</p>
<h2 id="writing-a-policy-in-trust">Writing a policy in trust</h2>
<p>Putting your policy into a trust can make sense for inheritance tax planning and to avoid probate delays.</p>
<h2 id="cover-for-your-home-and-contents">Cover for your home and contents</h2>
<p>Home insurance protects the roof over your head and all your possessions.</p>
<h2 id="buildings-insurance">Buildings Insurance</h2>
<p>This type of policy covers the bricks and mortar and permanent fixtures of your home.</p>
<h2 id="contents-insurance">Contents Insurance</h2>
<p>Contents insurance covers your possessions from loss, damage or theft.</p>
<h2 id="help-is-at-hand">Help is at hand</h2>
<p>Our advisers can help you get the right home insurance for your needs.</p>
<h2 id="we-can-give-you-peace-of-mind">We can give you peace of mind</h2>
<p>We can advise on the right protection cover for you and arrange it.</p>
`;

// Generate a simple Table of Contents from the headings in the guideHtml.
function generateToc(html: string) {
  const headingRegex = /<h2 id="([^"]+)">([^<]+)<\/h2>/g;
  const toc = [] as { id: string; text: string }[];
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    toc.push({ id: match[1], text: match[2] });
  }
  return toc;
}

export default function GuideToProtectionPage() {
  const toc = generateToc(guideHtml);

  return (
    <section className="bg-white text-gray-900">
      <PageHero title="Guide to Protection" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        {/* Sticky TOC */}
        <nav className="lg:w-1/4 sticky top-24 h-max hidden lg:block">
          <ul className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-primary hover:underline">{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Main Content */}
        <article className="lg:w-3/4 prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: guideHtml }} />
      </div>
    </section>
  );
}
