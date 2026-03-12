---
slug: /cantrack/g07l
id: g07l
sidebar_label: G07L
sidebar_class_name: menu_item_tracker
---
# CanTrack - G07L

![G07L](./tracker.jpg)

El G07L 4G GPS Tracker es un rastreador de vehículos compacto, con cableado, diseñado para una amplia gama de vehículos de 9–90 V y optimizado para integrarse con Plaspy. Construido alrededor de un módulo SIMCom LTE Cat 1 \(serie A7670\) y un chipset AT6558R, el G07L ofrece seguimiento y telemetría en tiempo real confiables a través de redes 4G/LTE y GSM de respaldo. Su combinación de alarmas de movimiento/vibración, detección del estado de ignición, alertas de corte de energía y almacenamiento de datos a bordo lo convierte en un dispositivo práctico compatible con Plaspy para gestión de flotas y aplicaciones antirrobo.

Compatible con Plaspy por diseño, el G07L transmite actualizaciones de ubicación y estado a aplicaciones móviles y plataformas web para seguimiento en tiempo real, geocercas y alertas basadas en eventos. Ya sea que gestione motocicletas, automóviles, furgonetas o camiones, este rastreador admite los flujos de telemetría e informes en los que confían las flotas: posición precisa con CEP inferior a 5 m, modos de reposo y estacionamiento configurables para evitar la deriva del GPS, y almacenamiento de registros sin conexión para carga automática cuando la conectividad se restablece. Consulte la guía de instalación aquí: [video de instalación](https://youtu.be/RGzWifrJ1mY).

## Aspectos clave

- Seguimiento en tiempo real compatible con Plaspy sobre 4G/LTE con respaldo GSM para cobertura continua y gestión de flotas segura.
- Amplio rango de funcionamiento de 9–90 V admite motocicletas, bicicletas eléctricas, automóviles, furgonetas y vehículos pesados; ideal para flotas mixtas.
- Alarma de movimiento/vibración y sensor G a bordo para detección anti‑robo y alertas de manipulación.
- La detección del estado de ignición permite monitorear el encendido/apagado del motor y su integración con inmovilizador o sistemas de corte externo.
- Alarma de corte de energía con batería de respaldo interna opcional de 80 mAh mantiene la última posición conocida y el estado de la alarma durante la pérdida de energía principal.
- El buffer de memoria almacena hasta 2,000 registros cuando se pierde la conectividad GSM/GPS, sincronizándose automáticamente con Plaspy al restablecerse la conexión.
- La lógica de cambio de ángulo y estabilización al estacionar reduce la deriva del GPS tras el estacionamiento, para trazas e informes históricos más limpios.

## Cómo funciona con Plaspy

El G07L envía correcciones GNSS, eventos de estado y alarmas a Plaspy mediante TCP/IP \(GPRS\) o a través de LTE. Plaspy ingiere esos flujos de telemetría para mostrar la posición en tiempo real, generar alertas y gestionar informes de energía y flujos de geocercas. La configuración y gestión del dispositivo pueden realizarse a través de comandos de la plataforma Plaspy o localmente mediante USB, SMS y comandos GPRS, lo que permite una implementación y mantenimiento flexibles.

- Actualizaciones de ubicación y telemetría en tiempo real — correcciones GPS frecuentes y informes basados en cambios de ángulo proporcionan trazados de vehículos precisos.
- Alarmas de estado de ignición y movimiento/vibración — Plaspy puede usar estas señales para informes de tiempo de motor y notificaciones anti‑robo.
- Alarma de corte de energía y batería interna de respaldo opcional — la posición más reciente y los eventos de alarma se preservan y reportan a Plaspy durante fallos de suministro.
- Almacenamiento fuera de línea de hasta 2,000 puntos de datos — carga automática a Plaspy cuando el dispositivo recupera conectividad GSM/GPS.
- Configuración remota y gestión de firmware — actualizaciones OTA y comandos basados en la plataforma simplifican el mantenimiento en campo con la integración de Plaspy.

## Resumen técnico

| Modelo | G07L 4G GPS Tracker |
| --- | --- |
| Módulo celular y chipset | SIMCom LTE Cat 1 \(serie A7670\) emparejado con chipset AT6558R |
| Conectividad | LTE-FDD \(bandas según versión\) y GSM compatible hacia atrás \(850/900/1800/1900 MHz\); GPRS Clase 12, TCP/IP |
| Bandas LTE \(ejemplos\) | B1 / B2 / B3 / B4 / B5 / B7 / B8 / B28 / B66 \(el soporte de bandas depende de la versión de hardware\) |
| GNSS | 66 canales GNSS, sensibilidad -165 dBm, precisión de posición &lt; 5 m CEP; TTFF &lt; 35 s \(frío\), &lt; 1 s \(caliente\) en cielo despejado |
| Alimentación y batería | Tensión de operación 9–90 VDC; batería de respaldo Li-Polímero interna opcional de 80 mAh / 3.7 V; consumo en modo de espera/funcionamiento ~5 mA a 50 mA dependiendo del modo |
| Memoria y almacenamiento | Almacenamiento local de hasta 2,000 registros para operación fuera de línea y subida diferida |
| Interfaces | Interfaz de alimentación de 3 pines \(estándar\), micro-USB para flasheo/ajuste de firmware, entrada de ignición, E/S digital |
| Sensores | Sensor G a bordo \(detección de movimiento y vibración\) |
| Gestión remota | Configuración vía GPRS/SMS/PC \(USB\); actualizaciones de firmware OTA soportadas |
| Formato | Compacto: 90 × 52 × 21 mm; rastreador de vehículos con cableado para instalación permanente |

## Casos de uso

- Gestión de flotas — seguimiento en tiempo real continuo, informes de tiempo de motor basados en el encendido y historial de rutas para flotas mixtas.
- Protección antirrobo — alarmas de movimiento/vibración y alertas de corte de energía alimentan los flujos de alarma de Plaspy para una respuesta rápida.
- Monitorización de vehículos a largo plazo — estabilización de estacionamiento y almacenamiento offline aseguran la integridad de los datos ante interrupciones de cobertura.
- Telemática e informes — precisión GNSS &lt; 5 m y informes frecuentes soportan kilometraje, utilización y analítica operativa.

## Por qué elegir este rastreador con Plaspy

El G07L combina conectividad 4G fiable, un diseño compacto con cableado y características telemétricas esenciales para ofrecer una solución compatible con Plaspy que escala desde un único vehículo hasta grandes flotas. Su amplio rango de voltaje de entrada y la batería de respaldo opcional lo hacen adecuado para diversos tipos de vehículos, mientras que la memoria a bordo y los modos de reposo configurables reducen la pérdida de datos y falsas alarmas. Con actualizaciones de firmware OTA y múltiples rutas de configuración \(USB, SMS, GPRS\), el G07L minimiza el tiempo de servicio en campo y admite una integración continua con la plataforma.

Para operadores de flotas y proveedores de servicios que utilizan Plaspy, el G07L ofrece un equilibrio práctico entre rendimiento y configurabilidad: seguimiento en tiempo real, telemetría fiable, alertas anti‑robo y detección de ignición que alimentan directamente los paneles de control y herramientas de informes de Plaspy. Antes de la instalación, verifique la variante correcta de la banda LTE para su región y siga prácticas profesionales de cableado. Para la guía de instalación, vea el video oficial: Instalación de G07L.

