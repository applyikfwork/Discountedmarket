import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BookOpen,
  UploadCloud,
  Package,
  SlidersHorizontal,
  LayoutTemplate,
  Palette,
  Send,
  FileText,
  Megaphone,
  Gavel,
  LineChart,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const adminFeatures = [
  {
    title: 'App Details & Docs',
    description:
      "Comprehensive documentation about the app's architecture, features, and tech stack.",
    icon: BookOpen,
    buttonText: 'View Details',
    href: '#',
  },
  {
    title: 'Product Management',
    description:
      'Add, edit, and manage your affiliate products one by one. Update details, images, and affiliate links.',
    icon: Package,
    buttonText: 'Manage Products',
    href: '/admin/products',
  },
  {
    title: 'Bulk Product Upload',
    description:
      'Efficiently add or update multiple products at once by uploading a formatted Google Sheet.',
    icon: UploadCloud,
    buttonText: 'Go to Bulk Upload',
    href: '/admin/bulk-upload',
  },
  {
    title: 'Category Management',
    description:
      'Organize products by creating and managing a hierarchical category structure to improve navigation.',
    icon: SlidersHorizontal,
    buttonText: 'Manage Categories',
    href: '/admin/categories',
  },
  {
    title: 'Indicator Management',
    description:
      "Control promotional indicators (e.g., 'New', 'Hot') that appear on product cards across the site.",
    icon: SlidersHorizontal,
    buttonText: 'Configure Indicators',
    href: '#',
  },
  {
    title: 'Homepage Sections',
    description:
      'Enable, disable, and customize the quick-access promotional cards on the homepage.',
    icon: LayoutTemplate,
    buttonText: 'Edit Sections',
    href: '#',
  },
  {
    title: 'Promoter Requests',
    description:
      "Manage brand promotion requests submitted through the 'Promote Your Brand' page.",
    icon: Megaphone,
    buttonText: 'View Requests',
    href: '#',
  },
  {
    title: 'Legal Pages',
    description:
      'Edit the content of your Terms of Service and Privacy Policy pages using a simple editor.',
    icon: Gavel,
    buttonText: 'Edit Legal Pages',
    href: '#',
  },
  {
    title: 'Sasta Maal Broadcaster',
    description: 'Send out deal alerts and messages to your users.',
    icon: Send,
    buttonText: 'Broadcast Message',
    href: '#',
  },
  {
    title: 'Analytics Overview',
    description:
      'View key performance, product trends, user and affiliate link click-through',
    icon: LineChart,
    buttonText: 'View Analytics',
    href: '/admin/analytics',
  },
  {
    title: 'Theme Customization',
    description:
      'Modify the look and feel of the website, including colors and typography.',
    icon: Palette,
    buttonText: 'Customize Theme',
    href: '/admin/theme',
  },
  {
    title: 'User Management',
    description:
      'View and manage user accounts. (Placeholder for future enhancements).',
    icon: Users,
    buttonText: 'Manage Users',
    href: '/admin/user-management',
  },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, Admin!</h1>
        <p className="text-muted-foreground">
          This is the central hub for managing the Discounted Market platform.
          Use the sidebar to navigate to different sections.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {adminFeatures.map((feature) => (
          <Card key={feature.title} className="flex flex-col">
            <CardHeader className="flex-row items-start gap-4 space-y-0">
              <div className="p-3 bg-primary/10 rounded-md">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="mt-1">
                  {feature.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full">
                <Link href={feature.href}>
                  {feature.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
