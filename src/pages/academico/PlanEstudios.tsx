import { useState } from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import MallaFlow from '../../components/academico/MallaFlow';
import CurriculumVersionSwitch from '../../components/academico/CurriculumVersionSwitch';
import EnConstruccion from '../../components/layout/EnConstruccion';
import { CURRICULUM_DATA, PREREQUISITES_EDGES } from '@profile/content/malla';
import { CURRICULUM_2018_DATA, PREREQUISITES_2018_EDGES } from '@profile/content/malla2018';

type PlanVersion = 'Vigente' | '2018' | '2027';

const baseUrl = import.meta.env.BASE_URL;

export default function PlanEstudios() {
  const [planVersion, setPlanVersion] = useState<PlanVersion>('Vigente');
  const isPreviousPlan = planVersion === '2018';

  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Plan de **Estudios**"
          center
          subtitle="Consulta el currículo vigente o el Currículo 2018. Cada curso muestra sus créditos, horas y prerrequisitos oficiales."
        />

        <div className="mt-8 flex justify-center">
          <CurriculumVersionSwitch
            value={planVersion}
            versions={['Vigente', '2018', '2027']}
            onChange={(version) => setPlanVersion(version as PlanVersion)}
          />
        </div>

        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600" aria-live="polite">
          {planVersion === '2027'
            ? 'La plantilla ya contempla el próximo plan curricular; su contenido se publicará cuando sea aprobado.'
            : isPreviousPlan
            ? 'Plan anterior aprobado en 2018, con adenda: 10 ciclos y 216 créditos. Los talleres electivos de los ciclos I y II agrupan las alternativas indicadas en el documento oficial.'
            : 'Plan actualmente publicado por la Escuela. Selecciona un curso del mapa para consultar sus detalles.'}
        </p>

        <div className="mt-10">
          {planVersion === '2027' ? (
            <EnConstruccion titulo="Malla **2027**" descripcion="La malla curricular 2027 estará disponible próximamente." />
          ) : <MallaFlow
            key={planVersion}
            curriculumData={isPreviousPlan ? CURRICULUM_2018_DATA : CURRICULUM_DATA}
            prerequisiteEdges={isPreviousPlan ? PREREQUISITES_2018_EDGES : PREREQUISITES_EDGES}
            planLabel={isPreviousPlan ? 'Currículo 2018' : 'Currículo vigente'}
            officialStats={isPreviousPlan ? { cycles: 10, courses: 63, credits: 216 } : undefined}
            downloads={isPreviousPlan
              ? [
                  { label: 'Descargar Malla 2018', href: `${baseUrl}Malla_Curricular_2018_con_adenda.pdf` },
                  { label: 'Descargar Currículo 2018', href: `${baseUrl}Curriculo_Ciencia_Politica_2018_con_adenda.pdf` },
                ]
              : [
                  { label: 'Descargar Plan de Estudios', href: `${baseUrl}Plan_de_Estudios_2025.pdf` },
                ]}
          />}
        </div>
      </div>
    </div>
  );
}
