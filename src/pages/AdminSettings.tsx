
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  Settings,
  User,
  Shield,
  Bell,
  Mail,
  Key,
  Moon,
  Sun,
  LogOut
} from "lucide-react";

import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import AnimatedSection from "@/components/AnimatedSection";

// Form schemas
const profileFormSchema = z.object({
  displayName: z.string().min(2, "Display name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  bio: z.string().max(160, "Bio must not be longer than 160 characters.").optional(),
});

const securityFormSchema = z.object({
  currentPassword: z.string().min(1, "Please enter your current password."),
  newPassword: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters."),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const notificationFormSchema = z.object({
  emailNotifications: z.boolean().default(true),
  marketingEmails: z.boolean().default(false),
  securityAlerts: z.boolean().default(true),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type SecurityFormValues = z.infer<typeof securityFormSchema>;
type NotificationFormValues = z.infer<typeof notificationFormSchema>;

const AdminSettings = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  // Check if user is logged in
  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please log in to access admin settings",
        variant: "destructive",
      });
      navigate("/admin");
    }
  }, [navigate, toast]);

  // Profile form
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      displayName: "Admin User",
      email: "admin@example.com",
      bio: "Site administrator responsible for content management and user moderation.",
    },
  });

  // Security form
  const securityForm = useForm<SecurityFormValues>({
    resolver: zodResolver(securityFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Notification form
  const notificationForm = useForm<NotificationFormValues>({
    resolver: zodResolver(notificationFormSchema),
    defaultValues: {
      emailNotifications: true,
      marketingEmails: false,
      securityAlerts: true,
    },
  });

  const onProfileSubmit = async (data: ProfileFormValues) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Profile updated",
        description: "Your profile information has been saved successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSecuritySubmit = async (data: SecurityFormValues) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Password updated",
        description: "Your password has been changed successfully.",
      });
      securityForm.reset({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onNotificationSubmit = async (data: NotificationFormValues) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Notification preferences saved",
        description: "Your notification settings have been updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update notification settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleThemeToggle = (value: string) => {
    setTheme(value);
    toast({
      title: `${value === "dark" ? "Dark" : "Light"} mode activated`,
      description: `Theme has been switched to ${value} mode.`,
    });
  };

  const handleLogout = () => {
    setIsLoading(true);
    
    // Simulate logout process
    setTimeout(() => {
      localStorage.removeItem("adminLoggedIn");
      
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of the admin portal.",
      });
      
      navigate("/admin");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-8 px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="max-w-6xl mx-auto space-y-6">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold tracking-tight text-rich-black">
              Admin Settings
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your account settings and preferences
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <User size={16} />
                  <span className="hidden sm:inline">Account</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Account Information</SheetTitle>
                  <SheetDescription>
                    View and manage your account details
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
                      <div className="w-12 h-12 bg-accent-brown rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {profileForm.getValues().displayName?.charAt(0) || "A"}
                      </div>
                      <div>
                        <p className="font-medium">{profileForm.getValues().displayName}</p>
                        <p className="text-sm text-muted-foreground">{profileForm.getValues().email}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-accent/50 rounded-lg">
                      <p className="font-medium mb-1">Administrator</p>
                      <p className="text-sm text-muted-foreground">Role with full system access</p>
                    </div>
                    <div className="p-4 bg-accent/50 rounded-lg">
                      <p className="font-medium mb-1">Last login</p>
                      <p className="text-sm text-muted-foreground">Today at {new Date().toLocaleTimeString()}</p>
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline" className="w-full" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            <ToggleGroup type="single" value={theme} onValueChange={value => value && handleThemeToggle(value)}>
              <ToggleGroupItem value="light" aria-label="Toggle light mode">
                <Sun className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="dark" aria-label="Toggle dark mode">
                <Moon className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <Button variant="destructive" className="gap-2" onClick={handleLogout} disabled={isLoading}>
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </header>
        
        <Card className="border-accent-brown/20 shadow-md">
          <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab}>
            <CardHeader className="border-b border-accent-brown/10 pb-3">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-2">
                <TabsTrigger value="profile" className="gap-2">
                  <User size={16} className="hidden md:block" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="security" className="gap-2">
                  <Shield size={16} className="hidden md:block" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="notifications" className="gap-2">
                  <Bell size={16} className="hidden md:block" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="integrations" className="gap-2">
                  <Key size={16} className="hidden md:block" />
                  Integrations
                </TabsTrigger>
                <TabsTrigger value="advanced" className="gap-2">
                  <Settings size={16} className="hidden md:block" />
                  Advanced
                </TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent className="pt-6 pb-4">
              <TabsContent value="profile" className="mt-0">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Profile</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage your personal information and how it appears to others.
                    </p>
                  </div>
                  <Form {...profileForm}>
                    <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                      <FormField
                        control={profileForm.control}
                        name="displayName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Display Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} disabled={isLoading} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={profileForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Email address" {...field} disabled={isLoading} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={profileForm.control}
                        name="bio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                              <Input placeholder="Brief description" {...field} disabled={isLoading} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end">
                        <Button type="submit" className="bg-accent-brown hover:bg-brown-600" disabled={isLoading}>
                          {isLoading ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                              Saving...
                            </span>
                          ) : "Save Changes"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </TabsContent>

              <TabsContent value="security" className="mt-0">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage your password and security settings.
                    </p>
                  </div>
                  <Form {...securityForm}>
                    <form onSubmit={securityForm.handleSubmit(onSecuritySubmit)} className="space-y-6">
                      <FormField
                        control={securityForm.control}
                        name="currentPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Enter current password" {...field} disabled={isLoading} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={securityForm.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Enter new password" {...field} disabled={isLoading} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={securityForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm New Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Confirm new password" {...field} disabled={isLoading} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end">
                        <Button type="submit" className="bg-accent-brown hover:bg-brown-600" disabled={isLoading}>
                          {isLoading ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                              Updating...
                            </span>
                          ) : "Update Password"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                  <div className="pt-4 space-y-4">
                    <h4 className="text-sm font-medium">Two-Factor Authentication</h4>
                    <div className="flex items-center justify-between bg-accent/50 p-4 rounded-md">
                      <div className="space-y-0.5">
                        <div className="font-medium">Authenticator App</div>
                        <div className="text-sm text-muted-foreground">Use an authenticator app to generate one-time codes.</div>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                    <div className="flex items-center justify-between bg-accent/50 p-4 rounded-md">
                      <div className="space-y-0.5">
                        <div className="font-medium">SMS Authentication</div>
                        <div className="text-sm text-muted-foreground">Receive verification codes via SMS.</div>
                      </div>
                      <Button variant="outline">Setup</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notifications" className="mt-0">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage how and when you receive notifications.
                    </p>
                  </div>
                  <Form {...notificationForm}>
                    <form onSubmit={notificationForm.handleSubmit(onNotificationSubmit)} className="space-y-6">
                      <FormField
                        control={notificationForm.control}
                        name="emailNotifications"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-md border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">
                                Email Notifications
                              </FormLabel>
                              <FormDescription className="text-sm text-muted-foreground">
                                Receive email notifications about activity on your site.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                disabled={isLoading}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={notificationForm.control}
                        name="marketingEmails"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-md border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">
                                Marketing Emails
                              </FormLabel>
                              <FormDescription className="text-sm text-muted-foreground">
                                Receive emails about new features and updates.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                disabled={isLoading}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={notificationForm.control}
                        name="securityAlerts"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-md border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">
                                Security Alerts
                              </FormLabel>
                              <FormDescription className="text-sm text-muted-foreground">
                                Receive notifications about security issues and login attempts.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                disabled={isLoading}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end">
                        <Button type="submit" className="bg-accent-brown hover:bg-brown-600" disabled={isLoading}>
                          {isLoading ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                              Saving...
                            </span>
                          ) : "Save Preferences"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </TabsContent>

              <TabsContent value="integrations" className="mt-0">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">API & Integrations</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage API keys and third-party service integrations.
                    </p>
                  </div>
                  
                  <Alert className="mb-4">
                    <Mail className="h-4 w-4" />
                    <AlertTitle>Email Service Connected</AlertTitle>
                    <AlertDescription>
                      Your email service is properly configured and working.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="space-y-4">
                    <div className="grid gap-6">
                      <div className="flex items-center justify-between p-4 bg-accent/50 rounded-md">
                        <div className="space-y-0.5">
                          <div className="font-medium">API Key</div>
                          <div className="text-sm text-muted-foreground">Used for programmatic access to the API.</div>
                        </div>
                        <Button variant="outline">Generate Key</Button>
                      </div>
                      
                      <div className="grid gap-2">
                        <Label>Webhook URL</Label>
                        <div className="flex gap-2">
                          <Input 
                            value="https://example.com/webhook" 
                            readOnly
                            className="flex-1 font-mono text-sm"
                          />
                          <Button variant="outline">Copy</Button>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Label>Connected Services</Label>
                        <RadioGroup defaultValue="email" className="grid gap-3">
                          <div className="flex items-center space-x-2 space-y-0 rounded-md border p-3">
                            <RadioGroupItem value="email" id="email" />
                            <Label htmlFor="email" className="flex-1">Email Service</Label>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200">
                              Connected
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 space-y-0 rounded-md border p-3">
                            <RadioGroupItem value="payment" id="payment" disabled />
                            <Label htmlFor="payment" className="flex-1">Payment Gateway</Label>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-50 text-gray-700 border-gray-200">
                              Not Connected
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 space-y-0 rounded-md border p-3">
                            <RadioGroupItem value="analytics" id="analytics" disabled />
                            <Label htmlFor="analytics" className="flex-1">Analytics</Label>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-50 text-gray-700 border-gray-200">
                              Not Connected
                            </span>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="mt-0">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Advanced Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Configure advanced system settings and options.
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <Label>Site Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Date Format</Label>
                      <Select defaultValue="mdy">
                        <SelectTrigger>
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium">Danger Zone</h4>
                      <div className="rounded-md border border-destructive/50 p-4">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h5 className="font-medium text-destructive">Delete Account</h5>
                            <p className="text-sm text-muted-foreground">
                              Permanently delete your account and all your data.
                            </p>
                          </div>
                          <Button variant="destructive">Delete Account</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
            
            <CardFooter className="flex justify-between border-t border-accent-brown/10 pt-5">
              <p className="text-xs text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <Button variant="outline" onClick={() => navigate("/")}>
                Back to Dashboard
              </Button>
            </CardFooter>
          </Tabs>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export default AdminSettings;
