---
slug: /autoseeker/at_19
id: at_19
sidebar_label: AT-19
sidebar_class_name: menu_item_tracker
---
# Autoseeker - AT-19

![AT-19](./tracker.jpg)

The AT-19 2G Mini GPS Tracking Device es un rastreador GPS compacto, compatible con Plaspy, diseñado para una instalación discreta en vehículos. Construido para coches, motocicletas, autobuses, camiones y furgonetas, el AT-19 ofrece seguimiento en tiempo real y telemetría esencial sobre GSM/GPRS para que gestores de flota y propietarios de vehículos puedan monitorear la posición, la velocidad y las rutas de conducción a través de la plataforma Plaspy.

Con soporte para TCP/GPRS y reportes por SMS, opciones de instalación en línea y personalización empresarial, el AT-19 se presenta como una opción práctica para la gestión de flotas, protección antirrobo y operaciones logísticas. Las características opcionales, como monitoreo de voz remoto y alertas SOS de emergencia, lo hacen adecuado para despliegues con énfasis en la seguridad cuando se combina con el firmware o los accesorios correctos.

## Aspectos destacados

- Seguimiento en tiempo real compatible con Plaspy — posición GPS e historial de rutas disponibles en los tableros de Plaspy.
- Factor de forma compacto y discreto \(89 × 51 × 15 mm\) ideal para instalaciones en vehículos a corto plazo o encubiertas.
- Conectividad GSM/GPRS 2G con reportes TCP y SMS para telemetría y alertas fiables.
- Características de telemetría del vehículo: monitoreo de ACC encendido/apagado \(ignición\), alarmas de apertura/cierre de puertas y alarmas de sobrevelocidad, y notificaciones de geocerca.
- Capacidad de corte de combustible remoto \(inmovilizador\) para apoyar intervenciones antirrobo cuando se integra con Plaspy.
- Monitoreo de voz remoto opcional y alertas SOS para una seguridad mejorada y respuesta ante incidentes.
- Personalizable para implementaciones empresariales con acceso a la plataforma gratuito de por vida según publicidad \(verifique términos con el proveedor\).

## Cómo funciona con Plaspy

El AT-19 transmite la posición GNSS y la telemetría del vehículo a Plaspy vía GSM/GPRS \(TCP\) o SMS. Una vez conectado, Plaspy muestra la ubicación en tiempo real, la velocidad, el historial de rutas y los eventos de alarma, permitiendo que los operadores y responsables de flota reaccionen ante incidentes, optimicen rutas y apliquen políticas en tiempo real. Los comandos remotos enviados desde Plaspy pueden activar salidas soportadas, como corte de combustible cuando el hardware y los permisos lo permiten.

- Actualizaciones de ubicación y telemetría en tiempo real: reporte continuo de posición, velocidad y ruta a Plaspy.
- Estado de ignición y alarmas: detección de ACC encendido/apagado, alarmas de apertura/cierre de puertas y alertas de sobrevelocidad reportadas para notificación inmediata.
- Monitoreo de combustible y acciones del inmovilizador: soporte de corte de combustible remoto proporciona una opción antirrobo a través de flujos de comandos de Plaspy \(requiere cableado correcto y autorización\).
- Alertas basadas en geocerca y eventos: notificaciones de entrada/salida y umbrales de alarma configurables alimentan directamente las alertas e informes de Plaspy.
- Monitoreo de voz remoto opcional y SOS: puede integrarse para activar monitoreo de audio en vivo o escalamiento de emergencias a través de Plaspy cuando sea compatible con el firmware/accesorio.
- Sensores Bluetooth: la página de producto de AT-19 no enumera sensores Bluetooth integrados; las implementaciones con Plaspy a menudo pueden integrar accesorios BLE externos donde existan integraciones con la plataforma.

## Resumen técnico

| Conectividad | GSM/GPRS \(2G\); SMS; informes de datos TCP/GPRS |
| --- | --- |
| Bandas | GSM 850 / 900 / 1800 / 1900 \(módulo GSM: MC25program\) |
| Potencia & Batería | Voltaje de operación listado en las características como 9–80V; la tabla de especificaciones indica 12–95V — por favor confirme con el fabricante. El valor de la batería aparece como 60 mAh en la tabla de especificaciones; el texto de marketing en otro lugar menciona 140 mAh. El consumo de corriente en modo de espera promedio es &lt;84 mA. Verifique la capacidad de la batería y el rango de voltaje antes de la implementación. |
| Interfaces | Entrada ACC \(ignición\), entrada de alarma de apertura/cierre de puertas, salida de corte de combustible remota \(inmovilizador\), alarma de sobrevelocidad, entrada SOS \(opcional\), monitoreo de voz remoto \(opcional\) |
| GNSS | Chipset GPS ZKW; sensibilidad -162 dB; inicio en caliente ~1 s, inicio tibio ~30 s, inicio en frío ~35 s; límite de altitud hasta 18,000 m \(60,000 ft\) |
| Bluetooth | No se listan sensores Bluetooth integrados en la página del producto; consulte con el proveedor sobre variantes BLE o soporte para accesorios |
| Gestión remota | Acceso a la plataforma gratuito de por vida anunciado; admite configuración TCP/GPRS y SMS; confirme opciones de FOTA u gestión remota avanzada con el fabricante |
| Factor de forma & entorno | Dimensiones 89 mm × 51 mm × 15 mm; temperatura de operación -20°C a 65°C; humedad 5%–95% sin condensación |

## Casos de uso

- Gestión de flotas y optimización de rutas — rutas en tiempo real y datos de velocidad alimentan las analíticas de Plaspy para despacho y eficiencia.
- Antirrobo e inmovilización — corte de combustible remoto y alertas de geocerca proporcionan opciones de intervención para vehículos robados o desviados.
- Entrega y logística — actualizaciones de ubicación en tiempo real y notificaciones de geocerca mejoran la precisión del ETA y la constancia de la ruta.
- Seguridad de vehículos personales — SOS opcional y monitoreo de voz remoto ofrecen una mayor capacidad de respuesta ante emergencias.
- Monitoreo encubierto a corto plazo — formato compacto y discreto, ideal para tareas de rastreo de investigación o de corta duración \(cumplir con requisitos legales y de privacidad\).

## Por qué elegir este rastreador con Plaspy

AT-19 combina un diseño compacto y discreto con telemetría esencial del vehículo y compatibilidad con Plaspy para ofrecer seguimiento en tiempo real rentable y funciones de antirrobo. Para los equipos de gestión de flotas, el dispositivo proporciona estado de ignición \(ACC\), alarmas de puerta y sobrevelocidad, eventos de geocerca y capacidad de corte remoto de combustible — todo ello utilizable a través de los tableros e alertas de Plaspy. Sus opciones de transporte TCP/GPRS y SMS lo hacen flexible para implementaciones en áreas con cobertura 2G.

Antes de la compra, verifique la capacidad de la batería, el rango de voltaje soportado y la disponibilidad de la red 2G en su región, ya que algunos ítems de especificación difieren entre el texto de marketing y la tabla técnica y la 2G está siendo descontinuada en ciertos países. Cuando se combina con Plaspy, el AT-19 ofrece una solución escalable para telemetría, prevención de robos y supervisión de rutas, y puede personalizarse para flujos de trabajo empresariales donde se requiera firmware adicional o accesorios.

