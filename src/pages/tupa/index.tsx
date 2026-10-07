import React from 'react';
import SectionLayout from '../../components/layout/SectionLayout';
import { FileText } from 'lucide-react';
import { tupaInfo } from '@profile/content/tupa';

export default function TupaIndex() {
  return (
    <SectionLayout
      title="TUPA UNT"
      subtitle="Texto Único de Procedimientos Administrativos de la Universidad Nacional de Trujillo."
      icon={FileText}
      basePath="/tupa"
      breadcrumbs={[{ label: 'TUPA' }]}
    />
  );
}
