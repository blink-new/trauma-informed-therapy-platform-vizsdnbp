import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BookOpen, 
  Video, 
  Headphones, 
  Download,
  Search,
  ExternalLink,
  Heart,
  Brain,
  Shield,
  Users,
  FileText,
  Play,
  Clock,
  Star
} from 'lucide-react'

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const resourceCategories = [
    {
      id: 'articles',
      name: 'Articles & Guides',
      icon: BookOpen,
      count: 24
    },
    {
      id: 'videos',
      name: 'Educational Videos',
      icon: Video,
      count: 18
    },
    {
      id: 'audio',
      name: 'Guided Meditations',
      icon: Headphones,
      count: 15
    },
    {
      id: 'worksheets',
      name: 'Worksheets & Tools',
      icon: FileText,
      count: 12
    }
  ]

  const featuredResources = [
    {
      id: 1,
      title: 'Understanding Complex PTSD: A Comprehensive Guide',
      description: 'Learn about the symptoms, causes, and treatment options for C-PTSD',
      type: 'Article',
      duration: '15 min read',
      category: 'Education',
      tags: ['C-PTSD', 'Trauma', 'Education'],
      rating: 4.9,
      icon: BookOpen,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 2,
      title: 'Breaking Free from Narcissistic Abuse',
      description: 'Recognize patterns and begin your recovery journey',
      type: 'Video Series',
      duration: '45 min',
      category: 'Recovery',
      tags: ['Narcissistic Abuse', 'Recovery', 'Healing'],
      rating: 4.8,
      icon: Video,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      id: 3,
      title: 'Grounding Meditation for Trauma Survivors',
      description: 'A gentle guided meditation to help you feel safe and present',
      type: 'Audio',
      duration: '20 min',
      category: 'Mindfulness',
      tags: ['Meditation', 'Grounding', 'Safety'],
      rating: 4.9,
      icon: Headphones,
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 4,
      title: 'Trauma Recovery Workbook',
      description: 'Interactive exercises for processing and healing trauma',
      type: 'Workbook',
      duration: 'Self-paced',
      category: 'Tools',
      tags: ['Workbook', 'Exercises', 'Self-help'],
      rating: 4.7,
      icon: FileText,
      color: 'bg-orange-50 text-orange-600'
    }
  ]

  const articles = [
    {
      title: 'The Neuroscience of Trauma: How Your Brain Responds',
      excerpt: 'Understanding the biological impact of trauma on your brain and nervous system',
      readTime: '12 min',
      category: 'Science',
      tags: ['Neuroscience', 'Brain', 'Trauma Response']
    },
    {
      title: 'Recognizing Emotional Flashbacks',
      excerpt: 'Learn to identify and manage emotional flashbacks common in C-PTSD',
      readTime: '8 min',
      category: 'Symptoms',
      tags: ['Flashbacks', 'C-PTSD', 'Emotional Regulation']
    },
    {
      title: 'Building a Support Network After Trauma',
      excerpt: 'Strategies for creating healthy relationships and finding trustworthy support',
      readTime: '10 min',
      category: 'Relationships',
      tags: ['Support', 'Relationships', 'Trust']
    },
    {
      title: 'Self-Care for Trauma Survivors',
      excerpt: 'Practical self-care strategies that honor your healing journey',
      readTime: '15 min',
      category: 'Self-Care',
      tags: ['Self-Care', 'Healing', 'Wellness']
    }
  ]

  const videos = [
    {
      title: 'What is Complex PTSD? Expert Interview',
      description: 'Dr. Sarah Johnson explains the differences between PTSD and C-PTSD',
      duration: '25 min',
      views: '12.5K',
      category: 'Education'
    },
    {
      title: 'Healing from Narcissistic Abuse: Recovery Steps',
      description: 'A step-by-step guide to recovering from narcissistic abuse',
      duration: '35 min',
      views: '8.2K',
      category: 'Recovery'
    },
    {
      title: 'Trauma-Informed Yoga Practice',
      description: 'Gentle yoga movements designed for trauma survivors',
      duration: '30 min',
      views: '15.1K',
      category: 'Movement'
    },
    {
      title: 'Understanding Trauma Bonds',
      description: 'Learn about trauma bonds and how to break free from them',
      duration: '20 min',
      views: '9.8K',
      category: 'Relationships'
    }
  ]

  const audioResources = [
    {
      title: 'Body Scan for Trauma Recovery',
      description: 'A gentle body scan meditation designed for trauma survivors',
      duration: '25 min',
      category: 'Meditation',
      downloads: '3.2K'
    },
    {
      title: 'Breathing Exercises for Anxiety',
      description: 'Calming breathing techniques to manage anxiety and panic',
      duration: '15 min',
      category: 'Breathing',
      downloads: '5.1K'
    },
    {
      title: 'Sleep Stories for Healing',
      description: 'Peaceful stories to help you relax and sleep better',
      duration: '45 min',
      category: 'Sleep',
      downloads: '2.8K'
    },
    {
      title: 'Self-Compassion Meditation',
      description: 'Develop a kinder relationship with yourself',
      duration: '20 min',
      category: 'Self-Compassion',
      downloads: '4.5K'
    }
  ]

  const worksheets = [
    {
      title: 'Trauma Triggers Identification Worksheet',
      description: 'Identify and understand your personal trauma triggers',
      pages: 8,
      category: 'Assessment',
      downloads: '1.2K'
    },
    {
      title: 'Daily Grounding Techniques Checklist',
      description: 'A practical checklist of grounding techniques to try',
      pages: 4,
      category: 'Coping Skills',
      downloads: '2.1K'
    },
    {
      title: 'Boundary Setting Workbook',
      description: 'Learn to set and maintain healthy boundaries',
      pages: 16,
      category: 'Relationships',
      downloads: '1.8K'
    },
    {
      title: 'Healing Journal Prompts',
      description: '30 thoughtful prompts for your healing journey',
      pages: 12,
      category: 'Journaling',
      downloads: '3.5K'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Resource Library
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Healing Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive collection of evidence-based resources, tools, and educational 
            materials to support your trauma recovery journey.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources, topics, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>

        {/* Resource Categories Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {resourceCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-2xl font-bold text-primary">{category.count}</p>
                  <p className="text-sm text-muted-foreground">resources</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Featured Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredResources.map((resource) => {
              const Icon = resource.icon
              return (
                <Card key={resource.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-lg ${resource.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{resource.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <Badge variant="outline">{resource.type}</Badge>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{resource.duration}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Access Resource
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Resource Tabs */}
        <Tabs defaultValue="articles" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
            <TabsTrigger value="worksheets">Worksheets</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            <div className="grid gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                        <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                          </div>
                          <Badge variant="outline">{article.category}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {article.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <Play className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                    <p className="text-muted-foreground mb-4">{video.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{video.duration}</span>
                      <span>{video.views} views</span>
                    </div>
                    <Badge variant="outline" className="mb-4">{video.category}</Badge>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {audioResources.map((audio, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                        <Headphones className="h-8 w-8 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{audio.title}</h3>
                        <p className="text-sm text-muted-foreground">{audio.duration}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{audio.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">{audio.category}</Badge>
                      <span className="text-sm text-muted-foreground">{audio.downloads} downloads</span>
                    </div>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Listen Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="worksheets" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {worksheets.map((worksheet, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-8 w-8 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{worksheet.title}</h3>
                        <p className="text-sm text-muted-foreground">{worksheet.pages} pages</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{worksheet.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">{worksheet.category}</Badge>
                      <span className="text-sm text-muted-foreground">{worksheet.downloads} downloads</span>
                    </div>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ResourcesPage