-- Run this in the Supabase SQL editor before enabling persistence and payments.
create table if not exists public.users (
  id text primary key,
  email text not null,
  name text,
  created_at timestamptz not null default now(),
  access_expires_at timestamptz
);

create table if not exists public.resumes (
  id uuid primary key default gen_random_uuid(),
  user_id text not null references public.users(id) on delete cascade,
  title text not null,
  template_id text not null default 'modern',
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
create index if not exists resumes_user_id_updated_at_idx on public.resumes(user_id, updated_at desc);

alter table public.users enable row level security;
alter table public.resumes enable row level security;
