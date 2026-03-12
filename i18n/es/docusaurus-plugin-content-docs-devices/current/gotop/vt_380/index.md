---
slug: /gotop/vt_380
id: vt_380
sidebar_label: VT-380
sidebar_class_name: menu_item_tracker
---
# GOTOP - VT-380

![VT-380](./tracker.jpg)

El VT-380 es un rastreador de vehículos GPS/GPRS profesional diseñado para un seguimiento en tiempo real fiable compatible con Plaspy y la gestión de flotas. Diseñado para operadores de flotas, empresas de alquiler e integradores de seguridad vehicular, el VT-380 combina un módulo GPS de alta sensibilidad SiRF‑Star III con un módem GSM cuádruple banda para entregar fixes de posición consistentes, informes configurables y comunicaciones resilientes vía SMS o GPRS \(TCP/UDP\). Su registro a largo plazo, alarmas integrales y salida de corte de motor lo convierten en una opción práctica para flujos de trabajo anti-robos y telemática en la plataforma Plaspy.

La compatibilidad con Plaspy significa que puedes enviar telemetría del VT-380 — ubicación, alertas y datos de sensores — directamente a paneles de Plaspy, alertas e informes para una visibilidad centralizada de la flota. Cuando GPRS no está disponible, el VT-380 almacena hasta 180,000 puntos de ruta en la memoria flash interna y sube automáticamente los datos almacenados una vez que la conectividad se restablece, conservando el historial de rutas y los detalles de eventos para cumplimiento y análisis.

## Aspectos Clave

- Rastreador GPS compatible con Plaspy para un seguimiento en tiempo real robusto y gestión de flotas.
- GNSS SiRF‑Star III de alta sensibilidad para fijaciones de posición fiables y una precisión típica de 10 m \(2D RMS\).
- GSM cuádruple banda con comunicación por SMS y GPRS \(TCP/UDP\) y registro en memoria flash interna para retención de datos sin conexión.
- Alarmas integrales: SOS \(pánico\), geocercas, movimiento, velocidad, corte de energía y entrada/salida de zona GPS sin cobertura.
- Salida de corte de motor \(inmovilizador remoto\) y relé incluido para anti-robos y control remoto del motor.
- Dos entradas analógicas para monitoreo de combustible u telemetría de otros sensores y cinco entradas digitales para señales de eventos del vehículo.
- Diseño compacto de grado automotriz con batería de respaldo de 850 mAh y operación de bajo consumo gracias al sensor de movimiento integrado.

## Cómo Funciona con Plaspy

La integración del VT-380 con Plaspy es simple: el VT-380 transmite paquetes de ubicación y eventos a través de GPRS \(o SMS como respaldo\) a los endpoints del servidor de Plaspy usando TCP/UDP. Plaspy ingiere telemetría y la vincula a los registros de vehículos para habilitar el seguimiento en tiempo real, la reproducción histórica y alertas basadas en reglas. Cuando el dispositivo pierde conectividad GPRS, los puntos de ruta almacenados se suben automáticamente tras la reconexión para que Plaspy cuente con un historial completo de rutas.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy a través de GPRS \(TCP/UDP\) o respaldo por SMS.
- Eventos de alarma \(SOS, geocerca, velocidad, movimiento, corte de energía, entrada/salida de zona GPS sin cobertura\) se transmiten a Plaspy para alertas y notificaciones inmediatas.
- El monitoreo de combustible mediante las entradas analógicas del VT-380 puede enviarse a Plaspy para seguimiento de nivel de combustible e informes.
- El inmovilizador remoto/corte de motor es compatible y puede controlarse o rastrearse a través de integraciones con Plaspy cuando esté configurado.
- Cuando no hay disponibilidad de GPRS, el VT-380 registra hasta 180,000 puntos de ruta en la memoria flash y los sube a Plaspy al restablecerse la conexión.
- Si se requieren sensores Bluetooth en su solución, Plaspy también puede correlacionar datos de puertas de enlace BLE externas con la telemetría del VT-380 para entregar vistas combinadas de sensores y ubicación.

## Resumen Técnico

| Modelo | VT-380 |
| --- | --- |
| Conectividad | GSM cuádruple banda \(SMS, GPRS TCP/UDP\) |
| Bandas | GSM cuádruple banda \(estándar 850/900/1800/1900 MHz\) |
| Alimentación y batería | Voltaje de operación +9V a +36V; batería de respaldo de 850 mAh; consumo típico ~85 mA/h |
| Memoria flash | 4 MB interna para registro \(hasta 180,000 puntos de ruta\) |
| GNSS | Conjunto SiRF‑Star III, sensibilidad -158 dB, L1 1575.42 MHz, seguimiento de 20 canales, precisión típica de posición 10 m \(2D RMS\), precisión de velocidad 0.1 m/s |
| Arranque en frío/templado/caliente | Caliente ~1 s, templado ~38 s, frío ~42 s |
| Interfaces e E/S | 5 entradas digitales \(3 negativas, 2 disparo positivas\), 5 salidas, 2 entradas analógicas \(10 bits\), salida de corte de motor \(relé incluido\), entrada externa de micrófono opcional |
| Ambiental | Temperatura de operación -20 a 55 °C; humedad 5%–95% no condensible |
| Físico | Tamaño 104 × 62 × 24 mm \(instalación 104 × 83 × 24 mm\); peso 190 g |
| Accesorios | Antena GPS, antena GSM, cables de conexión, relé, manual de usuario |
| Indicadores | Dos LEDs para el estado de GPS y GSM |

## Casos de Uso

- Gestión de flotas: ubicación en tiempo real, reproducción de rutas e intervalos de seguimiento configurables para optimización de despachos e informes de cumplimiento.
- Antirrobo e inmovilización: botón SOS, alertas de geocerca y relé de corte de motor permiten una respuesta rápida y la inmovilización remota cuando sea necesario.
- Monitoreo de combustible y telemetría: las entradas analógicas capturan señales de nivel de combustible para análisis de consumo y detección de robo cuando se combina con los informes de Plaspy.
- Monitoreo remoto y seguridad: alarma de corte de energía, alarma de movimiento y soporte opcional para micrófono en el vehículo para vigilancia e investigaciones de incidentes.
- Registro a largo plazo: el almacenamiento flash interna conserva rutas históricas largas para activos que operan en áreas con baja conectividad hasta que sea posible subir los datos.

## Por qué Elegir el VT-380 con Plaspy

Elegir el VT-380 para despliegues gestionados con Plaspy ofrece una combinación fiable de posicionamiento GNSS preciso, conectividad GSM probada y entradas/salidas de vehículo para telemetría y control. Su amplio búfer de registro en el dispositivo y los intervalos de reporte configurables reducen las brechas de datos para vehículos que operan en áreas de cobertura intermitente. Emparejado con Plaspy, el VT-380 se convierte en parte de una solución telemática escalable: obtienes seguimiento en tiempo real, alertas para antirrobo y eventos de seguridad, monitoreo de combustible mediante entradas analógicas y inmovilización remota, todo accesible a través de paneles, alertas e informes de Plaspy. El resultado es un menor riesgo operativo, mejor visibilidad de la flota y una integración sencilla en los flujos de gestión de flotas existentes.

