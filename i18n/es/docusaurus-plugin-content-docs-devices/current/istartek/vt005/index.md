---
slug: /istartek/vt005
id: vt005
sidebar_label: VT005
sidebar_class_name: menu_item_tracker
---
# iStartek - VT005

![VT005](./tracker.jpg)

El VT005 de VT \(modelo VT005\) es un rastreador GPS OBD II 4G de instalación rápida plug-and-play, diseñado para un despliegue veloz y un monitoreo confiable del vehículo. Pensado para conectarse directamente a cualquier puerto OBD II estándar, el VT005 ofrece seguimiento en tiempo real compatible con Plaspy y telemetría de gestión de flotas sin necesidad de cableado, lo que lo hace ideal para instalaciones rápidas en flotas y en vehículos individuales.

Con conectividad celular multinetwork, registro GPS a bordo y un factor de forma compacto, el VT005 admite capturar continuamente el historial de rutas y alertas basadas en eventos. Los usuarios de Plaspy pueden aprovechar la detección de encendido, alarmas de colisión y manipulación, y la generación de códigos de fallo del motor para construir flujos de trabajo de antirrobo, paneles de comportamiento del conductor y monitoreo de diagnóstico del vehículo — todo accesible vía web, aplicaciones móviles o comandos por SMS.

## Puntos destacados

- Instalación OBD II plug-and-play para un despliegue rápido en flotas y vehículos individuales.
- Compatible con Plaspy para una integración fluida en flujos de seguimiento en tiempo real y gestión de flotas.
- Conectividad celular multinetwork \(4G LTE FDD/TDD, 3G, 2G\) con variantes regionales para cobertura global.
- Posicionamiento GPS + LBS a bordo con registro GPS cuando GPRS no está disponible para garantizar la captura continua del historial de rutas.
- Telemetría y diagnóstico del vehículo mediante OBD II: detección de encendido, detección de códigos de fallo del motor y monitoreo del comportamiento de conducción \(aceleración brusca, frenado brusco, velocidad\).
- Funciones centradas en la seguridad, incluidas alarma de colisión, alarma de manipulación, alertas de geocerca y reporte SOS opcional.
- Formato compacto y ligero con batería de respaldo integrada para mantener operación a corto plazo tras una pérdida de energía.
- Soporta informes por TCP y SMS para garantizar comunicaciones en tiempo real y de respaldo con Plaspy.

## Cómo funciona con Plaspy

El VT005 envía la ubicación del vehículo y la telemetría diagnóstica a Plaspy mediante TCP sobre datos celulares o SMS como respaldo. Plaspy ingiere fijaciones de posición GPS y LBS, diagnósticos derivados de OBD II y señales de evento \(colisión, manipulación, encendido\) para alimentar mapas en tiempo real, alertas e informes históricos. Cuando la conectividad celular se interrumpe, el VT005 continúa registrando posiciones GPS localmente y sube los registros almacenados cuando la red se restablece, preservando el historial de rutas para el análisis de flotas.

- Actualizaciones de ubicación y telemetría en tiempo real vía TCP; comandos e informes por SMS como canal secundario.
- Detección de encendido y eventos de comportamiento de conducción \(aceleración brusca, aceleración rápida, exceso de velocidad\) para el monitoreo de seguridad de la flota.
- Detección de códigos de fallo del motor \(OBD II\) para informes básicos de salud del vehículo y flujos de mantenimiento preventivo.
- Alertas de geocerca y alarmas de colisión y manipulación para respaldar antirrobo y la automatización de seguridad en Plaspy.
- Registro GPS durante interrupciones de GPRS \(hasta 5000 registros\) garantiza que no se pierdan datos históricos de rutas.

## Resumen técnico

| Conectividad | LTE 4G \(FDD/TDD\), 3G y 2G \(variantes regionales LEU/LAU/LAF\); módem celular basado en EC25 |
| --- | --- |
| Bandas / Variantes | Variantes regionales LTE/GSM \(LEU / LAU / LAF\) para adaptar a las bandas de los operadores locales; las listas exactas de bandas varían según el modelo |
| Alimentación & Batería | Entrada DC 9–36V \(compatible con batería externa\); batería de respaldo de litio integrada de 50 mAh \(~15 minutos de funcionamiento en respaldo\); protección contra bajo voltaje \(límite de alarma por defecto 11V\) |
| Interfaces | Enchufe directo OBD II \(sin cableado\), puerto MicroUSB \(alimentación/carga\), indicadores LED para CEL y GNSS |
| Entradas / Sensores | Detección de encendido, sensor de vibración integrado, alarma de colisión, alarma de manipulación; admite protocolos OBD-II ISO9141-2, ISO14230, ISO15765 |
| GNSS | Chipset AT6558; sensibilidad de adquisición -148 dBm, sensibilidad de seguimiento -165 dBm; precisión de posición autónoma &lt;10 m CEP; TTFF \(cielo despejado\) Arranque en frío &lt;32s, Arranque tibio &lt;5s, Arranque en caliente &lt;1s |
| Bluetooth | No se reporta Bluetooth para el modelo VT005 \(sensores BLE no incluidos\) |
| Gestión Remota & Datos | Informes de datos vía TCP y SMS; registro GPS cuando GPRS no está disponible \(memoria de hasta 5000 registros de ubicación\) |
| Formato | Módulo enchufable compacto; dimensiones 58 × 45 × 20 mm \(sin enchufe\); peso 58 g |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real, historial de rutas y monitoreo del comportamiento del conductor para optimizar la asignación de tareas y reducir costos de combustible.
- Monitoreo anti robo: alertas de geocerca, alarmas de manipulación y de colisión, y detección de encendido para detectar usos no autorizados y apoyar flujos de trabajo de inmovilizador cuando se combine con accesorios compatibles.
- Salud y diagnóstico del vehículo: captura de códigos de fallo del motor \(OBD II\) para mantenimiento preventivo y resolución de fallos más rápida.
- Auditoría de rutas y kilometraje: registro a bordo y almacenamiento histórico de rutas para cumplimiento, facturación o análisis operacional.

## Por qué elegir este rastreador con Plaspy

El VT005 combina una instalación simple OBD II plug-and-play con conectividad 4G multinetwork y un registro GPS robusto, proporcionando una opción de baja fricción para flotas y propietarios de vehículos individuales que requieren seguimiento en tiempo real compatible con Plaspy y telemetría confiable. Su capacidad para continuar registrando cuando GPRS está caído, reportar códigos de diagnóstico OBD II y activar eventos de seguridad \(colisión, manipulación, geocerca\) lo convierte en una opción práctica para flujos de trabajo anti-robo y visibilidad operativa. Variantes regionales celulares y reportes vía TCP/SMS ofrecen flexibilidad para despliegues globales, mientras que la plataforma de Plaspy integra los datos del VT005 en paneles centrales de flota, alertas e informes para obtener insights accionables.

Ya sea que necesites iniciar un programa escalable de gestión de flotas, añadir telemetría para coaching de conductores o implementar alertas anti robo y reportes de emergencia, el VT005 ofrece una base compacta, confiable y compatible con Plaspy para el rastreo de vehículos y diagnósticos. Para instalaciones que requieren monitoreo de combustible, control de inmovilizador o entradas de sensores BLE, Plaspy puede integrar la telemetría del VT005 con accesorios compatibles y sensores de terceros para ampliar la funcionalidad en toda tu implementación.

