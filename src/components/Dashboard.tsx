"use client"

import { Card, Grid, Title, Text, Badge, Metric, Flex, ProgressBar } from "@tremor/react"
import { Session } from "next-auth"

const services = [
  { name: "Coolify", url: "https://coolify.appexx.me", icon: "⚙️" },
  { name: "n8n", url: "https://n8n.appexx.me", icon: "🔄" },
  { name: "Portainer", url: "https://portainer.appexx.me", icon: "🐳" },
  { name: "Infisical", url: "https://infisical.appexx.me", icon: "🔐" },
  { name: "Authentik", url: "https://authentik.appexx.me", icon: "🛡️" },
  { name: "Uptime Kuma", url: "https://uptime.appexx.me", icon: "📊" },
  { name: "AI Studio", url: "https://ai.appexx.me", icon: "🤖" },
  { name: "Listmonk", url: "https://listmonk.appexx.me", icon: "📧" },
  { name: "NocoDB", url: "https://nocodb.appexx.me", icon: "🗄️" },
  { name: "Metabase", url: "https://metabase.appexx.me", icon: "📈" },
  { name: "Dify", url: "https://dify.appexx.me", icon: "🧠" },
  { name: "Ghost", url: "https://ghost.appexx.me", icon: "👻" },
  { name: "LiteLLM", url: "https://litellm.appexx.me", icon: "💬" },
  { name: "Langfuse", url: "https://langfuse.appexx.me", icon: "🔭" },
  { name: "Chatwoot", url: "https://chatwoot.appexx.me", icon: "💬" },
  { name: "Cal.com", url: "https://cal.appexx.me", icon: "📅" },
]

export default function Dashboard({ session }: { session: Session }) {
  return (
    <main className="min-h-screen bg-gray-950 p-6">
      {/* Header */}
      <Flex className="mb-8">
        <div>
          <Title className="text-white text-2xl font-bold">Appexx Infrastructure</Title>
          <Text className="text-gray-400">Paradigm合同会社 · Self-hosted Stack</Text>
        </div>
        <div className="flex items-center gap-3">
          <Text className="text-gray-400 text-sm">{session.user?.email}</Text>
          
            href="/api/auth/signout"
            className="text-xs text-gray-500 hover:text-white border border-gray-700 rounded px-3 py-1 transition"
          >
            Sign out
          </a>
        </div>
      </Flex>

      {/* Server Stats */}
      <Grid numItemsMd={3} className="gap-4 mb-6">
        <Card className="bg-gray-900 border-gray-800">
          <Text className="text-gray-400">Server</Text>
          <Metric className="text-white">appexx-prod-01</Metric>
          <Text className="text-gray-500 text-sm mt-1">DigitalOcean · 8GB RAM · 4vCPU</Text>
          <Badge color="green" className="mt-2">Online</Badge>
        </Card>
        <Card className="bg-gray-900 border-gray-800">
          <Text className="text-gray-400">Domain</Text>
          <Metric className="text-white">appexx.me</Metric>
          <Text className="text-gray-500 text-sm mt-1">Cloudflare · Namecheap</Text>
          <Badge color="green" className="mt-2">Active</Badge>
        </Card>
        <Card className="bg-gray-900 border-gray-800">
          <Text className="text-gray-400">Services</Text>
          <Metric className="text-white">{services.length}</Metric>
          <Text className="text-gray-500 text-sm mt-1">Self-hosted via Coolify</Text>
          <Badge color="blue" className="mt-2">Running</Badge>
        </Card>
      </Grid>

      {/* Services Grid */}
      <Title className="text-white mb-4">Services</Title>
      <Grid numItemsMd={4} className="gap-3">
        {services.map((service) => (
          
            key={service.name}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="bg-gray-900 border-gray-800 hover:border-indigo-500 hover:bg-gray-800 transition cursor-pointer">
              <Flex>
                <div>
                  <span className="text-2xl">{service.icon}</span>
                  <Text className="text-white font-medium mt-1">{service.name}</Text>
                  <Text className="text-gray-500 text-xs truncate">{service.url}</Text>
                </div>
                <Badge color="green" size="xs">●</Badge>
              </Flex>
            </Card>
          </a>
        ))}
      </Grid>

      {/* Footer */}
      <div className="mt-8 text-center">
        <Text className="text-gray-600 text-xs">
          Appexx Infrastructure Dashboard · Paradigm合同会社 · {new Date().getFullYear()}
        </Text>
      </div>
    </main>
  )
}