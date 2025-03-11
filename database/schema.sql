create table messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default now() not null
);

-- Bu tabloya herkesin yazabilmesi için RLS politikası ekledik.
alter table messages enable row level security;

create policy "Herkes mesaj gönderebilir" on messages
  for insert
  to public
  with check (true);

-- contact_messages tablosu için herkesin yazabilmesi için RLS politikası
alter table public.contact_messages enable row level security;

create policy "everyone" 
on public.contact_messages
as PERMISSIVE
for INSERT
to public
with check (true);
