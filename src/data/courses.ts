export interface InteractiveElement {
  type: 'video' | 'timeline' | 'battlemap';
  videoId?: string;
  videoTitle?: { es: string; en: string };
  timelineData?: import('@/components/InteractiveTimeline').TimelineEvent[];
  timelineTitle?: { es: string; en: string };
  battleMapData?: {
    title: { es: string; en: string };
    movements: {
      id: string;
      label: { es: string; en: string };
      description: { es: string; en: string };
      path: string;
      color: string;
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      waypoints?: { x: number; y: number }[];
    }[];
    locations: {
      id: string;
      label: { es: string; en: string };
      x: number;
      y: number;
      type: 'city' | 'battlefield' | 'camp';
    }[];
  };
}

export interface Course {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  image?: string;
  modules: Module[];
}

export interface Module {
  id: string;
  title: { es: string; en: string };
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: { es: string; en: string };
  type: 'text' | 'pdf' | 'video';
  content: { es: string; en: string };
  videoUrl?: string;
  interactiveElements?: InteractiveElement[];
}

export interface QuizQuestion {
  id: string;
  question: { es: string; en: string };
  options: { es: string[]; en: string[] };
  correctIndex: number;
}

export const sampleCourses: Course[] = [
  {
    id: 'historia-militar',
    title: { es: 'Historia Militar de Venezuela', en: 'Military History of Venezuela' },
    description: {
      es: 'Estudio de las batallas y campañas de la independencia venezolana, figuras militares clave y su impacto en la formación de la nación.',
      en: 'Study of the battles and campaigns of Venezuelan independence, key military figures and their impact on nation building.',
    },
    modules: [
      {
        id: 'batallas-independencia',
        title: { es: 'Batallas de la Independencia', en: 'Battles of Independence' },
        lessons: [
          {
            id: 'batalla-carabobo',
            title: { es: 'La Batalla de Carabobo', en: 'The Battle of Carabobo' },
            type: 'text',
            content: {
              es: `# La Batalla de Carabobo\n\nLa Batalla de Carabobo, librada el **24 de junio de 1821**, fue el enfrentamiento bélico más importante de la Guerra de Independencia de Venezuela. Tuvo lugar en el Campo de Carabobo, cerca de la ciudad de Valencia.\n\n## Contexto Histórico\n\nTras el fracaso de la Primera y Segunda República, Simón Bolívar reorganizó las fuerzas patriotas. El Congreso de Angostura de 1819 había establecido las bases de la Gran Colombia, y la victoria en Carabobo era fundamental para consolidar la independencia.\n\n## Desarrollo de la Batalla\n\nEl ejército patriota, comandado por el General Simón Bolívar, contaba con aproximadamente **6.500 hombres** organizados en tres divisiones:\n\n- **Primera División**: Comandada por José Antonio Páez\n- **Segunda División**: Comandada por Manuel Cedeño\n- **Tercera División**: Comandada por Ambrosio Plaza\n\nLa estrategia de Bolívar consistió en un movimiento envolvente por el flanco derecho del ejército realista, comandado por el Mariscal de Campo Miguel de la Torre.\n\n## Resultado\n\nLa victoria patriota en Carabobo selló prácticamente la independencia de Venezuela, aunque la rendición formal no se produjo hasta 1823 con la Batalla Naval del Lago de Maracaibo.`,
              en: `# The Battle of Carabobo\n\nThe Battle of Carabobo, fought on **June 24, 1821**, was the most important military engagement of the Venezuelan War of Independence. It took place at the Field of Carabobo, near the city of Valencia.\n\n## Historical Context\n\nAfter the failure of the First and Second Republic, Simón Bolívar reorganized the patriot forces. The Congress of Angostura in 1819 had established the foundations of Gran Colombia, and victory at Carabobo was fundamental to consolidating independence.\n\n## Battle Development\n\nThe patriot army, commanded by General Simón Bolívar, had approximately **6,500 men** organized in three divisions:\n\n- **First Division**: Commanded by José Antonio Páez\n- **Second Division**: Commanded by Manuel Cedeño\n- **Third Division**: Commanded by Ambrosio Plaza\n\nBolívar's strategy consisted of an enveloping movement on the right flank of the royalist army, commanded by Field Marshal Miguel de la Torre.\n\n## Result\n\nThe patriot victory at Carabobo practically sealed Venezuela's independence, although formal surrender did not occur until 1823 with the Naval Battle of Lake Maracaibo.`,
            },
            interactiveElements: [
              {
                type: 'video',
                videoId: 'qh3FYJxfN_s',
                videoTitle: {
                  es: '📹 Documental: La Batalla de Carabobo',
                  en: '📹 Documentary: The Battle of Carabobo',
                },
              },
              {
                type: 'battlemap',
                battleMapData: {
                  title: {
                    es: '🗺️ Mapa Táctico: Batalla de Carabobo',
                    en: '🗺️ Tactical Map: Battle of Carabobo',
                  },
                  movements: [
                    {
                      id: 'paez',
                      label: { es: '1ra División — Páez', en: '1st Division — Páez' },
                      description: {
                        es: 'Movimiento envolvente por el flanco derecho a través de la quebrada, sorprendiendo a las fuerzas realistas.',
                        en: 'Flanking movement through the right side via the ravine, surprising royalist forces.',
                      },
                      path: 'M 80 320 Q 150 250 200 180 Q 250 130 320 120',
                      color: '#2563eb',
                      startX: 80, startY: 320,
                      endX: 320, endY: 120,
                    },
                    {
                      id: 'cedeno',
                      label: { es: '2da División — Cedeño', en: '2nd Division — Cedeño' },
                      description: {
                        es: 'Avance por el centro apoyando el movimiento de la primera división.',
                        en: 'Central advance supporting the first division\'s movement.',
                      },
                      path: 'M 100 350 Q 200 280 300 200 Q 350 170 380 150',
                      color: '#16a34a',
                      startX: 100, startY: 350,
                      endX: 380, endY: 150,
                    },
                    {
                      id: 'plaza',
                      label: { es: '3ra División — Plaza', en: '3rd Division — Plaza' },
                      description: {
                        es: 'Reserva que avanzó por el camino principal para fijar al enemigo.',
                        en: 'Reserve that advanced on the main road to fix the enemy.',
                      },
                      path: 'M 150 370 Q 250 330 350 280 Q 420 240 450 200',
                      color: '#dc2626',
                      startX: 150, startY: 370,
                      endX: 450, endY: 200,
                    },
                  ],
                  locations: [
                    { id: 'valencia', label: { es: 'Valencia', en: 'Valencia' }, x: 500, y: 100, type: 'city' },
                    { id: 'carabobo', label: { es: 'Campo de Carabobo', en: 'Carabobo Field' }, x: 320, y: 180, type: 'battlefield' },
                    { id: 'patriotas', label: { es: 'Campamento Patriota', en: 'Patriot Camp' }, x: 80, y: 350, type: 'camp' },
                    { id: 'realistas', label: { es: 'Posición Realista', en: 'Royalist Position' }, x: 400, y: 140, type: 'camp' },
                  ],
                },
              },
            ],
          },
          {
            id: 'batalla-boyaca',
            title: { es: 'La Batalla de Boyacá', en: 'The Battle of Boyacá' },
            type: 'text',
            content: {
              es: `# La Batalla de Boyacá\n\nLibrada el **7 de agosto de 1819**, la Batalla de Boyacá fue decisiva para la independencia de la Nueva Granada (actual Colombia) y fortaleció el proyecto de la Gran Colombia.\n\n## La Campaña Libertadora\n\nBolívar emprendió una audaz campaña cruzando los Andes desde los Llanos venezolanos. La travesía por el Páramo de Pisba fue una de las hazañas más notables de la historia militar.\n\n## El Combate\n\nEl ejército patriota interceptó a las fuerzas realistas de José María Barreiro en el puente sobre el río Boyacá. La batalla duró apenas **dos horas**, resultando en una victoria decisiva.\n\n## Consecuencias\n\nLa victoria en Boyacá permitió a Bolívar entrar triunfante en Bogotá y consolidar la independencia de la Nueva Granada, paso crucial para la creación de la Gran Colombia.`,
              en: `# The Battle of Boyacá\n\nFought on **August 7, 1819**, the Battle of Boyacá was decisive for the independence of New Granada (present-day Colombia) and strengthened the project of Gran Colombia.\n\n## The Liberating Campaign\n\nBolívar undertook a bold campaign crossing the Andes from the Venezuelan Llanos. The crossing of the Páramo de Pisba was one of the most notable feats in military history.\n\n## The Combat\n\nThe patriot army intercepted José María Barreiro's royalist forces at the bridge over the Boyacá River. The battle lasted barely **two hours**, resulting in a decisive victory.\n\n## Consequences\n\nThe victory at Boyacá allowed Bolívar to enter Bogotá triumphantly and consolidate the independence of New Granada, a crucial step toward the creation of Gran Colombia.`,
            },
            interactiveElements: [
              {
                type: 'video',
                videoId: 'O9L9sQ6aBJM',
                videoTitle: {
                  es: '📹 La Campaña Libertadora y Boyacá',
                  en: '📹 The Liberating Campaign and Boyacá',
                },
              },
              {
                type: 'timeline',
                timelineTitle: {
                  es: '📅 Cronología: Campaña Libertadora de 1819',
                  en: '📅 Timeline: Liberating Campaign of 1819',
                },
                timelineData: [
                  {
                    year: 'May 1819',
                    title: { es: 'Inicio de la Campaña', en: 'Campaign Begins' },
                    icon: '🚩',
                    description: {
                      es: 'Bolívar parte desde los Llanos venezolanos con aproximadamente 2,500 hombres, incluyendo la legión británica. Se reúnen en el pueblo de Mantecal para iniciar la marcha.',
                      en: 'Bolívar departs from the Venezuelan Llanos with approximately 2,500 men, including the British Legion. They gather in the town of Mantecal to begin the march.',
                    },
                  },
                  {
                    year: '4 Jun 1819',
                    title: { es: 'Cruce del Río Arauca', en: 'Crossing of the Arauca River' },
                    icon: '🥾',
                    description: {
                      es: 'El ejército cruza el caudaloso río Arauca bajo lluvias torrenciales. Las corrientes arrastran suministros y caballos. Es el primer gran obstáculo de la campaña.',
                      en: 'The army crosses the swollen Arauca River under torrential rains. Currents sweep away supplies and horses. It is the first major obstacle of the campaign.',
                    },
                  },
                  {
                    year: 'Jun 1819',
                    title: { es: 'Cruce del Páramo de Pisba', en: 'Crossing of Páramo de Pisba' },
                    icon: '🏔️',
                    description: {
                      es: 'La travesía de los Andes a más de 4,000 metros de altitud. Muchos soldados mueren de frío y altitud. Una hazaña considerada imposible por los realistas.',
                      en: 'The crossing of the Andes at over 4,000 meters altitude. Many soldiers die from cold and altitude. A feat considered impossible by the royalists.',
                    },
                  },
                  {
                    year: '12 Jul 1819',
                    title: { es: 'Llegada a Socha', en: 'Arrival at Socha' },
                    icon: '📍',
                    description: {
                      es: 'El ejército, diezmado y exhausto, llega a Socha donde los habitantes los reciben y proveen alimentos, ropa y caballos frescos. Es un punto de inflexión moral.',
                      en: 'The decimated and exhausted army arrives at Socha where inhabitants welcome them and provide food, clothing, and fresh horses. A moral turning point.',
                    },
                  },
                  {
                    year: '25 Jul 1819',
                    title: { es: 'Batalla del Pantano de Vargas', en: 'Battle of Pantano de Vargas' },
                    icon: '⚔️',
                    description: {
                      es: 'Victoria patriota decisiva gracias a la carga de caballería del Coronel Rondón. Abrió el camino hacia Tunja y Bogotá.',
                      en: 'Decisive patriot victory thanks to Colonel Rondón\'s cavalry charge. Opened the path to Tunja and Bogotá.',
                    },
                  },
                  {
                    year: '5 Ago 1819',
                    title: { es: 'Toma de Tunja', en: 'Capture of Tunja' },
                    icon: '🛡️',
                    description: {
                      es: 'Bolívar captura Tunja, cortando las líneas de suministro y comunicación de Barreiro con Bogotá. Posición estratégica clave.',
                      en: 'Bolívar captures Tunja, cutting Barreiro\'s supply and communication lines with Bogotá. Key strategic position.',
                    },
                  },
                  {
                    year: '7 Ago 1819',
                    title: { es: 'Batalla de Boyacá', en: 'Battle of Boyacá' },
                    icon: '⭐',
                    description: {
                      es: 'Victoria decisiva en el puente sobre el río Boyacá. Barreiro y 1,600 realistas son capturados. La batalla duró solo 2 horas. Sello de la independencia de Nueva Granada.',
                      en: 'Decisive victory at the bridge over the Boyacá River. Barreiro and 1,600 royalists are captured. The battle lasted only 2 hours. Seal of New Granada\'s independence.',
                    },
                  },
                  {
                    year: '10 Ago 1819',
                    title: { es: 'Entrada triunfal en Bogotá', en: 'Triumphal entry into Bogotá' },
                    icon: '🚩',
                    description: {
                      es: 'Bolívar entra en la capital como libertador. El virrey Sámano huye con el tesoro real. La Nueva Granada es libre y se consolida el sueño de la Gran Colombia.',
                      en: 'Bolívar enters the capital as liberator. Viceroy Sámano flees with the royal treasury. New Granada is free and the dream of Gran Colombia is consolidated.',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'leyes-reglamentos',
    title: { es: 'Leyes y Reglamentos Militares', en: 'Military Laws and Regulations' },
    description: {
      es: 'Estudio de la Ley Orgánica de la Fuerza Armada Nacional Bolivariana y normativas relacionadas con la defensa nacional.',
      en: 'Study of the Organic Law of the Bolivarian National Armed Forces and regulations related to national defense.',
    },
    modules: [
      {
        id: 'ley-organica-fanb',
        title: { es: 'Ley Orgánica de la FANB', en: 'FANB Organic Law' },
        lessons: [
          {
            id: 'estructura-fanb',
            title: { es: 'Estructura de la FANB', en: 'Structure of the FANB' },
            type: 'text',
            content: {
              es: `# Estructura de la Fuerza Armada Nacional Bolivariana\n\nLa **Fuerza Armada Nacional Bolivariana (FANB)** es la institución encargada de la defensa integral de la nación. Su organización está establecida en la Ley Orgánica de la Fuerza Armada Nacional Bolivariana.\n\n## Componentes\n\nLa FANB está integrada por cuatro componentes:\n\n1. **Ejército Nacional Bolivariano** — Defensa terrestre\n2. **Armada Nacional Bolivariana** — Defensa naval y costera\n3. **Aviación Militar Bolivariana** — Defensa aérea\n4. **Guardia Nacional Bolivariana** — Orden interno y seguridad ciudadana\n\n## Milicia Nacional Bolivariana\n\nAdemás de los cuatro componentes, existe la **Milicia Nacional Bolivariana**, cuerpo especial integrado por ciudadanos que participan voluntariamente en la defensa integral de la nación.\n\n## Principios Fundamentales\n\n- Obediencia y subordinación\n- Disciplina militar\n- No deliberancia\n- Profesionalismo`,
              en: `# Structure of the Bolivarian National Armed Forces\n\nThe **Bolivarian National Armed Forces (FANB)** is the institution responsible for the comprehensive defense of the nation. Its organization is established in the Organic Law of the Bolivarian National Armed Forces.\n\n## Components\n\nThe FANB is composed of four components:\n\n1. **Bolivarian National Army** — Land defense\n2. **Bolivarian National Navy** — Naval and coastal defense\n3. **Bolivarian Military Aviation** — Air defense\n4. **Bolivarian National Guard** — Internal order and citizen security\n\n## Bolivarian National Militia\n\nIn addition to the four components, there is the **Bolivarian National Militia**, a special body made up of citizens who voluntarily participate in the comprehensive defense of the nation.\n\n## Fundamental Principles\n\n- Obedience and subordination\n- Military discipline\n- Non-deliberation\n- Professionalism`,
            },
          },
        ],
      },
    ],
  },
  {
    id: 'orden-cerrado',
    title: { es: 'Orden Cerrado', en: 'Close Order Drill' },
    description: {
      es: 'Fundamentos teóricos del orden cerrado, voces de mando, formaciones y movimientos a pie firme y sobre la marcha.',
      en: 'Theoretical foundations of close order drill, commands, formations, and movements at halt and on the march.',
    },
    modules: [
      {
        id: 'fundamentos',
        title: { es: 'Fundamentos del Orden Cerrado', en: 'Close Order Drill Fundamentals' },
        lessons: [
          {
            id: 'voces-de-mando',
            title: { es: 'Voces de Mando', en: 'Commands' },
            type: 'text',
            content: {
              es: `# Voces de Mando en el Orden Cerrado\n\nLas voces de mando son las órdenes verbales dadas por un superior para la ejecución de movimientos militares. Su correcta emisión y comprensión es fundamental para la disciplina y coordinación.\n\n## Clasificación de las Voces de Mando\n\n### 1. Voz Preventiva\nAlerta al ejecutante sobre el movimiento que va a realizar. Ejemplo: **"Atención..."**\n\n### 2. Voz Ejecutiva\nOrdena la ejecución inmediata del movimiento. Ejemplo: **"...¡Fir!"**\n\n## Voces de Mando Fundamentales\n\n| Voz de Mando | Descripción |\n|---|---|\n| ¡Atención... Fir! | Posición fundamental |\n| ¡A dis... cansó! | Posición de descanso |\n| ¡Flanco derecho... Der! | Giro de 90° a la derecha |\n| ¡Flanco izquierdo... Izq! | Giro de 90° a la izquierda |\n| ¡Media vuelta... Ar! | Giro de 180° |\n| ¡De frente... Mar! | Inicio de la marcha |\n| ¡Pelotón... Alto! | Detener la marcha |\n\n## Posición Fundamental (Firmes)\n\n- Talones unidos formando un ángulo de 45°\n- Piernas rectas sin rigidez excesiva\n- Cuerpo erguido, pecho afuera\n- Brazos a los costados, manos semicerradas\n- Vista al frente, mentón recogido`,
              en: `# Commands in Close Order Drill\n\nCommands are verbal orders given by a superior for the execution of military movements. Their correct delivery and understanding is fundamental for discipline and coordination.\n\n## Classification of Commands\n\n### 1. Preparatory Command\nAlerts the executor about the movement to be performed. Example: **"Attention..."**\n\n### 2. Command of Execution\nOrders the immediate execution of the movement. Example: **"...Halt!"**\n\n## Fundamental Commands\n\n| Command | Description |\n|---|---|\n| Attention! | Fundamental position |\n| At ease! | Rest position |\n| Right face! | 90° turn to the right |\n| Left face! | 90° turn to the left |\n| About face! | 180° turn |\n| Forward march! | Begin marching |\n| Platoon halt! | Stop marching |\n\n## Position of Attention\n\n- Heels together forming a 45° angle\n- Legs straight without excessive rigidity\n- Body erect, chest out\n- Arms at sides, hands semi-closed\n- Eyes front, chin tucked`,
            },
          },
        ],
      },
    ],
  },
];
