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

create policy "Allow public read articles"
on articles
for select
using (true);

create policy "Allow public insert articles"
on articles
for insert
with check (true);
