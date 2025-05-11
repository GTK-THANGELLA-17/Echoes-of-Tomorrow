
import React from 'react';
import Layout from '@/components/Layout';
import CreateCapsuleForm from '@/components/CreateCapsuleForm';

const CreatePage = () => {
  return (
    <Layout>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Create New Time Capsule</h1>
        <p className="text-muted-foreground mt-2">
          Set a message or link to be revealed at a specific time
        </p>
      </div>
      
      <CreateCapsuleForm />
    </Layout>
  );
};

export default CreatePage;
