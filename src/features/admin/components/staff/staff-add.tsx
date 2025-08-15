"use client"

import type React from "react"
import { useState } from "react"
import {
  ArrowLeft,
  Edit,
  Upload,
  Trash2,
  Download,
  Eye,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Shield,
  Lock,
  Calendar,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useMutation, useQuery } from "@tanstack/react-query"
import { adminApi } from "../../services/adminApi"

interface Certificate {
  id: string
  name: string
  type: string
}

export function AddStaff() {
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null)
  const [certificates, setCertificates] = useState<Certificate[]>([
    { id: "1", name: "Certificate", type: "application/pdf" },
    { id: "2", name: "Certificate", type: "application/pdf" },
  ])
  const [certificateFiles, setCertificateFiles] = useState<File[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    address: "",
    qualification: "",
    nmc_number: "",
    password: "",
    confirmPassword: "",
    role: "",
    department: "",
    designation: "",
    hire_date: "",
    start_date: "09:00:00",
    end_date: "17:00:00",
    age: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setProfileImageFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const files = Array.from(e.dataTransfer.files)
    
    // Add files to certificateFiles state
    setCertificateFiles(prev => [...prev, ...files])
    
    // Update certificates UI state
    files.forEach((file) => {
      const newCertificate: Certificate = {
        id: Date.now().toString(),
        name: file.name,
        type: file.type,
      }
      setCertificates((prev) => [...prev, newCertificate])
    })
  }

  const handleFileBrowse = () => {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = '.pdf,.doc,.docx'
    fileInput.multiple = true
    
    fileInput.onchange = (e) => {
      const files = Array.from((e.target as HTMLInputElement).files || [])
      
      // Add files to certificateFiles state
      setCertificateFiles(prev => [...prev, ...files])
      
      // Update certificates UI state
      files.forEach((file) => {
        const newCertificate: Certificate = {
          id: Date.now().toString(),
          name: file.name,
          type: file.type,
        }
        setCertificates((prev) => [...prev, newCertificate])
      })
    }
    
    fileInput.click()
  }

  const removeCertificate = (id: string) => {
    // Find the certificate to remove
    const certToRemove = certificates.find(cert => cert.id === id)
    if (!certToRemove) return
    
    // Remove from certificates state
    setCertificates((prev) => prev.filter((cert) => cert.id !== id))
    
    // Remove matching file from certificateFiles if possible
    // This is a simple implementation; in a real app you might need more robust matching
    setCertificateFiles(prev => prev.filter(file => file.name !== certToRemove.name))
  }
  
  const handleSubmit = async () => {
    try {
      // Validate required fields
      if (!formData.username || !formData.password || !formData.phone_number || !formData.role || !formData.department) {
        alert('Please fill all required fields')
        return
      }
      
      // Debug file information
      console.log('Profile image file:', profileImageFile ? {
        name: profileImageFile.name,
        type: profileImageFile.type,
        size: profileImageFile.size
      } : 'No profile image');
      
      console.log('Certificate files:', certificateFiles.map(file => ({
        name: file.name,
        type: file.type,
        size: file.size
      })));
      
      // Validate password match
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match')
        return
      }
      
      setIsSubmitting(true)
      
      // Create FormData object for submission
      const formDataToSend = new FormData();
      
      // Append user data in the format expected by the backend
      formDataToSend.append('user[username]', formData.username);
      formDataToSend.append('user[email]', formData.email || "");
      formDataToSend.append('user[phone_number]', formData.phone_number);
      formDataToSend.append('user[designation]', formData.designation || "");
      formDataToSend.append('user[password]', formData.password);
      formDataToSend.append('user[role]', formData.role);
      if (formData.age) {
        formDataToSend.append('user[age]', formData.age);
      }
      
      // Append other staff data
      formDataToSend.append('qualification', formData.qualification || "");
      formDataToSend.append('nmc_number', formData.nmc_number || "");
      formDataToSend.append('hire_date', formData.hire_date);
      formDataToSend.append('start_date', formData.start_date);
      formDataToSend.append('end_date', formData.end_date);
      formDataToSend.append('department', formData.department);
      
      // Add profile picture if available (only once)
      if (profileImageFile) {
        formDataToSend.append('profile_picture', profileImageFile);
      }
      
      // Fix certificate array handling - the backend expects proper array format for certificates
      // Always append at least one certificate entry to ensure the field exists
      if (certificateFiles.length === 0) {
        // Append empty certificate array - this ensures the field exists even if empty
        formDataToSend.append('certificate', new Blob([], { type: 'application/octet-stream' }));
      } else {
        // When we have files, append each one using the correct field name 'certificate'
        // Most backends expect the same field name repeated for arrays
        certificateFiles.forEach((file) => {
          formDataToSend.append('certificate', file);
        });
      }
      
      // Log the structure of what we're sending
      console.log('Submitting data to backend with structure:', {
        user: {
          username: formData.username,
          email: formData.email || "",
          phone_number: formData.phone_number,
          designation: formData.designation || "",
          password: formData.password,
          role: parseInt(formData.role)
        },
        qualification: formData.qualification || "",
        nmc_number: formData.nmc_number || "",
        profile_picture: profileImageFile ? '[File object]' : null,
        hire_date: formData.hire_date,
        start_date: formData.start_date,
        end_date: formData.end_date,
        department: parseInt(formData.department),
        certificate: certificateFiles.length > 0 
          ? `[${certificateFiles.length} file(s)]` 
          : '[empty blob]',
        certificate_files: certificateFiles.map(file => file.name)
      });
      
      // Submit form using the mutation
      await createStaff(formDataToSend, {
        onSuccess: (data) => {
          console.log('Success response:', data);
          alert('Staff created successfully!')
          
          // Reset form
          setFormData({
            username: "",
            email: "",
            phone_number: "",
            address: "",
            qualification: "",
            nmc_number: "",
            password: "",
            confirmPassword: "",
            role: "",
            department: "",
            designation: "",
            hire_date: "",
            start_date: "09:00:00",
            end_date: "17:00:00",
            age: ""
          });
          setProfileImage(null);
          setProfileImageFile(null);
          setCertificates([]);
          setCertificateFiles([]);
        },
        onError: (error: any) => {
          console.error('Error creating staff:', error);
          let errorMessage = 'Failed to create staff. ';
          
          // Extract detailed error messages if available
          if (error.response && error.response.data) {
            const errorData = error.response.data;
            if (errorData.error) {
              if (typeof errorData.error === 'string') {
                errorMessage += errorData.error;
              } else {
                // Format nested error objects
                errorMessage += JSON.stringify(errorData.error, null, 2);
              }
            } else if (errorData.message) {
              errorMessage += errorData.message;
            }
          } else if (error.message) {
            errorMessage += error.message;
          }
          
          alert(errorMessage);
        }
      })
    } catch (error: any) {
      console.error('Error submitting form:', error)
      alert('An error occurred while submitting the form: ' + (error.message || JSON.stringify(error)))
    } finally {
      setIsSubmitting(false)
    }
  }

  //==================================================================================================
  const { data: rolesData } = useQuery({
    queryKey: ["roles"],
    queryFn: adminApi.getRolesFromBackend,
  });


  const { data: departmentsData } = useQuery({
    queryKey: ["departments"],
    queryFn: adminApi.getDepartmentsFromBackend,
  });


  const { mutate: createStaff } = useMutation({
    mutationFn: adminApi.createStaffFromBackend,
  });


  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" size="sm" className="gap-2 text-gray-600 hover:bg-gray-100">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button size="sm" className="gap-2 bg-red-500 hover:bg-red-600 text-white rounded">
          <Edit className="h-4 w-4" />
          Edit
        </Button>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 items-start">
          {/* Left Column */}
          <div className="space-y-4">
            <Label className="text-sm font-medium text-gray-700">PROFILE IMAGE</Label>
            <div className="relative w-[100%] h-52 bg-gray-200 rounded flex items-center justify-center">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="object-cover w-full h-full rounded" />
              ) : (
                <Upload className="h-8 w-8 text-gray-400" />
              )}
              <Button
                size="sm"
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-teal-600 hover:bg-teal-700 p-0"
                onClick={() => document.getElementById("profile-upload")?.click()}
              >
                <Edit className="h-4 w-4 text-white" />
              </Button>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
            <Button
              variant="outline"
              className="gap-2 text-blue-600 border-blue-200 hover:bg-blue-50 w-full"
              onClick={() => document.getElementById("profile-upload")?.click()}
              type="button"
            >
              <Upload className="h-4 w-4" />
              Upload Profile Image
            </Button>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm text-gray-700">
                <User className="h-4 w-4" />
                Role
              </Label>
              <Select onValueChange={(value) => handleSelectChange('role', value)}>
                <SelectTrigger className="rounded border-1 border-gray-300 bg-white w-full shadow-none">
                  <SelectValue placeholder="Choose Role" />
                </SelectTrigger>
                    <SelectContent>
                      {rolesData?.map((role: any) => (
                        <SelectItem key={role.id} value={role.id}>{role.name}</SelectItem>
                      ))}
                    </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm text-gray-700">
                <Shield className="h-4 w-4" />
                Department
              </Label>
              <Select onValueChange={(value) => handleSelectChange('department', value)}>
                <SelectTrigger className="rounded border-1 border-gray-300 bg-white w-full shadow-none">
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  {departmentsData?.map((department: any) => (
                    <SelectItem key={department.id} value={department.id}>{department.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm text-gray-700">
                <GraduationCap className="h-4 w-4" />
              </Label>
              <Input 
                name="designation" 
                className="rounded border-1 border-gray-300 bg-white shadow-none" 
                placeholder="Enter His/Her Designation" 
                value={formData.designation}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm text-gray-700">
                <Calendar className="h-4 w-4" />
                Hire Date
              </Label>
              <Input 
                name="hire_date"
                type="date" 
                className="rounded border-1 border-gray-300 bg-white shadow-none" 
                placeholder="Select Hire Date"
                value={formData.hire_date}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm text-gray-700">
                <Clock className="h-4 w-4" />
                Time Frame
              </Label>
              <div className="flex items-center gap-2">
                <Select 
                  defaultValue="09:00:00"
                  onValueChange={(value) => handleSelectChange('start_date', value)}
                >
                  <SelectTrigger className="rounded border-1 border-gray-300 bg-white w-28 shadow-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent >
                    <SelectItem value="08:00:00">8:00 AM</SelectItem>
                    <SelectItem value="09:00:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00:00">10:00 AM</SelectItem>
                    <SelectItem value="12:15:00">12:15 PM</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-500">to</span>
                <Select 
                  defaultValue="17:00:00"
                  onValueChange={(value) => handleSelectChange('end_date', value)}
                >
                  <SelectTrigger className="rounded border-1 border-gray-300 bg-white w-28 shadow-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="16:00:00">4:00 PM</SelectItem>
                    <SelectItem value="17:00:00">5:00 PM</SelectItem>
                    <SelectItem value="18:00:00">6:00 PM</SelectItem>
                    <SelectItem value="20:00:00">8:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <Label className="text-sm font-medium text-gray-700">EMPLOYEE DETAILS</Label>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm text-gray-700">
                  <User className="h-4 w-4" />
                  Name*
                </Label>
                <Input 
                  name="username"
                  className="rounded border-1 border-gray-300 bg-white w-full shadow-none" 
                  placeholder="Enter Name"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm text-gray-700">
                  <Mail className="h-4 w-4" />
                  Email
                </Label>
                <Input 
                  name="email"
                  type="email" 
                  className="rounded border-1 border-gray-300 bg-white w-full shadow-none" 
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm text-gray-700">
                  <Phone className="h-4 w-4" />
                  Phone*
                </Label>
                <Input 
                  name="phone_number"
                  className="rounded border-1 border-gray-300 bg-white w-full shadow-none" 
                  placeholder="Enter Phone Number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin className="h-4 w-4" />
                  Address
                </Label>
                <Textarea 
                  name="address"
                  className="rounded border-1 border-gray-300 bg-white w-full min-h-[80px] shadow-none" 
                  placeholder="Enter Address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm text-gray-700">
                  <GraduationCap className="h-4 w-4" />
                  Qualification
                </Label>
                <Input 
                  name="qualification"
                  className="rounded border-1 border-gray-300 bg-white w-full shadow-none" 
                  placeholder="Enter Qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm text-gray-700">
                  <Shield className="h-4 w-4" />
                  NMC Number
                </Label>
                <Input 
                  name="nmc_number"
                  className="rounded border-1 border-gray-300 bg-white w-full shadow-none" 
                  placeholder="Enter NMC Number"
                  value={formData.nmc_number}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm text-gray-700">
                  <User className="h-4 w-4" />
                  Age
                </Label>
                <Input 
                  name="age"
                  type="number"
                  className="rounded border-1 border-gray-300 bg-white w-full shadow-none" 
                  placeholder="Enter Age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm text-gray-700">
                  <Lock className="h-4 w-4" />
                  Password
                </Label>
                <Input 
                  name="password"
                  type="password" 
                  className="rounded border-1 border-gray-300 bg-white w-full shadow-none" 
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm text-gray-700">
                  <Lock className="h-4 w-4" />
                  Confirm Password
                </Label>
                <Input 
                  name="confirmPassword"
                  type="password" 
                  className="rounded border-1 border-gray-300 bg-white w-full shadow-none" 
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="space-y-4 w-full">
          <Label className="text-sm font-medium text-gray-700">Add Certificate</Label>
          <div className="space-y-2">
            {certificates.map((cert) => (
              <div key={cert.id} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">{cert.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                    <Trash2 className="h-4 w-4 text-red-500" onClick={() => removeCertificate(cert.id)} />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                    <Download className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                    <Eye className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`border-2 border-dashed rounded border-blue-200 p-4 text-center transition-colors ${
              dragActive ? "border-blue-400 bg-blue-50" : ""
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Drag and drop files here</p>
            <p className="text-sm text-gray-500">OR</p>
            <Button 
              variant="outline" 
              className="text-blue-600 border-blue-200 hover:bg-blue-50"
              onClick={handleFileBrowse}
              type="button"
            >
              Browse Files
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            size="sm"
            className="px-4 text-red-600 border-red-200 hover:bg-red-50"
            type="button"
          >
            Cancel
          </Button>
          <Button 
            size="sm" 
            className="px-4 bg-teal-600 hover:bg-teal-700"
            onClick={handleSubmit}
            disabled={isSubmitting}
            type="button"
          >
            {isSubmitting ? 'Creating...' : 'Create'}
          </Button>
        </div>
      </div>
    </div>
  )
}