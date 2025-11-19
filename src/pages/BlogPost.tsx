import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { fetchGraphQL, GET_POST_QUERY } from '@/lib/wordpress';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => fetchGraphQL(GET_POST_QUERY, { slug }),
    enabled: !!slug,
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">McCarthy Solutions</span>
            </Link>
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/learn-build-grow-with-ai" className="text-sm font-medium hover:text-primary transition-colors">
                Learn
              </Link>
              <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            {isLoading && (
              <div className="space-y-4">
                <Skeleton className="h-12 w-3/4" />
                <div className="flex gap-4">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-64 w-full" />
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <p className="text-destructive">Error loading post: {(error as Error).message}</p>
              </div>
            )}

            {data?.post && (
              <article className="prose prose-lg max-w-none dark:prose-invert">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.post.title}</h1>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground mb-8 not-prose">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">
                      {new Date(data.post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  {data.post.author?.node?.name && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="text-sm">{data.post.author.node.name}</span>
                    </div>
                  )}
                </div>

                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: data.post.content }}
                />
              </article>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
