create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text,
  excerpt text,
  content text,
  image_url text,
  created_at timestamp with time zone default now()
);

alter table articles enable row level security;

drop policy if exists "Allow public read articles" on articles;
drop policy if exists "Allow public insert articles" on articles;

create policy "Allow public read articles"
on articles
for select
to anon, authenticated
using (true);

create policy "Allow public insert articles"
on articles
for insert
to anon, authenticated
with check (true);
