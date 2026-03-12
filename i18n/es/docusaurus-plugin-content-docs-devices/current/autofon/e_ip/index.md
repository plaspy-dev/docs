---
slug: /autofon/e_ip
id: e_ip
sidebar_label: E-Маяк IP
sidebar_class_name: menu_item_tracker
---
# AutoFon - E-Маяк IP

![E-Маяк IP](./tracker.jpg)

El AvtoFon E‑Mayak IP \(АвтоФон E‑Маяк IP\) es un localizador GSM/GPS autónomo y compacto, diseñado para un monitoreo discreto de la ubicación a largo plazo y la generación de alertas. Compatible con Plaspy desde el primer momento para actualizaciones de posición por SMS y para la integración de protocolos, el E‑Mayak IP ofrece rastreo en tiempo real confiable y monitoreo de audio a demanda para vehículos, carga valiosa y objetos remotos que requieren protección anti‑robo y una supervisión simple de la flota.

El dispositivo combina una pequeña carcasa hermética con electrónica de bajo consumo y una batería de gran capacidad, lo que permite hasta dos años de operación autónoma, dependiendo de la configuración. Las características de seguridad clave incluyen un micrófono integrado, un botón SOS incorporado, un acelerómetro digital con modos avanzados de detección de movimiento y de accidentes, y un canal de control universal adecuado para inmovilizador/corte de motor u otras acciones remotas, lo que lo convierte en una opción práctica para telemetría, anti‑robo y rastreo de activos a largo alcance cuando se usa con Plaspy.

## Puntos clave

- Compatible con Plaspy mediante SMS y mensajes de protocolo para rastreo en tiempo real y alertas.
- Carcasa compacta y hermética para instalación encubierta en vehículos, embarcaciones, contenedores y otros activos.
- Operación autónoma prolongada con 2 × CR123A celdas de litio — hasta 2 años dependiendo de la configuración.
- Micrófono integrado y botón SOS para monitoreo de audio remoto y señalización de alarmas inmediata.
- Acelerómetro digital avanzado con seis modos: inicio de movimiento, inclinación \(>90°\), golpes y detección de accidentes \(alto g\).
- Una entrada externa de alarma y un canal adicional universal para control remoto de dispositivos externos \(corte de motor/inmovilizador, control de arranque, sirena, precalentador, etc.\); botón SOS; control remoto por SMS desde números autorizados con protección PIN.
- Formato de SMS enriquecido con enlaces a mapas, memoria de reintentos/cola de mensajes y mensajes de latido configurables.

## Cómo funciona con Plaspy

Plaspy procesa los mensajes de ubicación y alarma del E‑Mayak IP ya sea usando el reenvío por SMS o configurando mensajes de protocolo hacia un endpoint de servidor. Como el E‑Mayak transmite coordenadas GPS precisas por SMS y admite mensajería de protocolo sobre GPRS \(el firmware soporta actualizaciones vía GPRS aunque el fabricante no proporciona un servidor de monitoreo alojado\), Plaspy puede presentar rastreo en tiempo real, alarmas y telemetría en mapas y paneles una vez configurado para recibir la salida del dispositivo.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas por SMS \(y mensajes de protocolo cuando el GPRS está habilitado\).
- Alertas de movimiento, inclinación e impacto \(accidente\) del acelerómetro incorporado, reenviadas a Plaspy para notificación inmediata.
- Estado de la entrada externa de alarma y del canal de control universal disponible como telemetría digital \(útil para eventos de puerta/alarma o controles del inmovilizador\).
- Pulsaciones del botón SOS y eventos de monitoreo de audio remoto transmitidos a números autorizados y procesados por Plaspy para la respuesta ante incidentes.
- Señal de vida \(latido\) del dispositivo y telemetría de batería/temperatura enviadas a Plaspy para apoyar la gestión de flotas y el mantenimiento preventivo.

## Resumen técnico

| Conectividad | GSM celular \(módulo QUECTEL M12\) para SMS y mensajes de protocolo; GPRS utilizado para actualizaciones de firmware y protocolo cuando está configurado |
| --- | --- |
| Bandas | Módulo: QUECTEL M12 \(consulte la documentación del fabricante para las bandas GSM soportadas\) |
| Alimentación y batería | 2 × CR123A celdas de litio \(3.0 V\), capacidad total indicada como 1500 mAh; autonomía de hasta 2 años dependiendo de la configuración y los intervalos de reporte; alimentación externa soportada; modo beacon ante pérdida de alimentación externa |
| Interfaces | Una entrada externa de alarma; un canal adicional universal para control remoto de dispositivos externos \(corte de motor/inmovilizador, control de arranque, sirena, precalentador, etc.\); botón SOS; control remoto por SMS desde números autorizados con protección PIN |
| GNSS | Chipset GPS Quectel L10; posicionamiento LBS extendido soportado; AGPS no soportado |
| Bluetooth | Sin conectividad Bluetooth \(no se incluyen sensores BLE\) |
| Gestión remota | Capacidad de actualización de firmware vía GPRS; el dispositivo admite comandos SMS configurables, mensajes de latido y ajuste remoto de parámetros |
| Otras características | Micrófono integrado para monitoreo de audio remoto, botón SOS, acelerómetro con detección en múltiples modos, memoria para alarmas/mensajes no enviados con reintento, reloj en tiempo real, medición de temperatura y monitoreo de descarga de la batería |
| Formato | Carcasa principal compacta 70 × 50 × 21 mm; carcasa hermética suministrada: 79 × 55 × 27 mm; antena GPS 25 × 25 × 4 mm |

## Casos de uso

- Rastreo encubierto de vehículos o motocicletas para respuesta ante robo y monitoreo discreto.
- Protección de contenedores y carga con notificaciones de movimiento e impacto durante el tránsito.
- Protección de objetos remotos: garajes, casas de verano y equipos independientes donde la larga duración de la batería y la carcasa hermética resultan ventajosas.
- Rastreo de activos para embarcaciones o remolques donde se requieren una carcasa sellada y reportes por SMS.
- Rastreo de personal o mascotas en escenarios que requieren un botón SOS y monitoreo de audio ocasional.

## Por qué elegir este localizador con Plaspy

El AvtoFon E‑Mayak IP es un localizador compatible con Plaspy diseñado para escenarios de monitoreo a largo plazo y bajo mantenimiento, con instalación discreta y características de alarma robustas. Su reporte centrado en SMS y las opciones de protocolo permiten a Plaspy ingerir datos de ubicación y eventos sin depender de un servidor alojado por el fabricante, mientras que el acelerómetro, el botón SOS y el canal de control remoto ofrecen una funcionalidad tangible de anti‑robo e inmovilizador. Para la gestión de flotas, telemetría y rastreo en tiempo real, el E‑Mayak IP aporta una vida útil de la batería confiable y protección hermética a los paneles y alertas de Plaspy.

Nota sobre conectividad e integraciones: la unidad no incluye sensores Bluetooth, y AGPS no está soportado. Plaspy puede integrar aún así los mensajes SMS de coordenadas y salidas de protocolo del E‑Mayak IP para mapeo, enrutamiento de alarmas e informes. Para monitoreo de combustible o telemetría adicional de sensores BLE, combine Plaspy con módulos sensores dedicados o con un modelo de localizador diferente que soporte explícitamente esas interfaces.

