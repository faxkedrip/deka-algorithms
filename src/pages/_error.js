import { useRouter } from 'next/router';

function ErrorPage() {
  const router = useRouter();

  if (router.pathname.startsWith('/blog')) {
    return <div>Blog post not found.</div>;
  }

  return <NotFound />;
}

export default ErrorPage;
