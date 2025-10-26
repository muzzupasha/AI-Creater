'use client'
import { api } from '@/convex/_generated/api'
import { useConvexMutation } from '@/hooks/use-convex-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import PostEditorHeader from './post-editor-header'
import PostEditorContent from './post-editor-content'
import PostEditorSettings from './post-editor-settings'
import { toast } from 'sonner'

// Validation schema for posts
const postsSchema = z.object({
   title: z.string().min(1, "Title is required").max(200, "Title too long"),
  content: z.string().min(1, "Content is required"),
  category: z.string().optional(),
  tags: z.array(z.string()).max(10, "Maximum 10 tags allowed"),
  featuredImage: z.string().optional(),
  scheduledFor: z.string().optional(),
})

// Main Post Editor Component
const PostEditor = ({  initialData = null,  mode = "create" }) => {

   const router = useRouter();
 
// State for modals and quill references
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageModalType, setImageModalType] = useState("featured");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [quillRef, setQuillRef] = useState(null);

 
  // Convex mutations for creating and updating posts
  const {mutate: createPost, isLoading: isCreateLoading } = useConvexMutation(api.posts.create);
  const {mutate: updatePost, isLoading: isUpdating} = useConvexMutation(api.posts.update);

  // Form setup with React Hook Form and Zod validation
  const form = useForm({
    resolver: zodResolver(postsSchema),
     defaultValues: {
      title: initialData?.title || "",
      content: initialData?.content || "",
      category: initialData?.category || "",
      tags: initialData?.tags || [],
      featuredImage: initialData?.featuredImage || "",
      scheduledFor: initialData?.scheduledFor
        ? new Date(initialData.scheduledFor).toISOString().slice(0, 16)
        : "",
    },
  });

  // Watch form values
  const { handleSubmit, watch, setValue } = form;
  const watchedValues = watch();

  // Auto-save for drafts
  useEffect(() => {
    if (!watchedValues.title && !watchedValues.content) return;

    const autoSave = setInterval(() => {
      if (watchedValues.title || watchedValues.content) {
        if (mode === "create") handleSave(true); // Silent save
      }
    }, 30000);

    return () => clearInterval(autoSave);
  }, [watchedValues.title, watchedValues.content]);

  // Submit handler
  const onSubmit = async (data, action, silent = false) => {
      try {
        const postData = {
        title: data.title,
        content: data.content,
        category: data.category || undefined,
        tags: data.tags,
        featuredImage: data.featuredImage || undefined,
        status: action === "publish" ? "published" : "draft",
        scheduledFor: data.scheduledFor
          ? new Date(data.scheduledFor).getTime()
          : undefined,
        };
       
         let resultId;
      
      // Determine whether to create or update
      if (mode === "edit" && initialData?._id) {
      // Always use update for edit mode
        resultId = await updatePost({
          id: initialData._id,
          ...postData,
        });
      } else if (initialData?._id && action === "draft") {
        // If we have existing draft data, update it
        resultId = await updatePost({
          id: initialData._id,
          ...postData,
        });
      } else {
        // Create new post (will auto-update existing draft if needed)
        resultId = await createPost(postData);
      }
      
      // Show success message if not silent

      if (!silent) {
        const message =
          action === "publish" ? "Post published!" : "Draft saved!";
          toast.success(message);
        if (action === "publish") router.push("/dashboard/posts");
      }

      return resultId;

      } catch (error) {
          if (!silent) toast.error(error.message || "Failed to save post");
          throw error;
      }
  }
  
  // Handlers for save, publish, and schedule actions.....

  // Save handler 1
  const handleSave=(silent = false)=>{
    handleSubmit((data) => onSubmit(data, "draft", silent))();
  };
  
  // Publish handler 2
   const handlePublish = () => {
    handleSubmit((data) => onSubmit(data, "publish"))();
  };
   
  // Schedule handler 3
  const handleSchedule = () => {
    if (!watchedValues.scheduledFor) {
      toast.error("Please select a date and time to schedule");
      return;
    }
    handleSubmit((data) => onSubmit(data, "schedule"))();
  };
 
  // Image selection handler 4
  const handleImageSelect = (imageData) => {};

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      
       <PostEditorHeader
        mode={mode}
        initialData={initialData}
        isPublishing={isCreateLoading || isUpdating}
        onSave={handleSave}
        onPublish={handlePublish}
        onSchedule={handleSchedule}
        onSettingsOpen={() => setIsSettingsOpen(true)}
        onBack={() => router.push("/dashboard")}
      />

      {/* Editor  */}
      
      <PostEditorContent
      form={form}
        setQuillRef={setQuillRef}
        onImageUpload={(type) => {
        setImageModalType(type);
        setIsImageModalOpen(true);
        
        }}
      />


      {/* Setting dialog  */}

        <PostEditorSettings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        form={form}
        mode={mode}
      />

      {/* Image Upload dialog  */}


    </div>
  )
}

export default PostEditor