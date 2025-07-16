import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Shield, ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'

const AssessmentPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isComplete, setIsComplete] = useState(false)

  const questions = [
    {
      id: 0,
      category: 'Complex PTSD Symptoms',
      question: 'How often do you experience emotional flashbacks or sudden overwhelming emotions?',
      options: [
        { value: '0', label: 'Never', score: 0 },
        { value: '1', label: 'Rarely (once a month or less)', score: 1 },
        { value: '2', label: 'Sometimes (2-3 times a month)', score: 2 },
        { value: '3', label: 'Often (weekly)', score: 3 },
        { value: '4', label: 'Very often (daily or almost daily)', score: 4 }
      ]
    },
    {
      id: 1,
      category: 'Relational Trauma',
      question: 'Do you find it difficult to trust others or form close relationships?',
      options: [
        { value: '0', label: 'Not at all', score: 0 },
        { value: '1', label: 'Slightly difficult', score: 1 },
        { value: '2', label: 'Moderately difficult', score: 2 },
        { value: '3', label: 'Very difficult', score: 3 },
        { value: '4', label: 'Extremely difficult', score: 4 }
      ]
    },
    {
      id: 2,
      category: 'Narcissistic Abuse Recovery',
      question: 'Have you experienced gaslighting, manipulation, or emotional abuse in relationships?',
      options: [
        { value: '0', label: 'Never', score: 0 },
        { value: '1', label: 'Once or twice', score: 1 },
        { value: '2', label: 'Occasionally', score: 2 },
        { value: '3', label: 'Frequently', score: 3 },
        { value: '4', label: 'Consistently/Ongoing', score: 4 }
      ]
    },
    {
      id: 3,
      category: 'Emotional Regulation',
      question: 'How often do you feel overwhelmed by your emotions?',
      options: [
        { value: '0', label: 'Never', score: 0 },
        { value: '1', label: 'Rarely', score: 1 },
        { value: '2', label: 'Sometimes', score: 2 },
        { value: '3', label: 'Often', score: 3 },
        { value: '4', label: 'Almost always', score: 4 }
      ]
    },
    {
      id: 4,
      category: 'Self-Worth & Identity',
      question: 'Do you struggle with feelings of shame, worthlessness, or a negative self-image?',
      options: [
        { value: '0', label: 'Not at all', score: 0 },
        { value: '1', label: 'Slightly', score: 1 },
        { value: '2', label: 'Moderately', score: 2 },
        { value: '3', label: 'Significantly', score: 3 },
        { value: '4', label: 'Severely', score: 4 }
      ]
    },
    {
      id: 5,
      category: 'Hypervigilance',
      question: 'How often are you on high alert or scanning for potential threats?',
      options: [
        { value: '0', label: 'Never', score: 0 },
        { value: '1', label: 'Rarely', score: 1 },
        { value: '2', label: 'Sometimes', score: 2 },
        { value: '3', label: 'Often', score: 3 },
        { value: '4', label: 'Constantly', score: 4 }
      ]
    }
  ]

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setIsComplete(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, answer) => {
      const question = questions.find(q => q.id.toString() === Object.keys(answers).find(key => answers[parseInt(key)] === answer))
      const option = question?.options.find(opt => opt.value === answer)
      return sum + (option?.score || 0)
    }, 0)

    const maxScore = questions.length * 4
    const percentage = (totalScore / maxScore) * 100

    if (percentage <= 25) {
      return {
        level: 'Mild',
        color: 'bg-green-50 text-green-700 border-green-200',
        description: 'You show some signs of trauma responses, but they appear to be manageable. Consider exploring our resources for continued well-being.',
        recommendations: ['Mindfulness exercises', 'Self-care resources', 'Community support']
      }
    } else if (percentage <= 50) {
      return {
        level: 'Moderate',
        color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
        description: 'You are experiencing moderate trauma symptoms that may benefit from therapeutic support and coping strategies.',
        recommendations: ['Therapy modules', 'Grounding techniques', 'Peer support groups']
      }
    } else if (percentage <= 75) {
      return {
        level: 'Significant',
        color: 'bg-orange-50 text-orange-700 border-orange-200',
        description: 'You are experiencing significant trauma symptoms that would benefit from comprehensive therapeutic intervention.',
        recommendations: ['Professional therapy', 'Crisis support plan', 'Intensive healing modules']
      }
    } else {
      return {
        level: 'Severe',
        color: 'bg-red-50 text-red-700 border-red-200',
        description: 'You are experiencing severe trauma symptoms. We strongly recommend seeking professional support immediately.',
        recommendations: ['Immediate professional help', 'Crisis intervention', 'Comprehensive treatment plan']
      }
    }
  }

  if (isComplete) {
    const results = calculateResults()
    
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-3xl">Assessment Complete</CardTitle>
              <CardDescription className="text-lg">
                Thank you for taking the time to complete this assessment. Your responses help us understand your needs better.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <Alert className={results.color}>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-lg font-medium">
                  Trauma Impact Level: {results.level}
                </AlertDescription>
              </Alert>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Understanding Your Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {results.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Recommended Next Steps</h3>
                <div className="grid gap-3">
                  {results.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 border-t">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1" size="lg">
                    Start Therapy Modules
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="flex-1" size="lg">
                    Explore Resources
                  </Button>
                </div>
              </div>
              
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> This assessment is for informational purposes only and does not replace professional diagnosis or treatment. If you're in crisis, please seek immediate help.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary">{currentQ.category}</Badge>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl leading-relaxed">
              {currentQ.question}
            </CardTitle>
            <CardDescription>
              Please select the option that best describes your experience.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <RadioGroup
              value={answers[currentQuestion] || ''}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {currentQ.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer text-base">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            
            {/* Navigation */}
            <div className="flex justify-between pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
              >
                {currentQuestion === questions.length - 1 ? 'Complete Assessment' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Safety Notice */}
        <Alert className="mt-8">
          <Shield className="h-4 w-4" />
          <AlertDescription>
            Your responses are confidential and secure. This assessment helps us provide personalized support for your healing journey.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}

export default AssessmentPage