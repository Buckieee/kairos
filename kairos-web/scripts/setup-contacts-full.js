require('dotenv').config({ path: '../.env' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
(async () => {
  const { data, error } = await supabase.from('contacts').insert([{ name: 'test', email: 'test@example.com', subject: 'test', message: 'test', phone: '123', source: 'test' }]);
  if (error) console.error(error);
  else console.log('Insert successful');
})();
