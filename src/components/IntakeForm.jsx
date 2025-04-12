import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function IntakeForm() {
  const [formData, setFormData] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(Math.min(100, (Object.keys(formData).length / 20) * 100));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newFormData = { ...formData, [name]: value };

    if (name === 'dob') {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      newFormData.age = age;
    }

    if (name === 'hearingDate') {
      const today = new Date();
      const hearingDate = new Date(value);
      const diffTime = hearingDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      newFormData.daysUntilHearing = diffDays;
    }

    if (name === 'vehicleValue' || name === 'bankBalance' || name === 'retirementValue' || name === 'otherPropertyValue') {
      const vehicle = parseFloat(newFormData.vehicleValue) || 0;
      const bank = parseFloat(newFormData.bankBalance) || 0;
      const retirement = parseFloat(newFormData.retirementValue) || 0;
      const property = parseFloat(newFormData.otherPropertyValue) || 0;
      newFormData.totalAssets = vehicle + bank + retirement + property;
    }

    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Social Security Disability Intake Form</h1>
      <Progress value={progress} className="mb-6" />
      <form onSubmit={handleSubmit}>
        <Accordion type="multiple" collapsible>
          {/* Accordion Sections */}
        </Accordion>
        <Button type="submit" className="w-full mt-6">
          Submit Application
        </Button>
      </form>
    </div>
  );
}