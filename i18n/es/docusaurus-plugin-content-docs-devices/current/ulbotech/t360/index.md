---
slug: /ulbotech/t360
id: t360
sidebar_label: T360
sidebar_class_name: menu_item_tracker
---
# Ulbotech - T360

![T360](./tracker.jpg)

El rastreador GPS OBD T360 es un dispositivo telemático plug-and-play diseñado para una instalación rápida en automóviles y vehículos ligeros a través de la toma OBD-II del vehículo. Construido alrededor de un motor GNSS u-blox 6M y un módem GPRS/GSM cuádruple banda, el T360 ofrece un rendimiento fiable como rastreador GPS, seguimiento en tiempo real, reportes de eventos e información sobre la conducción. Sus antenas internas, detección automática de APN y de la zona horaria y las actualizaciones de firmware FOTA simplifican la implementación y el mantenimiento, haciendo del T360 una opción práctica para flotas y la monitorización de vehículos individuales que requieren hardware compatible con Plaspy.

El T360 es compatible con Plaspy para una integración sencilla con el backend, ofreciendo envíos de posición de forma periódica e inmediata, alarmas, eventos de geocerca e informes de comportamiento del conductor. Con una salida de inmovilizador interna, soporte de monitor de voz y un acelerómetro de 3 ejes para detectar maniobras en curva, frenadas bruscas y exceso de velocidad, el T360 admite flujos de trabajo anti-robos, alimentación de telemetría y casos de uso de gestión de flotas mientras mantiene la instalación rápida y no invasiva.

## Aspectos clave

- Instalación OBD-II plug-and-play para despliegues rápidos en vehículos y flotas de alquiler.
- Módulo GNSS u-blox 6M con A‑GPS para soluciones de posición robustas y seguimiento de alta sensibilidad.
- Conectividad quad-band GPRS/GSM \(850/900/1800/1900 MHz\) con soporte para multi-slot class 12.
- Acelerómetro de 3 ejes a bordo para detección de comportamiento de conducción \(curvas, frenadas bruscas y exceso de velocidad\).
- Inmovilizador integrado \(salida digital para corte del motor\) y monitor de voz para apoyar flujos de trabajo de anti-robo y seguridad.
- Antenas GSM/GPS internas, además de identificación automática de APN y de la zona horaria, reducen los pasos de configuración.
- FOTA \(actualización de firmware por GPRS\) simplifica el mantenimiento remoto y la escalabilidad.

## Cómo funciona con Plaspy

Cuando se utiliza junto con Plaspy, el T360 envía paquetes de posición y telemetría seguros a su backend de Plaspy mediante GPRS. Plaspy ingiere el flujo de ubicación del dispositivo, eventos de conducción basados en el acelerómetro, desencadenadores de geocerca y mensajes de alarma/estado para proporcionar paneles de control, alertas e informes que los gestores de flotas y los propietarios de vehículos pueden interpretar en tiempo real. La conexión OBD garantiza energía continua y acceso a valores de estado del vehículo que enriquecen la telemetría; Plaspy luego correlaciona esos datos brutos en salidas útiles para la gestión de flotas, flujos de trabajo anti-robo y puntuación de conductores.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a los servidores de Plaspy a través de GPRS.
- Soporte de inmovilizador del motor \(corte del motor\) para flujos de trabajo de apagado remoto del vehículo.
- Eventos de comportamiento de conducción \(curvas, frenadas bruscas, exceso de velocidad\) reportados como telemetría para la puntuación de seguridad.
- Cruce de límites de geocerca y reportes de posición GPS programados para monitorizar rutas y generar alertas.
- Voltaje de la batería del vehículo, estado de la batería de respaldo y telemetría de temperatura a bordo disponibles para chequeos de salud y diagnósticos.

## Resumen técnico

| Conectividad | módem quad-band GPRS/GSM \(850/900/1800/1900 MHz\), GPRS multi-slot class 12, MS class B |
| --- | --- |
| Bandas | 850 / 900 / 1800 / 1900 MHz \(quad-band\) |
| Alimentación y batería | Voltaje de operación 8–32 V DC; batería Li-Polymer 3.7 V, 180 mAh de respaldo; modos de bajo consumo para ampliar la vida de la batería de respaldo |
| Interfaces | Toma OBD-II \(alimentación/datos\), ranura SIM normal, micro USB para configuración/actualización; una salida digital para corte de motor \(inmovilizador interno\) |
| GNSS | Conjunto u-blox 6M con A-GPS; sensibilidad de seguimiento hasta -162 dBm y precisión de posición autónoma \< 3 m \(según fabricante\) |
| Bluetooth | No incluido / N/A \(el dispositivo utiliza GSM/GPS y interfaces OBD internas\) |
| Gestión remota | Actualización de firmware por GPRS \(FOTA\); identificación automática de APN y de la zona horaria |
| Sensores e entradas | Acelerómetro de 3 ejes, monitorización del voltaje de la batería del vehículo, voltaje de la batería de respaldo, sensor de temperatura, capacidad de monitor de voz |
| Formato | Diseño de enchufe OBD-II; dimensiones aprox. 62 × 50 × 23 mm \(sin conector J1962\); peso ~50 g; antenas GSM/GPS internas |
| Ambiental | Rango de temperatura de operación –30°C a +80°C \(sin batería\) |

## Casos de uso

- Gestión de flotas — seguimiento en tiempo real, reproducción de rutas, puntuación del comportamiento del conductor y reportes de posición programados para la supervisión operativa.
- Anti-robo e inmovilización — salida de corte del motor interna y alertas de geocerca ayudan a recuperar vehículos robados y a prevenir uso no autorizado.
- Monitoreo de alquiler/seguros — instalación OBD no invasiva, monitor de voz e informes de conducción respaldan telemática de seguros y perfiles de alquiler.
- Asistencia en carretera y salud del vehículo — telemetría de voltaje de la batería y de temperatura proporcionan alertas tempranas de averías o problemas de carga.
- Seguimiento de adolescentes o familiares — ubicación en tiempo real, alertas de velocidad y frenadas bruscas para fomentar hábitos de conducción más seguros.

## Por qué elegir este rastreador con Plaspy

El T360 está diseñado para organizaciones y propietarios que necesitan un rastreador GPS compatible con Plaspy que minimice la complejidad de instalación al tiempo que ofrezca telemetría útil y funciones de seguridad. La instalación OBD plug-and-play elimina problemas de cableado y permite que las flotas equipen vehículos con rapidez. Su rendimiento GNSS de u-blox y la conectividad GPRS cuádruple banda aseguran un seguimiento en tiempo real consistente; FOTA y APN automático facilitan el mantenimiento remoto a escala. Los sensores integrados y el inmovilizador interno permiten acciones anti-robo, analítica del comportamiento del conductor y monitoreo de la salud del vehículo, que se integran directamente en los paneles de Plaspy y en las reglas de alerta.

En la práctica, elegir el T360 con Plaspy ofrece un rastreador GPS OBD compacto que cubre las necesidades básicas de gestión de flotas y anti-robo: seguimiento en tiempo real, telemetría adecuada para flujos de trabajo de monitoreo de combustible cuando hay datos OBD disponibles, informes de estado de encendido/motor cuando los suministra el vehículo y un conjunto de reportes de eventos ricos para geocercas y comportamiento del conductor. El resultado es una solución fiable, mantenible y escalable para flotas, servicios de alquiler, aseguradoras y propietarios de vehículos particulares que confían en Plaspy para obtener insights y control operativo.

