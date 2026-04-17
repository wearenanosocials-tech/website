import { supabase } from './lib/supabase.js';
import { blogPosts } from './lib/blogData.js';

async function migrate() {
    console.log('Starting migration...');

    for (const post of blogPosts) {
        const payload = {
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: post.content,
            image_url: post.image, // Note: these are currently local /creators/ paths
            author_name: post.author,
            status: 'published',
            // Convert 'April 15, 2026' to ISO
            published_at: new Date(post.date).toISOString(),
        };

        const { error } = await supabase.from('posts').insert([payload]);
        if (error) {
            console.error(`Error migrating post "${post.title}":`, error.message);
        } else {
            console.log(`Migrated: ${post.title}`);
        }
    }

    console.log('Migration finished.');
}

migrate();
