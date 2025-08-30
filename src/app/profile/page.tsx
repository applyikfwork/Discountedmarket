'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
       <Card className="max-w-2xl mx-auto">
        <CardHeader>
            <div className='flex items-center gap-4'>
                <Avatar className="h-20 w-20">
                    <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
                    <AvatarFallback>{user.displayName?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className="text-3xl">{user.displayName}</CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input id="displayName" defaultValue={user.displayName ?? ''} />
            </div>
            <Button>Update Profile</Button>
        </CardContent>
       </Card>
    </div>
  );
}
