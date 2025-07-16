import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  Shield, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Phone,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trauma-Informed Assessment',
      description: 'Comprehensive evaluation designed specifically for complex PTSD and relational trauma',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Specialized Therapy Modules',
      description: 'Evidence-based interventions for narcissistic abuse recovery and complex trauma healing',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Users,
      title: 'Peer Support Community',
      description: 'Connect with other survivors in a safe, moderated environment',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your healing journey with trauma-sensitive metrics and insights',
      color: 'bg-orange-50 text-orange-600'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'This platform helped me understand my trauma responses and develop healthy coping strategies.',
      rating: 5
    },
    {
      name: 'Alex R.',
      text: 'The narcissistic abuse recovery modules were exactly what I needed to start healing.',
      rating: 5
    },
    {
      name: 'Jordan K.',
      text: 'Finally found a space that truly understands complex PTSD. The community support is incredible.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-background py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              Trauma-Informed • Evidence-Based • Safe Space
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Healing from
              <span className="text-primary block">Complex Trauma</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A specialized digital therapy platform designed for survivors of complex PTSD, 
              narcissistic abuse, and relational trauma. Begin your healing journey in a safe, 
              supportive environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/assessment">
                  Start Your Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/resources">
                  Explore Resources
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Trauma-Informed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>24/7 Crisis Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Support for Your Healing Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines evidence-based therapy approaches with peer support 
              and specialized tools designed for complex trauma recovery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stories of Healing and Hope
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from survivors on their healing journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Begin Your Healing Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take the first step towards recovery with our trauma-informed assessment. 
                Your healing matters, and you deserve support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/assessment">
                    Start Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/crisis">
                    <Phone className="mr-2 h-5 w-5" />
                    Need Immediate Help?
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default HomePage