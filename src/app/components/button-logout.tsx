'use client'

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import authManager from '@/lib/auth';

export default function ButtonLogout() {
  const router = useRouter()
  const handleLogout = async () => {
    try {
      const result:any = await authManager.logOut('/auth/logOut')
      console.log("🚀 ~ handleLogout ~ result:", result)
      router.push('/')
    } catch (error) {
     console.log("🚀 ~ handleLogout ~ error:", error)
     
    }
  }
  return (
    <Button size={'sm'} onClick={handleLogout}>
      Đăng xuất
    </Button>
  )
}