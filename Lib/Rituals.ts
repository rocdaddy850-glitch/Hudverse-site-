import { supabase } from './supabaseClient';

export async function saveRitual(scrollName: string, badgeName: string, staked: boolean) {
  const { error } = await supabase
    .from('rituals')
    .insert([{
      scroll_name: scrollName,
      badge_name: badgeName,
      staked,
      unlocked: staked,
      timestamp: new Date().toISOString()
    }]);

  if (error) console.error('Error saving ritual:', error);
}
