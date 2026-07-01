create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  quote text not null,
  created_at timestamp with time zone default now()
);

alter table testimonials enable row level security;

drop policy if exists "Allow public read testimonials" on testimonials;
drop policy if exists "Allow public insert testimonials" on testimonials;

create policy "Allow public read testimonials"
on testimonials
for select
to anon, authenticated
using (true);

create policy "Allow public insert testimonials"
on testimonials
for insert
to anon, authenticated
with check (true);
