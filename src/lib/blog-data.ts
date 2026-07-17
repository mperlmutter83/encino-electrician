export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'emergency-electrician-in-encino-what-to-do-before-we-arrive',
    title: 'Emergency Electrician in Encino: What to Do Before We Arrive',
    date: 'April 29, 2026',
    category: 'Electrician',
    excerpt: 'Electrical emergencies can happen at any time—and when they do, they can be dangerous, stressful, and even life-threatening. Whether you\'re dealing with a sudden power outage, sparking outlets, or a burning smell coming from your panel, knowing what to do before your...',
    image: '/images/AdobeStock_225354028-400x250.jpeg',
    content: `<p>Electrical emergencies can happen at any time—and when they do, they can be dangerous, stressful, and even life-threatening. Whether you're dealing with a sudden power outage, sparking outlets, or a burning smell coming from your panel, knowing what to do before your emergency electrician arrives can make all the difference.</p>
<h2>Stay Calm and Assess the Situation</h2>
<p>First and foremost, stay calm. Panic can lead to poor decisions. Take a moment to assess what's happening. Is there visible damage? Do you smell burning? Are there sparks? Understanding the nature of the emergency helps you take appropriate action.</p>
<h2>Turn Off the Power</h2>
<p>If you can safely access your electrical panel, turn off the main breaker. This cuts power to your entire home and can prevent further damage or fire risk. If you're unsure or the panel is damaged, stay away and wait for professional help.</p>
<h2>Don't Touch Damaged Equipment</h2>
<p>Never touch exposed wires, damaged outlets, or any electrical equipment that appears compromised. Water and electricity are especially dangerous together—stay away from any wet areas near electrical components.</p>
<h2>Call Your Emergency Electrician</h2>
<p>At Encino Electrician, we're available for emergency calls. When you call us, provide as much detail as possible about the situation. This helps us prepare and arrive ready to solve your problem quickly and safely.</p>
<h2>Clear the Area</h2>
<p>Keep family members and pets away from the affected area. If there's any sign of fire or smoke, evacuate immediately and call 911.</p>
<p>Remember: electrical emergencies require professional attention. Don't attempt DIY repairs—call Encino Electrician at (818) 643-2345 for fast, reliable emergency service.</p>`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
