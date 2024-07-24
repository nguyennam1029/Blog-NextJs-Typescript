// components/EditProfile.tsx
"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";

export default function Page() {
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("Prefer not to say");

  //    const [loading, setLoading] = useState(false);

  //    const form = useForm<CreateProductBodyType>({
  //      resolver: zodResolver(),
  //      defaultValues: {
  //        name:  "",
  //        email: "",

  //      },
  //    });
  //   async function onSubmit(values) {

  //   }
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit profile</h1>
      <div className="flex items-center mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src="/images/user.jpg"
            alt="User Profile"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">nguyennamdev</h2>
          <h3 className="text-gray-500">Nguyễn Nam</h3>
        </div>
        <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg">
          Change photo
        </button>
      </div>
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="short_description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a short description here.."
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
       
        
          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Edit Profile
          </Button>
        </form>
      </Form> */}
      <div className="mb-4">
        <label className="block text-gray-700">Website</label>
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Website"
        />
        <p className="text-gray-500 text-sm mt-1">
          Editing your links is only available on mobile. Visit the Instagram
          app and edit your profile to change the websites in your bio.
        </p>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Bio"
          rows={3}
        />
        <p className="text-gray-500 text-sm mt-1">{bio.length} / 150</p>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="Prefer not to say">Prefer not to say</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <p className="text-gray-500 text-sm mt-1">
          This won’t be part of your public profile.
        </p>
      </div>
    </div>
  );
}
