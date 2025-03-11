-- Bu sorgu ile tablonuzdaki politikaları kontrol edebilirsiniz
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM
  pg_policies
WHERE
  tablename = 'messages';
