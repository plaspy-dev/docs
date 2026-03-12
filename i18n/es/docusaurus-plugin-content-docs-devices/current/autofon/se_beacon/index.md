---
slug: /autofon/se_beacon
id: se_beacon
sidebar_label: SE+ Beacon
sidebar_class_name: menu_item_tracker
---
# AutoFon - SE+ Beacon

![SE+ Beacon](./tracker.png)

### AutoFon SE+ Beacon

El AutoFon SE+ Beacon es un rastreador GPS compacto compatible con Plaspy, diseñado para seguimiento encubierto a largo plazo de vehículos y activos móviles o estacionarios. Al combinar posicionamiento GPS/GLONASS con informes vía GSM SMS y GPRS, el SE+ Beacon ofrece telemetría de ubicación fiable y alertas de eventos mientras conserva la batería — ideal cuando necesitas monitoreo discreto y de mantenimiento reducido integrado en la plataforma Plaspy.

Con una plataforma de hardware v.6.x con un módulo GSM SIM800H y un módulo GNSS SIM68M, el SE+ Beacon admite seguimiento en tiempo real vía GPRS, respaldo por SMS, detección de movimiento e impactos, y un canal auxiliar configurable para tareas de control remoto como la activación del inmovilizador. Su factor de forma miniatura de 69×51×22 mm y hasta dos años de vida de la batería \(según la configuración\) lo convierten en una opción práctica para despliegues prolongados gestionados a través de Plaspy.

## Aspectos clave

- Rastreador GPS compatible con Plaspy con posicionamiento GPS + GLONASS para datos de ubicación fiables.
- Larga duración de la batería: funciona con dos baterías CR123A 3.0V \(1500 mAh cada una\) con opción de alimentación externa.
- Informes duales: GPRS para seguimiento en tiempo real y SMS para alertas o comunicaciones de respaldo.
- Seguridad multiesensor: acelerómetro digital, detección de inclinación, detección de impactos/colisiones y un micro-botón SOS para alertas inmediatas.
- Canal auxiliar y entrada de alarma permiten control remoto de dispositivos externos \(por ejemplo, inmovilizador del motor, relé o sirena\).
- Micrófono integrado para monitoreo de audio remoto y protección por PIN y número de titular para operación segura.
- Gran búfer offline \(98,000 paquetes\) y actualizaciones de firmware remotas vía GPRS para mantener los dispositivos sincronizados y resistentes a interrupciones de conectividad.

## Cómo funciona con Plaspy

El SE+ Beacon se integra con Plaspy proporcionando las posiciones GNSS y telemetría de eventos al servidor de Plaspy a través de GPRS, usando SMS como método de notificación de respaldo. Plaspy procesa esos paquetes para ofrecer mapas en tiempo real, alertas de geocercas y reproducción histórica. Los mensajes de señal de vida \(heartbeat\) configurables y el amplio búfer de “black box” del dispositivo aseguran que Plaspy reciba datos de posición y eventos de forma consistente incluso ante interrupciones temporales de la red.

- Actualizaciones de ubicación y telemetría en tiempo real vía GPRS para un seguimiento continuo en los paneles de Plaspy.
- Informes de eventos: inicio/detección de movimiento, inclinación \(>90°\), eventos de alto impacto \(aceleración >8G\) y pulsaciones del botón SOS se envían como alertas.
- Informes de entrada de alarma y control de canal auxiliar disponibles para acciones remotas \(p. ej., control del inmovilizador o relé\) cuando estén autorizados a través de Plaspy.
- Notificaciones por SMS y modos de enlace SMS-a-mapa proporcionan alertas alternativas y compartir rápidamente la ubicación mediante enlaces cuando sea necesario.
- Estrategia offline robusta: un búfer de 98,000 paquetes almacena datos no enviados hasta que se restablezca la conectividad con el servidor de Plaspy.

## Resumen técnico

| Conectividad | GSM \(SIM800H\) con datos GPRS y soporte de SMS |
| --- | --- |
| Bandas | Módulo GSM utilizado \(SIM800H\); no se especifican bandas de frecuencia específicas en la descripción del dispositivo |
| Alimentación y Batería | Dos baterías de litio CR123A 3.0V \(1500 mAh cada una\); opción de conexión a alimentación externa; hasta dos años de vida de la batería según la configuración y el uso |
| Interfaces | Una entrada de alarma; un canal auxiliar para control remoto \(p. ej., inmovilizador o relé\); micro-botón SOS; controles de PIN y número de titular |
| GNSS | Posicionamiento GPS + GLONASS mediante el módulo GNSS SIM68M \(AGPS no presente\) |
| Sensores | Acelerómetro digital para detección de movimiento, detección de inclinación \(>90°\), detección de impactos/colisiones \(>8G\), sensibilidad configurable e intervalos de reactivación |
| Audio | Micrófono integrado para monitoreo de audio remoto |
| Resiliencia de Datos | Búfer “black box” de 98,000 paquetes para paquetes GPRS no enviados; mensajes de heartbeat configurables |
| Gestión Remota | Actualizaciones de firmware remotas vía GPRS \(FOTA\) soportadas |
| Forma | Compacto: 69 × 51 × 22 mm; destinado a instalación encubierta en vehículos, activos o objetos estacionarios |
| Localización | Mensajes y configuración en ruso o inglés |
| Bluetooth | No se indica soporte para Bluetooth en la descripción |

## Casos de uso

- Monitoreo encubierto a largo plazo de vehículos — coches, motocicletas y embarcaciones donde la baja detectabilidad y la larga duración de la batería son esenciales.
- Seguimiento de activos para contenedores, remolques y cargas valiosas durante el tránsito o al almacenamiento con alertas de impacto y movimiento.
- Monitoreo remoto de objetos estacionarios — garajes, cabañas o cajas de servicios donde las revisiones poco frecuentes preservan la batería.
- Rastreo personal o de mascotas para un monitoreo discreto de ubicación combinado con alertas SOS.
- Supervisión de equipos pequeños y flotas de remolques donde la telemetría discreta y las alertas de eventos son suficientes sin un hardware telemático completo para vehículos.

## Por qué elegir este rastreador con Plaspy

El AutoFon SE+ Beacon se integra de forma ideal con Plaspy cuando necesitas un rastreador GPS de bajo perfil que priorice la duración de la batería, la resiliencia y la telemetría basada en eventos. Su reporte dual vía GPRS y SMS y su gran búfer offline reducen la pérdida de datos, mientras que la detección de movimiento, inclinación y caídas basada en el acelerómetro proporciona alertas accionables para flujos de trabajo de anti-robo y seguridad. Los clientes de Plaspy pueden aprovechar estas señales para el rastreo en tiempo real, la reproducción histórica y alertas automáticas.

Para operaciones que requieren telemetría adicional, como monitoreo de combustible o estado de ignición, el SE+ Beacon puede formar parte de una solución Plaspy más amplia donde sensores externos o integraciones proporcionen esas señales específicas. El canal auxiliar habilita acciones de control remoto \(por ejemplo, activación de inmovilizador\) bajo políticas gestionadas por Plaspy, lo que lo hace práctico para una respuesta básica ante el robo sin cableado complejo. Las actualizaciones de firmware remotas vía GPRS y la configuración multilingüe mantienen las implementaciones actuales y fáciles de mantener a escala.

