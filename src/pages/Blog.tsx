import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar } from 'lucide-react';
import { fetchGraphQL, GET_POSTS_QUERY } from '@/lib/wordpress';

const Blog = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchGraphQL(GET_POSTS_QUERY),
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
              <Link to="/blog" className="text-sm font-medium text-primary transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
              <p className="text-lg text-muted-foreground">
                Insights, updates, and perspectives on AI consulting
              </p>
            </div>

            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-20 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <p className="text-destructive">Error loading posts: {(error as Error).message}</p>
              </div>
            )}

            {data?.posts && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.posts.nodes.map((post: any) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div
                          className="text-sm text-muted-foreground line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
