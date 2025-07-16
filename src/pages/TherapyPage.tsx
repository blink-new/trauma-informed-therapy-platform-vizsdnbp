import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Lock, 
  Heart,
  Shield,
  Brain,
  Users,
  Compass,
  Star,
  Clock,
  Award
} from 'lucide-react'

const TherapyPage = () => {
  const [completedModules, setCompletedModules] = useState<string[]>(['understanding-trauma'])

  const therapyModules = [
    {
      id: 'understanding-trauma',
      title: 'Understanding Complex Trauma',
      description: 'Learn about C-PTSD, its symptoms, and how it affects your daily life',
      duration: '45 min',
      difficulty: 'Beginner',
      category: 'Foundation',
      icon: Brain,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      lessons: 8,
      completed: true
    },
    {
      id: 'narcissistic-abuse',
      title: 'Narcissistic Abuse Recovery',
      description: 'Recognize patterns, understand trauma bonds, and begin healing',
      duration: '60 min',
      difficulty: 'Intermediate',
      category: 'Specialized',
      icon: Shield,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      lessons: 12,
      completed: false,
      unlocked: true
    },
    {
      id: 'emotional-regulation',
      title: 'Emotional Regulation Skills',
      description: 'Learn techniques to manage overwhelming emotions and triggers',
      duration: '50 min',
      difficulty: 'Intermediate',
      category: 'Skills',
      icon: Heart,
      color: 'bg-red-50 text-red-600 border-red-200',
      lessons: 10,
      completed: false,
      unlocked: true
    },
    {
      id: 'boundaries',
      title: 'Healthy Boundaries',
      description: 'Establish and maintain boundaries in relationships',
      duration: '40 min',
      difficulty: 'Intermediate',
      category: 'Relationships',
      icon: Compass,
      color: 'bg-green-50 text-green-600 border-green-200',
      lessons: 9,
      completed: false,
      unlocked: false
    },
    {
      id: 'self-compassion',
      title: 'Self-Compassion & Healing',
      description: 'Develop a kinder relationship with yourself',
      duration: '35 min',
      difficulty: 'Beginner',
      category: 'Self-Care',
      icon: Star,
      color: 'bg-yellow-50 text-yellow-600 border-yellow-200',
      lessons: 7,
      completed: false,
      unlocked: false
    },
    {
      id: 'relationships',
      title: 'Rebuilding Trust in Relationships',
      description: 'Navigate relationships after trauma with confidence',
      duration: '55 min',
      difficulty: 'Advanced',
      category: 'Relationships',
      icon: Users,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      lessons: 11,
      completed: false,
      unlocked: false
    }
  ]

  const categories = ['All', 'Foundation', 'Specialized', 'Skills', 'Relationships', 'Self-Care']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredModules = selectedCategory === 'All' 
    ? therapyModules 
    : therapyModules.filter(module => module.category === selectedCategory)

  const completionRate = (completedModules.length / therapyModules.length) * 100

  const handleStartModule = (moduleId: string) => {
    // In a real app, this would navigate to the module content
    console.log('Starting module:', moduleId)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Therapy Modules
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Healing Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Evidence-based therapy modules designed specifically for complex trauma recovery. 
            Progress at your own pace in a safe, supportive environment.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-primary" />
              <span>Your Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {completedModules.length}
                </div>
                <p className="text-muted-foreground">Modules Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {Math.round(completionRate)}%
                </div>
                <p className="text-muted-foreground">Overall Progress</p>
                <Progress value={completionRate} className="mt-2" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {therapyModules.reduce((sum, module) => sum + module.lessons, 0)}
                </div>
                <p className="text-muted-foreground">Total Lessons</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Filter */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Therapy Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => {
            const Icon = module.icon
            const isCompleted = completedModules.includes(module.id)
            const isLocked = !module.unlocked && !isCompleted
            
            return (
              <Card 
                key={module.id} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all ${
                  isLocked ? 'opacity-60' : ''
                } ${isCompleted ? 'ring-2 ring-green-200' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center`}>
                      {isLocked ? (
                        <Lock className="h-6 w-6" />
                      ) : isCompleted ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <Icon className="h-6 w-6" />
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {module.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight">
                    {module.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{module.lessons} lessons</span>
                    </div>
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      module.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}
                  >
                    {module.difficulty}
                  </Badge>
                  
                  <Button 
                    className="w-full" 
                    variant={isCompleted ? "outline" : "default"}
                    disabled={isLocked}
                    onClick={() => handleStartModule(module.id)}
                  >
                    {isLocked ? (
                      <>
                        <Lock className="mr-2 h-4 w-4" />
                        Locked
                      </>
                    ) : isCompleted ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Review
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Start Module
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Unlock Information */}
        <Card className="mt-12 border-0 shadow-xl bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Unlock Your Healing Potential</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Complete modules in order to unlock advanced content. Each module builds upon 
              the previous one, ensuring a comprehensive and safe healing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Continue Learning
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Progress Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TherapyPage