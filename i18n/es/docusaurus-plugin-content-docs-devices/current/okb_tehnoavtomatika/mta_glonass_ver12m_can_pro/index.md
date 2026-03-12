---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_pro
id: mta_glonass_ver12m_can_pro
sidebar_label: MTA-Glonass (ver.12M-CAN-PRO)
sidebar_class_name: menu_item_tracker
---
# OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO)

![MTA-Glonass (ver.12M-CAN-PRO)](./tracker.jpg)

El MTA-Glonass \(ver.12M-CAN-PRO\) es un terminal profesional de monitoreo de vehículos diseñado para un seguimiento satelital y telemática confiables. Construido para la gestión de flotas y telemetría de vehículos, este dispositivo tipo rastreador GPS compatible con Plaspy ofrece posicionamiento GNSS de alta sensibilidad y comunicaciones multicanal \(GPRS, SMS y canal dedicado de DATA\) para que centros de despacho y usuarios de Plaspy mantengan seguimiento en tiempo real, registro de eventos y diagnósticos remotos con un mínimo esfuerzo de integración.

Compacto y robusto para instalación en vehículos, el MTA-Glonass \(ver.12M-CAN-PRO\) combina integración con bus CAN, entradas de pulso y analógicas, y una interfaz de salida y temperatura opcional para soportar el monitoreo de combustible, telemetría de sensores y flujos de trabajo anti-robo. Cuando se empareja con Plaspy, el terminal ofrece una solución llave en mano para operadores de flotas que requieren posicionamiento preciso, datos de vehículos derivados del CAN y comunicaciones fiables a través de redes celulares habituales.

## Aspectos Destacados

- Rastreador de vehículos compatible con Plaspy con receptor GNSS de alta sensibilidad de 50 canales para posicionamiento satelital preciso y seguimiento en tiempo real ágil.
- Comunicaciones multicanal: conectividad GSM 900/1800 con GPRS, SMS y un canal DATA dedicado para asegurar una telemetría fiable de subida y bajada.
- Integración directa con bus CAN para telemetría del motor, del encendido y de la red del vehículo — ideal para la gestión de flotas y diagnósticos remotos.
- Monitoreo de combustible y soporte para sensor de pulso mediante entrada de contacto seco \(activación negativa\) y un ADC de propósito general para telemetría de sensores analógicos.
- Batería de respaldo recargable integrada \(hasta 600 mAh\) con al menos 6 horas de autonomía en modo de espera para mantener el seguimiento y el almacenamiento de eventos durante una pérdida de energía.
- Modos de bajo consumo \(activo / en espera / reposo\) para reducir la carga sobre los sistemas del vehículo y prolongar la operación con batería.
- Registro de eventos rico \(16.000–125.000 registros, dependiendo de la memoria\); hasta 64 eventos internos/externos configurables para trazabilidad, alertas y flujos de trabajo anti-robo.

## Cómo Funciona con Plaspy

El MTA-Glonass \(ver.12M-CAN-PRO\) transmite la posición GNSS y la telemetría del vehículo a Plaspy a través de GPRS, canal DATA o SMS. Una vez conectado, Plaspy recibe actualizaciones de ubicación, parámetros derivados del CAN y eventos desencadenados por entradas para ofrecer seguimiento en tiempo real, alertas personalizables e informes históricos. El almacenamiento interno de eventos de la unidad garantiza que no se pierdan datos si la conectividad celular no está disponible temporalmente; los registros almacenados se envían a Plaspy cuando se restablece la conexión.

- Actualizaciones en tiempo real de ubicación y telemetría enviadas a Plaspy a través del canal GPRS/DATA para paneles de seguimiento en vivo.
- El estado de encendido y del motor está disponible mediante la integración con el bus CAN para una detección precisa del inicio/detención del viaje y del ralentí.
- Monitoreo de combustible es compatible con entradas de pulso/frecuencia y ADC analógico para sensores de nivel y medidores de caudal; Plaspy puede calcular el consumo y detectar anomalías.
- El inmovilizador remoto o acciones de control pueden implementarse mediante la salida opcional de colector abierto \(sujeto a instalación y configuración\), habilitando flujos de trabajo anti-robo a través de Plaspy.
- Telemetría de temperatura mediante la entrada 1-Wire opcional, que puede capturarse y reportarse en Plaspy para carga refrigerada o monitoreo ambiental.

## Visión General Técnica

| Conectividad | GSM 900 / 1800; GPRS, SMS, canal DATA dedicado |
| --- | --- |
| Bandas | GSM 900 / 1800 |
| Alimentación y Batería | Entrada DC 9–68 V; batería recargable integrada de hasta 600 mAh \(mín. 6 horas de espera promedio\); consumo ≤110 mA en activo, ≤35 mA en espera, ≤20 mA en reposo \(a 12 V\) |
| Interfaces | Bus CAN; 1 entrada de contacto seco \(activación negativa\) para sensores de pulso/frecuencia; 1 entrada analógica \(ADC\) de hasta 12 V; entrada de temperatura 1-Wire opcional; salida de colector abierto opcional hasta 50 V / 1,5 A |
| GNSS | Receptor GNSS de alta sensibilidad de 50 canales \(capaz de Glonass\); disponibilidad operativa en menos de 1 minuto |
| Bluetooth | No especificado / no incluido |
| Gestión Remota | Configuración y almacenamiento en búfer de eventos soportados; FOTA/gestión remota vía web no especificadas |
| Almacenamiento y Eventos | Almacenamiento de registros de eventos no volátil \(capacidad típica de 16,000–125,000 registros\); hasta 64 eventos internos/externos configurables |
| Formato | Carcasa IP30; dimensiones 90 × 65 × 30 mm; masa ≤200 g |

## Casos de Uso

- Gestión de flotas: seguimiento en tiempo real, monitorización de rutas y diagnósticos derivados del CAN para autobuses, camiones y flotas de servicio.
- Monitoreo de combustible y control de consumo: entradas de pulso/frecuencia y analógicas capturan niveles de combustible y datos de sensores de caudal para su integración en los informes de Plaspy.
- Antirrobo e inmovilización: registro de eventos, salida de colector abierto opcional y estado basado en CAN permiten alertas rápidas y acciones remotas a través de Plaspy.
- Telemetría y diagnósticos remotos: reúne parámetros del motor y de la red del vehículo vía CAN para programar mantenimiento y solucionar problemas de forma remota.
- Cargas sensibles a la temperatura: entrada de temperatura 1-Wire opcional ofrece monitoreo ambiental para transporte refrigerado cuando se combina con alertas de Plaspy.

## Por Qué Elegir Este Rastreador con Plaspy

Elegir el MTA-Glonass \(ver.12M-CAN-PRO\) para la integración con Plaspy ofrece un equilibrio enfocado entre posicionamiento GNSS fiable, telemetría robusta del bus del vehículo y canales de comunicación flexibles. Su amplio rango de entrada DC, la batería de respaldo integrada y los modos de bajo consumo aportan resiliencia en instalaciones telemáticas profesionales, mientras que el soporte CAN y las múltiples opciones de E/S permiten a los gestores de flotas recoger datos de encendido/motor, lecturas de combustible y disparadores de eventos sin necesidad de una personalización extensa. Al integrarse con Plaspy, los operadores obtienen seguimiento en tiempo real, alertas configurables e informes históricos completos, lo que convierte a este terminal en una opción práctica para la gestión de flotas, despliegues intensivos en telemetría y estrategias anti-robo donde la fiabilidad y la precisión de los datos son fundamentales.

