import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award,
  Heart,
  Brain,
  Shield,
  Users,
  CheckCircle,
  Clock,
  BarChart3,
  LineChart,
  Activity,
  Smile,
  Zap
} from 'lucide-react'

const ProgressPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  const overallStats = {
    modulesCompleted: 3,
    totalModules: 8,
    streakDays: 12,
    totalHours: 24.5,
    wellnessScore: 78
  }

  const weeklyProgress = [
    { day: 'Mon', mood: 7, energy: 6, anxiety: 3 },
    { day: 'Tue', mood: 8, energy: 7, anxiety: 2 },
    { day: 'Wed', mood: 6, energy: 5, anxiety: 4 },
    { day: 'Thu', mood: 9, energy: 8, anxiety: 2 },
    { day: 'Fri', mood: 8, energy: 7, anxiety: 3 },
    { day: 'Sat', mood: 9, energy: 9, anxiety: 1 },
    { day: 'Sun', mood: 8, energy: 8, anxiety: 2 }
  ]

  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Completed your first therapy module',
      icon: '🎯',
      earned: true,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Consistent Learner',
      description: 'Completed modules for 7 days in a row',
      icon: '🔥',
      earned: true,
      date: '2024-01-20'
    },
    {
      id: 3,
      title: 'Self-Compassion Champion',
      description: 'Completed the Self-Compassion module',
      icon: '💝',
      earned: false,
      date: null
    },
    {
      id: 4,
      title: 'Boundary Builder',
      description: 'Completed the Healthy Boundaries module',
      icon: '🛡️',
      earned: false,
      date: null
    },
    {
      id: 5,
      title: 'Community Connector',
      description: 'Participated in community discussions',
      icon: '🤝',
      earned: true,
      date: '2024-01-18'
    },
    {
      id: 6,
      title: 'Healing Journey',
      description: 'Completed 50% of all modules',
      icon: '🌟',
      earned: false,
      date: null
    }
  ]

  const recentActivities = [
    {
      type: 'module',
      title: 'Completed "Emotional Regulation Skills"',
      time: '2 hours ago',
      icon: Brain,
      color: 'text-blue-600'
    },
    {
      type: 'journal',
      title: 'Added journal entry',
      time: '1 day ago',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      type: 'community',
      title: 'Participated in support group',
      time: '2 days ago',
      icon: Users,
      color: 'text-green-600'
    },
    {
      type: 'assessment',
      title: 'Completed weekly check-in',
      time: '3 days ago',
      icon: Shield,
      color: 'text-purple-600'
    }
  ]

  const goals = [
    {
      id: 1,
      title: 'Complete Narcissistic Abuse Recovery Module',
      progress: 75,
      target: 100,
      deadline: '2024-02-01',
      category: 'Learning'
    },
    {
      id: 2,
      title: 'Practice grounding techniques daily',
      progress: 85,
      target: 100,
      deadline: '2024-01-31',
      category: 'Self-Care'
    },
    {
      id: 3,
      title: 'Join community discussion weekly',
      progress: 60,
      target: 100,
      deadline: '2024-02-15',
      category: 'Connection'
    }
  ]

  const moodData = {
    current: 8.2,
    change: +0.8,
    trend: 'improving'
  }

  const anxietyData = {
    current: 2.4,
    change: -1.2,
    trend: 'improving'
  }

  const energyData = {
    current: 7.1,
    change: +0.5,
    trend: 'improving'
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Progress Tracking
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Healing Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your progress, celebrate achievements, and stay motivated 
            on your path to healing and recovery.
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {overallStats.modulesCompleted}/{overallStats.totalModules}
              </div>
              <p className="text-sm text-muted-foreground">Modules Completed</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {overallStats.streakDays}
              </div>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-1">
                {overallStats.totalHours}h
              </div>
              <p className="text-sm text-muted-foreground">Learning Time</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {overallStats.wellnessScore}%
              </div>
              <p className="text-sm text-muted-foreground">Wellness Score</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-red-600 mb-1">
                {achievements.filter(a => a.earned).length}
              </div>
              <p className="text-sm text-muted-foreground">Achievements</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Mood Tracking */}
          <Card className="lg:col-span-2 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                <span>Weekly Wellness Tracking</span>
              </CardTitle>
              <CardDescription>
                Track your mood, energy, and anxiety levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Smile className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{moodData.current}</div>
                  <p className="text-sm text-muted-foreground">Mood</p>
                  <p className="text-xs text-green-600">+{moodData.change} this week</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{energyData.current}</div>
                  <p className="text-sm text-muted-foreground">Energy</p>
                  <p className="text-xs text-blue-600">+{energyData.change} this week</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Activity className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">{anxietyData.current}</div>
                  <p className="text-sm text-muted-foreground">Anxiety</p>
                  <p className="text-xs text-purple-600">{anxietyData.change} this week</p>
                </div>
              </div>
              
              {/* Simple chart representation */}
              <div className="space-y-3">
                {weeklyProgress.map((day, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-medium">{day.day}</div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs w-12">Mood</span>
                        <Progress value={day.mood * 10} className="flex-1 h-2" />
                        <span className="text-xs w-6">{day.mood}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs w-12">Energy</span>
                        <Progress value={day.energy * 10} className="flex-1 h-2" />
                        <span className="text-xs w-6">{day.energy}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs w-12">Anxiety</span>
                        <Progress value={day.anxiety * 10} className="flex-1 h-2" />
                        <span className="text-xs w-6">{day.anxiety}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-6 w-6 text-primary" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-lg bg-muted flex items-center justify-center`}>
                      <Icon className={`h-4 w-4 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </div>

        {/* Tabs for detailed views */}
        <Tabs defaultValue="goals" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="goals">Goals & Targets</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid gap-6">
              {goals.map((goal) => (
                <Card key={goal.id} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <Badge variant="outline">{goal.category}</Badge>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Due {goal.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {goal.progress}%
                        </div>
                        <p className="text-xs text-muted-foreground">Complete</p>
                      </div>
                    </div>
                    <Progress value={goal.progress} className="h-3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id} 
                  className={`border-0 shadow-lg ${
                    achievement.earned ? 'ring-2 ring-green-200 bg-green-50/50' : 'opacity-60'
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                    {achievement.earned ? (
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm">Earned {achievement.date}</span>
                      </div>
                    ) : (
                      <Badge variant="secondary">Not yet earned</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Motivational CTA */}
        <Card className="mt-12 border-0 shadow-xl bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Keep Going, You're Doing Great!</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every step forward is progress. Your commitment to healing is inspiring, 
              and you're building resilience with each module you complete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <TrendingUp className="mr-2 h-5 w-5" />
                Continue Learning
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Set New Goal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ProgressPage