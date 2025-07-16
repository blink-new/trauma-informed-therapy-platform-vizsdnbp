import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Alert, AlertDescription } from '../components/ui/alert'
import { 
  Phone, 
  MessageCircle, 
  Globe, 
  Heart, 
  Shield,
  AlertTriangle,
  Clock,
  Users,
  ExternalLink
} from 'lucide-react'

export default function CrisisPage() {
  const emergencyContacts = [
    {
      name: 'National Suicide Prevention Lifeline',
      number: '988',
      description: '24/7 free and confidential support for people in distress',
      type: 'phone',
      available: '24/7'
    },
    {
      name: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      description: 'Free, 24/7 support via text message',
      type: 'text',
      available: '24/7'
    },
    {
      name: 'National Domestic Violence Hotline',
      number: '1-800-799-7233',
      description: 'Support for domestic violence survivors',
      type: 'phone',
      available: '24/7'
    },
    {
      name: 'RAINN National Sexual Assault Hotline',
      number: '1-800-656-4673',
      description: 'Support for sexual assault survivors',
      type: 'phone',
      available: '24/7'
    }
  ]

  const copingStrategies = [
    {
      title: '5-4-3-2-1 Grounding Technique',
      description: 'Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste',
      icon: Shield,
      color: 'bg-blue-500'
    },
    {
      title: 'Box Breathing',
      description: 'Breathe in for 4, hold for 4, breathe out for 4, hold for 4. Repeat.',
      icon: Heart,
      color: 'bg-green-500'
    },
    {
      title: 'Safe Place Visualization',
      description: 'Imagine a place where you feel completely safe and calm. Focus on the details.',
      icon: Shield,
      color: 'bg-purple-500'
    },
    {
      title: 'Progressive Muscle Relaxation',
      description: 'Tense and release each muscle group, starting from your toes to your head.',
      icon: Heart,
      color: 'bg-orange-500'
    }
  ]

  const safetyPlanSteps = [
    'Recognize your warning signs and triggers',
    'Use coping strategies that have worked before',
    'Contact supportive people in your life',
    'Reach out to mental health professionals',
    'Contact emergency services if in immediate danger',
    'Make your environment safe by removing harmful items'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Alert */}
        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>If you are in immediate danger, please call 911 or go to your nearest emergency room.</strong>
            <br />
            This page provides crisis support resources, but is not a substitute for emergency services.
          </AlertDescription>
        </Alert>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Crisis Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You are not alone. If you're experiencing a crisis, there are people who want to help. 
            Reach out for support - it's a sign of strength, not weakness.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emergency Contacts */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contacts</h2>
            <div className="space-y-4 mb-12">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                          {contact.type === 'phone' ? (
                            <Phone className="w-6 h-6 text-white" />
                          ) : (
                            <MessageCircle className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-lg mb-1">
                            {contact.name}
                          </h3>
                          <p className="text-gray-600 mb-2">{contact.description}</p>
                          <div className="flex items-center space-x-4">
                            <div className="text-2xl font-bold text-red-600">
                              {contact.number}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              {contact.available}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button size="lg" className="bg-red-600 hover:bg-red-700">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Immediate Coping Strategies */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Immediate Coping Strategies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {copingStrategies.map((strategy, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${strategy.color} rounded-lg flex items-center justify-center`}>
                        <strategy.icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {strategy.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {strategy.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Safety Planning */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Safety Planning</span>
                </CardTitle>
                <CardDescription>
                  Steps to help you stay safe during a crisis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {safetyPlanSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Create My Safety Plan
                </Button>
              </CardContent>
            </Card>

            {/* Online Resources */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Online Resources</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Crisis Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Mental Health Resources
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Trauma Support Groups
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Community Support */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  You're Not Alone
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Connect with others who understand what you're going through in our 
                  moderated support community.
                </p>
                <Button variant="outline" size="sm">
                  Join Community
                </Button>
              </CardContent>
            </Card>

            {/* Professional Help */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Professional Support
                </CardTitle>
                <CardDescription>
                  Consider reaching out to a mental health professional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full" size="sm">
                    Find a Therapist
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    Emergency Services
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    Support Groups
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Message */}
        <Card className="mt-12 border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Life Has Value
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Crisis situations are temporary, but the decision to end your life is permanent. 
              There are people who care about you and want to help. Reaching out for support 
              is a courageous step toward healing.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}