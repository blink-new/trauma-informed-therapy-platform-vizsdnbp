import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  MessageCircle, 
  Heart,
  Share,
  Clock,
  Shield,
  Plus,
  Search,
  Filter,
  ThumbsUp,
  Reply,
  Flag,
  Star,
  Calendar,
  MapPin
} from 'lucide-react'

const CommunityPage = () => {
  const [newPost, setNewPost] = useState('')

  const supportGroups = [
    {
      id: 1,
      name: 'C-PTSD Support Circle',
      description: 'A safe space for those healing from complex trauma',
      members: 234,
      category: 'Support',
      isJoined: true,
      nextMeeting: '2024-01-25 7:00 PM EST',
      moderator: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      name: 'Narcissistic Abuse Survivors',
      description: 'Recovery and healing from narcissistic abuse',
      members: 189,
      category: 'Recovery',
      isJoined: true,
      nextMeeting: '2024-01-27 6:30 PM EST',
      moderator: 'Lisa Chen, LCSW'
    },
    {
      id: 3,
      name: 'Mindfulness & Healing',
      description: 'Practicing mindfulness for trauma recovery',
      members: 156,
      category: 'Wellness',
      isJoined: false,
      nextMeeting: '2024-01-26 8:00 PM EST',
      moderator: 'Michael Torres'
    },
    {
      id: 4,
      name: 'Family Trauma Recovery',
      description: 'Healing from family-of-origin trauma',
      members: 98,
      category: 'Family',
      isJoined: false,
      nextMeeting: '2024-01-28 7:30 PM EST',
      moderator: 'Dr. Amanda White'
    }
  ]

  const communityPosts = [
    {
      id: 1,
      author: {
        name: 'Alex M.',
        avatar: '',
        badge: 'Survivor'
      },
      content: 'Today marks 6 months since I started my healing journey. The emotional flashbacks are becoming less frequent, and I\'m learning to be gentle with myself. To anyone just starting - it gets better. 💙',
      timestamp: '2 hours ago',
      likes: 24,
      replies: 8,
      category: 'Milestone',
      isLiked: false
    },
    {
      id: 2,
      author: {
        name: 'Jordan K.',
        avatar: '',
        badge: 'Helper'
      },
      content: 'Sharing a grounding technique that helped me today: 5-4-3-2-1 method. Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. It brought me back to the present when I was feeling overwhelmed.',
      timestamp: '4 hours ago',
      likes: 31,
      replies: 12,
      category: 'Tips',
      isLiked: true
    },
    {
      id: 3,
      author: {
        name: 'Sam R.',
        avatar: '',
        badge: 'Newcomer'
      },
      content: 'I\'m new here and feeling scared but hopeful. Just completed my first assessment and starting to understand my trauma responses. Thank you for creating such a safe space.',
      timestamp: '6 hours ago',
      likes: 18,
      replies: 15,
      category: 'Introduction',
      isLiked: false
    },
    {
      id: 4,
      author: {
        name: 'Taylor P.',
        avatar: '',
        badge: 'Advocate'
      },
      content: 'Reminder: Healing isn\'t linear. Some days will be harder than others, and that\'s okay. You\'re not going backwards, you\'re processing. Be patient with yourself. 🌱',
      timestamp: '1 day ago',
      likes: 45,
      replies: 6,
      category: 'Encouragement',
      isLiked: true
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Trauma-Informed Yoga Session',
      date: '2024-01-25',
      time: '6:00 PM EST',
      type: 'Workshop',
      facilitator: 'Maya Patel, RYT',
      spots: 12
    },
    {
      id: 2,
      title: 'Art Therapy for Healing',
      date: '2024-01-26',
      time: '7:00 PM EST',
      type: 'Creative',
      facilitator: 'Dr. Elena Rodriguez',
      spots: 8
    },
    {
      id: 3,
      title: 'Boundary Setting Workshop',
      date: '2024-01-28',
      time: '2:00 PM EST',
      type: 'Educational',
      facilitator: 'James Wilson, LMFT',
      spots: 15
    }
  ]

  const handleLike = (postId: number) => {
    // In a real app, this would update the like status
    console.log('Liked post:', postId)
  }

  const handleJoinGroup = (groupId: number) => {
    // In a real app, this would join the support group
    console.log('Joined group:', groupId)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Community Support
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Healing Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with other survivors, share your journey, and find support 
            in our trauma-informed community. You are not alone.
          </p>
        </div>

        {/* Community Guidelines */}
        <Card className="mb-8 border-0 shadow-lg bg-blue-50/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Community Guidelines</h3>
                <p className="text-blue-800 text-sm">
                  This is a safe, moderated space. Please be respectful, avoid giving medical advice, 
                  and remember that everyone is at a different stage of their healing journey. 
                  If you need immediate help, please contact crisis support.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Create Post */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Share with the Community</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Share your thoughts, experiences, or encouragement with the community..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[100px]"
                />
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Milestone
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Tips
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Encouragement
                    </Badge>
                  </div>
                  <Button disabled={!newPost.trim()}>
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Community Posts */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Community Posts</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>

              {communityPosts.map((post) => (
                <Card key={post.id} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold">{post.author.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {post.author.badge}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {post.content}
                        </p>
                        
                        <div className="flex items-center space-x-6">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(post.id)}
                            className={post.isLiked ? 'text-red-600' : ''}
                          >
                            <Heart className={`mr-2 h-4 w-4 ${post.isLiked ? 'fill-current' : ''}`} />
                            {post.likes}
                          </Button>
                          
                          <Button variant="ghost" size="sm">
                            <Reply className="mr-2 h-4 w-4" />
                            {post.replies}
                          </Button>
                          
                          <Button variant="ghost" size="sm">
                            <Flag className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Support Groups */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Support Groups</span>
                </CardTitle>
                <CardDescription>
                  Join moderated support groups for focused discussions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportGroups.map((group) => (
                  <div key={group.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-sm">{group.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {group.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {group.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>{group.members} members</span>
                      <span>Next: {group.nextMeeting}</span>
                    </div>
                    <Button
                      size="sm"
                      variant={group.isJoined ? "outline" : "default"}
                      className="w-full text-xs"
                      onClick={() => handleJoinGroup(group.id)}
                    >
                      {group.isJoined ? 'Joined' : 'Join Group'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-sm mb-2">{event.title}</h3>
                    <div className="space-y-1 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{event.facilitator}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {event.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {event.spots} spots left
                      </span>
                    </div>
                    <Button size="sm" className="w-full mt-3 text-xs">
                      Register
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Community Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3,892</div>
                  <p className="text-sm text-muted-foreground">Posts Shared</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">156</div>
                  <p className="text-sm text-muted-foreground">Support Groups</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage