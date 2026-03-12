---
slug: /itriangle/obd_ii
id: obd_ii
sidebar_label: OBD II
sidebar_class_name: menu_item_tracker
---
# iTriangle - OBD II

![OBD II](./tracker.png)

El OBD II es un rastreador GPS de grado profesional OBD-II GNSS-celular, diseñado para una instalación rápida y plug-and-play y una telemetría detallada del vehículo. Compatible con Plaspy desde el primer momento, este rastreador OBD-II integra GNSS a bordo \(GPS + GLONASS\), antenas internas de celular y Bluetooth, acceso a CAN-bus y un acelerómetro para ofrecer seguimiento en tiempo real confiable, diagnóstico remoto y datos robustos de gestión de flotas sin necesidad de antenas externas ni cableado complejo.

Diseñado y elaborado en India para flotas comerciales, operadores de alquiler y propietarios de vehículos, el OBD II ofrece telemetría integrada y compacta que se integra perfectamente con Plaspy para ubicación en vivo, diagnósticos, alertas e informes. Su soporte para actualizaciones OTA/FOTA, bajo consumo en reposo y un amplio rango de temperatura de operación lo hacen adecuado para despliegues de seguimiento en tiempo real 24/7 en condiciones desafiantes.

## Puntos clave

- Instalación OBD-II verdaderamente plug-and-play: habilita un rastreador GPS en minutos sin necesidad de empalmes de cables.
- Compatible con Plaspy para una integración inmediata en flujos de seguimiento en tiempo real y gestión de flotas.
- GNSS + celular + BLE, todos con antenas internas, para una instalación limpia y conectividad fiable.
- Accede a telemetría y diagnósticos del vehículo a través de OBD/CAN para RPM, estado del motor y PIDs OBD-II comunes cuando estén soportados.
- Actualizaciones remotas de firmware OTA/FOTA y configuración remota \(SMS / TCP/IP / Bluetooth\) reducen visitas de mantenimiento.
- Diseño de bajo consumo con \<10 mA de corriente en reposo y una batería de respaldo de 300 mAh para conservar datos y reportes básicos durante pérdidas de energía.
- Rango de operación robusto \(-25°C a +85°C\) y soporte de alertas de manipulación para flujos de trabajo anti-robo.

## Cómo funciona con Plaspy

Cuando está conectado a Plaspy, el OBD II transmite la ubicación y la telemetría del vehículo a la nube para que los operadores puedan monitorear activos en tiempo real, analizar diagnósticos y activar alertas automatizadas. Plaspy ingiere registros OBD/CAN, lecturas GNSS y eventos de sensores del dispositivo, lo que facilita crear geocercas, informes de viaje, recordatorios de mantenimiento y flujos de trabajo ante incidentes.

- Actualizaciones de ubicación y telemetría en tiempo real: las lecturas GNSS \(GPS + GLONASS\) se envían a Plaspy para mapas de seguimiento en vivo y trazados históricos.
- Diagnósticos del vehículo y estado del motor: datos OBD-II/CAN como códigos de fallo \(DTCs\), velocidad y RPM están disponibles en los paneles de Plaspy cuando el vehículo lo soporta.
- Alertas de pérdida de energía y manipulación: la detección interna de manipulación y la batería de respaldo aseguran que el dispositivo reporte eventos críticos a Plaspy incluso ante interrupciones.
- Sensores Bluetooth: el soporte BLE permite emparejar sensores Bluetooth compatibles y transmitir telemetría adicional a Plaspy \(p. ej., IDs de activos, sensores accesorios\).
- Configuración y actualizaciones remotas: modifique intervalos de reporte, umbrales o aplique actualizaciones de firmware a través de flujos OTA/FOTA gestionados junto a Plaspy.

## Resumen técnico

| Conectividad | 2G de cuatro bandas \(850 / 900 / 1800 / 1900 MHz\) |
| --- | --- |
| Bandas | GSM de cuatro bandas \(850/900/1800/1900 MHz\) |
| Alimentación y batería | Alimentación 9–32 V DC; batería interna de 300 mAh; corriente en reposo \<10 mA |
| Interfaces | Conector OBD-II, 1 canal CAN, acelerómetro, alerta de manipulación |
| GNSS | GPS + GLONASS |
| Bluetooth | Bluetooth BLE 3.0 \(Classic\) — radio BLE interno para conectividad de corto alcance |
| Gestión remota | Configuración vía SMS / TCP/IP / Bluetooth; OTA / FOTA soportados |
| Almacenamiento | 16 Mbit almacenamiento interno \(hasta ~6000 registros\) |
| Antenas | Antenas internas GSM, GNSS y BLE \(no se requiere antena externa\) |
| Ambiente | Temperatura de operación -25°C a +85°C |
| Formato | Dispositivo OBD-II plug-and-play; dimensiones 72 mm × 53 mm × 30 mm; peso 86 g |

## Casos de uso

- Gestión de flotas: seguimiento central en tiempo real, análisis del comportamiento del conductor y programación de mantenimiento a través de Plaspy.
- Diagnóstico remoto y mantenimiento preventivo: lectura de códigos de fallo OBD-II/CAN y parámetros clave del motor para reducir el tiempo de inactividad.
- Antirrobo y monitoreo de seguridad: alertas de manipulación más rastreo GPS para apoyar la recuperación rápida y la respuesta ante robos.
- Monitoreo para alquiler y uso basado en datos: la instalación plug-and-play OBD-II acelera la implementación en flotas de alquiler y vehículos compartidos.
- Integración de sensores suplementarios: use sensores BLE para temperatura, identificación o detección de carga útil y muestre esos datos en Plaspy.

## Por qué elegir este rastreador con Plaspy

El OBD II es un rastreador GPS práctico para organizaciones que requieren implementación rápida, telemetría confiable y diagnósticos detallados del vehículo. Su factor de forma OBD-II plug-and-play reduce el tiempo de instalación y la complejidad del servicio, mientras que las antenas internas y un rango de temperatura operativo amplio garantizan un seguimiento en tiempo real y telemetría confiables en entornos diversos. Dado que admite OTA/FOTA y múltiples canales de configuración, el dispositivo se adapta a las necesidades de gestión de flotas de Plaspy y minimiza las visitas de campo.

Elija el OBD II cuando necesite una solución compatible con Plaspy que combine un diseño compacto, diagnósticos CAN-bus, soporte para sensores Bluetooth y operación de bajo consumo: ideal para operadores de flotas, compañías de alquiler y propietarios de vehículos que buscan información accionable sobre el vehículo y flujos de trabajo de anti-robo y mantenimiento simplificados.

